/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { Frame } from "../frames/Frame";

interface ButtonBarTokens {}

type ButtonBarProps = HTMLAttributes<HTMLDivElement> & ButtonBarTokens;

export const ButtonBar = ({ style, ...props }: ButtonBarProps) => {
  const styles = style || defaultStyles;

  return (
    <Frame style={styles} {...props}>
      {props.children}
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  flexWrap: "wrap",
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignSelf: "stretch",
  height: "fit-content",
};
