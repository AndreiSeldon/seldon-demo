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
import { Frame } from "../frames/Frame"

export interface BarNavigationDesktopProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

/**
 * Navigation Bar
 * 
 * Level: Module
 * 
 * Intent: Provides primary navigation controls for traversing sections or views.
 * 
 * Tags: navigation, navbar, menu, UI, header, section, links, routing
 * 
 * @example
 * ```tsx
 * <BarNavigationDesktop

 * />
 * ```
 */
export function BarNavigationDesktop({
  className = "",
  ...props
}: BarNavigationDesktopProps) {
  return (
    <Frame
      className={"sdn-barNavigation sdn-barNavigation-QJymzK1h " + className}
      {...props}
    />
  )
}
