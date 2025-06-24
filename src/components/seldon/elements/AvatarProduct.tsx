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

export type AvatarProductProps = HTMLAttributes<HTMLElement> & {
  imageProps?: ImageProps
  textblockAvatarProps?: TextblockAvatarProps
  textblockAvatarTitleProps?: TitleProps
  textblockAvatarSubtitleProps?: SubtitleProps
}

export const AvatarProduct = ({
  style,
  imageProps,
  textblockAvatarProps,
  textblockAvatarTitleProps,
  textblockAvatarSubtitleProps,
  ...props
}: AvatarProductProps) => {
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
const defaultProps: AvatarProductProps = {
  imageProps: {
    src: "https://static.seldon.app/image-bw.png",
    style: {
      cursor: "pointer",
      borderTopRightRadius: "0.25rem",
      borderBottomRightRadius: "0.25rem",
      borderBottomLeftRadius: "0.25rem",
      borderTopLeftRadius: "0.25rem",
      objectFit: "cover",
      width: "3.998rem",
      height: "3.998rem",
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
      children: "Full Name",
      htmlElement: "h4",
      style: {
        color: "hsl(0deg 4% 8%)",
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
      children: "Personal details",
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
  cursor: "pointer",
  borderBottomStyle: "solid",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  alignSelf: "stretch",
  height: "fit-content",
}
