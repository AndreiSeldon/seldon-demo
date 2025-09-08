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
import { TableRowData, TableRowDataProps } from "../elements/TableRowData"
import { HTMLTbody } from "../native-react/HTML.Tbody"
import { TableData, TableDataProps } from "../primitives/TableData"
import { combineClassNames } from "../utils/class-name"

export interface TableBodyProps extends HTMLAttributes<HTMLElement> {
  className?: string
  tableRowData?: TableRowDataProps
  tableData?: TableDataProps
  tableData2?: TableDataProps
  tableData3?: TableDataProps
  tableData4?: TableDataProps
  tableData5?: TableDataProps
  tableRowData2?: TableRowDataProps
  tableData6?: TableDataProps
  tableData7?: TableDataProps
  tableData8?: TableDataProps
  tableData9?: TableDataProps
  tableData10?: TableDataProps
  tableRowData3?: TableRowDataProps
  tableData11?: TableDataProps
  tableData12?: TableDataProps
  tableData13?: TableDataProps
  tableData14?: TableDataProps
  tableData15?: TableDataProps
}

/**
 * Table Body
 *
 * Level: Part
 *
 * Intent: Defines the main content section of a table, rendering rows of data dynamically with support for custom cell templates and interactions.
 *
 * Tags: table, body, rows, ui, data, content, cells, render
 *
 * @example
 * ```tsx
 * <TableBody
 *   tableRowData="{}"
 *   tableData="{}"
 *   tableData1="{}"
 *   tableData2="{}"
 *   tableData3="{}"
 *   tableData4="{}"
 *   tableRowData1="{}"
 *   tableRowData2="{}"
 * />
 * ```
 */
export function TableBody({
  className = "",
  tableRowData = sdn.tableRowData,
  tableData,
  tableData2,
  tableData3,
  tableData4,
  tableData5,
  tableRowData2 = sdn.tableRowData2,
  tableData6,
  tableData7,
  tableData8,
  tableData9,
  tableData10,
  tableRowData3 = sdn.tableRowData3,
  tableData11,
  tableData12,
  tableData13,
  tableData14,
  tableData15,
  ...props
}: TableBodyProps) {
  const frameClassName = combineClassNames("sdn-tableBody", className)
  const tableRowDataProps = {
    ...sdn.tableRowData,
    ...tableRowData,
    className: combineClassNames(
      sdn.tableRowData?.className,
      tableRowData?.className,
    ),
  }
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
  const tableRowData2Props = {
    ...sdn.tableRowData2,
    ...tableRowData2,
    className: combineClassNames(
      sdn.tableRowData2?.className,
      tableRowData2?.className,
    ),
  }
  const tableData6Props = {
    ...sdn.tableData6,
    ...tableData6,
    className: combineClassNames(
      sdn.tableData6?.className,
      tableData6?.className,
    ),
  }
  const tableData7Props = {
    ...sdn.tableData7,
    ...tableData7,
    className: combineClassNames(
      sdn.tableData7?.className,
      tableData7?.className,
    ),
  }
  const tableData8Props = {
    ...sdn.tableData8,
    ...tableData8,
    className: combineClassNames(
      sdn.tableData8?.className,
      tableData8?.className,
    ),
  }
  const tableData9Props = {
    ...sdn.tableData9,
    ...tableData9,
    className: combineClassNames(
      sdn.tableData9?.className,
      tableData9?.className,
    ),
  }
  const tableData10Props = {
    ...sdn.tableData10,
    ...tableData10,
    className: combineClassNames(
      sdn.tableData10?.className,
      tableData10?.className,
    ),
  }
  const tableRowData3Props = {
    ...sdn.tableRowData3,
    ...tableRowData3,
    className: combineClassNames(
      sdn.tableRowData3?.className,
      tableRowData3?.className,
    ),
  }
  const tableData11Props = {
    ...sdn.tableData11,
    ...tableData11,
    className: combineClassNames(
      sdn.tableData11?.className,
      tableData11?.className,
    ),
  }
  const tableData12Props = {
    ...sdn.tableData12,
    ...tableData12,
    className: combineClassNames(
      sdn.tableData12?.className,
      tableData12?.className,
    ),
  }
  const tableData13Props = {
    ...sdn.tableData13,
    ...tableData13,
    className: combineClassNames(
      sdn.tableData13?.className,
      tableData13?.className,
    ),
  }
  const tableData14Props = {
    ...sdn.tableData14,
    ...tableData14,
    className: combineClassNames(
      sdn.tableData14?.className,
      tableData14?.className,
    ),
  }
  const tableData15Props = {
    ...sdn.tableData15,
    ...tableData15,
    className: combineClassNames(
      sdn.tableData15?.className,
      tableData15?.className,
    ),
  }

  return (
    <HTMLTbody className={frameClassName} {...props}>
      <TableRowData
        {...tableRowDataProps}
        tableData={tableDataProps}
        tableData2={tableData2Props}
        tableData3={tableData3Props}
        tableData4={tableData4Props}
        tableData5={tableData5Props}
      />
      <TableRowData
        {...tableRowData2Props}
        tableData={tableData6Props}
        tableData2={tableData7Props}
        tableData3={tableData8Props}
        tableData4={tableData9Props}
        tableData5={tableData10Props}
      />
      <TableRowData
        {...tableRowData3Props}
        tableData={tableData11Props}
        tableData2={tableData12Props}
        tableData3={tableData13Props}
        tableData4={tableData14Props}
        tableData5={tableData15Props}
      />
    </HTMLTbody>
  )
}

const sdn: TableBodyProps = {
  tableRowData: {
    className: "sdn-tableRowData-4awobXuB",
  },
  tableData: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData2: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData3: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData4: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData5: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableRowData2: {
    className: "sdn-tableRowData-4awobXuB",
  },
  tableData6: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData7: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData8: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData9: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData10: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableRowData3: {
    className: "sdn-tableRowData-4awobXuB",
  },
  tableData11: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData12: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData13: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData14: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
  tableData15: {
    children: "Cell",
    className: "sdn-tableData-2eoPSiJA",
  },
}
