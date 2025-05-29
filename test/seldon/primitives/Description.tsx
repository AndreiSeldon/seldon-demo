/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLParagraph } from "../native-react/HTML.Paragraph";
import { HTMLSpan } from "../native-react/HTML.Span";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";

interface DescriptionTokens {
  htmlElement?: "p" | "span";
}

type DescriptionProps = HTMLAttributes<HTMLElement> & DescriptionTokens;

export const Description = ({
  htmlElement,
  style,
  ...props
}: DescriptionProps) => {
  const styles = style || defaultStyles;

  switch (htmlElement) {
    case "p":
      return (
        <HTMLParagraph style={styles} {...props}>
          {props.children}
        </HTMLParagraph>
      );
    default:
      return (
        <HTMLSpan style={styles} {...props}>
          {props.children}
        </HTMLSpan>
      );
  }
};

const defaultStyles: CSSProperties = {
  color: "hsl(0deg 4% 8%)",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "Inter",
  fontStyle: "normal",
  fontSynthesisStyle: "none",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.25,
  whiteSpace: "normal",
};
