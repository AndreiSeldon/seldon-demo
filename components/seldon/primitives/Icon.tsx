/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { IconDefault } from "../icons/IconDefault"
import { IconMaterialArrowForwardIos } from "../icons/IconMaterialArrowForwardIos"
import { IconMaterialClose } from "../icons/IconMaterialClose"
import { IconMaterialMoreHoriz } from "../icons/IconMaterialMoreHoriz"
import { CSSProperties, SVGAttributes } from "react"

export interface IconProps extends SVGAttributes<SVGElement> {
  icon?:
    | "__default__"
    | "material-arrowForwardIos"
    | "material-close"
    | "material-moreHoriz"
}

export function Icon({ style, icon = "__default__", ...props }: IconProps) {
  const styles = { ...defaultStyles, ...style }

  const Icon = iconMap[icon || "__default__"]
  return <Icon style={styles} {...props} />
}

const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  fontSize: "1rem",
}
const iconMap = {
  __default__: IconDefault,
  "material-arrowForwardIos": IconMaterialArrowForwardIos,
  "material-close": IconMaterialClose,
  "material-moreHoriz": IconMaterialMoreHoriz,
}
