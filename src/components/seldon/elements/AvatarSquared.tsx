/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { ImageProps } from "../primitives/Image"
import { Image } from "../primitives/Image"
import { Frame } from "../frames/Frame"

export type AvatarSquaredProps = HTMLAttributes<HTMLElement> & {
  imageProps?: ImageProps
}

export const AvatarSquared = ({
  style,
  imageProps,
  ...props
}: AvatarSquaredProps) => {
  const styles = { ...defaultStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <Image {...{ ...defaultProps.imageProps, ...imageProps }} />
    </Frame>
  )
}
const defaultProps: AvatarSquaredProps = {
  imageProps: {
    src: "https://seldon-alpha-api.fly.dev/assets/53f96193-609b-4332-8b18-0fe1fbc47758/file",
    style: {
      cursor: "pointer",
      borderTopWidth: "0.125rem",
      borderTopStyle: "solid",
      borderTopColor: "hsl(0deg 0% 45%)",
      borderRightWidth: "0.125rem",
      borderRightStyle: "solid",
      borderRightColor: "hsl(0deg 0% 45%)",
      borderBottomWidth: "0.125rem",
      borderBottomStyle: "solid",
      borderBottomColor: "hsl(0deg 0% 45%)",
      borderLeftWidth: "0.125rem",
      borderLeftStyle: "solid",
      borderLeftColor: "hsl(0deg 0% 45%)",
      borderTopRightRadius: "0.5rem",
      borderBottomRightRadius: "0.5rem",
      borderBottomLeftRadius: "0.5rem",
      borderTopLeftRadius: "0.5rem",
      objectFit: "cover",
      width: "2.998rem",
      height: "2.998rem",
    },
  },
}
const defaultStyles: CSSProperties = {
  cursor: "pointer",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  width: "fit-content",
  height: "fit-content",
}
