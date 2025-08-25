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
import { Frame } from "../frames/Frame"
import { IconProps } from "../primitives/Icon"
import { LabelProps } from "../primitives/Label"

export interface ButtonBarProps extends HTMLAttributes<HTMLElement> {
  className?: string

  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button3?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
  button4?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
  button5?: ButtonProps
  icon5?: IconProps
  label5?: LabelProps
  button6?: ButtonProps
  icon6?: IconProps
  label6?: LabelProps
  button7?: ButtonProps
  icon7?: IconProps
  label7?: LabelProps
  button8?: ButtonProps
  icon8?: IconProps
  label8?: LabelProps
  button9?: ButtonProps
  icon9?: IconProps
  label9?: LabelProps
  button10?: ButtonProps
  icon10?: IconProps
  label10?: LabelProps
  button11?: ButtonProps
  icon11?: IconProps
  label11?: LabelProps
  button12?: ButtonProps
  icon12?: IconProps
  label12?: LabelProps
  button13?: ButtonProps
  icon13?: IconProps
  label13?: LabelProps
}

export function ButtonBar({
  className = "",
  button,
  icon,
  label,
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
  button4,
  icon4,
  label4,
  button5,
  icon5,
  label5,
  button6,
  icon6,
  label6,
  button7,
  icon7,
  label7,
  button8,
  icon8,
  label8,
  button9,
  icon9,
  label9,
  button10,
  icon10,
  label10,
  button11,
  icon11,
  label11,
  button12,
  icon12,
  label12,
  button13,
  icon13,
  label13,
  ...props
}: ButtonBarProps) {
  return (
    <Frame className={"sdn-buttonBar " + className} {...props}>
      <Button
        {...{ ...sdn.button, ...button }}
        className={
          "sdn-button-7btDGonq sdn-button " + (button?.className ?? "")
        }
        icon={{ ...sdn.icon, ...icon }}
        label={{ ...sdn.label, ...label }}
      />
      <Button
        {...{ ...sdn.button2, ...button2 }}
        className={
          "sdn-button-7btDGonq sdn-button " + (button2?.className ?? "")
        }
        icon={{ ...sdn.icon2, ...icon2 }}
        label={{ ...sdn.label2, ...label2 }}
      />
      <Button
        {...{ ...sdn.button3, ...button3 }}
        className={
          "sdn-button-7btDGonq sdn-button " + (button3?.className ?? "")
        }
        icon={{ ...sdn.icon3, ...icon3 }}
        label={{ ...sdn.label3, ...label3 }}
      />
      {button4 && (
        <Button
          {...{ ...sdn.button4, ...button4 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button4?.className ?? "")
          }
          icon={{ ...sdn.icon4, ...icon4 }}
          label={{ ...sdn.label4, ...label4 }}
        />
      )}
      {button5 && (
        <Button
          {...{ ...sdn.button5, ...button5 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button5?.className ?? "")
          }
          icon={{ ...sdn.icon5, ...icon5 }}
          label={{ ...sdn.label5, ...label5 }}
        />
      )}
      {button6 && (
        <Button
          {...{ ...sdn.button6, ...button6 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button6?.className ?? "")
          }
          icon={{ ...sdn.icon6, ...icon6 }}
          label={{ ...sdn.label6, ...label6 }}
        />
      )}
      {button7 && (
        <Button
          {...{ ...sdn.button7, ...button7 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button7?.className ?? "")
          }
          icon={{ ...sdn.icon7, ...icon7 }}
          label={{ ...sdn.label7, ...label7 }}
        />
      )}
      {button8 && (
        <Button
          {...{ ...sdn.button8, ...button8 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button8?.className ?? "")
          }
          icon={{ ...sdn.icon8, ...icon8 }}
          label={{ ...sdn.label8, ...label8 }}
        />
      )}
      {button9 && (
        <Button
          {...{ ...sdn.button9, ...button9 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button9?.className ?? "")
          }
          icon={{ ...sdn.icon9, ...icon9 }}
          label={{ ...sdn.label9, ...label9 }}
        />
      )}
      {button10 && (
        <Button
          {...{ ...sdn.button10, ...button10 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button10?.className ?? "")
          }
          icon={{ ...sdn.icon10, ...icon10 }}
          label={{ ...sdn.label10, ...label10 }}
        />
      )}
      {button11 && (
        <Button
          {...{ ...sdn.button11, ...button11 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button11?.className ?? "")
          }
          icon={{ ...sdn.icon11, ...icon11 }}
          label={{ ...sdn.label11, ...label11 }}
        />
      )}
      {button12 && (
        <Button
          {...{ ...sdn.button12, ...button12 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button12?.className ?? "")
          }
          icon={{ ...sdn.icon12, ...icon12 }}
          label={{ ...sdn.label12, ...label12 }}
        />
      )}
      {button13 && (
        <Button
          {...{ ...sdn.button13, ...button13 }}
          className={
            "sdn-button-7btDGonq sdn-button " + (button13?.className ?? "")
          }
          icon={{ ...sdn.icon13, ...icon13 }}
          label={{ ...sdn.label13, ...label13 }}
        />
      )}
    </Frame>
  )
}

const sdn: ButtonBarProps = {
  button: {},
  icon: {
    icon: "__default__",
  },
  label: {
    children: "Label",
    htmlElement: "label",
  },
  button2: {},
  icon2: {
    icon: "__default__",
  },
  label2: {
    children: "Label",
    htmlElement: "label",
  },
  button3: {},
  icon3: {
    icon: "__default__",
  },
  label3: {
    children: "Label",
    htmlElement: "label",
  },
}
