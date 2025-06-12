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
import { ButtonBarProps, ButtonBar } from "../elements/ButtonBar"
import { ButtonIconicOutlinedProps } from "../elements/ButtonIconicOutlined"
import { ButtonOutlinedProps } from "../elements/ButtonOutlined"
import {
  TextblockDetailsProps,
  TextblockDetails,
} from "../elements/TextblockDetails"

export type CardProductHeroProps = HTMLAttributes<HTMLElement> & {
  textblockDetailsProps?: TextblockDetailsProps
  textblockDetailsTaglineProps?: TaglineProps
  textblockDetailsTitleProps?: TitleProps
  textblockDetailsDescriptionProps?: DescriptionProps
  buttonBarProps?: ButtonBarProps
  buttonBarButtonOutlinedProps?: ButtonOutlinedProps
  buttonBarButtonOutlinedIconProps?: IconProps
  buttonBarButtonOutlinedLabelButtonProps?: LabelButtonProps
  buttonBarButtonIconicOutlinedProps?: ButtonIconicOutlinedProps
  buttonBarButtonIconicOutlinedIconProps?: IconProps
}

export const CardProductHero = ({
  style,
  textblockDetailsProps,
  textblockDetailsTaglineProps,
  textblockDetailsTitleProps,
  textblockDetailsDescriptionProps,
  buttonBarProps,
  buttonBarButtonOutlinedProps,
  buttonBarButtonOutlinedIconProps,
  buttonBarButtonOutlinedLabelButtonProps,
  buttonBarButtonIconicOutlinedProps,
  buttonBarButtonIconicOutlinedIconProps,
  ...props
}: CardProductHeroProps) => {
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
          alignItems: "center",
          justifyContent: "center",
          gap: "0.25rem",
          marginTop: "0.25rem",
          marginRight: "0.25rem",
          marginBottom: "0.25rem",
          marginLeft: "0.25rem",
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
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.buttonBarProps, ...buttonBarProps }}
        buttonOutlinedProps={{
          ...defaultProps.children.buttonBarButtonOutlinedProps,
          ...buttonBarButtonOutlinedProps,
        }}
        buttonOutlinedIconProps={{
          ...defaultProps.children.buttonBarButtonOutlinedIconProps,
          ...buttonBarButtonOutlinedIconProps,
        }}
        buttonOutlinedLabelButtonProps={{
          ...defaultProps.children.buttonBarButtonOutlinedLabelButtonProps,
          ...buttonBarButtonOutlinedLabelButtonProps,
        }}
        buttonIconicOutlinedProps={{
          ...defaultProps.children.buttonBarButtonIconicOutlinedProps,
          ...buttonBarButtonIconicOutlinedProps,
        }}
        buttonIconicOutlinedIconProps={{
          ...defaultProps.children.buttonBarButtonIconicOutlinedIconProps,
          ...buttonBarButtonIconicOutlinedIconProps,
        }}
      ></ButtonBar>
    </Frame>
  )
}
type DefaultProps = {
  component: CardProductHeroProps
  children: CardProductHeroProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    textblockDetailsProps: {},
    textblockDetailsTaglineProps: {
      children: "Museum of the day",
    },
    textblockDetailsTitleProps: {
      children: "Rijksmuseum",
    },
    textblockDetailsDescriptionProps: {
      children: "Amsterdam, The Netherlands",
    },
    buttonBarProps: {},
    buttonBarButtonOutlinedProps: {},
    buttonBarButtonOutlinedIconProps: {
      icon: "material-add",
    },
    buttonBarButtonOutlinedLabelButtonProps: {
      children: "Follow",
    },
    buttonBarButtonIconicOutlinedProps: {},
    buttonBarButtonIconicOutlinedIconProps: {
      icon: "material-upload",
    },
  },
}
const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  backgroundImage:
    "linear-gradient(0deg, hsl(0deg 4% 8%) 0%, hsl(0deg 4% 8% / 0%) 50%), url(/seldon/d032b0fc-d53d-43c0-a0cb-a8096872521e.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  cursor: "pointer",
  borderTopRightRadius: "1.501rem",
  borderBottomRightRadius: "1.501rem",
  borderBottomLeftRadius: "1.501rem",
  borderTopLeftRadius: "1.501rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
  gap: "1rem",
  paddingTop: "1rem",
  paddingRight: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "1rem",
  boxShadow: "0px 4px 0.375rem 0.125rem hsl(0deg 4% 8% / 15%)",
  alignSelf: "stretch",
  height: "26rem",
}
