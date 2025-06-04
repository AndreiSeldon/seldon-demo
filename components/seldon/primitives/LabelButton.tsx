/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLLabel } from "../native-react/HTML.Label";
import { HTMLSpan } from "../native-react/HTML.Span";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";

interface LabelButtonTokens {
  htmlElement?: "span" | "label";
}

type LabelButtonProps = HTMLAttributes<HTMLSpanElement> & LabelButtonTokens;

export const LabelButton = ({
  htmlElement,
  style,
  ...props
}: LabelButtonProps) => {
  const styles = style || defaultStyles;

  switch (htmlElement) {
    case "span":
      return (
        <HTMLSpan style={styles} {...props}>
          {props.children}
        </HTMLSpan>
      );
    default:
      return (
        <HTMLLabel style={styles} {...props}>
          {props.children}
        </HTMLLabel>
      );
  }
};

const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSynthesisStyle: "none",
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: 1.15,
  letterSpacing: "0.1px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
};
