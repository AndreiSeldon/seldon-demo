/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLi } from "../native-react/HTML.Li"
import { CSSProperties, HTMLAttributes } from "react"
import { Icon, IconProps } from "../primitives/Icon"
import { LabelProps } from "../primitives/Label"
import { Frame, FrameProps } from "../frames/Frame"
import { ButtonIconic, ButtonIconicProps } from "../elements/ButtonIconic"

export interface ListItemStandardProps extends HTMLAttributes<HTMLLIElement> {
  iconProps?: IconProps
  frameProps?: FrameProps
  frameIconProps?: IconProps
  frameLabelProps?: LabelProps
  buttonIconicProps?: ButtonIconicProps
  buttonIconicIconProps?: IconProps
  buttonIconic1Props?: ButtonIconicProps
  buttonIconic1IconProps?: IconProps
}

export function ListItemStandard({
  style,
  iconProps,
  frameProps,
  frameIconProps,
  frameLabelProps,
  buttonIconicProps,
  buttonIconicIconProps,
  buttonIconic1Props,
  buttonIconic1IconProps,
  ...props
}: ListItemStandardProps) {
  const styles = { ...defaultStyles, ...style }

  return (
    <HTMLLi style={styles} {...props}>
      <Icon {...{ ...defaultProps.iconProps, ...iconProps }} />
      <Frame
        {...{ ...defaultProps.frameProps, ...frameProps }}
        iconProps={{ ...defaultProps.frameIconProps, ...frameIconProps }}
        labelProps={{ ...defaultProps.frameLabelProps, ...frameLabelProps }}
      />
      <ButtonIconic
        {...{ ...defaultProps.buttonIconicProps, ...buttonIconicProps }}
        iconProps={{
          ...defaultProps.buttonIconicIconProps,
          ...buttonIconicIconProps,
        }}
        buttonIconic1IconProps={{
          ...defaultProps.buttonIconic1IconProps,
          ...buttonIconic1IconProps,
        }}
      />
      <ButtonIconic
        {...{ ...defaultProps.buttonIconic1Props, ...buttonIconic1Props }}
        iconProps={{
          ...defaultProps.buttonIconic1IconProps,
          ...buttonIconic1IconProps,
        }}
      />
    </HTMLLi>
  )
}

const defaultProps: ListItemStandardProps = {
  iconProps: {
    icon: "material-arrowForwardIos",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  frameProps: {
    style: {
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
      paddingLeft: "0.5rem",
      alignSelf: "stretch",
      flex: "1 0 0",
    },
  },
  frameIconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  frameLabelProps: {
    children: "Component Name",
    htmlElement: "span",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontFamily: "IBM Plex Sans",
      fontStyle: "normal",
      fontSynthesisStyle: "none",
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.15,
      letterSpacing: "0.1px",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  },
  buttonIconicProps: {
    style: {
      backgroundColor: "transparent",
      cursor: "pointer",
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
      paddingRight: "0.5rem",
      paddingBottom: "0.5rem",
      paddingLeft: "0.5rem",
      width: "fit-content",
      height: "fit-content",
    },
  },
  buttonIconicIconProps: {
    icon: "material-close",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  buttonIconic1Props: {
    style: {
      backgroundColor: "transparent",
      cursor: "pointer",
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
      paddingRight: "0.5rem",
      paddingBottom: "0.5rem",
      paddingLeft: "0.5rem",
      width: "fit-content",
      height: "fit-content",
    },
  },
  buttonIconic1IconProps: {
    icon: "material-moreHoriz",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
}

const defaultStyles: CSSProperties = {
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  paddingTop: "0.5rem",
  paddingRight: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.5rem",
  alignSelf: "stretch",
  flex: "1 0 0",
}
