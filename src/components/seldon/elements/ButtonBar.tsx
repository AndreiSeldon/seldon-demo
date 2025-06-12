/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { LabelButtonProps } from "../primitives/LabelButton"
import { Frame } from "../frames/Frame"
import { ButtonProps, Button } from "../elements/Button"
import { ButtonIconicProps, ButtonIconic } from "../elements/ButtonIconic"

export type ButtonBarProps = HTMLAttributes<HTMLDivElement> & {
  buttonProps?: ButtonProps
  buttonIconProps?: IconProps
  buttonLabelButtonProps?: LabelButtonProps
  buttonIconicProps?: ButtonIconicProps
  buttonIconicIconProps?: IconProps
}

export const ButtonBar = ({
  style,
  buttonProps,
  buttonIconProps,
  buttonLabelButtonProps,
  buttonIconicProps,
  buttonIconicIconProps,
  ...props
}: ButtonBarProps) => {
  const styles = style || defaultStyles

  return (
    <Frame style={styles} {...{ ...defaultProps.component, ...props }}>
      <Button
        style={{
          backgroundColor: "hsl(0deg 0% 15%)",
          cursor: "pointer",
          borderTopWidth: "0.069rem",
          borderTopStyle: "solid",
          borderTopColor: "hsl(0deg 0% 15%)",
          borderRightWidth: "0.069rem",
          borderRightStyle: "solid",
          borderRightColor: "hsl(0deg 0% 15%)",
          borderBottomWidth: "0.069rem",
          borderBottomStyle: "solid",
          borderBottomColor: "hsl(0deg 0% 15%)",
          borderLeftWidth: "0.069rem",
          borderLeftStyle: "solid",
          borderLeftColor: "hsl(0deg 0% 15%)",
          borderTopRightRadius: "99999px",
          borderBottomRightRadius: "99999px",
          borderBottomLeftRadius: "99999px",
          borderTopLeftRadius: "99999px",
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
        }}
        {...{ ...defaultProps.children.buttonProps, ...buttonProps }}
        iconProps={{
          ...defaultProps.children.buttonIconProps,
          ...buttonIconProps,
        }}
        labelButtonProps={{
          ...defaultProps.children.buttonLabelButtonProps,
          ...buttonLabelButtonProps,
        }}
      ></Button>
      <ButtonIconic
        style={{
          backgroundColor: "hsl(0deg 0% 15%)",
          cursor: "pointer",
          borderTopWidth: "0.069rem",
          borderTopStyle: "solid",
          borderTopColor: "hsl(0deg 0% 15%)",
          borderRightWidth: "0.069rem",
          borderRightStyle: "solid",
          borderRightColor: "hsl(0deg 0% 15%)",
          borderBottomWidth: "0.069rem",
          borderBottomStyle: "solid",
          borderBottomColor: "hsl(0deg 0% 15%)",
          borderLeftWidth: "0.069rem",
          borderLeftStyle: "solid",
          borderLeftColor: "hsl(0deg 0% 15%)",
          borderTopRightRadius: "99999px",
          borderBottomRightRadius: "99999px",
          borderBottomLeftRadius: "99999px",
          borderTopLeftRadius: "99999px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "0.5rem",
          paddingRight: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "0.5rem",
          width: "fit-content",
          height: "fit-content",
        }}
        {...{
          ...defaultProps.children.buttonIconicProps,
          ...buttonIconicProps,
        }}
        iconProps={{
          ...defaultProps.children.buttonIconicIconProps,
          ...buttonIconicIconProps,
        }}
      ></ButtonIconic>
    </Frame>
  )
}
type DefaultProps = {
  component: ButtonBarProps
  children: ButtonBarProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    buttonProps: {},
    buttonIconProps: {
      icon: "__default__",
    },
    buttonLabelButtonProps: {
      children: "Label",
    },
    buttonIconicProps: {},
    buttonIconicIconProps: {
      icon: "__default__",
    },
  },
}
const defaultStyles: CSSProperties = {
  flexWrap: "wrap",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignSelf: "stretch",
  height: "fit-content",
}
