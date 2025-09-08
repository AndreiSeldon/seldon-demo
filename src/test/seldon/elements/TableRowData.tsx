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
import { TableData, TableDataProps } from "../primitives/TableData"
import { combineClassNames } from "../utils/class-name-utils"

export interface TableRowDataProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string
  tableData?: TableDataProps
  tableData2?: TableDataProps
  tableData3?: TableDataProps
  tableData4?: TableDataProps
  tableData5?: TableDataProps
}

/**
 * Data Row
 *
 * Level: Element
 *
 * Intent: Displays data cells for a standard row in a data table.
 *
 * Tags: table, row, data, cells, UI, list, grid, structured
 *
 * @example
 * ```tsx
 * <TableRowData
 *   tableData="{}"
 *   tableData1="{}"
 *   tableData2="{}"
 *   tableData3="{}"
 *   tableData4="{}"
 * />
 * ```
 */
export function TableRowData({
  className = "",
  tableData = sdn.tableData,
  tableData2 = sdn.tableData2,
  tableData3 = sdn.tableData3,
  tableData4 = sdn.tableData4,
  tableData5 = sdn.tableData5,
  ...props
}: TableRowDataProps) {
  const frameClassName = combineClassNames("sdn-tableRowData", className)
  const tableDataProps = {
    ...sdn.tableData,
    ...tableData,
    className: combineClassNames(
      sdn.tableData?.className,
      tableData?.className,
    ),
  }
  const tableData2Props = {
    ...sdn.tableData2,
    ...tableData2,
    className: combineClassNames(
      sdn.tableData2?.className,
      tableData2?.className,
    ),
  }
  const tableData3Props = {
    ...sdn.tableData3,
    ...tableData3,
    className: combineClassNames(
      sdn.tableData3?.className,
      tableData3?.className,
    ),
  }
  const tableData4Props = {
    ...sdn.tableData4,
    ...tableData4,
    className: combineClassNames(
      sdn.tableData4?.className,
      tableData4?.className,
    ),
  }
  const tableData5Props = {
    ...sdn.tableData5,
    ...tableData5,
    className: combineClassNames(
      sdn.tableData5?.className,
      tableData5?.className,
    ),
  }

  return (
    <HTMLTr className={frameClassName} {...props}>
      <TableData {...tableDataProps} />
      <TableData {...tableData2Props} />
      <TableData {...tableData3Props} />
      <TableData {...tableData4Props} />
      <TableData {...tableData5Props} />
    </HTMLTr>
  )
}

const sdn: TableRowDataProps = {
  tableData: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData2: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData3: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData4: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData5: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
}
