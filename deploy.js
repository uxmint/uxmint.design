const ghpages = require('gh-pages');
console.log('Publishing Please Wait...');
ghpages.publish('./',{
    message: 'Auto-generated commit',
    remove: ['node_modules','package-lock.json','package.json','deploy.js']
},function(){
    console.log('Successfully published! Have a nice day!');
});