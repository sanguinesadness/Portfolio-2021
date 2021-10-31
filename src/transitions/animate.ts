import gsap from 'gsap';
import settings from '../../package.json';

const appGitName = settings['git-name'];

export const animateTransition = (pathname: string, node: HTMLCollection) => {
    gsap.from(node, {
        opacity: 0,
        xPercent: pathname === `/${appGitName}` ? -100 : 100,
        duration: 1,
        ease: "back.inOut(1)"
    });
}