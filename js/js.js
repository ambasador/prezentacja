!(function () {
    function a(className) {
        return document.getElementsByClassName(className);
    }

    function b(id) {
        return document.getElementById(id);
    }
    function c(querySelector) {
        return document.querySelectorAll(querySelector);
    }

    var slideOne = a('slideOne'),
        slideTwo = a('slideTwo'),
        slideThere = a('slideThere'),
        hb = a('hb'),
        of = a('of'),
        button = b('button'),
        header = a('header'),
        textBottom = a('textBottom'),
        next = b('next'),
        timeline = a('timeline'),
        peak = a('peak'),
        text = a('text'),
        back = b('back'),
        last = b('last'),
        note = c('.slideFour > p > span'),
        textBottomLast = a('textLast'),
        backThere = b('backThere'),
        grey = a('grey'),
        l = grey.length,
        peakDiv = a('peakDiv'),
        len = peakDiv.length,
        items = a('li'),
        length = items.length,
        duration = 0.2,
        noteLenght = note.length;


    var tl = new TimelineMax({delay: 1});
    tl.from(hb, .5, {autoAlpha: 0, ease: Back.easeOut.config(1.7), y: -50});
    tl.from(of, .5, {autoAlpha: 0, ease: Back.easeOut.config(1.7), y: -50});
    tl.from(header, .5, {autoAlpha: 0, ease: Quad.easeInOut, x: -100, scale: 0.05, rotation: -90});
    tl.from(button, .5, {autoAlpha: 0, y: 200, ease: Back.easeOut.config(1.7)});
    tl.addPause();
    tl.to(button, .5, {autoAlpha: 0, delay: .5, ease: Back.easeOut.config(1.7), y: -100, scale: .1}, "first");
    tl.to(header, .5, {autoAlpha: 0, ease: Back.easeOut.config(1.7), y: -100, scale: .1});
    tl.to(slideOne, .5, {
        autoAlpha: 0,
        ease: Back.easeOut.config(1.7),
        y: -50,
        display: "none",
        scale: .1
    }, "firstBack");
    for (var i = 0; i < length; i += 1) {
        tl.from(items[i], duration, {autoAlpha: 0, delay: duration * 0.2, ease: Back.easeOut.config(1.7), y: 100});
    }
    tl.from(textBottom, 0.5, {autoAlpha: 0, ease: Quad.easeInOut, y: 100, scale: 0.1});
    tl.from(next, 0.5, {autoAlpha: 0, ease: Quad.easeInOut, y: 100, scale: 0.6});
    tl.addPause();

    tl.to(slideTwo, .5, {autoAlpha: 0, ease: Back.easeOut.config(1.7), y: -50, display: "none", scale: .1}, "second");

    tl.from(slideThere, .5, {autoAlpha: 0, ease: Back.easeOut.config(1.7), y: -50, display: "block"}, "secondBack");
    tl.from(timeline, .5, {autoAlpha: 0, ease: Back.easeOut.config(1.7), width: 0});
    tl.from(peak, .5, {autoAlpha: 0, ease: Back.easeOut.config(1.7), width: 0});
    for (var i = 0; i < len; i += 1) {
        tl.from(peakDiv[i], duration, {autoAlpha: 0, delay: duration * 0.2, ease: Back.easeOut.config(1.7), y: -20});
    }
    for (var i = 0; i < l; i += 1) {
        tl.from(grey[i], duration, {autoAlpha: 0, delay: duration * 0.2, ease: Back.easeOut.config(1.7), y: -20});
    }
    tl.from(text, 0.5, {autoAlpha: 0, ease: Quad.easeInOut, y: 100, scale: 0.1});
    tl.from(back, 0.5, {autoAlpha: 0, ease: Quad.easeInOut, y: 100, scale: 0.6});
    tl.from(last, 0.5, {autoAlpha: 0, ease: Quad.easeInOut, y: 100, scale: 0.6});
    tl.addPause();
    tl.to(slideThere, .5, {autoAlpha: 0, ease: Back.easeOut.config(1.7), y: -50, display: "none", scale: .1}, "third");
    for (var i = 0; i < noteLenght; i += 1) {
        tl.from(note[i], duration, {
            autoAlpha: 0,
            delay: duration * 0.2,
            ease: Back.easeOut.config(1.7),
            y: -100,
            scale: .8
        });
    }
    tl.from(textBottomLast, 0.5, {autoAlpha: 0, ease: Quad.easeInOut, y: 100, scale: 0.1});
    tl.from(backThere, 0.5, {autoAlpha: 0, ease: Quad.easeInOut, y: 100, scale: 0.6});
    button.addEventListener("click", function (e) {
        e.stopPropagation();
        tl.play("first");
    });

    next.addEventListener("click", function (e) {
        e.stopPropagation();
        tl.play("second");

    });
    back.addEventListener("click", function (e) {
        e.stopPropagation();
        tl.play("firstBack");

    });
    last.addEventListener("click", function (e) {
        e.stopPropagation();
        tl.play("third");
    });
    backThere.addEventListener("click", function (e) {
        e.stopPropagation();
        tl.play("secondBack");
    });
})();