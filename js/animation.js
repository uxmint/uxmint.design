var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: '.case-study-grid',
    offset: -100,
    triggerHook: 1,
    reverse:false
}).setClassToggle('.case-study-grid', 'slide-top').addTo(controller);