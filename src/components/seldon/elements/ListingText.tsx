/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLi } from "../native-react/HTML.Li"
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { TextProps } from "../primitives/Text"
import { Frame, FrameProps } from "../frames/Frame"
import {
  ButtonIconicAction,
  ButtonIconicActionProps,
} from "../elements/ButtonIconicAction"

export interface ListingTextProps extends HTMLAttributes<HTMLLIElement> {
  buttonIconicActionProps?: ButtonIconicActionProps
  buttonIconicActionIconProps?: IconProps
  frameProps?: FrameProps
  frameIconProps?: IconProps
  frameTextProps?: TextProps
  buttonIconicAction1Props?: ButtonIconicActionProps
  buttonIconicAction1IconProps?: IconProps
  buttonIconicAction2Props?: ButtonIconicActionProps
  buttonIconicAction2IconProps?: IconProps
}

export function ListingText({
  style,
  buttonIconicActionProps,
  buttonIconicActionIconProps,
  frameProps,
  frameIconProps,
  frameTextProps,
  buttonIconicAction1Props,
  buttonIconicAction1IconProps,
  buttonIconicAction2Props,
  buttonIconicAction2IconProps,
  ...props
}: ListingTextProps) {
  const styles = { ...defaultStyles, ...style }

  return (
    <HTMLLi style={styles} {...props}>
      <ButtonIconicAction
        {...{
          ...defaultProps.buttonIconicActionProps,
          ...buttonIconicActionProps,
        }}
        iconProps={{
          ...defaultProps.buttonIconicActionIconProps,
          ...buttonIconicActionIconProps,
        }}
        buttonIconicAction1IconProps={{
          ...defaultProps.buttonIconicAction1IconProps,
          ...buttonIconicAction1IconProps,
        }}
        buttonIconicAction2IconProps={{
          ...defaultProps.buttonIconicAction2IconProps,
          ...buttonIconicAction2IconProps,
        }}
      />
      <Frame
        {...{ ...defaultProps.frameProps, ...frameProps }}
        iconProps={{ ...defaultProps.frameIconProps, ...frameIconProps }}
        textProps={{ ...defaultProps.frameTextProps, ...frameTextProps }}
      />
      <ButtonIconicAction
        {...{
          ...defaultProps.buttonIconicAction1Props,
          ...buttonIconicAction1Props,
        }}
        iconProps={{
          ...defaultProps.buttonIconicAction1IconProps,
          ...buttonIconicAction1IconProps,
        }}
      />
      <ButtonIconicAction
        {...{
          ...defaultProps.buttonIconicAction2Props,
          ...buttonIconicAction2Props,
        }}
        iconProps={{
          ...defaultProps.buttonIconicAction2IconProps,
          ...buttonIconicAction2IconProps,
        }}
      />
    </HTMLLi>
  )
}

const defaultProps: ListingTextProps = {
  buttonIconicActionProps: {
    style: {
      cursor: "pointer",
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
    },
  },
  buttonIconicActionIconProps: {
    icon: "material-arrowForwardIos",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  frameProps: {
    style: {
      cursor: "pointer",
      borderTopWidth: "var(--hairline)",
      borderTopStyle: "solid",
      borderTopColor: "hsl(0deg 0% 15%)",
      borderRightWidth: "var(--hairline)",
      borderRightStyle: "solid",
      borderRightColor: "hsl(0deg 0% 15%)",
      borderBottomWidth: "var(--hairline)",
      borderBottomStyle: "solid",
      borderBottomColor: "hsl(0deg 0% 15%)",
      borderLeftWidth: "var(--hairline)",
      borderLeftStyle: "solid",
      borderLeftColor: "hsl(0deg 0% 15%)",
      flexWrap: "nowrap",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      gap: "0.5rem",
      paddingRight: "0.25rem",
      paddingLeft: "0.25rem",
      alignSelf: "stretch",
      flex: "1 0 0",
    },
  },
  frameIconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "1rem",
    },
  },
  frameTextProps: {
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
  buttonIconicAction1Props: {
    style: {
      cursor: "pointer",
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
    },
  },
  buttonIconicAction1IconProps: {
    icon: "material-close",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  buttonIconicAction2Props: {
    style: {
      cursor: "pointer",
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
    },
  },
  buttonIconicAction2IconProps: {
    icon: "material-moreHoriz",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
}

const defaultStyles: CSSProperties = {
  cursor: "pointer",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",
  flex: "1 0 0",
}
