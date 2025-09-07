/*****
 *
 * This code was generated using Seldon (https://seldon.app)
 *
 * Licensed under the Terms of Use: https://seldon.digital/terms-of-service
 * Do not redistribute or sublicense without permission.
 *
 * You may not use this software, or any derivative works of it,
 * in whole or in part, for the purposes of training, fine-tuning,
 * or otherwise improving (directly or indirectly) any machine learning
 * or artificial intelligence system.
 * 
 *****/
 
import { TdHTMLAttributes } from "react"
import { HTMLTd } from "../native-react/HTML.Td"

export interface TableDataProps extends TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
  children?: string
}

/**
 * Table Data
 *
 * Level: Primitive
 *
 * Intent: Represents a standard cell in a table row for displaying data.
 *
 * Tags: table, cell, data, td, primitive, grid, content
 *
 * @example
 * ```tsx
 * <TableData
 *   ariaHidden="false"
 *   children="Cell"
 *   width="fill"
 *   height="fit"
 *   color="@swatch.black"
 *   textAlign="left"
 *   textCase="normal"
 *   textDecoration="none"
 *   wrapText="true"
 * />
 * ```
 */
export function TableData({ className = "", ...props }: TableDataProps) {
  return <HTMLTd className={"sdn-tableData " + className} {...props} />
}
