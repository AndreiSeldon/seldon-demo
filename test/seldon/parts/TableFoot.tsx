/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLTfoot } from "../native-react/HTML.Tfoot";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { TableData } from "../primitives/TableData";
import { TableRowFooter } from "../elements/TableRowFooter";

interface TableFootTokens {}

type TableFootProps = HTMLAttributes<HTMLTableSectionElement> & TableFootTokens;

export const TableFoot = ({ style, ...props }: TableFootProps) => {
  const styles = style || defaultStyles;

  return <HTMLTfoot style={styles} {...props} />;
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 0% 15% / 25%)",
  cursor: "pointer",
  overflow: "hidden",
  flexWrap: "nowrap",
  alignSelf: "stretch",
  height: "fit-content",
  verticalAlign: "inherit",
};
