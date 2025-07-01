/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLabel } from "../native-react/HTML.Label"
import { HTMLSpan } from "../native-react/HTML.Span"
import { CSSProperties, HTMLAttributes } from "react"

export type LabelButtonProps = HTMLAttributes<HTMLSpanElement> & {
  children?: string
  htmlElement?: "span" | "label"
}

export const LabelButton = ({
  style,
  children = "Label",
  htmlElement = "span",
  ...props
}: LabelButtonProps) => {
  const styles = { ...defaultStyles, ...style }

  const { ...rest } = props

  switch (htmlElement) {
    case "span":
      return (
        <HTMLSpan style={styles} {...rest}>
          {children}
        </HTMLSpan>
      )
    default:
      return (
        <HTMLLabel style={styles} {...rest}>
          {children}
        </HTMLLabel>
      )
  }
}
const defaultProps: LabelButtonProps = {}
const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 98%)",
  fontFamily: "IBM Plex Sans",
  fontStyle: "normal",
  fontSynthesisStyle: "none",
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: 1.15,
  letterSpacing: "0.1px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}
