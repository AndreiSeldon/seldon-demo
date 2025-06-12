/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties, HTMLAttributes } from "react"
import { DescriptionProps } from "../primitives/Description"
import { IconProps } from "../primitives/Icon"
import { LabelButtonProps } from "../primitives/LabelButton"
import { TitleProps } from "../primitives/Title"
import { Frame } from "../frames/Frame"
import { ButtonBarProps, ButtonBar } from "../elements/ButtonBar"
import { ButtonChipProps } from "../elements/ButtonChip"
import {
  TextblockDetailsProps,
  TextblockDetails,
} from "../elements/TextblockDetails"

export type CardProductFeaturedProps = HTMLAttributes<HTMLElement> & {
  textblockDetailsProps?: TextblockDetailsProps
  textblockDetailsTitleProps?: TitleProps
  textblockDetailsDescriptionProps?: DescriptionProps
  textblockDetailsDescription2Props?: DescriptionProps
  buttonBarProps?: ButtonBarProps
  buttonBarButtonChipProps?: ButtonChipProps
  buttonBarButtonChipIconProps?: IconProps
  buttonBarButtonChipLabelButtonProps?: LabelButtonProps
  buttonBarButtonChip2Props?: ButtonChipProps
  buttonBarButtonChip2IconProps?: IconProps
  buttonBarButtonChip2LabelButtonProps?: LabelButtonProps
}

export const CardProductFeatured = ({
  style,
  textblockDetailsProps,
  textblockDetailsTitleProps,
  textblockDetailsDescriptionProps,
  textblockDetailsDescription2Props,
  buttonBarProps,
  buttonBarButtonChipProps,
  buttonBarButtonChipIconProps,
  buttonBarButtonChipLabelButtonProps,
  buttonBarButtonChip2Props,
  buttonBarButtonChip2IconProps,
  buttonBarButtonChip2LabelButtonProps,
  ...props
}: CardProductFeaturedProps) => {
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
          alignItems: "start",
          justifyContent: "start",
          gap: "0.5rem",
          alignSelf: "stretch",
          flex: "1 0 0",
        }}
        {...{
          ...defaultProps.children.textblockDetailsProps,
          ...textblockDetailsProps,
        }}
        titleProps={{
          ...defaultProps.children.textblockDetailsTitleProps,
          ...textblockDetailsTitleProps,
        }}
        descriptionProps={{
          ...defaultProps.children.textblockDetailsDescriptionProps,
          ...textblockDetailsDescriptionProps,
        }}
        description2Props={{
          ...defaultProps.children.textblockDetailsDescription2Props,
          ...textblockDetailsDescription2Props,
        }}
      ></TextblockDetails>
      <ButtonBar
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          width: "fit-content",
          height: "fit-content",
        }}
        {...{ ...defaultProps.children.buttonBarProps, ...buttonBarProps }}
        buttonChipProps={{
          ...defaultProps.children.buttonBarButtonChipProps,
          ...buttonBarButtonChipProps,
        }}
        buttonChipIconProps={{
          ...defaultProps.children.buttonBarButtonChipIconProps,
          ...buttonBarButtonChipIconProps,
        }}
        buttonChipLabelButtonProps={{
          ...defaultProps.children.buttonBarButtonChipLabelButtonProps,
          ...buttonBarButtonChipLabelButtonProps,
        }}
        buttonChip2Props={{
          ...defaultProps.children.buttonBarButtonChip2Props,
          ...buttonBarButtonChip2Props,
        }}
        buttonChip2IconProps={{
          ...defaultProps.children.buttonBarButtonChip2IconProps,
          ...buttonBarButtonChip2IconProps,
        }}
        buttonChip2LabelButtonProps={{
          ...defaultProps.children.buttonBarButtonChip2LabelButtonProps,
          ...buttonBarButtonChip2LabelButtonProps,
        }}
      ></ButtonBar>
    </Frame>
  )
}
type DefaultProps = {
  component: CardProductFeaturedProps
  children: CardProductFeaturedProps
}
const defaultProps: DefaultProps = {
  component: {},
  children: {
    textblockDetailsProps: {},
    textblockDetailsTitleProps: {
      children: "Domplein 2",
    },
    textblockDetailsDescriptionProps: {
      children: "3512 JE Utrecht",
    },
    textblockDetailsDescription2Props: {
      children: "€490.000",
    },
    buttonBarProps: {},
    buttonBarButtonChipProps: {},
    buttonBarButtonChipIconProps: {
      icon: "material-person",
    },
    buttonBarButtonChipLabelButtonProps: {
      children: "4",
    },
    buttonBarButtonChip2Props: {},
    buttonBarButtonChip2IconProps: {
      icon: "material-fullscreen",
    },
    buttonBarButtonChip2LabelButtonProps: {
      children: "150 m²",
    },
  },
}
const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  backgroundImage:
    "linear-gradient(0deg, hsl(0deg 4% 8% / 66%) 0%, hsl(0deg 4% 8% / 0%) 33%), url(/seldon/11165ecf-e5ab-46f9-a499-27338bf50b8e.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  cursor: "pointer",
  borderTopRightRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
  borderBottomLeftRadius: "0.5rem",
  borderTopLeftRadius: "0.5rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  justifyContent: "space-between",
  gap: "auto",
  paddingTop: "1rem",
  paddingRight: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "1rem",
  boxShadow: "0px 4px 0.375rem 0.125rem hsl(0deg 4% 8% / 15%)",
  alignSelf: "stretch",
  height: "24rem",
}
