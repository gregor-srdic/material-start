export function createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export function animateAccordionToggle($animateCss, open, accordionCard, accordionCardHeader, accordionCardContent, expandIcon, animationDuration) {

    let accordionCardContentHeight = accordionCardContent[0].offsetHeight,
        accordionCardContentScrollHeight = accordionCardContent[0].scrollHeight;

    if (open) {
        $animateCss(accordionCardContent, {
            from: { maxHeight: '0px' },
            to: { maxHeight: `${accordionCardContentScrollHeight}px` },
            duration: animationDuration
        })
            .start()
            .then(() => accordionCardContent.css({ maxHeight: '' }));
        if (expandIcon && expandIcon.length > 0) {
            $animateCss(expandIcon, {
                from: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                to: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                duration: animationDuration
            })
                .start()
        }
    }
    else {
        accordionCardContent.css({ maxHeight:  `${accordionCardContentHeight}px` });
        $animateCss(accordionCardContent, {
            from: { maxHeight: `${accordionCardContentHeight}px` },
            to: { maxHeight: '0px' },
            duration: animationDuration
        })
            .start()
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
/*
export function animateAccordionToggle($animateCss, open, accordionCard, accordionCardHeader, accordionCardContent, expandIcon, animationDuration) {

    let accordionCardHeight = accordionCard[0].scrollHeight,
        accordionCardHeaderHeight = accordionCardHeader[0].offsetHeight,
        accordionCardContentHeight = accordionCardContent[0].scrollHeight;

    console.log(accordionCardHeader[0].offsetHeight,accordionCardHeader[0].scrollHeight);

    if (open) {
        $animateCss(accordionCard, {
            from: { maxHeight: `${accordionCardHeaderHeight}px` },
            to: { maxHeight: `${accordionCardHeaderHeight + accordionCardContentHeight}px` },
            duration: animationDuration
        })
            .start()
            .then(() => accordionCard.css({ maxHeight: '' }));
        if (expandIcon && expandIcon.length > 0) {
            $animateCss(expandIcon, {
                from: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                to: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                duration: animationDuration
            })
                .start()
        }
    }
    else {
        $animateCss(accordionCard, {
            from: { maxHeight: `${accordionCardHeaderHeight + accordionCardContentHeight}px` },
            to: { maxHeight: `${accordionCardHeaderHeight}px` },
            duration: animationDuration
        })
            .start()
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
*/