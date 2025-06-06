/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLButton } from "../native-react/HTML.Button";
import { CSSProperties } from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonChipTokens {}

type ButtonChipProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonChipTokens;

export const ButtonChip = ({ style, ...props }: ButtonChipProps) => {
  const styles = style || defaultStyles;

  return (
    <HTMLButton style={styles} {...props}>
      {props.children}
    </HTMLButton>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 8% / 50%)",
  cursor: "pointer",
  borderTopRightRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
  borderBottomLeftRadius: "0.5rem",
  borderTopLeftRadius: "0.5rem",
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
