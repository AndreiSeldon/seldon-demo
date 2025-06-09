/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { IconDefault } from "../icons/IconDefault";
import { IconMaterialAdd } from "../icons/IconMaterialAdd";
import { IconMaterialFavorite } from "../icons/IconMaterialFavorite";
import { IconMaterialFullscreen } from "../icons/IconMaterialFullscreen";
import { IconMaterialPerson } from "../icons/IconMaterialPerson";
import { IconMaterialUpload } from "../icons/IconMaterialUpload";
import { CSSProperties } from "react";
import React, { SVGAttributes } from "react";

interface IconTokens {}

type IconProps = SVGAttributes<SVGSVGElement> &
  IconTokens & {
    icon:
      | "__default__"
      | "material-favorite"
      | "material-upload"
      | "material-add"
      | "material-fullscreen"
      | "material-person";
  };

export function Icon({ icon = "__default__", style, ...props }: IconProps) {
  const styles = style || defaultStyles;

  const Icon = iconMap[icon] || iconMap["__default__"];
  return <Icon style={styles} {...props} />;
}

const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  fontSize: "1rem",
};

const iconMap = {
  __default__: IconDefault,
  "material-favorite": IconMaterialFavorite,
  "material-upload": IconMaterialUpload,
  "material-add": IconMaterialAdd,
  "material-fullscreen": IconMaterialFullscreen,
  "material-person": IconMaterialPerson,
};
