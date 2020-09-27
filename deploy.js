const ghpages = require('gh-pages');
console.log('Publishing Please Wait...');
ghpages.publish('./',{
    message: 'Auto-generated commit'
},function(){
    console.log('Successfully published! Have a nice day!');
});