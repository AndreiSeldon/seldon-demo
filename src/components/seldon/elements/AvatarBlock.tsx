/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { ImageProps } from "../primitives/Image"
import { Image } from "../primitives/Image"
import { SubtitleProps } from "../primitives/Subtitle"
import { TitleProps } from "../primitives/Title"
import { Frame } from "../frames/Frame"
import { TextblockAvatarProps } from "../elements/TextblockAvatar"
import { TextblockAvatar } from "../elements/TextblockAvatar"

export type AvatarBlockProps = HTMLAttributes<HTMLElement> & {
  imageProps?: ImageProps
  textblockAvatarProps?: TextblockAvatarProps
  textblockAvatarTitleProps?: TitleProps
  textblockAvatarSubtitleProps?: SubtitleProps
}

export const AvatarBlock = ({
  style,
  imageProps,
  textblockAvatarProps,
  textblockAvatarTitleProps,
  textblockAvatarSubtitleProps,
  ...props
}: AvatarBlockProps) => {
  const styles = { ...defaultStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <Image {...{ ...defaultProps.imageProps, ...imageProps }} />
      <TextblockAvatar
        {...{ ...defaultProps.textblockAvatarProps, ...textblockAvatarProps }}
      ></TextblockAvatar>
    </Frame>
  )
}
const defaultProps: AvatarBlockProps = {
  imageProps: {
    src: "https://seldon-alpha-api.fly.dev/assets/53f96193-609b-4332-8b18-0fe1fbc47758/file",
    style: {
      cursor: "pointer",
      borderTopColor: "hsl(0deg 100% 65%)",
      borderRightColor: "hsl(0deg 100% 65%)",
      borderBottomColor: "hsl(0deg 100% 65%)",
      borderLeftColor: "hsl(0deg 100% 65%)",
      borderTopRightRadius: "99999px",
      borderBottomRightRadius: "99999px",
      borderBottomLeftRadius: "99999px",
      borderTopLeftRadius: "99999px",
      objectFit: "cover",
      width: "2.002rem",
      height: "2.002rem",
    },
  },
  textblockAvatarProps: {
    style: {
      cursor: "pointer",
      borderBottomStyle: "solid",
      overflow: "hidden",
      flexWrap: "nowrap",
      display: "flex",
      flexDirection: "column",
      alignSelf: "stretch",
      height: "fit-content",
    },
    titleProps: {
      children: "Andrei Herasimchuk",
      htmlElement: "h4",
      style: {
        color: "#ff0000",
        alignSelf: "stretch",
        height: "fit-content",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSynthesisStyle: "none",
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1.25,
        whiteSpace: "normal",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        lineClamp: 2,
        WebkitBoxOrient: "vertical",
        boxOrient: "vertical",
      },
    },
    subtitleProps: {
      children: "CEO · Cofounder",
      htmlElement: "h5",
      style: {
        color: "hsl(0deg 0% 30%)",
        alignSelf: "stretch",
        height: "fit-content",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSynthesisStyle: "none",
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.25,
        whiteSpace: "normal",
        overflow: "hidden",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        lineClamp: 3,
        WebkitBoxOrient: "vertical",
        boxOrient: "vertical",
      },
    },
  },
}
const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  cursor: "pointer",
  borderBottomStyle: "solid",
  borderLeftWidth: "0.5rem",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(203deg 100% 62%)",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  paddingTop: "1rem",
  paddingRight: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "1rem",
  boxShadow: "0px 2px 0.375rem 0.125rem hsl(0deg 4% 8% / 33%)",
  alignSelf: "stretch",
  height: "fit-content",
}
