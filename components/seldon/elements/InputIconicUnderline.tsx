/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { Frame } from "../frames/Frame";

interface InputIconicUnderlineTokens {}

type InputIconicUnderlineProps = HTMLAttributes<HTMLElement> &
  InputIconicUnderlineTokens;

export const InputIconicUnderline = ({
  style,
  ...props
}: InputIconicUnderlineProps) => {
  const styles = style || defaultStyles;

  return (
    <Frame style={styles} {...props}>
      {props.children}
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 0% 100% / 0%)",
  cursor: "pointer",
  borderTopWidth: "var(--hairline)",
  borderTopStyle: "none",
  borderTopColor: "hsl(257deg 25% 45%)",
  borderRightWidth: "var(--hairline)",
  borderRightStyle: "none",
  borderRightColor: "hsl(257deg 25% 45%)",
  borderBottomWidth: "var(--hairline)",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(257deg 25% 45%)",
  borderLeftWidth: "var(--hairline)",
  borderLeftStyle: "none",
  borderLeftColor: "hsl(257deg 25% 45%)",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "start",
  gap: "0.25rem",
  paddingTop: "0.25rem",
  paddingRight: "0.25rem",
  paddingBottom: "0.25rem",
  paddingLeft: "1rem",
  alignSelf: "stretch",
  height: "fit-content",
};
