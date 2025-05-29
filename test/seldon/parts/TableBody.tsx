/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLTbody } from "../native-react/HTML.Tbody";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { TableData } from "../primitives/TableData";
import { TableRowData } from "../elements/TableRowData";

interface TableBodyTokens {}

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & TableBodyTokens;

export const TableBody = ({ style, ...props }: TableBodyProps) => {
  const styles = style || defaultStyles;

  return <HTMLTbody style={styles} {...props} />;
};

const defaultStyles: CSSProperties = {
  cursor: "pointer",
  overflow: "hidden",
  flexWrap: "nowrap",
  alignSelf: "stretch",
  height: "fit-content",
  verticalAlign: "inherit",
};
