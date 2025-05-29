/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLTable } from "../native-react/HTML.Table";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { TableData } from "../primitives/TableData";
import { TableHeader } from "../primitives/TableHeader";
import { TableRowData } from "../elements/TableRowData";
import { TableRowFooter } from "../elements/TableRowFooter";
import { TableRowHeader } from "../elements/TableRowHeader";
import { TableBody } from "../parts/TableBody";
import { TableFoot } from "../parts/TableFoot";
import { TableHead } from "../parts/TableHead";

interface TableStandardTokens {}

type TableStandardProps = HTMLAttributes<HTMLTableElement> &
  TableStandardTokens;

export const TableStandard = ({ style, ...props }: TableStandardProps) => {
  const styles = style || defaultStyles;

  return <HTMLTable style={styles} {...props} />;
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  cursor: "pointer",
  borderTopWidth: "var(--hairline)",
  borderTopStyle: "solid",
  borderTopColor: "hsl(0deg 0% 15%)",
  borderRightWidth: "var(--hairline)",
  borderRightStyle: "solid",
  borderRightColor: "hsl(0deg 0% 15%)",
  borderBottomWidth: "var(--hairline)",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(0deg 0% 15%)",
  borderLeftWidth: "var(--hairline)",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(0deg 0% 15%)",
  overflow: "hidden",
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
  flexWrap: "nowrap",
  alignSelf: "stretch",
  height: "fit-content",
  borderCollapse: "collapse",
};
