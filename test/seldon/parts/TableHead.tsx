/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { HTMLThead } from "../native-react/HTML.Thead";
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { TableHeader } from "../primitives/TableHeader";
import { TableRowHeader } from "../elements/TableRowHeader";

interface TableHeadTokens {}

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement> & TableHeadTokens;

export const TableHead = ({ style, ...props }: TableHeadProps) => {
  const styles = style || defaultStyles;

  return <HTMLThead style={styles} {...props} />;
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 0% 15% / 15%)",
  cursor: "pointer",
  overflow: "hidden",
  borderTopRightRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
  flexWrap: "nowrap",
  alignSelf: "stretch",
  height: "fit-content",
  verticalAlign: "inherit",
};
