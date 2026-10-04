import { gsap } from 'gsap'

export const fadeIn = (
	element: HTMLElement | null,
	delay = 0,
	duration = 0.4
): gsap.core.Tween | null => {
	if (!element) return null
	return gsap.fromTo(
		element,
		{ opacity: 0 },
		{ opacity: 1, duration, delay, ease: 'power2.inOut' }
	)
}
