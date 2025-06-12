/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { TaglineProps } from "../primitives/Tagline"
import { TitleProps } from "../primitives/Title"
import { Frame } from "../frames/Frame"
import { ButtonBarProps, ButtonBar } from "../elements/ButtonBar"
import { ButtonIconicProps } from "../elements/ButtonIconic"
import {
  TextblockDetailsProps,
  TextblockDetails,
} from "../elements/TextblockDetails"

export type CardProductRatingProps = HTMLAttributes<HTMLElement> & {
  buttonBarProps?: ButtonBarProps
  buttonBarButtonIconicProps?: ButtonIconicProps
  buttonBarButtonIconicIconProps?: IconProps
  buttonBarButtonIconic2Props?: ButtonIconicProps
  buttonBarButtonIconic2IconProps?: IconProps
  textblockDetailsProps?: TextblockDetailsProps
  textblockDetailsTaglineProps?: TaglineProps
  textblockDetailsTitleProps?: TitleProps
  textblockDetailsDescriptionProps?: DescriptionProps
}

export const CardProductRating = ({
  style,
  buttonBarProps,
  buttonBarButtonIconicProps,
  buttonBarButtonIconicIconProps,
  buttonBarButtonIconic2Props,
  buttonBarButtonIconic2IconProps,
  textblockDetailsProps,
  textblockDetailsTaglineProps,
  textblockDetailsTitleProps,
  textblockDetailsDescriptionProps,
  ...props
}: CardProductRatingProps) => {
  const styles = style || defaultStyles

  return (
    <Frame style={styles} {...{ ...defaultProps.component, ...props }}>
      <ButtonBar
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "end",
          gap: "1rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.buttonBarProps, ...buttonBarProps }}
        buttonIconicProps={{
          ...defaultProps.children.buttonBarButtonIconicProps,
          ...buttonBarButtonIconicProps,
        }}
        buttonIconicIconProps={{
          ...defaultProps.children.buttonBarButtonIconicIconProps,
          ...buttonBarButtonIconicIconProps,
        }}
        buttonIconic2Props={{
          ...defaultProps.children.buttonBarButtonIconic2Props,
          ...buttonBarButtonIconic2Props,
        }}
        buttonIconic2IconProps={{
          ...defaultProps.children.buttonBarButtonIconic2IconProps,
          ...buttonBarButtonIconic2IconProps,
        }}
      ></ButtonBar>
      <TextblockDetails
        style={{
          cursor: "pointer",
          borderBottomStyle: "none",
          overflow: "hidden",
          flexWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{
          ...defaultProps.children.textblockDetailsProps,
          ...textblockDetailsProps,
        }}
        taglineProps={{
          ...defaultProps.children.textblockDetailsTaglineProps,
          ...textblockDetailsTaglineProps,
        }}
        titleProps={{
          ...defaultProps.children.textblockDetailsTitleProps,
          ...textblockDetailsTitleProps,
        }}
        descriptionProps={{
          ...defaultProps.children.textblockDetailsDescriptionProps,
          ...textblockDetailsDescriptionProps,
        }}
      ></TextblockDetails>
    </Frame>
  )
}
type DefaultProps = {
  component: CardProductRatingProps
  children: CardProductRatingProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    buttonBarProps: {},
    buttonBarButtonIconicProps: {},
    buttonBarButtonIconicIconProps: {
      icon: "material-upload",
    },
    buttonBarButtonIconic2Props: {},
    buttonBarButtonIconic2IconProps: {
      icon: "material-favorite",
    },
    textblockDetailsProps: {},
    textblockDetailsTaglineProps: {
      children: "★ 4.6 stars",
    },
    textblockDetailsTitleProps: {
      children: "Berkeley Springs",
    },
    textblockDetailsDescriptionProps: {
      children: "Feb 4-9 · $100-200",
    },
  },
}
const defaultStyles: CSSProperties = {
  backgroundImage:
    "linear-gradient(0deg, hsl(0deg 4% 8%) 0%, hsl(0deg 4% 8% / 0%) 50%), url(/seldon/f7ff6be2-864c-4c8f-a2c2-6b878433334c.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  cursor: "pointer",
  borderTopRightRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
  borderBottomLeftRadius: "0.5rem",
  borderTopLeftRadius: "0.5rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-between",
  gap: "auto",
  boxShadow: "0px 4px 0.375rem 0.125rem hsl(0deg 4% 8% / 15%)",
  alignSelf: "stretch",
  height: "22rem",
}
