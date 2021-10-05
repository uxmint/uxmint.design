const ghpages = require('gh-pages');
console.log('Publishing Please Wait...');
ghpages.publish('./',{
    dest: 'dev',
    message: 'Auto-generated commit',
    remove: ['dev/node_modules','dev/package-lock.json','dev/package.json','dev/deploy.js','dev/deploy-dev.js']
},function(){
    console.log('Successfully published! Have a nice day!');
});