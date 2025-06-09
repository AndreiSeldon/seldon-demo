/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { Frame } from "../frames/Frame";

interface InputIconicRoundedTokens {}

type InputIconicRoundedProps = HTMLAttributes<HTMLElement> &
  InputIconicRoundedTokens;

export const InputIconicRounded = ({
  style,
  ...props
}: InputIconicRoundedProps) => {
  const styles = style || defaultStyles;

  return (
    <Frame style={styles} {...props}>
      {props.children}
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(276deg 38% 95% / 15%)",
  cursor: "pointer",
  borderTopRightRadius: "99999px",
  borderBottomRightRadius: "99999px",
  borderBottomLeftRadius: "99999px",
  borderTopLeftRadius: "99999px",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "start",
  gap: "0.25rem",
  paddingTop: "0.25rem",
  paddingRight: "1rem",
  paddingBottom: "0.25rem",
  paddingLeft: "1rem",
  boxShadow: "0px 2px 0.125rem 0.031rem hsl(264deg 8% 12% / 15%)",
  alignSelf: "stretch",
  height: "fit-content",
};
