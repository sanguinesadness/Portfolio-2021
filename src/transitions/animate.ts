import gsap from 'gsap';

export const animateTransition = (pathname: string, node: HTMLCollection) => {
    gsap.from(node, {
        opacity: 0,
        xPercent: pathname === "/" ? -100 : 100,
        duration: 1,
        ease: "back.inOut(1)"
    });
}