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
import { HTMLTr } from "../native-react/HTML.Tr"
import { TableHeader, TableHeaderProps } from "../primitives/TableHeader"
import { combineClassNames } from "../utils/class-name-utils"

export interface TableRowHeaderProps
  extends HTMLAttributes<HTMLTableRowElement> {
  className?: string
  tableHeader?: TableHeaderProps
  tableHeader2?: TableHeaderProps
  tableHeader3?: TableHeaderProps
  tableHeader4?: TableHeaderProps
  tableHeader5?: TableHeaderProps
}

/**
 * Header Row
 *
 * Level: Element
 *
 * Intent: Defines the header row with labels for table columns.
 *
 * Tags: table, header, columns, row, label, UI, grid, headings
 *
 * @example
 * ```tsx
 * <TableRowHeader
 *   tableHeader="{}"
 *   tableHeader1="{}"
 *   tableHeader2="{}"
 *   tableHeader3="{}"
 *   tableHeader4="{}"
 * />
 * ```
 */
export function TableRowHeader({
  className = "",
  tableHeader = sdn.tableHeader,
  tableHeader2 = sdn.tableHeader2,
  tableHeader3 = sdn.tableHeader3,
  tableHeader4 = sdn.tableHeader4,
  tableHeader5 = sdn.tableHeader5,
  ...props
}: TableRowHeaderProps) {
  const frameClassName = combineClassNames("sdn-tableRowHeader", className)
  const tableHeaderProps = {
    ...sdn.tableHeader,
    ...tableHeader,
    className: combineClassNames(
      sdn.tableHeader?.className,
      tableHeader?.className,
    ),
  }
  const tableHeader2Props = {
    ...sdn.tableHeader2,
    ...tableHeader2,
    className: combineClassNames(
      sdn.tableHeader2?.className,
      tableHeader2?.className,
    ),
  }
  const tableHeader3Props = {
    ...sdn.tableHeader3,
    ...tableHeader3,
    className: combineClassNames(
      sdn.tableHeader3?.className,
      tableHeader3?.className,
    ),
  }
  const tableHeader4Props = {
    ...sdn.tableHeader4,
    ...tableHeader4,
    className: combineClassNames(
      sdn.tableHeader4?.className,
      tableHeader4?.className,
    ),
  }
  const tableHeader5Props = {
    ...sdn.tableHeader5,
    ...tableHeader5,
    className: combineClassNames(
      sdn.tableHeader5?.className,
      tableHeader5?.className,
    ),
  }

  return (
    <HTMLTr className={frameClassName} {...props}>
      <TableHeader {...tableHeaderProps} />
      <TableHeader {...tableHeader2Props} />
      <TableHeader {...tableHeader3Props} />
      <TableHeader {...tableHeader4Props} />
      <TableHeader {...tableHeader5Props} />
    </HTMLTr>
  )
}

const sdn: TableRowHeaderProps = {
  tableHeader: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
  tableHeader2: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
  tableHeader3: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
  tableHeader4: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
  tableHeader5: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
}
