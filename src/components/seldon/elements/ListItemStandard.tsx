/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLi } from "../native-react/HTML.Li"
import { CSSProperties, HTMLAttributes } from "react"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
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
  const styles = { ...seldonStyles, ...style }

  return (
    <HTMLLi style={styles} {...props}>
      <Icon {...{ ...seldon.iconProps, ...iconProps }} />
      <Frame {...{ ...seldon.frameProps, ...frameProps }}>
        <Icon {...{ ...seldon.frameIconProps, ...frameIconProps }} />
        <Label {...{ ...seldon.frameLabelProps, ...frameLabelProps }} />
      </Frame>
      <ButtonIconic
        {...{ ...seldon.buttonIconicProps, ...buttonIconicProps }}
      />
      <ButtonIconic
        {...{ ...seldon.buttonIconic1Props, ...buttonIconic1Props }}
      />
    </HTMLLi>
  )
}

const seldon: ListItemStandardProps = {
  iconProps: {
    icon: "material-arrowForwardIos",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  frameProps: {
    style: {
      borderTopColor: "hsl(0deg 0% 15%)",
      borderRightColor: "hsl(0deg 0% 15%)",
      borderBottomColor: "hsl(0deg 0% 15%)",
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
      borderWidth: "var(--hairline)",
      borderStyle: "solid",
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
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      width: "fit-content",
      height: "fit-content",
      padding: "0.5rem",
      borderRadius: "99999px",
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
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      width: "fit-content",
      height: "fit-content",
      padding: "0.5rem",
      borderRadius: "99999px",
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

const seldonStyles: CSSProperties = {
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",
  alignSelf: "stretch",
  flex: "1 0 0",
  padding: "0.5rem",
}
