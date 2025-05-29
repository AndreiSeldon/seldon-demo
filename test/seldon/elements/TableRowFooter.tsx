/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLTr } from "../native-react/HTML.Tr";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";

interface TableRowFooterTokens {}

type TableRowFooterProps = HTMLAttributes<HTMLTableRowElement> &
  TableRowFooterTokens;

export const TableRowFooter = ({ style, ...props }: TableRowFooterProps) => {
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
  borderTopColor: "hsl(0deg 0% 15%)",
  overflow: "hidden",
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
  flexWrap: "nowrap",
  alignSelf: "stretch",
  height: "fit-content",
};
