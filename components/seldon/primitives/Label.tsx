/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLSpan } from "../native-react/HTML.Span"
import { CSSProperties, HTMLAttributes } from "react"

export interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  children?: string
  htmlElement?: "span"
}

export function Label({ style, htmlElement, ...props }: LabelProps) {
  const styles = { ...defaultStyles, ...style }

  return <HTMLSpan style={styles} {...props} />
}

const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSynthesisStyle: "none",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: 1.15,
  letterSpacing: "0.1px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}
