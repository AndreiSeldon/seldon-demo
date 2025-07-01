/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLDiv } from "../native-react/HTML.Div"
import { CSSProperties, HTMLAttributes } from "react"

export type FrameProps = HTMLAttributes<HTMLDivElement> & {}

export const Frame = ({ style, ...props }: FrameProps) => {
  const styles = { ...defaultStyles, ...style }

  return <HTMLDiv style={styles} {...props} />
}
const defaultProps: FrameProps = {}
const defaultStyles: CSSProperties = {
  cursor: "pointer",
  borderTopWidth: "var(--hairline)",
  borderTopStyle: "solid",
  borderTopColor: "hsl(0deg 0% 15%)",
  borderRightWidth: "var(--hairline)",
  borderRightStyle: "solid",
  borderRightColor: "hsl(0deg 0% 15%)",
  borderBottomWidth: "var(--hairline)",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(0deg 0% 15%)",
  borderLeftWidth: "var(--hairline)",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(0deg 0% 15%)",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  alignSelf: "stretch",
  flex: "1 0 0",
}
