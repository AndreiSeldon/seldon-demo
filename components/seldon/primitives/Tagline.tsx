/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLDiv } from "../native-react/HTML.Div";
import { HTMLHeading5 } from "../native-react/HTML.Heading5";
import { HTMLHeading6 } from "../native-react/HTML.Heading6";
import { HTMLParagraph } from "../native-react/HTML.Paragraph";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";

interface TaglineTokens {
  htmlElement?: "h5" | "h6" | "p";
}

type TaglineProps = HTMLAttributes<HTMLElement> & TaglineTokens;

export const Tagline = ({ htmlElement, style, ...props }: TaglineProps) => {
  const styles = style || defaultStyles;

  switch (htmlElement) {
    case "p":
      return (
        <HTMLParagraph style={styles} {...props}>
          {props.children}
        </HTMLParagraph>
      );
    case "h5":
      return (
        <HTMLHeading5 style={styles} {...props}>
          {props.children}
        </HTMLHeading5>
      );
    case "h6":
      return (
        <HTMLHeading6 style={styles} {...props}>
          {props.children}
        </HTMLHeading6>
      );
    default:
      return (
        <HTMLDiv style={styles} {...props}>
          {props.children}
        </HTMLDiv>
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
  fontWeight: 500,
  fontSize: "0.75rem",
  lineHeight: 1.25,
  whiteSpace: "normal",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  lineClamp: 2,
  WebkitBoxOrient: "vertical",
  boxOrient: "vertical",
};
