var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: '.case-study-grid',
    offset: -100,
    triggerHook: 1,
    reverse:false
}).setClassToggle('.case-study-grid', 'slide-top').addTo(controller);

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: '.section-banner',
    offset: -100,
    triggerHook: 1,
    reverse:false
}).setClassToggle('.section-banner', 'kenburns-top').addTo(controller);

var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: '.icons-usability-methods',
    offset: -100,
    triggerHook: 1,
    reverse:false
}).setClassToggle('.icons-usability-methods', 'slide-top').addTo(controller);