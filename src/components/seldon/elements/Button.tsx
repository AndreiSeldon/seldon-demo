/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLButton } from "../native-react/HTML.Button"
import { CSSProperties, ButtonHTMLAttributes } from "react"
import { Icon, IconProps } from "../primitives/Icon"
import { LabelButton, LabelButtonProps } from "../primitives/LabelButton"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconProps?: IconProps
  labelButtonProps?: LabelButtonProps
}

export function Button({
  style,
  iconProps,
  labelButtonProps,
  ...props
}: ButtonProps) {
  const styles = { ...seldonStyles, ...style }

  return (
    <HTMLButton style={styles} {...props}>
      <Icon {...{ ...seldon.iconProps, ...iconProps }} />
      <LabelButton {...{ ...seldon.labelButtonProps, ...labelButtonProps }} />
    </HTMLButton>
  )
}

const seldon: ButtonProps = {
  iconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 8%)",
      fontSize: "0.8rem",
    },
  },
  labelButtonProps: {
    children: "Label",
    htmlElement: "span",
    style: {
      color: "hsl(0deg 4% 8%)",
      fontFamily: "Inter",
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

const seldonStyles: CSSProperties = {
  backgroundColor: "hsl(203deg 100% 62%)",
  cursor: "pointer",
  borderTopColor: "hsl(203deg 100% 62%)",
  borderRightColor: "hsl(203deg 100% 62%)",
  borderBottomColor: "hsl(203deg 100% 62%)",
  borderLeftColor: "hsl(203deg 100% 62%)",
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
  borderWidth: "0.069rem",
  borderStyle: "solid",
  borderRadius: "99999px",
}
