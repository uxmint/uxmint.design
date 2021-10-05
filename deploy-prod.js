const ghpages = require('gh-pages');
const fs = require('fs-extra');
console.log('Publishing Please Wait...');
if(!fs.existsSync('dist')){
    fs.mkdirSync('dist');
}
fs.readdirSync('./').forEach(function(file){
    if(file.endsWith('.html') || file == 'CNAME'){
        fs.copyFileSync(file,`dist/${file}`);
    }
    if(['js','css','images'].includes(file)){
       fs.copySync(file,`dist/${file}`);
    }
});
ghpages.publish('./dist',{
    message: 'Auto-generated commit'
},function(){
    console.log('Successfully published! Have a nice day!');
    fs.unlinkSync('dist');
});