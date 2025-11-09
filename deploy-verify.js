const fs = require('fs');
const path = require('path');

console.log('🔍 Retal clinics - Deployment Verification');
console.log('==============================================\n');

// Check critical files
const criticalFiles = [
  'package.json',
  'vercel.json',
  'public/index.html',
  'public/manifest.json',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/structured-data.json',
  'public/dental-logo.png',
  'build/index.html',
  'build/static/js/main.5b17f363.js',
  'build/static/css/main.2fe3ada4.css'
];

console.log('📁 Checking Critical Files:');
let allFilesExist = true;

criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING!`);
    allFilesExist = false;
  }
});

console.log('\n📦 Package.json Verification:');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`✅ Name: ${packageJson.name}`);
  console.log(`✅ Version: ${packageJson.version}`);
  console.log(`✅ Homepage: ${packageJson.homepage}`);
  console.log(`✅ Build Script: ${packageJson.scripts.build}`);
} catch (error) {
  console.log('❌ Package.json parsing error:', error.message);
  allFilesExist = false;
}

console.log('\n⚙️ Vercel Configuration:');
try {
  const vercelJson = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
  console.log(`✅ Version: ${vercelJson.version}`);
  console.log(`✅ Name: ${vercelJson.name}`);
  console.log(`✅ Build Config: ${vercelJson.builds[0].use}`);
} catch (error) {
  console.log('❌ Vercel.json parsing error:', error.message);
  allFilesExist = false;
}

console.log('\n🌐 SEO Files Check:');
const seoFiles = ['robots.txt', 'sitemap.xml', 'structured-data.json'];
seoFiles.forEach(file => {
  const publicPath = `public/${file}`;
  const buildPath = `build/${file}`;
  
  if (fs.existsSync(publicPath) && fs.existsSync(buildPath)) {
    console.log(`✅ ${file} - Both public and build versions exist`);
  } else {
    console.log(`❌ ${file} - Missing in public or build`);
    allFilesExist = false;
  }
});

console.log('\n📱 PWA Files Check:');
const pwaFiles = ['manifest.json', 'dental-logo.png'];
pwaFiles.forEach(file => {
  const publicPath = `public/${file}`;
  const buildPath = `build/${file}`;
  
  if (fs.existsSync(publicPath) && fs.existsSync(buildPath)) {
    console.log(`✅ ${file} - Both public and build versions exist`);
  } else {
    console.log(`❌ ${file} - Missing in public or build`);
    allFilesExist = false;
  }
});

console.log('\n📊 Build Statistics:');
try {
  const jsStats = fs.statSync('build/static/js/main.5b17f363.js');
  const cssStats = fs.statSync('build/static/css/main.2fe3ada4.css');
  
  console.log(`✅ JS Bundle: ${(jsStats.size / 1024).toFixed(2)} KB`);
  console.log(`✅ CSS Bundle: ${(cssStats.size / 1024).toFixed(2)} KB`);
  console.log(`✅ Total Build Size: ${((jsStats.size + cssStats.size) / 1024).toFixed(2)} KB`);
} catch (error) {
  console.log('❌ Build files not found');
  allFilesExist = false;
}

console.log('\n🎯 Final Status:');
if (allFilesExist) {
  console.log('✅ ALL SYSTEMS GO! Your website is ready for deployment on Vercel!');
  console.log('\n🚀 Next Steps:');
  console.log('1. Push to GitHub: git add . && git commit -m "Ready for deployment" && git push');
  console.log('2. Connect to Vercel: https://vercel.com');
  console.log('3. Import your repository');
  console.log('4. Deploy!');
} else {
  console.log('❌ Some issues found. Please fix them before deployment.');
}

console.log('\n📞 Contact: PMI IT Solutions - https://it-solutions.pmi-me.net/');
