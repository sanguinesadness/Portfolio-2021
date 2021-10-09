import gsap from 'gsap';

export const animateTransition = (pathname: string, node: HTMLElement, appears: boolean) => {
    const delay = appears ? 0 : 0;
    gsap.from(node, { opacity: 0, scaleX: 0, duration: 0.5, ease: "back.inOut(1)" });
}