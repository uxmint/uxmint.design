const ghpages = require('gh-pages');
const fs = require('fs-extra');
console.log('Publishing Please Wait...');
const { parseAngularRoutes } = require('guess-parser');
const routes = parseAngularRoutes('tsconfig.app.json');
routes.filter(route=>route.path).forEach(route=>{
    if(!fs.existsSync(`dist/uxmint${route.path}`)){
        fs.mkdirSync(`dist/uxmint${route.path}`,{ recursive: true });
    }
    fs.copyFileSync('dist/uxmint/index.html',`dist/uxmint${route.path}/index.html`);
});
ghpages.publish('./dist/uxmint',{
    dest: 'dev',
    message: 'Auto-generated commit'
},function(){
    console.log('Successfully published! Have a nice day!');
    fs.unlinkSync('dist');
});