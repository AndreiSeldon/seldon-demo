/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { Icon } from "../primitives/Icon"
import { InputProps } from "../primitives/Input"
import { Input } from "../primitives/Input"
import { Frame } from "../frames/Frame"

type InputIconicProps = HTMLAttributes<HTMLElement> & {
  iconProps?: IconProps
  inputProps?: InputProps
}

export const InputIconic = ({
  style,
  iconProps,
  inputProps,
  ...props
}: InputIconicProps) => {
  const styles = { ...defaultStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <Icon {...{ ...defaultProps.iconProps, ...iconProps }} />
      <Input {...{ ...defaultProps.inputProps, ...inputProps }} />
    </Frame>
  )
}
const defaultProps: InputIconicProps = {
  iconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "1rem",
    },
  },
  inputProps: {
    inputType: "text",
    style: {
      backgroundColor: "transparent",
      color: "hsl(0deg 4% 8%)",
      paddingTop: "0.5rem",
      paddingRight: "0.5rem",
      paddingBottom: "0.5rem",
      paddingLeft: "0.5rem",
      alignSelf: "stretch",
      height: "fit-content",
      fontFamily: "IBM Plex Sans",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.25,
    },
  },
}
const defaultStyles: CSSProperties = {
  backgroundColor: "transparent",
  cursor: "pointer",
  borderTopWidth: "0.069rem",
  borderTopStyle: "solid",
  borderTopColor: "hsl(0deg 4% 56%)",
  borderRightWidth: "0.069rem",
  borderRightStyle: "solid",
  borderRightColor: "hsl(0deg 4% 56%)",
  borderBottomWidth: "0.069rem",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(0deg 4% 56%)",
  borderLeftWidth: "0.069rem",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(0deg 4% 56%)",
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "start",
  gap: "0.25rem",
  paddingTop: "0.25rem",
  paddingRight: "0.25rem",
  paddingBottom: "0.25rem",
  paddingLeft: "0.5rem",
  alignSelf: "stretch",
  height: "fit-content",
}
