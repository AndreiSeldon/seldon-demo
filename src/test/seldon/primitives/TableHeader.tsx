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
 
import { HTMLAttributes } from "react"
import { HTMLTh } from "../native-react/HTML.Th"

export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string
  children?: string
}

/**
 * Table Header
 *
 * Level: Primitive
 *
 * Intent: Defines a column header in a table for labeling data.
 *
 * Tags: table, header, th, column label, primitive, heading, grid
 *
 * @example
 * ```tsx
 * <TableHeader
 *   ariaHidden="false"
 *   children="Column"
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
export function TableHeader({ className = "", ...props }: TableHeaderProps) {
  return <HTMLTh className={"sdn-tableData " + className} {...props} />
}
