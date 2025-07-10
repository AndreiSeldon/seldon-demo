/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLabel } from "../native-react/HTML.Label"
import { HTMLSpan } from "../native-react/HTML.Span"
import { CSSProperties, HTMLAttributes } from "react"

export interface LabelButtonProps
  extends HTMLAttributes<HTMLLabelElement | HTMLSpanElement> {
  children?: string
  htmlElement?: "span" | "label"
}

export function LabelButton({
  style,
  htmlElement,
  ...props
}: LabelButtonProps) {
  const styles = { ...seldonStyles, ...style }

  switch (htmlElement) {
    case "label":
      return <HTMLLabel style={styles} {...props} />
    default:
      return <HTMLSpan style={styles} {...props} />
  }
}

const seldonStyles: CSSProperties = {
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
