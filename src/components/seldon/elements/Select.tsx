/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLSelect } from "../native-react/HTML.Select"
import { CSSProperties, HTMLAttributes } from "react"
import { Option, OptionProps } from "../primitives/Option"

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  optionProps?: OptionProps
  option1Props?: OptionProps
  option2Props?: OptionProps
}

export function Select({
  style,
  optionProps,
  option1Props,
  option2Props,
  ...props
}: SelectProps) {
  const styles = { ...defaultStyles, ...style }

  return (
    <HTMLSelect style={styles} {...props}>
      <Option {...{ ...defaultProps.optionProps, ...optionProps }} />
      <Option {...{ ...defaultProps.option1Props, ...option1Props }} />
      <Option {...{ ...defaultProps.option2Props, ...option2Props }} />
    </HTMLSelect>
  )
}

const defaultProps: SelectProps = {
  optionProps: {
    children: "Option 01",
    style: {
      color: "hsl(0deg 4% 8%)",
      alignSelf: "stretch",
      height: "fit-content",
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.25,
      whiteSpace: "pre-wrap",
    },
  },
  option1Props: {
    children: "Option 02",
    style: {
      color: "hsl(0deg 4% 8%)",
      alignSelf: "stretch",
      height: "fit-content",
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.25,
      whiteSpace: "pre-wrap",
    },
  },
  option2Props: {
    children: "Option 03",
    style: {
      color: "hsl(0deg 4% 8%)",
      alignSelf: "stretch",
      height: "fit-content",
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.25,
      whiteSpace: "pre-wrap",
    },
  },
}

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  cursor: "pointer",
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
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSynthesisStyle: "none",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.25,
}
