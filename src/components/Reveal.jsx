import { cloneElement } from 'react'
import { useInView } from '../hooks/useInView.js'

/**
 * Wraps a single child and adds the scroll-reveal animation classes to it
 * directly (via cloneElement — no extra DOM wrapper, so grid/flex layouts stay
 * intact). Pass `delay` (1-5) to stagger, or `immediate` for above-the-fold
 * content that should animate in on load.
 */
export default function Reveal({ children, delay, immediate = false }) {
  const [ref, inView] = useInView()
  const shown = immediate || inView
  return cloneElement(children, {
    ref,
    className: `${children.props.className || ''} reveal ${shown ? 'in' : ''}`.trim(),
    'data-d': delay,
  })
}
