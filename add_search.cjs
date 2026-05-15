const fs = require('fs');

const files = [
  'src/pages/Contact.jsx',
  'src/pages/Flooring.jsx',
  'src/pages/Furniture.jsx',
  'src/pages/Gallery.jsx',
  'src/pages/Specialty.jsx',
  'src/pages/Wallpaper.jsx',
  'src/pages/WindowTreatments.jsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (!content.includes('GlobalSearch')) {
    content = content.replace(/import \{ Link[^\}]*\} from 'react-router-dom';/, match => match + '\nimport GlobalSearch from \'../components/GlobalSearch\';');
    content = content.replace(/(<nav className=\"glass-nav\">[\s\S]*?<div className=\"container\"[^>]*>)(\s*<Link.*?<\/Link>\s*<div[^>]*>.*?<\/div>\s*)(<\/div>\s*<\/nav>)/, 
      (match, p1, p2, p3) => p1 + p2 + '  <GlobalSearch />\n        ' + p3);
    fs.writeFileSync(f, content);
    console.log('Updated ' + f);
  }
});

let app = 'src/App.jsx';
let appContent = fs.readFileSync(app, 'utf8');
if (!appContent.includes('GlobalSearch')) {
  appContent = appContent.replace(/import \{ BrowserRouter as Router[^}]*\} from 'react-router-dom';/, match => match + '\nimport GlobalSearch from \'./components/GlobalSearch\';');
  appContent = appContent.replace(/(<Link to=\"\/contact\"[^>]*>Contact<\/Link>)/, match => match + '\n            <GlobalSearch />');
  fs.writeFileSync(app, appContent);
  console.log('Updated ' + app);
}
