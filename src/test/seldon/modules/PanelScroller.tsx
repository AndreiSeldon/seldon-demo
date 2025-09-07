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
import { HeaderPanel, HeaderPanelProps } from "../elements/HeaderPanel"
import { FrameScroller, FrameScrollerProps } from "../frames/FrameScroller"
import { HTMLDiv } from "../native-react/HTML.Div"
import { ButtonBar, ButtonBarProps } from "../parts/ButtonBar"
import { Icon, IconProps } from "../primitives/Icon"
import { Label, LabelProps } from "../primitives/Label"
import { Title, TitleProps } from "../primitives/Title"
import { combineClassNames } from "../utils/class-name-utils"

export interface PanelScrollerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  headerPanel?: HeaderPanelProps
  titleProps?: TitleProps
  button?: ButtonProps
  icon?: IconProps
  label?: LabelProps
  frameScroller?: FrameScrollerProps
  buttonBar?: ButtonBarProps
  button2?: ButtonProps
  icon2?: IconProps
  label2?: LabelProps
  button3?: ButtonProps
  icon3?: IconProps
  label3?: LabelProps
  button4?: ButtonProps
  icon4?: IconProps
  label4?: LabelProps
}

/**
 * Scrolling Panel
 *
 * Level: Module
 *
 * Intent: Scrollable panel schema used for contained regions with overflow content, typically embedded in sidebars or dialogs.
 *
 * Tags: panel, scroller, scroll, ui, container, sidebar, overflow, dialog
 *
 * @example
 * ```tsx
 * <PanelScroller
 *   headerPanel="{}"
 *   title="Product Title"
 *   button={() => {}}
 *   icon="material-star"
 *   label="Button Label"
 *   frameScroller="{}"
 *   buttonBar="{}"
 *   button1={() => {}}
 *   button2={() => {}}
 * />
 * ```
 */
export function PanelScroller({
  className = "",
  headerPanel = sdn.headerPanel,
  titleProps,
  button,
  icon,
  label,
  frameScroller = sdn.frameScroller,
  buttonBar = sdn.buttonBar,
  button2,
  icon2,
  label2,
  button3,
  icon3,
  label3,
  button4,
  icon4,
  label4,
  ...props
}: PanelScrollerProps) {
  const frameClassName = combineClassNames("sdn-panelScroller", className)
  const headerPanelProps = {
    ...sdn.headerPanel,
    ...headerPanel,
    className: combineClassNames(
      sdn.headerPanel?.className,
      headerPanel?.className,
    ),
  }
  const titlePropsProps = {
    ...sdn.titleProps,
    ...titleProps,
    className: combineClassNames(
      sdn.titleProps?.className,
      titleProps?.className,
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
  const frameScrollerProps = {
    ...sdn.frameScroller,
    ...frameScroller,
    className: combineClassNames(
      sdn.frameScroller?.className,
      frameScroller?.className,
    ),
  }
  const buttonBarProps = {
    ...sdn.buttonBar,
    ...buttonBar,
    className: combineClassNames(
      sdn.buttonBar?.className,
      buttonBar?.className,
    ),
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

  return (
    <HTMLDiv className={frameClassName} {...props}>
      <HeaderPanel
        {...headerPanelProps}
        titleProps={titlePropsProps}
        button={buttonProps}
        icon={iconProps}
        label={labelProps}
      />
      <Frame {...frameScrollerProps}></Frame>
      <ButtonBar
        {...buttonBarProps}
        button={button2Props}
        icon2={icon2Props}
        label2={label2Props}
        button2={button3Props}
        icon3={icon3Props}
        label3={label3Props}
        button3={button4Props}
        icon4={icon4Props}
        label4={label4Props}
      />
    </HTMLDiv>
  )
}

const sdn: PanelScrollerProps = {
  headerPanel: {
    className: "sdn-headerPanel-JaYwjnHG",
  },
  titleProps: {
    children: "Title",
    htmlElement: "h4",
    className: "sdn-title-JooGsPwE",
  },
  button: {
    className: "sdn-button-tmW0D5Yl",
  },
  icon: {
    icon: "__default__",
    className: "sdn-icon-vkgwzWrj",
  },
  label: {
    children: "Button",
    htmlElement: "label",
    className: "sdn-label-iBTpKhvZ",
  },
  frameScroller: {
    className: "sdn-frameScroller-tJVAqXU4",
  },
  buttonBar: {
    className: "sdn-buttonBar-iRyhzfIX",
  },
  button2: {
    className: "sdn-button-tmW0D5Yl",
  },
  icon2: {
    icon: "material-add",
    className: "sdn-icon-vkgwzWrj",
  },
  label2: {
    children: "Add",
    htmlElement: "label",
    className: "sdn-label-iBTpKhvZ",
  },
  button3: {
    className: "sdn-button-tmW0D5Yl",
  },
  icon3: {
    icon: "material-remove",
    className: "sdn-icon-vkgwzWrj",
  },
  label3: {
    children: "Remove",
    htmlElement: "label",
    className: "sdn-label-iBTpKhvZ",
  },
  button4: {
    className: "sdn-button-tmW0D5Yl",
  },
  icon4: {
    icon: "__default__",
    className: "sdn-icon-vkgwzWrj",
  },
  label4: {
    children: "Button",
    htmlElement: "label",
    className: "sdn-label-iBTpKhvZ",
  },
}
