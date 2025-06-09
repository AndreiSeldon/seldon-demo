/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLInput } from "../native-react/HTML.Input";
import { HTMLTextarea } from "../native-react/HTML.Textarea";
import { CSSProperties } from "react";
import { HTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputTokens {
  inputType?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime-local";
}

type InputProps = (
  | HTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
) &
  InputTokens & {
    htmlElement?: "input" | "textarea";
  };

export const Input = ({ htmlElement, style, ...props }: InputProps) => {
  const styles = style || defaultStyles;

  switch (htmlElement) {
    case "textarea":
      return (
        <HTMLTextarea
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        >
          {props.children}
        </HTMLTextarea>
      );
    default:
      return (
        <HTMLInput {...(props as HTMLAttributes<HTMLInputElement>)}>
          {props.children}
        </HTMLInput>
      );
  }
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  borderTopWidth: "0.069rem",
  borderTopStyle: "solid",
  borderTopColor: "hsl(0deg 4% 56%)",
  borderRightWidth: "0.069rem",
  borderRightStyle: "solid",
  borderRightColor: "hsl(0deg 4% 56%)",
  borderBottomWidth: "0.069rem",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(0deg 4% 56%)",
  borderLeftWidth: "0.069rem",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(0deg 4% 56%)",
  color: "hsl(0deg 4% 8%)",
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
  paddingTop: "0.5rem",
  paddingRight: "0.5rem",
  paddingBottom: "0.5rem",
  paddingLeft: "0.5rem",
  alignSelf: "stretch",
  height: "fit-content",
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.25,
};
