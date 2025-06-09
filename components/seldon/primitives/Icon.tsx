/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { IconDefault } from "../icons/IconDefault";
import { IconMaterialPerson } from "../icons/IconMaterialPerson";
import { CSSProperties } from "react";
import React, { SVGAttributes } from "react";

interface IconTokens {}

type IconProps = SVGAttributes<SVGSVGElement> &
  IconTokens & {
    icon: "__default__" | "material-person";
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
  "material-person": IconMaterialPerson,
};
