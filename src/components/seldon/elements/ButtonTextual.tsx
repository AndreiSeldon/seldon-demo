/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLButton } from "../native-react/HTML.Button"
import { CSSProperties, ButtonHTMLAttributes } from "react"
import { Icon, IconProps } from "../primitives/Icon"
import { LabelButton, LabelButtonProps } from "../primitives/LabelButton"

export interface ButtonTextualProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconProps?: IconProps
  labelButtonProps?: LabelButtonProps
}

export function ButtonTextual({
  style,
  iconProps,
  labelButtonProps,
  ...props
}: ButtonTextualProps) {
  const styles = { ...defaultStyles, ...style }

  return (
    <HTMLButton style={styles} {...props}>
      <Icon {...{ ...defaultProps.iconProps, ...iconProps }} />
      <LabelButton
        {...{ ...defaultProps.labelButtonProps, ...labelButtonProps }}
      />
    </HTMLButton>
  )
}

const defaultProps: ButtonTextualProps = {
  iconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.8rem",
    },
  },
  labelButtonProps: {
    children: "Label",
    htmlElement: "span",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontFamily: "IBM Plex Sans",
      fontStyle: "normal",
      fontSynthesisStyle: "none",
      fontWeight: 500,
      fontSize: "0.8rem",
      lineHeight: 1.15,
      letterSpacing: "0.1px",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  },
}

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 0% 15%)",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  paddingTop: "0.5rem",
  paddingRight: "0.875rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.75rem",
  width: "fit-content",
  height: "fit-content",
}
