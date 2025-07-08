/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLi } from "../native-react/HTML.Li"
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { TextProps } from "../primitives/Text"
import { FrameProps } from "../frames/Frame"
import { Frame } from "../frames/Frame"
import { ButtonIconicActionProps } from "../elements/ButtonIconicAction"
import { ButtonIconicAction } from "../elements/ButtonIconicAction"

export type ListingTextHighlightProps = HTMLAttributes<HTMLLIElement> & {
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

export const ListingTextHighlight = ({
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
}: ListingTextHighlightProps) => {
  const styles = { ...defaultStyles, ...style }

  return (
    <HTMLLi style={styles} {...props}>
      <ButtonIconicAction
        {...{
          ...defaultProps.buttonIconicActionProps,
          ...buttonIconicActionProps,
        }}
      ></ButtonIconicAction>
      <Frame {...{ ...defaultProps.frameProps, ...frameProps }}></Frame>
      <ButtonIconicAction
        {...{
          ...defaultProps.buttonIconicAction1Props,
          ...buttonIconicAction1Props,
        }}
      ></ButtonIconicAction>
      <ButtonIconicAction
        {...{
          ...defaultProps.buttonIconicAction2Props,
          ...buttonIconicAction2Props,
        }}
      ></ButtonIconicAction>
    </HTMLLi>
  )
}
const defaultProps: ListingTextHighlightProps = {
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
    iconProps: {
      icon: "material-arrowForwardIos",
      style: {
        color: "hsl(203deg 100% 62%)",
        fontSize: "0.75rem",
      },
    },
  },
  frameProps: {
    style: {
      cursor: "pointer",
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
    iconProps: {
      icon: "__default__",
      style: {
        color: "hsl(203deg 100% 62%)",
        fontSize: "1rem",
      },
    },
    textProps: {
      children: "Component Name",
      htmlElement: "p",
      style: {
        color: "hsl(203deg 100% 62%)",
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
    iconProps: {
      icon: "material-close",
      style: {
        color: "hsl(203deg 100% 62%)",
        fontSize: "0.75rem",
      },
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
    iconProps: {
      icon: "material-moreHoriz",
      style: {
        color: "hsl(203deg 100% 62%)",
        fontSize: "0.75rem",
      },
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
  height: "fit-content",
}
