const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

console.log('--- AUDITING MEDICAL SHOP WEBSITE FOR HOSTINGER & GOOGLE SEARCH CONSOLE ---');
console.log('Total HTML files found:', htmlFiles.length);

let errors = [];
let warnings = [];

htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Basic SEO checks
  if (!content.includes('<!DOCTYPE html>')) errors.push(`${file}: Missing <!DOCTYPE html>`);
  if (!content.includes('<meta name="viewport"')) errors.push(`${file}: Missing viewport meta tag`);
  if (!content.includes('<title>')) errors.push(`${file}: Missing <title> tag`);
  if (!content.includes('<link rel="icon"')) warnings.push(`${file}: Missing favicon tag`);
  if (file !== '404.html') {
    if (!content.includes('<link rel="canonical"')) warnings.push(`${file}: Missing canonical URL tag`);
    if (!content.includes('<meta name="robots"')) warnings.push(`${file}: Missing robots meta tag`);
    if (!content.includes('<meta name="description"')) warnings.push(`${file}: Missing meta description`);
    if (!content.includes('<meta property="og:')) warnings.push(`${file}: Missing Open Graph tags`);
  }

  // Check 404.html has noindex
  if (file === '404.html' && !content.includes('noindex')) {
    warnings.push(`${file}: 404 page should have 'noindex' to avoid GSC Soft 404 penalties`);
  }

  // Check internal href links
  const hrefRegex = /href=["']([^"']+)["']/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith('#') || url.startsWith('tel:') || url.startsWith('mailto:') || url.startsWith('http') || url.startsWith('javascript:')) continue;
    const cleanUrl = url.split('#')[0].split('?')[0];
    if (cleanUrl && !fs.existsSync(path.join(dir, cleanUrl))) {
      errors.push(`${file}: Broken link -> "${url}" (File "${cleanUrl}" does not exist)`);
    }
  }

  // Check image sources
  const srcRegex = /src=["']([^"']+)["']/g;
  while ((match = srcRegex.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith('data:') || url.startsWith('http')) continue;
    const cleanUrl = url.split('?')[0];
    if (cleanUrl && !fs.existsSync(path.join(dir, cleanUrl))) {
      errors.push(`${file}: Broken image/script src -> "${url}" (File "${cleanUrl}" does not exist)`);
    }
  }

  // Check JSON-LD
  const jsonLdRegex = /<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/g;
  while ((match = jsonLdRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      if (!parsed['@context']) warnings.push(`${file}: JSON-LD missing @context`);
    } catch (e) {
      errors.push(`${file}: Invalid JSON-LD syntax: ${e.message}`);
    }
  }
});

// Check sitemap.xml exists and all its URLs match actual files
if (fs.existsSync(path.join(dir, 'sitemap.xml'))) {
  const sitemap = fs.readFileSync(path.join(dir, 'sitemap.xml'), 'utf8');
  const locRegex = /<loc>https:\/\/pallavimedicalstore\.in\/([^<]*)<\/loc>/g;
  let locMatch;
  while ((locMatch = locRegex.exec(sitemap)) !== null) {
    const page = locMatch[1];
    const targetFile = page === '' ? 'index.html' : page;
    if (!fs.existsSync(path.join(dir, targetFile))) {
      errors.push(`sitemap.xml lists "${page}" but "${targetFile}" does not exist in project!`);
    }
  }
} else {
  errors.push('sitemap.xml is missing!');
}

// Check robots.txt
if (fs.existsSync(path.join(dir, 'robots.txt'))) {
  const robots = fs.readFileSync(path.join(dir, 'robots.txt'), 'utf8');
  if (!robots.includes('Sitemap:')) warnings.push('robots.txt does not mention Sitemap');
} else {
  errors.push('robots.txt is missing!');
}

// Check .htaccess
if (!fs.existsSync(path.join(dir, '.htaccess'))) {
  errors.push('.htaccess is missing for Hostinger Apache/LiteSpeed!');
}

console.log('\n--- AUDIT RESULTS ---');
if (errors.length === 0) {
  console.log('✅ ZERO FATAL ERRORS FOUND! All internal links, scripts, images, and sitemap targets are 100% valid.');
} else {
  console.log(`❌ ${errors.length} FATAL ERROR(S) DETECTED:`);
  errors.forEach(e => console.log('  - ' + e));
}

if (warnings.length > 0) {
  console.log(`\n⚠️ ${warnings.length} SEO/GSC OPTIMIZATION WARNING(S):`);
  warnings.forEach(w => console.log('  - ' + w));
} else {
  console.log('✅ ZERO WARNINGS! 100% GSC compliance ready.');
}
