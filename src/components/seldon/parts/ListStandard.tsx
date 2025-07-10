/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLUl } from "../native-react/HTML.Ul"
import { CSSProperties, HTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { LabelProps } from "../primitives/Label"
import { FrameProps } from "../frames/Frame"
import { ButtonIconicProps } from "../elements/ButtonIconic"
import {
  ListItemStandard,
  ListItemStandardProps,
} from "../elements/ListItemStandard"

export interface ListStandardProps extends HTMLAttributes<HTMLUListElement> {
  listItemStandardProps?: ListItemStandardProps
  listItemStandardIconProps?: IconProps
  listItemStandardFrameProps?: FrameProps
  listItemStandardFrameIconProps?: IconProps
  listItemStandardFrameLabelProps?: LabelProps
  listItemStandardButtonIconicProps?: ButtonIconicProps
  listItemStandardButtonIconicIconProps?: IconProps
  listItemStandardButtonIconic1Props?: ButtonIconicProps
  listItemStandardButtonIconic1IconProps?: IconProps
  listItemStandard1Props?: ListItemStandardProps
  listItemStandard1IconProps?: IconProps
  listItemStandard1FrameProps?: FrameProps
  listItemStandard1FrameIconProps?: IconProps
  listItemStandard1FrameLabelProps?: LabelProps
  listItemStandard1ButtonIconicProps?: ButtonIconicProps
  listItemStandard1ButtonIconicIconProps?: IconProps
  listItemStandard1ButtonIconic1Props?: ButtonIconicProps
  listItemStandard1ButtonIconic1IconProps?: IconProps
  listItemStandard2Props?: ListItemStandardProps
  listItemStandard2IconProps?: IconProps
  listItemStandard2FrameProps?: FrameProps
  listItemStandard2FrameIconProps?: IconProps
  listItemStandard2FrameLabelProps?: LabelProps
  listItemStandard2ButtonIconicProps?: ButtonIconicProps
  listItemStandard2ButtonIconicIconProps?: IconProps
  listItemStandard2ButtonIconic1Props?: ButtonIconicProps
  listItemStandard2ButtonIconic1IconProps?: IconProps
}

export function ListStandard({
  style,
  listItemStandardProps,
  listItemStandardIconProps,
  listItemStandardFrameProps,
  listItemStandardFrameIconProps,
  listItemStandardFrameLabelProps,
  listItemStandardButtonIconicProps,
  listItemStandardButtonIconicIconProps,
  listItemStandardButtonIconic1Props,
  listItemStandardButtonIconic1IconProps,
  listItemStandard1Props,
  listItemStandard1IconProps,
  listItemStandard1FrameProps,
  listItemStandard1FrameIconProps,
  listItemStandard1FrameLabelProps,
  listItemStandard1ButtonIconicProps,
  listItemStandard1ButtonIconicIconProps,
  listItemStandard1ButtonIconic1Props,
  listItemStandard1ButtonIconic1IconProps,
  listItemStandard2Props,
  listItemStandard2IconProps,
  listItemStandard2FrameProps,
  listItemStandard2FrameIconProps,
  listItemStandard2FrameLabelProps,
  listItemStandard2ButtonIconicProps,
  listItemStandard2ButtonIconicIconProps,
  listItemStandard2ButtonIconic1Props,
  listItemStandard2ButtonIconic1IconProps,
  ...props
}: ListStandardProps) {
  const styles = { ...seldonStyles, ...style }

  return (
    <HTMLUl style={styles} {...props}>
      <ListItemStandard
        {...{ ...seldon.listItemStandardProps, ...listItemStandardProps }}
      />
      <ListItemStandard
        {...{ ...seldon.listItemStandard1Props, ...listItemStandard1Props }}
      />
      <ListItemStandard
        {...{ ...seldon.listItemStandard2Props, ...listItemStandard2Props }}
      />
    </HTMLUl>
  )
}

const seldon: ListStandardProps = {
  listItemStandardProps: {
    style: {
      flexWrap: "nowrap",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.25rem",
      alignSelf: "stretch",
      flex: "1 0 0",
      padding: "0.5rem",
    },
  },
  listItemStandardIconProps: {
    icon: "material-arrowCircleRight",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandardFrameProps: {
    style: {
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
  listItemStandardFrameIconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandardFrameLabelProps: {
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
  listItemStandardButtonIconicProps: {
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
  listItemStandardButtonIconicIconProps: {
    icon: "material-close",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandardButtonIconic1Props: {
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
  listItemStandardButtonIconic1IconProps: {
    icon: "material-close",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandard1Props: {
    style: {
      flexWrap: "nowrap",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.25rem",
      alignSelf: "stretch",
      flex: "1 0 0",
      padding: "0.5rem",
    },
  },
  listItemStandard1IconProps: {
    icon: "material-arrowCircleRight",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandard1FrameProps: {
    style: {
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
  listItemStandard1FrameIconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandard1FrameLabelProps: {
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
  listItemStandard1ButtonIconicProps: {
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
  listItemStandard1ButtonIconicIconProps: {
    icon: "material-close",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandard1ButtonIconic1Props: {
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
  listItemStandard1ButtonIconic1IconProps: {
    icon: "material-close",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandard2Props: {
    style: {
      flexWrap: "nowrap",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.25rem",
      alignSelf: "stretch",
      flex: "1 0 0",
      padding: "0.5rem",
    },
  },
  listItemStandard2IconProps: {
    icon: "material-arrowCircleRight",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandard2FrameProps: {
    style: {
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
  listItemStandard2FrameIconProps: {
    icon: "__default__",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandard2FrameLabelProps: {
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
  listItemStandard2ButtonIconicProps: {
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
  listItemStandard2ButtonIconicIconProps: {
    icon: "material-close",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
  listItemStandard2ButtonIconic1Props: {
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
  listItemStandard2ButtonIconic1IconProps: {
    icon: "material-close",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
}

const seldonStyles: CSSProperties = {
  backgroundColor: "transparent",
  borderTopColor: "hsl(0deg 0% 15%)",
  borderRightColor: "hsl(0deg 0% 15%)",
  borderBottomColor: "hsl(0deg 0% 15%)",
  borderLeftColor: "hsl(0deg 0% 15%)",
  overflow: "hidden",
  flexWrap: "wrap",
  display: "flex",
  flexDirection: "column",
  alignSelf: "stretch",
  height: "fit-content",
  borderWidth: "var(--hairline)",
  borderStyle: "solid",
}
