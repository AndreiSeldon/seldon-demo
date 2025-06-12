/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLDiv } from "../native-react/HTML.Div"
import { HTMLHeading1 } from "../native-react/HTML.Heading1"
import { HTMLHeading2 } from "../native-react/HTML.Heading2"
import { HTMLHeading3 } from "../native-react/HTML.Heading3"
import { HTMLHeading4 } from "../native-react/HTML.Heading4"
import { HTMLHeading5 } from "../native-react/HTML.Heading5"
import { HTMLHeading6 } from "../native-react/HTML.Heading6"
import { CSSProperties, HTMLAttributes } from "react"

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  htmlElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const Title = ({ style, htmlElement, ...props }: TitleProps) => {
  const styles = style || defaultStyles

  switch (htmlElement) {
    case "h1":
      return (
        <HTMLHeading1
          style={styles}
          {...{ ...defaultProps.component, ...props }}
        >
          {props.children}
        </HTMLHeading1>
      )
    case "h2":
      return (
        <HTMLHeading2 style={styles} {...props}>
          {props.children}
        </HTMLHeading2>
      )
    case "h3":
      return (
        <HTMLHeading3 style={styles} {...props}>
          {props.children}
        </HTMLHeading3>
      )
    case "h4":
      return (
        <HTMLHeading4 style={styles} {...props}>
          {props.children}
        </HTMLHeading4>
      )
    case "h5":
      return (
        <HTMLHeading5 style={styles} {...props}>
          {props.children}
        </HTMLHeading5>
      )
    case "h6":
      return (
        <HTMLHeading6 style={styles} {...props}>
          {props.children}
        </HTMLHeading6>
      )
    default:
      return (
        <HTMLDiv style={styles} {...props}>
          {props.children}
        </HTMLDiv>
      )
  }
}
type DefaultProps = {
  component: TitleProps
  children: TitleProps
}
const defaultProps: DefaultProps = {
  component: {
    children: "Title",
  },
  children: {},
}
const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSynthesisStyle: "none",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: 1.25,
  whiteSpace: "normal",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  lineClamp: 2,
  WebkitBoxOrient: "vertical",
  boxOrient: "vertical",
}
