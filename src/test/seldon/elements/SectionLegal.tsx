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
import { Frame } from "../frames/Frame"
import { Link, LinkProps } from "../primitives/Link"
import { combineClassNames } from "../utils/class-name"

export interface SectionLegalProps extends HTMLAttributes<HTMLElement> {
  className?: string
  link?: LinkProps
  link2?: LinkProps
  link3?: LinkProps
}

/**
 * Section Legal
 *
 * Level: Element
 *
 * Intent: Legal links section containing privacy policy, terms of service, and other legal links. Can be used in footers, headers, sidebars, or any other layout context. Follows Material Design link patterns.
 *
 * Tags: section, legal, links, privacy, terms, element, layout, header, footer, sidebar
 *
 * @example
 * ```tsx
 * <SectionLegal
 *   link="{}"
 *   link1="{}"
 *   link2="{}"
 * />
 * ```
 */
export function SectionLegal({
  className = "",
  link,
  link2,
  link3,
  ...props
}: SectionLegalProps) {
  const frameClassName = combineClassNames("sdn-sectionNav", className)
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

  return (
    <Frame className={frameClassName} {...props}>
      {link && <Link {...linkProps} />}
      {link2 && <Link {...link2Props} />}
      {link3 && <Link {...link3Props} />}
    </Frame>
  )
}

const sdn: SectionLegalProps = {
  link: {
    children: "Privacy Policy",
    className: "sdn-link-7Gzo4PzI",
  },
  link2: {
    children: "Terms of Service",
    className: "sdn-link-7Gzo4PzI",
  },
  link3: {
    children: "Cookie Policy",
    className: "sdn-link-7Gzo4PzI",
  },
}
