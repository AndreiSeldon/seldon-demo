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
import { IconMaterialAddLocation } from "../icons/IconMaterialAddLocation"
import { IconMaterialApps } from "../icons/IconMaterialApps"
import { IconMaterialArrowOutward } from "../icons/IconMaterialArrowOutward"
import { IconMaterialAssistantNavigation } from "../icons/IconMaterialAssistantNavigation"
import { IconMaterialBatteryHoriz050 } from "../icons/IconMaterialBatteryHoriz050"
import { IconMaterial_360 } from "../icons/IconMaterial_360"

export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string
  icon?:
    | "__default__"
    | "material-apps"
    | "material-assistantNavigation"
    | "material-arrowOutward"
    | "material-accountCircle"
    | "material-addLocation"
    | "material-batteryHoriz050"
    | "material-360"
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
  return <Icon className={"sdn-icon " + className} {...props} />
}
const iconMap = {
  __default__: IconDefault,
  "material-apps": IconMaterialApps,
  "material-assistantNavigation": IconMaterialAssistantNavigation,
  "material-arrowOutward": IconMaterialArrowOutward,
  "material-accountCircle": IconMaterialAccountCircle,
  "material-addLocation": IconMaterialAddLocation,
  "material-batteryHoriz050": IconMaterialBatteryHoriz050,
  "material-360": IconMaterial_360,
}
