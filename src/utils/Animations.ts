import { gsap } from 'gsap'

/**
 * Animation utilities using GSAP
 */

/**
 * Animate an element from the left
 * @param element - DOM element or ref to animate
 * @param delay - Animation delay (optional)
 * @param duration - Animation duration (optional)
 */
export const animateFromLeft = (
	element: HTMLElement | null,
	delay: number = 0,
	duration: number = 1
): gsap.core.Tween | null => {
	if (!element) return null
	return gsap.fromTo(
		element,
		{ x: -100, opacity: 0 },
		{ x: 0, opacity: 1, duration, delay, ease: 'power3.out' }
	)
}

/**
 * Animate an element from the right
 * @param element - DOM element or ref to animate
 * @param delay - Animation delay (optional)
 * @param duration - Animation duration (optional)
 */
export const animateFromRight = (
	element: HTMLElement | null,
	delay: number = 0,
	duration: number = 1
): gsap.core.Tween | null => {
	if (!element) return null
	return gsap.fromTo(
		element,
		{ x: 100, opacity: 0 },
		{ x: 0, opacity: 1, duration, delay, ease: 'power3.out' }
	)
}

/**
 * Fade in animation
 * @param element - DOM element or ref to animate
 * @param delay - Animation delay (optional)
 * @param duration - Animation duration (optional)
 */
export const fadeIn = (
	element: HTMLElement | null,
	delay: number = 0,
	duration: number = 0.4
): gsap.core.Tween | null => {
	if (!element) return null
	return gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration, delay, ease: 'power2.inOut' })
}

/**
 * Fade out animation
 * @param element - DOM element or ref to animate
 * @param delay - Animation delay (optional)
 * @param duration - Animation duration (optional)
 */
export const fadeOut = (
	element: HTMLElement | null,
	delay: number = 0,
	duration: number = 0.4
): gsap.core.Tween | null => {
	if (!element) return null
	return gsap.fromTo(element, { opacity: 1 }, { opacity: 0, duration, delay, ease: 'power2.inOut' })
}

/**
 * Scale up animation
 * @param element - DOM element or ref to animate
 * @param delay - Animation delay (optional)
 * @param duration - Animation duration (optional)
 */
export const scaleUp = (
	element: HTMLElement | null,
	delay: number = 0,
	duration: number = 0.8
): gsap.core.Tween | null => {
	if (!element) return null
	return gsap.fromTo(
		element,
		{ scale: 0.8, opacity: 0 },
		{ scale: 1, opacity: 1, duration, delay, ease: 'back.out(1.7)' }
	)
}

/**
 * Stagger animation for multiple elements (e.g., list items)
 * @param elements - DOM elements or refs to animate
 * @param delay - Initial delay before the first element animates (optional)
 * @param staggerTime - Time between each element's animation (optional)
 */
export const staggerElements = (
	elements: HTMLElement[] | NodeListOf<Element> | null,
	delay: number = 0,
	staggerTime: number = 0.1
): gsap.core.Timeline | null => {
	if (!elements || elements.length === 0) return null

	const tl = gsap.timeline({ delay })

	tl.fromTo(
		elements,
		{ y: 20, opacity: 0 },
		{ y: 0, opacity: 1, duration: 0.7, stagger: staggerTime, ease: 'power2.out' }
	)

	return tl
}

/**
 * Example of how to use these animations in an Astro component:
 *
 * ---
 * // Your Astro component frontmatter
 * ---
 *
 * <script>
 *   import { animateFromLeft, fadeIn } from '../utils/animations';
 *
 *   document.addEventListener('DOMContentLoaded', () => {
 *     const headingEl = document.querySelector('.heading');
 *     const imageEl = document.querySelector('.image');
 *
 *     animateFromLeft(headingEl, 0.2, 1);
 *     fadeIn(imageEl, 0.5, 1.5);
 *   });
 * </script>
 */
