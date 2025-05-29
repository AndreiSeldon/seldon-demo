/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLTh } from "../native-react/HTML.Th";
import { CSSProperties } from "react";
import { ThHTMLAttributes } from "react";

interface TableHeaderTokens {}

type TableHeaderProps = ThHTMLAttributes<HTMLTableCellElement> &
  TableHeaderTokens;

export const TableHeader = ({ style, ...props }: TableHeaderProps) => {
  const styles = style || defaultStyles;

  return <HTMLTh style={styles} {...props} />;
};

const defaultStyles: CSSProperties = {
  cursor: "pointer",
  color: "hsl(0deg 4% 8%)",
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
  textAlign: "left",
  whiteSpace: "normal",
  verticalAlign: "inherit",
};
