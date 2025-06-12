/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { LabelButtonProps } from "../primitives/LabelButton"
import { TaglineProps } from "../primitives/Tagline"
import { TitleProps } from "../primitives/Title"
import { Frame } from "../frames/Frame"
import { ButtonProps } from "../elements/Button"
import { ButtonBarProps, ButtonBar } from "../elements/ButtonBar"
import { ButtonIconicProps } from "../elements/ButtonIconic"
import {
  TextblockDetailsProps,
  TextblockDetails,
} from "../elements/TextblockDetails"

export type CardProductProps = HTMLAttributes<HTMLElement> & {
  textblockDetailsProps?: TextblockDetailsProps
  textblockDetailsTaglineProps?: TaglineProps
  textblockDetailsTitleProps?: TitleProps
  textblockDetailsDescriptionProps?: DescriptionProps
  buttonBarProps?: ButtonBarProps
  buttonBarButtonProps?: ButtonProps
  buttonBarButtonIconProps?: IconProps
  buttonBarButtonLabelButtonProps?: LabelButtonProps
  buttonBarButtonIconicProps?: ButtonIconicProps
  buttonBarButtonIconicIconProps?: IconProps
}

export const CardProduct = ({
  style,
  textblockDetailsProps,
  textblockDetailsTaglineProps,
  textblockDetailsTitleProps,
  textblockDetailsDescriptionProps,
  buttonBarProps,
  buttonBarButtonProps,
  buttonBarButtonIconProps,
  buttonBarButtonLabelButtonProps,
  buttonBarButtonIconicProps,
  buttonBarButtonIconicIconProps,
  ...props
}: CardProductProps) => {
  const styles = style || defaultStyles

  return (
    <Frame style={styles} {...{ ...defaultProps.component, ...props }}>
      <TextblockDetails
        style={{
          cursor: "pointer",
          borderBottomStyle: "none",
          overflow: "hidden",
          flexWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
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
      <ButtonBar
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          width: "fit-content",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.buttonBarProps, ...buttonBarProps }}
        buttonProps={{
          ...defaultProps.children.buttonBarButtonProps,
          ...buttonBarButtonProps,
        }}
        buttonIconProps={{
          ...defaultProps.children.buttonBarButtonIconProps,
          ...buttonBarButtonIconProps,
        }}
        buttonLabelButtonProps={{
          ...defaultProps.children.buttonBarButtonLabelButtonProps,
          ...buttonBarButtonLabelButtonProps,
        }}
        buttonIconicProps={{
          ...defaultProps.children.buttonBarButtonIconicProps,
          ...buttonBarButtonIconicProps,
        }}
        buttonIconicIconProps={{
          ...defaultProps.children.buttonBarButtonIconicIconProps,
          ...buttonBarButtonIconicIconProps,
        }}
      ></ButtonBar>
    </Frame>
  )
}
type DefaultProps = {
  component: CardProductProps
  children: CardProductProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    textblockDetailsProps: {},
    textblockDetailsTaglineProps: {
      children: "Tagline",
    },
    textblockDetailsTitleProps: {
      children: "Product Card Title",
    },
    textblockDetailsDescriptionProps: {
      children:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus. Donec euismod in fringilla.",
    },
    buttonBarProps: {},
    buttonBarButtonProps: {},
    buttonBarButtonIconProps: {
      icon: "__default__",
    },
    buttonBarButtonLabelButtonProps: {
      children: "Label",
    },
    buttonBarButtonIconicProps: {},
    buttonBarButtonIconicIconProps: {
      icon: "__default__",
    },
  },
}
const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  backgroundImage:
    "linear-gradient(0deg, hsl(0deg 4% 8%) 0%, hsl(0deg 4% 8% / 0%) 50%), url(/seldon/image-default.jpg)",
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
  height: "fit-content",
}
