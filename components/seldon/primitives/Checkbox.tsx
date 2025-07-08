/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLInput } from "../native-react/HTML.Input"
import { CSSProperties, HTMLAttributes } from "react"

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  inputType?: "checkbox"
}

export function Checkbox({ style, ...props }: CheckboxProps) {
  const styles = { ...defaultStyles, ...style }

  return <HTMLInput style={styles} {...props} />
}

const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  accentColor: "hsl(0deg 0% 15%)",
  width: "fit-content",
}
