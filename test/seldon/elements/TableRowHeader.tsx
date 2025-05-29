/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLTr } from "../native-react/HTML.Tr";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";

interface TableRowHeaderTokens {}

type TableRowHeaderProps = HTMLAttributes<HTMLTableRowElement> &
  TableRowHeaderTokens;

export const TableRowHeader = ({ style, ...props }: TableRowHeaderProps) => {
  const styles = style || defaultStyles;

  return (
    <HTMLTr style={styles} {...props}>
      {props.children}
    </HTMLTr>
  );
};

const defaultStyles: CSSProperties = {
  cursor: "pointer",
  overflow: "hidden",
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
  flexWrap: "nowrap",
  alignSelf: "stretch",
  height: "fit-content",
  verticalAlign: "inherit",
};
