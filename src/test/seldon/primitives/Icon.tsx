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
import { IconMaterialAccountCircle } from "../icons/IconMaterialAccountCircle"
import { IconMaterialAdd } from "../icons/IconMaterialAdd"
import { IconMaterialFavorite } from "../icons/IconMaterialFavorite"
import { IconMaterialHome } from "../icons/IconMaterialHome"
import { IconMaterialRemove } from "../icons/IconMaterialRemove"
import { IconMaterialSearch } from "../icons/IconMaterialSearch"
import { IconMaterialSend } from "../icons/IconMaterialSend"
import { IconMaterialSettings } from "../icons/IconMaterialSettings"
import { IconSocialInstagram } from "../icons/IconSocialInstagram"
import { IconSocialLinkedin } from "../icons/IconSocialLinkedin"
import { IconSocialTwitter } from "../icons/IconSocialTwitter"

export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string
  icon?:
    | "__default__"
    | "material-search"
    | "material-send"
    | "social-twitter"
    | "social-linkedin"
    | "social-instagram"
    | "material-add"
    | "material-remove"
    | "material-home"
    | "material-favorite"
    | "material-accountCircle"
    | "material-settings"
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
  "material-send": IconMaterialSend,
  "social-twitter": IconSocialTwitter,
  "social-linkedin": IconSocialLinkedin,
  "social-instagram": IconSocialInstagram,
  "material-add": IconMaterialAdd,
  "material-remove": IconMaterialRemove,
  "material-home": IconMaterialHome,
  "material-favorite": IconMaterialFavorite,
  "material-accountCircle": IconMaterialAccountCircle,
  "material-settings": IconMaterialSettings,
}
