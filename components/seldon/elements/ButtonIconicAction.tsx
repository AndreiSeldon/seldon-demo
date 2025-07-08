/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLButton } from "../native-react/HTML.Button"
import { CSSProperties, ButtonHTMLAttributes } from "react"
import { IconProps } from "../primitives/Icon"
import { Icon } from "../primitives/Icon"

export type ButtonIconicActionProps =
  ButtonHTMLAttributes<HTMLButtonElement> & { iconProps?: IconProps }

export const ButtonIconicAction = ({
  style,
  iconProps,
  ...props
}: ButtonIconicActionProps) => {
  const styles = { ...defaultStyles, ...style }

  return (
    <HTMLButton style={styles} {...props}>
      <Icon {...{ ...defaultProps.iconProps, ...iconProps }} />
    </HTMLButton>
  )
}
const defaultProps: ButtonIconicActionProps = {
  iconProps: {
    icon: "material-close",
    style: {
      color: "hsl(0deg 4% 98%)",
      fontSize: "0.75rem",
    },
  },
}
const defaultStyles: CSSProperties = {
  cursor: "pointer",
  borderTopRightRadius: "99999px",
  borderBottomRightRadius: "99999px",
  borderBottomLeftRadius: "99999px",
  borderTopLeftRadius: "99999px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "0.5rem",
  paddingRight: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.5rem",
  width: "fit-content",
  height: "fit-content",
}
