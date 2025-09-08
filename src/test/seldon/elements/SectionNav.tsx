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

export interface SectionNavProps extends HTMLAttributes<HTMLElement> {
  className?: string
  link?: LinkProps
  link2?: LinkProps
  link3?: LinkProps
}

/**
 * Section Navigation
 *
 * Level: Element
 *
 * Intent: Navigation section containing links to important pages. Can be used in footers, headers, sidebars, or any other layout context. Follows Material Design navigation patterns.
 *
 * Tags: section, navigation, links, menu, element, layout, header, footer, sidebar
 *
 * @example
 * ```tsx
 * <SectionNav
 *   link="{}"
 *   link1="{}"
 *   link2="{}"
 * />
 * ```
 */
export function SectionNav({
  className = "",
  link,
  link2,
  link3,
  ...props
}: SectionNavProps) {
  const frameClassName = combineClassNames("sdn-sectionLegal", className)
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

const sdn: SectionNavProps = {
  link: {
    children: "About",
    className: "sdn-link-vW1MeGhD",
  },
  link2: {
    children: "Contact",
    className: "sdn-link-vW1MeGhD",
  },
  link3: {
    children: "Support",
    className: "sdn-link-vW1MeGhD",
  },
}
