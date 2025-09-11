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
import { HTMLHeading1 } from "../native-react/HTML.Heading1"
import { HTMLHeading2 } from "../native-react/HTML.Heading2"
import { HTMLHeading3 } from "../native-react/HTML.Heading3"
import { HTMLHeading4 } from "../native-react/HTML.Heading4"
import { HTMLHeading5 } from "../native-react/HTML.Heading5"
import { HTMLHeading6 } from "../native-react/HTML.Heading6"

export interface SubtitleProps
  extends HTMLAttributes<
    | HTMLHeadingElement
    | HTMLHeadingElement
    | HTMLHeadingElement
    | HTMLHeadingElement
    | HTMLHeadingElement
    | HTMLHeadingElement
  > {
  className?: string
  children?: string
  htmlElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

/**
 * Subtitle
 *
 * Level: Primitive
 *
 * Intent: Displays supporting text under a main title or heading.
 *
 * Tags: subtitle, heading, text, support, primitive, UI
 *
 * @example
 * ```tsx
 * <Subtitle
 *   children="Subtitle"
 *   htmlElement="h5"
 * />
 * ```
 */
export function Subtitle({
  className = "",
  htmlElement,
  ...props
}: SubtitleProps) {
  switch (htmlElement) {
    case "h1":
      return <HTMLHeading1 className={"sdn-subtitle " + className} {...props} />
    case "h2":
      return <HTMLHeading2 className={"sdn-subtitle " + className} {...props} />
    case "h3":
      return <HTMLHeading3 className={"sdn-subtitle " + className} {...props} />
    case "h4":
      return <HTMLHeading4 className={"sdn-subtitle " + className} {...props} />
    case "h6":
      return <HTMLHeading6 className={"sdn-subtitle " + className} {...props} />
    default:
      return <HTMLHeading5 className={"sdn-subtitle " + className} {...props} />
  }
}

const sdn: SubtitleProps = {
  subtitle: {
    children: "Subtitle",
    htmlElement: "h5",
    className: "sdn-subtitle",
  },
}
