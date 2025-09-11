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
 
import { ImgHTMLAttributes } from "react"
import { HTMLImg } from "../native-react/HTML.Img"

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  src?: string
}

/**
 * Image
 *
 * Level: Primitive
 *
 * Intent: Renders an image asset within the UI, supporting alt text and sizing.
 *
 * Tags: image, media, photo, UI, primitive, asset, visual
 *
 * @example
 * ```tsx
 * <Image
 *   src="https://static.seldon.app/background-default-dark.jpg"
 * />
 * ```
 */
export function Image({ className = "", ...props }: ImageProps) {
  return <HTMLImg className={"sdn-image " + className} {...props} />
}

const sdn: ImageProps = {
  image: {
    src: "https://static.seldon.app/background-default-dark.jpg",
    className: "sdn-image",
  },
}
