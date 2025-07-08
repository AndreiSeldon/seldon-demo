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

export type ListingTextAddProps = HTMLAttributes<HTMLLIElement> & {
  buttonIconicActionProps?: ButtonIconicActionProps
  buttonIconicActionIconProps?: IconProps
  frameProps?: FrameProps
  frameTextProps?: TextProps
}

export const ListingTextAdd = ({
  style,
  buttonIconicActionProps,
  buttonIconicActionIconProps,
  frameProps,
  frameTextProps,
  ...props
}: ListingTextAddProps) => {
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
    </HTMLLi>
  )
}
const defaultProps: ListingTextAddProps = {
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
      icon: "material-add",
      style: {
        color: "hsl(0deg 4% 98%)",
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
      alignSelf: "stretch",
      flex: "1 0 0",
    },
    textProps: {
      children: "Add Shadow",
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
        lineHeight: 1.25,
        whiteSpace: "normal",
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
