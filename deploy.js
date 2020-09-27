const ghpages = require('gh-pages');
ghpages.publish('./',{
    message: 'Auto-generated commit'
},function(){
    console.log('Successfully published! Have a nice day!');
});