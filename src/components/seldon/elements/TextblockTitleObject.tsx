/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { Icon, IconProps } from "../primitives/Icon"
import { Text, TextProps } from "../primitives/Text"
import { Frame } from "../frames/Frame"

export interface TextblockTitleObjectProps extends HTMLAttributes<HTMLElement> {
  iconProps?: IconProps
  textProps?: TextProps
}

export function TextblockTitleObject({
  style,
  iconProps,
  textProps,
  ...props
}: TextblockTitleObjectProps) {
  const styles = { ...defaultStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <Icon {...{ ...defaultProps.iconProps, ...iconProps }} />
      <Text {...{ ...defaultProps.textProps, ...textProps }} />
    </Frame>
  )
}

const defaultProps: TextblockTitleObjectProps = {
  iconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "1rem",
    },
  },
  textProps: {
    children: "Component Name",
    htmlElement: "p",
    style: {
      color: "hsl(0deg 4% 98%)",
      display: "flex",
      flexDirection: "row",
      alignSelf: "stretch",
      height: "fit-content",
      fontFamily: "IBM Plex Sans",
      fontStyle: "normal",
      fontSynthesisStyle: "none",
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.15,
      letterSpacing: "0.1px",
      whiteSpace: "normal",
    },
  },
}

const defaultStyles: CSSProperties = {
  cursor: "pointer",
  borderBottomStyle: "solid",
  overflow: "hidden",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  alignSelf: "stretch",
  height: "fit-content",
}
