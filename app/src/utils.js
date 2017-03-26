export function createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export function getResolvedPromise($q) {
    let dfd = $q.defer();
    dfd.resolve(true);
    return dfd.promise;
}
export function animateAccordionToggle($animateCss, $q, open, accordionCardContent, expandIcon, animationDuration) {
    let dfd = $q.defer(),
        accordionCardContentHeight = accordionCardContent[0].offsetHeight,
        accordionCardContentScrollHeight = accordionCardContent[0].scrollHeight;

    if (open) {
        $animateCss(accordionCardContent, {
            from: { maxHeight: '0px' },
            to: { maxHeight: `${accordionCardContentScrollHeight}px` },
            duration: animationDuration
        })
            .start()
            .then(() => {
                accordionCardContent.css({ maxHeight: '' });
                dfd.resolve(true);
            });
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
        accordionCardContent.css({ maxHeight: `${accordionCardContentHeight}px` });
        $animateCss(accordionCardContent, {
            from: { maxHeight: `${accordionCardContentHeight}px` },
            to: { maxHeight: '0px' },
            duration: animationDuration
        })
            .start()
            .then(() => dfd.resolve(true));
        if (expandIcon && expandIcon.length > 0) {
            $animateCss(expandIcon, {
                from: { '-webkit-transform': 'scaleY(-1)', transform: 'scaleY(-1)' },
                to: { '-webkit-transform': 'scaleY(1)', transform: 'scaleY(1)' },
                duration: animationDuration
            })
                .start()
        }
    }
    return dfd.promise;
}