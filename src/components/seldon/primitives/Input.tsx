/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLInput } from "../native-react/HTML.Input"
import { CSSProperties, HTMLAttributes } from "react"

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  inputType?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime-local"
}

export function Input({ style, ...props }: InputProps) {
  const styles = { ...defaultStyles, ...style }

  return <HTMLInput style={styles} {...props} />
}

const defaultStyles: CSSProperties = {
  backgroundColor: "transparent",
  borderTopWidth: "0.069rem",
  borderTopStyle: "solid",
  borderTopColor: "hsl(0deg 4% 56%)",
  borderRightWidth: "0.069rem",
  borderRightStyle: "solid",
  borderRightColor: "hsl(0deg 4% 56%)",
  borderBottomWidth: "0.069rem",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(0deg 4% 56%)",
  borderLeftWidth: "0.069rem",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(0deg 4% 56%)",
  color: "hsl(0deg 4% 8%)",
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
  paddingTop: "0.5rem",
  paddingRight: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.5rem",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "IBM Plex Sans",
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: 1.25,
}
