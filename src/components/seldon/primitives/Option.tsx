/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLOption } from "../native-react/HTML.Option"
import { CSSProperties, HTMLAttributes } from "react"

export interface OptionProps extends HTMLAttributes<HTMLOptionElement> {
  children?: string
}

export function Option({ style, ...props }: OptionProps) {
  const styles = { ...defaultStyles, ...style }

  return <HTMLOption style={styles} {...props} />
}

const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.25,
  whiteSpace: "pre-wrap",
}
