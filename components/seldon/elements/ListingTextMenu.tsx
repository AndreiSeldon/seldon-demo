/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLi } from "../native-react/HTML.Li"
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { OptionProps } from "../primitives/Option"
import { TextProps } from "../primitives/Text"
import { Text } from "../primitives/Text"
import { FrameProps } from "../frames/Frame"
import { Frame } from "../frames/Frame"
import { ButtonIconicActionProps } from "../elements/ButtonIconicAction"
import { ButtonIconicAction } from "../elements/ButtonIconicAction"
import { SelectProps } from "../elements/Select"

export type ListingTextMenuProps = HTMLAttributes<HTMLLIElement> & {
  buttonIconicActionProps?: ButtonIconicActionProps
  buttonIconicActionIconProps?: IconProps
  textProps?: TextProps
  frameProps?: FrameProps
  frameIconProps?: IconProps
  frameSelectProps?: SelectProps
  frameSelectOptionProps?: OptionProps
  frameSelectOption1Props?: OptionProps
  frameSelectOption2Props?: OptionProps
  buttonIconicAction1Props?: ButtonIconicActionProps
  buttonIconicAction1IconProps?: IconProps
  buttonIconicAction2Props?: ButtonIconicActionProps
  buttonIconicAction2IconProps?: IconProps
}

export const ListingTextMenu = ({
  style,
  buttonIconicActionProps,
  buttonIconicActionIconProps,
  textProps,
  frameProps,
  frameIconProps,
  frameSelectProps,
  frameSelectOptionProps,
  frameSelectOption1Props,
  frameSelectOption2Props,
  buttonIconicAction1Props,
  buttonIconicAction1IconProps,
  buttonIconicAction2Props,
  buttonIconicAction2IconProps,
  ...props
}: ListingTextMenuProps) => {
  const styles = { ...defaultStyles, ...style }

  return (
    <HTMLLi style={styles} {...props}>
      <ButtonIconicAction
        {...{
          ...defaultProps.buttonIconicActionProps,
          ...buttonIconicActionProps,
        }}
      ></ButtonIconicAction>
      <Text {...{ ...defaultProps.textProps, ...textProps }} />
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
const defaultProps: ListingTextMenuProps = {
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
        color: "hsl(0deg 4% 98%)",
        fontSize: "0.75rem",
      },
    },
  },
  textProps: {
    children: "Property",
    htmlElement: "p",
    style: {
      color: "hsl(0deg 4% 98%)",
      display: "flex",
      flexDirection: "row",
      width: "3.998rem",
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
  frameProps: {
    style: {
      cursor: "pointer",
      borderTopColor: "hsl(0deg 0% 30%)",
      borderRightColor: "hsl(0deg 0% 30%)",
      borderBottomColor: "hsl(0deg 0% 30%)",
      borderLeftColor: "hsl(0deg 0% 30%)",
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
      flex: "1 0 0",
    },
    iconProps: {
      icon: "__default__",
      style: {
        color: "hsl(0deg 4% 98%)",
        fontSize: "1rem",
      },
    },
    selectProps: {
      style: {
        backgroundColor: "transparent",
        cursor: "pointer",
        color: "hsl(0deg 4% 98%)",
        borderTopRightRadius: "0.25rem",
        borderBottomRightRadius: "0.25rem",
        borderBottomLeftRadius: "0.25rem",
        borderTopLeftRadius: "0.25rem",
        paddingTop: "0.25rem",
        paddingRight: "0.25rem",
        paddingBottom: "0.25rem",
        paddingLeft: "0.25rem",
        alignSelf: "stretch",
        height: "fit-content",
        fontFamily: "IBM Plex Sans",
        fontStyle: "normal",
        fontSynthesisStyle: "none",
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 1.25,
      },
      optionProps: {
        children: "Option",
        style: {
          color: "hsl(0deg 4% 8%)",
          alignSelf: "stretch",
          height: "fit-content",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.25,
          whiteSpace: "pre-wrap",
        },
      },
      option1Props: {
        children: "Option",
        style: {
          color: "hsl(0deg 4% 8%)",
          alignSelf: "stretch",
          height: "fit-content",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.25,
          whiteSpace: "pre-wrap",
        },
      },
      option2Props: {
        children: "Option",
        style: {
          color: "hsl(0deg 4% 8%)",
          alignSelf: "stretch",
          height: "fit-content",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: 1.25,
          whiteSpace: "pre-wrap",
        },
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
        color: "hsl(0deg 4% 98%)",
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
        color: "hsl(0deg 4% 98%)",
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
