/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLi } from "../native-react/HTML.Li"
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { InputProps } from "../primitives/Input"
import { TextProps } from "../primitives/Text"
import { Text } from "../primitives/Text"
import { ButtonIconicActionProps } from "../elements/ButtonIconicAction"
import { ButtonIconicAction } from "../elements/ButtonIconicAction"
import { InputIconicProps } from "../elements/InputIconic"
import { InputIconic } from "../elements/InputIconic"

export type ListingTextEditProps = HTMLAttributes<HTMLLIElement> & {
  buttonIconicActionProps?: ButtonIconicActionProps
  buttonIconicActionIconProps?: IconProps
  textProps?: TextProps
  inputIconicProps?: InputIconicProps
  inputIconicIconProps?: IconProps
  inputIconicInputProps?: InputProps
  buttonIconicAction1Props?: ButtonIconicActionProps
  buttonIconicAction1IconProps?: IconProps
  buttonIconicAction2Props?: ButtonIconicActionProps
  buttonIconicAction2IconProps?: IconProps
}

export const ListingTextEdit = ({
  style,
  buttonIconicActionProps,
  buttonIconicActionIconProps,
  textProps,
  inputIconicProps,
  inputIconicIconProps,
  inputIconicInputProps,
  buttonIconicAction1Props,
  buttonIconicAction1IconProps,
  buttonIconicAction2Props,
  buttonIconicAction2IconProps,
  ...props
}: ListingTextEditProps) => {
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
      <InputIconic
        {...{ ...defaultProps.inputIconicProps, ...inputIconicProps }}
      ></InputIconic>
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
const defaultProps: ListingTextEditProps = {
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
      lineHeight: 1.25,
      whiteSpace: "normal",
    },
  },
  inputIconicProps: {
    style: {
      backgroundColor: "transparent",
      cursor: "pointer",
      borderTopWidth: "var(--hairline)",
      borderTopStyle: "solid",
      borderTopColor: "hsl(0deg 0% 30%)",
      borderRightWidth: "var(--hairline)",
      borderRightStyle: "solid",
      borderRightColor: "hsl(0deg 0% 30%)",
      borderBottomWidth: "var(--hairline)",
      borderBottomStyle: "solid",
      borderBottomColor: "hsl(0deg 0% 30%)",
      borderLeftWidth: "var(--hairline)",
      borderLeftStyle: "solid",
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
      paddingLeft: "0.5rem",
      alignSelf: "stretch",
      height: "fit-content",
    },
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
        fontSize: "0.75rem",
        lineHeight: 1.25,
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
      icon: "material-upload",
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
      icon: "material-delete",
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
