/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { SubtitleProps } from "../primitives/Subtitle"
import { Subtitle } from "../primitives/Subtitle"
import { TitleProps } from "../primitives/Title"
import { Title } from "../primitives/Title"
import { Frame } from "../frames/Frame"

export type TextblockTitleProps = HTMLAttributes<HTMLElement> & {
  titleProps?: TitleProps
  subtitleProps?: SubtitleProps
}

export const TextblockTitle = ({
  style,
  titleProps,
  subtitleProps,
  ...props
}: TextblockTitleProps) => {
  const styles = { ...defaultStyles, ...style }

  return (
    <Frame style={styles} {...props}>
      <Title {...{ ...defaultProps.titleProps, ...titleProps }} />
      <Subtitle {...{ ...defaultProps.subtitleProps, ...subtitleProps }} />
    </Frame>
  )
}
const defaultProps: TextblockTitleProps = {
  titleProps: {
    children: "Title",
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
    children: "Subtitle",
    htmlElement: "h5",
    style: {
      color: "hsl(0deg 4% 8%)",
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
}
const defaultStyles: CSSProperties = {
  cursor: "pointer",
  borderBottomStyle: "solid",
  overflow: "hidden",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
  alignSelf: "stretch",
  height: "fit-content",
}
