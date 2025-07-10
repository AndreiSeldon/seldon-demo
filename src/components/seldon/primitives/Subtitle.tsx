/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLHeading1 } from "../native-react/HTML.Heading1"
import { HTMLHeading2 } from "../native-react/HTML.Heading2"
import { HTMLHeading3 } from "../native-react/HTML.Heading3"
import { HTMLHeading4 } from "../native-react/HTML.Heading4"
import { HTMLHeading5 } from "../native-react/HTML.Heading5"
import { HTMLHeading6 } from "../native-react/HTML.Heading6"
import { CSSProperties, HTMLAttributes } from "react"

export interface SubtitleProps
  extends HTMLAttributes<
    | HTMLHeadingElement
    | HTMLHeadingElement
    | HTMLHeadingElement
    | HTMLHeadingElement
    | HTMLHeadingElement
    | HTMLHeadingElement
  > {
  children?: string
  htmlElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Subtitle({ style, htmlElement, ...props }: SubtitleProps) {
  const styles = { ...seldonStyles, ...style }

  switch (htmlElement) {
    case "h1":
      return <HTMLHeading1 style={styles} {...props} />
    case "h2":
      return <HTMLHeading2 style={styles} {...props} />
    case "h3":
      return <HTMLHeading3 style={styles} {...props} />
    case "h4":
      return <HTMLHeading4 style={styles} {...props} />
    case "h6":
      return <HTMLHeading6 style={styles} {...props} />
    default:
      return <HTMLHeading5 style={styles} {...props} />
  }
}

const seldonStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSynthesisStyle: "none",
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: 1.25,
  whiteSpace: "normal",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  lineClamp: 2,
  WebkitBoxOrient: "vertical",
  boxOrient: "vertical",
}
