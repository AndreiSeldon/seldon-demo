/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLTr } from "../native-react/HTML.Tr";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";

interface TableRowDataTokens {}

type TableRowDataProps = HTMLAttributes<HTMLTableRowElement> &
  TableRowDataTokens;

export const TableRowData = ({ style, ...props }: TableRowDataProps) => {
  const styles = style || defaultStyles;

  return (
    <HTMLTr style={styles} {...props}>
      {props.children}
    </HTMLTr>
  );
};

const defaultStyles: CSSProperties = {
  cursor: "pointer",
  borderTopWidth: "0.031rem",
  borderTopStyle: "solid",
  borderTopColor: "hsl(0deg 4% 56%)",
  overflow: "hidden",
  flexWrap: "nowrap",
  alignSelf: "stretch",
  height: "fit-content",
  verticalAlign: "inherit",
};
