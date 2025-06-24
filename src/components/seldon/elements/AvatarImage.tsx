/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { ImageProps } from "../primitives/Image"
import { Image } from "../primitives/Image"
import { Frame } from "../frames/Frame"

export type AvatarImageProps = HTMLAttributes<HTMLElement> & {
  imageProps?: ImageProps
}

export const AvatarImage = ({
  style,
  imageProps,
  ...props
}: AvatarImageProps) => {
  const styles = { ...defaultStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <Image {...{ ...defaultProps.imageProps, ...imageProps }} />
    </Frame>
  )
}
const defaultProps: AvatarImageProps = {
  imageProps: {
    src: "https://seldon-alpha-api.fly.dev/assets/53f96193-609b-4332-8b18-0fe1fbc47758/file",
    style: {
      cursor: "pointer",
      borderTopWidth: "0.125rem",
      borderTopStyle: "solid",
      borderTopColor: "hsl(203deg 100% 62%)",
      borderRightWidth: "0.125rem",
      borderRightStyle: "solid",
      borderRightColor: "hsl(203deg 100% 62%)",
      borderBottomWidth: "0.125rem",
      borderBottomStyle: "solid",
      borderBottomColor: "hsl(203deg 100% 62%)",
      borderLeftWidth: "0.125rem",
      borderLeftStyle: "solid",
      borderLeftColor: "hsl(203deg 100% 62%)",
      borderTopRightRadius: "99999px",
      borderBottomRightRadius: "99999px",
      borderBottomLeftRadius: "99999px",
      borderTopLeftRadius: "99999px",
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
  width: "fit-content",
  height: "fit-content",
}
