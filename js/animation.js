var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: '.case-study-grid',
    offset: -100,
    triggerHook: 1,
    reverse:false
}).setClassToggle('.case-study-grid', 'slide-top').addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.section-banner',
    offset: -100,
    triggerHook: 1,
    reverse:false
}).setClassToggle('.section-banner', 'kenburns-top').addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.icons-usability-methods',
    offset: -100,
    triggerHook: 1,
    reverse:false
}).setClassToggle('.icons-usability-methods', 'slide-top').addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.banner-animation',
    offset: -50,
    triggerHook: 2.4,
    reverse:false
}).setClassToggle('.banner-animation', 'slide-top').addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.slide-image',
    offset: -100,
    triggerHook: 1,
    reverse:false
}).setClassToggle('.slide-image', 'slide-top').addTo(controller);

// Home page Logos
new ScrollMagic.Scene({
    triggerElement: '.logo1',
    offset: -100,
    triggerHook: 1.6,
    reverse:false
}).setClassToggle('.logo1', 'slide-top').addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.logo2',
    offset: -100,
    triggerHook: 1.4,
    reverse:false
}).setClassToggle('.logo2', 'slide-top').addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.logo3',
    offset: -100,
    triggerHook: 1.2,
    reverse:false
}).setClassToggle('.logo3', 'slide-top').addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.logo4',
    offset: -100,
    triggerHook: 1,
    reverse:false
}).setClassToggle('.logo4', 'slide-top').addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.logo5',
    offset: -100,
    triggerHook: 0.8,
    reverse:false
}).setClassToggle('.logo5', 'slide-top').addTo(controller);
new ScrollMagic.Scene({
    triggerElement: '.logo6',
    offset: -100,
    triggerHook: 0.6,
    reverse:false
}).setClassToggle('.logo6', 'slide-top').addTo(controller);
