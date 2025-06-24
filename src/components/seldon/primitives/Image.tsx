/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLImg } from "../native-react/HTML.Img"
import { CSSProperties, ImgHTMLAttributes } from "react"

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & { src?: string }

export const Image = ({
  style,
  src = "https://static.seldon.app/image-default.jpg",
  ...props
}: ImageProps) => {
  const styles = { ...defaultStyles, ...style }

  return <HTMLImg style={styles} {...props} />
}
const defaultProps: ImageProps = {}
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
  objectFit: "cover",
  alignSelf: "stretch",
  flex: "1 0 0",
}
