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
 
import { SVGAttributes } from "react"
import { IconDefault } from "../icons/IconDefault"
import { IconMaterialSearch } from "../icons/IconMaterialSearch"

export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string
  icon?: "__default__" | "material-search"
}

/**
 * Icon
 *
 * Level: Primitive
 *
 * Intent: Displays a vector or symbolic icon representing an action or concept.
 *
 * Tags: icon, symbol, graphic, primitive, UI, decoration
 *
 * @example
 * ```tsx
 * <Icon
 *   icon="__default__"
 * />
 * ```
 */
export function Icon({
  className = "",
  icon = "__default__",
  ...props
}: IconProps) {
  let Icon = iconMap[icon || "__default__"]
  if (!Icon) {
    Icon = iconMap["__default__"]
    console.error(`Icon ${icon} not found. Falling back to the default icon.`)
  }
  return <Icon className={"sdn-icon " + className} {...props} />
}
const iconMap = {
  __default__: IconDefault,
  "material-search": IconMaterialSearch,
}
