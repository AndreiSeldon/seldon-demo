/*****
 *
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 * 
 *****/
 
import { HTMLAttributes } from "react"
import { HTMLDiv } from "../native-react/HTML.Div"

export interface FrameScrollerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

/**
 * Scroller
 * 
 * Level: Frame
 * 
 * Intent: Frame component schema with horizontal or vertical scroll behavior, allowing overflow content to remain accessible within bounds.
 * 
 * Tags: frame, scroll, scroller, overflow, ui, horizontal, vertical, content
 * 
 * @example
 * ```tsx
 * <FrameScroller

 * />
 * ```
 */
export function FrameScroller({
  className = "",
  ...props
}: FrameScrollerProps) {
  return <HTMLDiv className={"sdn-frameScroller " + className} {...props} />
}
