/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { Frame } from "../frames/Frame";

interface InputIconicTokens {}

type InputIconicProps = HTMLAttributes<HTMLElement> & InputIconicTokens;

export const InputIconic = ({ style, ...props }: InputIconicProps) => {
  const styles = style || defaultStyles;

  return (
    <Frame style={styles} {...props}>
      {props.children}
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 0% 100%)",
  cursor: "pointer",
  borderTopWidth: "0.069rem",
  borderTopStyle: "solid",
  borderTopColor: "hsl(276deg 38% 95%)",
  borderRightWidth: "0.069rem",
  borderRightStyle: "solid",
  borderRightColor: "hsl(276deg 38% 95%)",
  borderBottomWidth: "0.069rem",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(276deg 38% 95%)",
  borderLeftWidth: "0.069rem",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(276deg 38% 95%)",
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
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
