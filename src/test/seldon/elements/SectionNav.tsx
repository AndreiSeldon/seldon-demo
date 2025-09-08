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
  link1?: LinkProps
  link2?: LinkProps
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
  link1,
  link2,
  ...props
}: SectionNavProps) {
  const frameClassName = combineClassNames("sdn-sectionLegal", className)
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

const sdn: SectionNavProps = {
  link: {
    children: "About",
    className: "sdn-link-vW1MeGhD",
  },
  link1: {
    children: "Contact",
    className: "sdn-link-vW1MeGhD",
  },
  link2: {
    children: "Support",
    className: "sdn-link-vW1MeGhD",
  },
}
