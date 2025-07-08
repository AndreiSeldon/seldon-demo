/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { IconDefault } from "../icons/IconDefault"
import { IconMaterialAdd } from "../icons/IconMaterialAdd"
import { IconMaterialArrowForwardIos } from "../icons/IconMaterialArrowForwardIos"
import { IconMaterialClose } from "../icons/IconMaterialClose"
import { IconMaterialDelete } from "../icons/IconMaterialDelete"
import { IconMaterialMoreHoriz } from "../icons/IconMaterialMoreHoriz"
import { IconMaterialUpload } from "../icons/IconMaterialUpload"
import { CSSProperties, SVGAttributes } from "react"

export type IconProps = SVGAttributes<SVGSVGElement> & {
  icon?:
    | "__default__"
    | "material-close"
    | "material-arrowForwardIos"
    | "material-moreHoriz"
    | "material-upload"
    | "material-delete"
    | "material-add"
} & {
  icon?:
    | "__default__"
    | "material-close"
    | "material-arrowForwardIos"
    | "material-moreHoriz"
    | "material-upload"
    | "material-delete"
    | "material-add"
}

export function Icon({ style, icon = "__default__", ...props }: IconProps) {
  const styles = { ...defaultStyles, ...style }

  const Icon = iconMap[icon || defaultProps.component.icon || "__default__"]
  return <Icon style={styles} {...{ ...defaultProps.component, ...props }} />
}

const defaultProps: IconProps = {}
const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 98%)",
  fontSize: "1rem",
}
const iconMap = {
  __default__: IconDefault,
  "material-close": IconMaterialClose,
  "material-arrowForwardIos": IconMaterialArrowForwardIos,
  "material-moreHoriz": IconMaterialMoreHoriz,
  "material-upload": IconMaterialUpload,
  "material-delete": IconMaterialDelete,
  "material-add": IconMaterialAdd,
}
