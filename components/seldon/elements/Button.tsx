/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLButton } from "../native-react/HTML.Button";
import { CSSProperties } from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonTokens {}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonTokens;

export const Button = ({ style, ...props }: ButtonProps) => {
  const styles = style || defaultStyles;

  return (
    <HTMLButton style={styles} {...props}>
      {props.children}
    </HTMLButton>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 0% 15%)",
  cursor: "pointer",
  borderTopWidth: "0.069rem",
  borderTopStyle: "solid",
  borderTopColor: "hsl(0deg 0% 15%)",
  borderRightWidth: "0.069rem",
  borderRightStyle: "solid",
  borderRightColor: "hsl(0deg 0% 15%)",
  borderBottomWidth: "0.069rem",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(0deg 0% 15%)",
  borderLeftWidth: "0.069rem",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(0deg 0% 15%)",
  borderTopRightRadius: "99999px",
  borderBottomRightRadius: "99999px",
  borderBottomLeftRadius: "99999px",
  borderTopLeftRadius: "99999px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  paddingTop: "0.5rem",
  paddingRight: "0.875rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.75rem",
  width: "fit-content",
  height: "fit-content",
};
