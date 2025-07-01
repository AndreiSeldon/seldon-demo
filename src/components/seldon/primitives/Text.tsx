/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLDiv } from "../native-react/HTML.Div"
import { HTMLParagraph } from "../native-react/HTML.Paragraph"
import { HTMLSpan } from "../native-react/HTML.Span"
import { CSSProperties, HTMLAttributes } from "react"

export type TextProps = HTMLAttributes<
  HTMLParagraphElement | HTMLSpanElement
> & { children?: string; htmlElement?: "p" | "span" }

export const Text = ({
  style,
  children = "Text",
  htmlElement = "p",
  ...props
}: TextProps) => {
  const styles = { ...defaultStyles, ...style }

  switch (htmlElement) {
    case "p":
      return (
        <HTMLParagraph style={styles} {...props}>
          {children}
        </HTMLParagraph>
      )
    case "span":
      return (
        <HTMLSpan style={styles} {...props}>
          {children}
        </HTMLSpan>
      )
    default:
      return (
        <HTMLDiv style={styles} {...props}>
          {children}
        </HTMLDiv>
      )
  }
}
const defaultProps: TextProps = {}
const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 98%)",
  display: "flex",
  flexDirection: "row",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSynthesisStyle: "none",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.25,
  whiteSpace: "normal",
}
