/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { Frame } from "../frames/Frame";

interface TextblockDetailsTokens {}

type TextblockDetailsProps = HTMLAttributes<HTMLElement> &
  TextblockDetailsTokens;

export const TextblockDetails = ({
  style,
  ...props
}: TextblockDetailsProps) => {
  const styles = style || defaultStyles;

  return (
    <Frame style={styles} {...props}>
      {props.children}
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  cursor: "pointer",
  overflow: "hidden",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignSelf: "stretch",
  height: "fit-content",
};
