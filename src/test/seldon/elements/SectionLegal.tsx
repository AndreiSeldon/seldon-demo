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
import { combineClassNames } from "../utils/class-name-utils"

export interface SectionLegalProps extends HTMLAttributes<HTMLElement> {
  className?: string
  link?: LinkProps
  link1?: LinkProps
  link2?: LinkProps
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
  link1,
  link2,
  ...props
}: SectionLegalProps) {
  const frameClassName = combineClassNames("sdn-sectionNav", className)
  const linkProps = {
    ...sdn.link,
    ...link,
    className: combineClassNames(sdn.link?.className, link?.className),
  }
  const link1Props = {
    ...sdn.link1,
    ...link1,
    className: combineClassNames(sdn.link1?.className, link1?.className),
  }
  const link2Props = {
    ...sdn.link2,
    ...link2,
    className: combineClassNames(sdn.link2?.className, link2?.className),
  }

  return (
    <Frame className={frameClassName} {...props}>
      {link && <Link {...linkProps} />}
      {link1 && <Link {...link1Props} />}
      {link2 && <Link {...link2Props} />}
    </Frame>
  )
}

const sdn: SectionLegalProps = {
  link: {
    children: "Privacy Policy",
    className: "sdn-link-6lG82CPI",
  },
  link1: {
    children: "Terms of Service",
    className: "sdn-link-6lG82CPI",
  },
  link2: {
    children: "Cookie Policy",
    className: "sdn-link-6lG82CPI",
  },
}
