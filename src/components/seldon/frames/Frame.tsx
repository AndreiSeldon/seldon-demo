/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */

import { HTMLAttributes } from "react"
import { HTMLDiv } from "../native-react/HTML.Div"

export type FrameProps = HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
}

export function Frame(props: FrameProps) {
  return <HTMLDiv {...props} />
}