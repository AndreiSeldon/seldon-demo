/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { DescriptionProps, Description } from "../primitives/Description"
import { TaglineProps, Tagline } from "../primitives/Tagline"
import { TitleProps, Title } from "../primitives/Title"
import { Frame } from "../frames/Frame"

export type TextblockDetailsProps = HTMLAttributes<HTMLElement> & {
  taglineProps?: TaglineProps
  titleProps?: TitleProps
  descriptionProps?: DescriptionProps
}

export const TextblockDetails = ({
  style,
  taglineProps,
  titleProps,
  descriptionProps,
  ...props
}: TextblockDetailsProps) => {
  const styles = style || defaultStyles

  return (
    <Frame style={styles} {...{ ...defaultProps.component, ...props }}>
      <Tagline
        style={{
          color: "hsl(0deg 4% 98%)",
          alignSelf: "stretch",
          height: "fit-content",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontSynthesisStyle: "none",
          fontWeight: 500,
          fontSize: "0.75rem",
          lineHeight: 1.25,
          whiteSpace: "normal",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          lineClamp: 2,
          WebkitBoxOrient: "vertical",
          boxOrient: "vertical",
        }}
        {...{ ...defaultProps.children.taglineProps, ...taglineProps }}
      />
      <Title
        style={{
          color: "hsl(0deg 4% 98%)",
          marginBottom: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontSynthesisStyle: "none",
          fontWeight: 600,
          fontSize: "2.002rem",
          lineHeight: 1.25,
          whiteSpace: "normal",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          lineClamp: 2,
          WebkitBoxOrient: "vertical",
          boxOrient: "vertical",
        }}
        {...{ ...defaultProps.children.titleProps, ...titleProps }}
      />
      <Description
        style={{
          color: "hsl(0deg 4% 98%)",
          alignSelf: "stretch",
          height: "fit-content",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontSynthesisStyle: "none",
          fontWeight: 500,
          fontSize: "0.75rem",
          lineHeight: 1.25,
          whiteSpace: "normal",
        }}
        {...{ ...defaultProps.children.descriptionProps, ...descriptionProps }}
      />
    </Frame>
  )
}
type DefaultProps = {
  component: TextblockDetailsProps
  children: TextblockDetailsProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    taglineProps: {
      children: "Tagline",
    },
    titleProps: {
      children: "Product Card Title",
    },
    descriptionProps: {
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus. Donec euismod in fringilla.",
    },
  },
}
const defaultStyles: CSSProperties = {
  cursor: "pointer",
  overflow: "hidden",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignSelf: "stretch",
  height: "fit-content",
}
