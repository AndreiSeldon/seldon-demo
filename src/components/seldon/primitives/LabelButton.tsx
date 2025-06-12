/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLabel } from "../native-react/HTML.Label"
import { HTMLSpan } from "../native-react/HTML.Span"
import { CSSProperties, HTMLAttributes } from "react"

export type LabelButtonProps = HTMLAttributes<HTMLSpanElement> & {
  htmlElement?: "span" | "label"
}

export const LabelButton = ({
  style,
  htmlElement,
  ...props
}: LabelButtonProps) => {
  const styles = style || defaultStyles

  switch (htmlElement) {
    case "span":
      return (
        <HTMLSpan style={styles} {...{ ...defaultProps.component, ...props }}>
          {props.children}
        </HTMLSpan>
      )
    default:
      return (
        <HTMLLabel style={styles} {...props}>
          {props.children}
        </HTMLLabel>
      )
  }
}
type DefaultProps = {
  component: LabelButtonProps
  children: LabelButtonProps
}
const defaultProps: DefaultProps = {
  component: {
    children: "Label",
  },
  children: {},
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
