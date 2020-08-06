const ghpages = require('gh-pages');
const fs = require('fs-extra');
const paths = [
    'projects',
    'projects/networking',
    'projects/marketing',
    'projects/event-management',
    'projects/health',
    'projects/skill-development',
    'projects/social-review',
    'projects/construction',
    'projects/child-care',
    'projects/health-care',
    'projects/app-development',
    'projects/web-development',
    'projects/automobile-usability',
    'services/user-experience',
    'services/interface-design',
    'services/ui-dev',
    'services/end-to-end',
    'services/usability-testing',
    'blog',
    'about-us',
    'contact-us',
    'careers',
    'terms-and-conditions',
    'privacy-policy'
];
paths.forEach(path=>fs.copySync('./dist/uxmint/index.html', `./dist/uxmint/${path}/index.html`));
fs.copySync('./dist/uxmint/index.html', `./dist/uxmint/404.html`);
console.log('Publishing Please Wait...');
ghpages.publish('./dist/uxmint',{
    message: 'Auto-generated commit'
},function(){
    console.log('Successfully published! Have a nice day!');
});