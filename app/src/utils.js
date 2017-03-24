export function createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export function animateAccordionToggle($animateCss, open, accordionContent, expandIcon, animationDuration) {
    let h = accordionContent[0].offsetHeight;
    if (open) {
        $animateCss(accordionContent, {
            from: { maxHeight: '0px'},
            to: { maxHeight: `${h}px` },
            duration: animationDuration
        })
            .start()
            .then(() => accordionContent.css({ maxHeight: '' }));
        if (expandIcon && expandIcon.length > 0) {
            $animateCss(expandIcon, {
                from: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                to: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                duration: animationDuration
            })
                .start()
        }
        accordionContent.css({ position: 'relative'});
    }
    else {
        $animateCss(accordionContent, {
            from: { maxHeight: `${h}px` },
            to: { maxHeight: '0px' },
            duration: animationDuration
        })
            .start()
            .then(() => accordionContent.css({ position: 'absolute', maxHeight: '' }));
        if (expandIcon && expandIcon.length > 0) {
            $animateCss(expandIcon, {
                from: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                to: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                duration: animationDuration
            })
                .start()
        }
    }
}