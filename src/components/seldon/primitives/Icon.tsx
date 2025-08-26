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
import { IconMaterialAddBox } from "../icons/IconMaterialAddBox"
import { IconMaterialAddChart } from "../icons/IconMaterialAddChart"
import { IconMaterialAddCircle } from "../icons/IconMaterialAddCircle"
import { IconMaterialAddComment } from "../icons/IconMaterialAddComment"
import { IconMaterialAddLocation } from "../icons/IconMaterialAddLocation"
import { IconMaterialArrowDownward } from "../icons/IconMaterialArrowDownward"
import { IconMaterialBolt } from "../icons/IconMaterialBolt"
import { IconMaterialBorderColor } from "../icons/IconMaterialBorderColor"
import { IconMaterialCancel } from "../icons/IconMaterialCancel"
import { IconMaterialDataset } from "../icons/IconMaterialDataset"

export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string
  icon?:
    | "__default__"
    | "material-addCircle"
    | "material-cancel"
    | "material-arrowDownward"
    | "material-borderColor"
    | "material-dataset"
    | "material-accountCircle"
    | "material-addChart"
    | "material-addLocation"
    | "material-addBox"
    | "material-bolt"
    | "material-addComment"
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
  "material-addCircle": IconMaterialAddCircle,
  "material-cancel": IconMaterialCancel,
  "material-arrowDownward": IconMaterialArrowDownward,
  "material-borderColor": IconMaterialBorderColor,
  "material-dataset": IconMaterialDataset,
  "material-accountCircle": IconMaterialAccountCircle,
  "material-addChart": IconMaterialAddChart,
  "material-addLocation": IconMaterialAddLocation,
  "material-addBox": IconMaterialAddBox,
  "material-bolt": IconMaterialBolt,
  "material-addComment": IconMaterialAddComment,
}
