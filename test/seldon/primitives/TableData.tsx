/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLTd } from "../native-react/HTML.Td";
import { CSSProperties } from "react";
import { TdHTMLAttributes } from "react";

interface TableDataTokens {}

type TableDataProps = TdHTMLAttributes<HTMLTableCellElement> & TableDataTokens;

export const TableData = ({ style, ...props }: TableDataProps) => {
  const styles = style || defaultStyles;

  return <HTMLTd style={styles} {...props} />;
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
