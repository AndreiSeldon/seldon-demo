/*****
 *
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 * 
 *****/
 
import { HTMLAttributes } from "react"
import { Button, ButtonProps } from "../elements/Button"
import { SectionBrand, SectionBrandProps } from "../elements/SectionBrand"
import { SectionLegal, SectionLegalProps } from "../elements/SectionLegal"
import { SectionNav, SectionNavProps } from "../elements/SectionNav"
import {
  SectionNewsletter,
  SectionNewsletterProps,
} from "../elements/SectionNewsletter"
import { SectionSocial, SectionSocialProps } from "../elements/SectionSocial"
import { HTMLFooter } from "../native-react/HTML.Footer"
import { Description, DescriptionProps } from "../primitives/Description"
import { Icon, IconProps } from "../primitives/Icon"
import { Image, ImageProps } from "../primitives/Image"
import { Input, InputProps } from "../primitives/Input"
import { Label, LabelProps } from "../primitives/Label"
import { Link, LinkProps } from "../primitives/Link"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name-utils"

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  className?: string
  sectionBrand?: SectionBrandProps
  image?: ImageProps
  titleProps?: TitleProps
  description?: DescriptionProps
  sectionNav?: SectionNavProps
  link?: LinkProps
  link2?: LinkProps
  link3?: LinkProps
  sectionSocial?: SectionSocialProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button3?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
  sectionNewsletter?: SectionNewsletterProps
  title2Props?: TitleProps
  description2?: DescriptionProps
  input?: InputProps
  button4?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
  sectionLegal?: SectionLegalProps
  link4?: LinkProps
  link5?: LinkProps
  link6?: LinkProps
}

/**
 * Footer
 *
 * Level: Module
 *
 * Intent: A comprehensive footer component with sections for branding, navigation, social media, newsletter signup, and legal links. Based on Material Design and modern web patterns.
 *
 * Tags: footer, module, layout, navigation, branding, social, newsletter, legal, bottom, web
 *
 * @example
 * ```tsx
 * <Footer
 *   sectionBrand="{}"
 *   image="/image.jpg"
 *   title="Product Title"
 *   description="Product description text"
 *   sectionNav="{}"
 *   link="{}"
 *   link1="{}"
 *   link2="{}"
 *   sectionSocial="{}"
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   button1={() => {}}
 *   button2={() => {}}
 *   sectionNewsletter="{}"
 *   input="{}"
 *   sectionLegal="{}"
 * />
 * ```
 */
export function Footer({
  className = "",
  sectionBrand,
  image,
  titleProps,
  description,
  sectionNav,
  link,
  link2,
  link3,
  sectionSocial,
  button,
  icon,
  label,
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
  sectionNewsletter,
  title2Props,
  description2,
  input,
  button4,
  icon4,
  label4,
  sectionLegal,
  link4,
  link5,
  link6,
  ...props
}: FooterProps) {
  const frameClassName = combineClassNames("sdn-footer", className)
  const sectionBrandProps = {
    ...sdn.sectionBrand,
    ...sectionBrand,
    className: combineClassNames(
      sdn.sectionBrand?.className,
      sectionBrand?.className,
    ),
  }
  const imageProps = {
    ...sdn.image,
    ...image,
    className: combineClassNames(sdn.image?.className, image?.className),
  }
  const titlePropsProps = {
    ...sdn.titleProps,
    ...titleProps,
    className: combineClassNames(
      sdn.titleProps?.className,
      titleProps?.className,
    ),
  }
  const descriptionProps = {
    ...sdn.description,
    ...description,
    className: combineClassNames(
      sdn.description?.className,
      description?.className,
    ),
  }
  const sectionNavProps = {
    ...sdn.sectionNav,
    ...sectionNav,
    className: combineClassNames(
      sdn.sectionNav?.className,
      sectionNav?.className,
    ),
  }
  const linkProps = {
    ...sdn.link,
    ...link,
    className: combineClassNames(sdn.link?.className, link?.className),
  }
  const link2Props = {
    ...sdn.link2,
    ...link2,
    className: combineClassNames(sdn.link2?.className, link2?.className),
  }
  const link3Props = {
    ...sdn.link3,
    ...link3,
    className: combineClassNames(sdn.link3?.className, link3?.className),
  }
  const sectionSocialProps = {
    ...sdn.sectionSocial,
    ...sectionSocial,
    className: combineClassNames(
      sdn.sectionSocial?.className,
      sectionSocial?.className,
    ),
  }
  const buttonProps = {
    ...sdn.button,
    ...button,
    className: combineClassNames(sdn.button?.className, button?.className),
  }
  const iconProps = {
    ...sdn.icon,
    ...icon,
    className: combineClassNames(sdn.icon?.className, icon?.className),
  }
  const labelProps = {
    ...sdn.label,
    ...label,
    className: combineClassNames(sdn.label?.className, label?.className),
  }
  const button2Props = {
    ...sdn.button2,
    ...button2,
    className: combineClassNames(sdn.button2?.className, button2?.className),
  }
  const icon2Props = {
    ...sdn.icon2,
    ...icon2,
    className: combineClassNames(sdn.icon2?.className, icon2?.className),
  }
  const label2Props = {
    ...sdn.label2,
    ...label2,
    className: combineClassNames(sdn.label2?.className, label2?.className),
  }
  const button3Props = {
    ...sdn.button3,
    ...button3,
    className: combineClassNames(sdn.button3?.className, button3?.className),
  }
  const icon3Props = {
    ...sdn.icon3,
    ...icon3,
    className: combineClassNames(sdn.icon3?.className, icon3?.className),
  }
  const label3Props = {
    ...sdn.label3,
    ...label3,
    className: combineClassNames(sdn.label3?.className, label3?.className),
  }
  const sectionNewsletterProps = {
    ...sdn.sectionNewsletter,
    ...sectionNewsletter,
    className: combineClassNames(
      sdn.sectionNewsletter?.className,
      sectionNewsletter?.className,
    ),
  }
  const title2PropsProps = {
    ...sdn.title2Props,
    ...title2Props,
    className: combineClassNames(
      sdn.title2Props?.className,
      title2Props?.className,
    ),
  }
  const description2Props = {
    ...sdn.description2,
    ...description2,
    className: combineClassNames(
      sdn.description2?.className,
      description2?.className,
    ),
  }
  const inputProps = {
    ...sdn.input,
    ...input,
    className: combineClassNames(sdn.input?.className, input?.className),
  }
  const button4Props = {
    ...sdn.button4,
    ...button4,
    className: combineClassNames(sdn.button4?.className, button4?.className),
  }
  const icon4Props = {
    ...sdn.icon4,
    ...icon4,
    className: combineClassNames(sdn.icon4?.className, icon4?.className),
  }
  const label4Props = {
    ...sdn.label4,
    ...label4,
    className: combineClassNames(sdn.label4?.className, label4?.className),
  }
  const sectionLegalProps = {
    ...sdn.sectionLegal,
    ...sectionLegal,
    className: combineClassNames(
      sdn.sectionLegal?.className,
      sectionLegal?.className,
    ),
  }
  const link4Props = {
    ...sdn.link4,
    ...link4,
    className: combineClassNames(sdn.link4?.className, link4?.className),
  }
  const link5Props = {
    ...sdn.link5,
    ...link5,
    className: combineClassNames(sdn.link5?.className, link5?.className),
  }
  const link6Props = {
    ...sdn.link6,
    ...link6,
    className: combineClassNames(sdn.link6?.className, link6?.className),
  }

  return (
    <HTMLFooter className={frameClassName} {...props}>
      {sectionBrand && (
        <SectionBrand
          {...sectionBrandProps}
          image={imageProps}
          titleProps={titlePropsProps}
          description={descriptionProps}
        />
      )}
      {sectionNav && (
        <SectionNav
          {...sectionNavProps}
          link={linkProps}
          link2={link2Props}
          link3={link3Props}
        />
      )}
      {sectionSocial && (
        <SectionSocial
          {...sectionSocialProps}
          button={buttonProps}
          button2={button2Props}
          button3={button3Props}
        />
      )}
      {sectionNewsletter && (
        <SectionNewsletter
          {...sectionNewsletterProps}
          titleProps={titlePropsProps}
          description={descriptionProps}
          input={inputProps}
          button={buttonProps}
        />
      )}
      {sectionLegal && (
        <SectionLegal
          {...sectionLegalProps}
          link={linkProps}
          link2={link2Props}
          link3={link3Props}
        />
      )}
    </HTMLFooter>
  )
}

const sdn: FooterProps = {
  sectionBrand: {
    className: "sdn-sectionBrand-B1oi3enF",
  },
  image: {
    src: "https://static.seldon.app/logo.svg",
    className: "sdn-image-bMSZaBso",
  },
  titleProps: {
    children: "ABC, Corp.",
    htmlElement: "h4",
    className: "sdn-title-OZ0IHItS",
  },
  description: {
    children: "Building amazing products for the future.",
    htmlElement: "p",
    className: "sdn-description-8sXR1ldT",
  },
  sectionNav: {
    className: "sdn-sectionNav-eIQqBArI",
  },
  link: {
    children: "About",
    className: "sdn-link-7Gzo4PzI",
  },
  link2: {
    children: "Contact",
    className: "sdn-link-7Gzo4PzI",
  },
  link3: {
    children: "Support",
    className: "sdn-link-7Gzo4PzI",
  },
  sectionSocial: {
    className: "sdn-sectionSocial-2j4DBDdw",
  },
  button: {
    className: "sdn-button-26llmjhB",
  },
  icon: {
    icon: "social-twitter",
    className: "sdn-icon-28O6p5JW",
  },
  label: {
    children: "Twitter",
    htmlElement: "label",
    className: "sdn-label-9HxYft27",
  },
  button2: {
    className: "sdn-button-26llmjhB",
  },
  icon2: {
    icon: "social-linkedin",
    className: "sdn-icon-28O6p5JW",
  },
  label2: {
    children: "LinkedIn",
    htmlElement: "label",
    className: "sdn-label-9HxYft27",
  },
  button3: {
    className: "sdn-button-26llmjhB",
  },
  icon3: {
    icon: "social-instagram",
    className: "sdn-icon-28O6p5JW",
  },
  label3: {
    children: "Instagram",
    htmlElement: "label",
    className: "sdn-label-9HxYft27",
  },
  sectionNewsletter: {
    className: "sdn-sectionNewsletter-N6aVzpTd",
  },
  title2Props: {
    children: "Stay Updated",
    htmlElement: "h4",
    className: "sdn-title-43OJyy0H",
  },
  description2: {
    children: "Subscribe to our newsletter for the latest updates.",
    htmlElement: "p",
    className: "sdn-description-dMeFK2mf",
  },
  input: {
    inputType: "email",
    className: "sdn-input-KBSlXHPV",
  },
  button4: {
    className: "sdn-button-2C7Q63th",
  },
  icon4: {
    icon: "material-send",
    className: "sdn-icon-28O6p5JW",
  },
  label4: {
    children: "Subscribe",
    htmlElement: "label",
    className: "sdn-label-9HxYft27",
  },
  sectionLegal: {
    className: "sdn-sectionLegal-P1hP4OGa",
  },
  link4: {
    children: "Privacy Policy",
    className: "sdn-link-7Gzo4PzI",
  },
  link5: {
    children: "Terms of Service",
    className: "sdn-link-7Gzo4PzI",
  },
  link6: {
    children: "Cookie Policy",
    className: "sdn-link-7Gzo4PzI",
  },
}
