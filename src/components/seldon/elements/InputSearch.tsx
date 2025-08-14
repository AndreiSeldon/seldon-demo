/*
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 */
import { HTMLAttributes } from "react"
import { Frame } from "../frames/Frame"
import { Icon, IconProps } from "../primitives/Icon"
import { Input, InputProps } from "../primitives/Input"

export interface InputSearchProps extends HTMLAttributes<HTMLElement> {
  className?: string

  iconProps?: IconProps
  inputProps?: InputProps
}

export function InputSearch({
  className = "",
  iconProps,
  inputProps,
  ...props
}: InputSearchProps) {
  return (
    <Frame className={"sdn-inputSearch " + className} {...props}>
      <Icon
        {...{ ...seldon.iconProps, ...iconProps }}
        className={" sdn-icon " + (iconProps?.className ?? "")}
      />
      <Input
        {...{ ...seldon.inputProps, ...inputProps }}
        className={
          "sdn-input-LSpQRpxR sdn-input " + (inputProps?.className ?? "")
        }
      />
    </Frame>
  )
}

const seldon: InputSearchProps = {
  iconProps: {
    icon: "material-search",
  },
  inputProps: {
    inputType: "text",
  },
}
