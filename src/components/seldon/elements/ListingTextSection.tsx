/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLi } from "../native-react/HTML.Li"
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { TextProps } from "../primitives/Text"
import { Text } from "../primitives/Text"
import { ButtonIconicActionProps } from "../elements/ButtonIconicAction"
import { ButtonIconicAction } from "../elements/ButtonIconicAction"

export type ListingTextSectionProps = HTMLAttributes<HTMLLIElement> & {
  buttonIconicActionProps?: ButtonIconicActionProps
  buttonIconicActionIconProps?: IconProps
  textProps?: TextProps
  buttonIconicAction1Props?: ButtonIconicActionProps
  buttonIconicAction1IconProps?: IconProps
}

export const ListingTextSection = ({
  style,
  buttonIconicActionProps,
  buttonIconicActionIconProps,
  textProps,
  buttonIconicAction1Props,
  buttonIconicAction1IconProps,
  ...props
}: ListingTextSectionProps) => {
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
      <ButtonIconicAction
        {...{
          ...defaultProps.buttonIconicAction1Props,
          ...buttonIconicAction1Props,
        }}
      ></ButtonIconicAction>
    </HTMLLi>
  )
}
const defaultProps: ListingTextSectionProps = {
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
    children: "Section Name",
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
      textTransform: "uppercase",
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
  backgroundColor: "hsl(0deg 0% 30%)",
  cursor: "pointer",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "stretch",
  flex: "1 0 0",
}
