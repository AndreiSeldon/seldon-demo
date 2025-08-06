/*
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 */
import { SVGAttributes } from "react"
import { IconDefault } from "../icons/IconDefault"
import { IconMaterialAccountCircle } from "../icons/IconMaterialAccountCircle"
import { IconMaterialFavorite } from "../icons/IconMaterialFavorite"
import { IconMaterialHome } from "../icons/IconMaterialHome"
import { IconMaterialSearch } from "../icons/IconMaterialSearch"
import { IconMaterialShoppingCartCheckout } from "../icons/IconMaterialShoppingCartCheckout"

export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string
  icon?:
    | "__default__"
    | "material-home"
    | "material-search"
    | "material-favorite"
    | "material-shoppingCartCheckout"
    | "material-accountCircle"
}

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
  return <Icon className={"variant-icon-default " + className} {...props} />
}
const iconMap = {
  __default__: IconDefault,
  "material-home": IconMaterialHome,
  "material-search": IconMaterialSearch,
  "material-favorite": IconMaterialFavorite,
  "material-shoppingCartCheckout": IconMaterialShoppingCartCheckout,
  "material-accountCircle": IconMaterialAccountCircle,
}
