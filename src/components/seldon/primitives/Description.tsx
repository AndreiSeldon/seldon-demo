/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLParagraph } from "../native-react/HTML.Paragraph"
import { HTMLSpan } from "../native-react/HTML.Span"
import { CSSProperties, HTMLAttributes } from "react"

export type DescriptionProps = HTMLAttributes<HTMLElement> & {
  htmlElement?: "p" | "span"
}

export const Description = ({
  style,
  htmlElement,
  ...props
}: DescriptionProps) => {
  const styles = style || defaultStyles

  switch (htmlElement) {
    case "p":
      return (
        <HTMLParagraph
          style={styles}
          {...{ ...defaultProps.component, ...props }}
        >
          {props.children}
        </HTMLParagraph>
      )
    default:
      return (
        <HTMLSpan style={styles} {...props}>
          {props.children}
        </HTMLSpan>
      )
  }
}
type DefaultProps = {
  component: DescriptionProps
  children: DescriptionProps
}
const defaultProps: DefaultProps = {
  component: {
    children: "Description",
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
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.25,
  whiteSpace: "normal",
}
