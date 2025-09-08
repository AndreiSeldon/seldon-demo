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
 
import { TableHTMLAttributes } from "react"
import { TableRowData, TableRowDataProps } from "../elements/TableRowData"
import { TableRowFooter, TableRowFooterProps } from "../elements/TableRowFooter"
import { TableRowHeader, TableRowHeaderProps } from "../elements/TableRowHeader"
import { HTMLTable } from "../native-react/HTML.Table"
import { TableBody, TableBodyProps } from "../parts/TableBody"
import { TableFoot, TableFootProps } from "../parts/TableFoot"
import { TableHead, TableHeadProps } from "../parts/TableHead"
import { TableData, TableDataProps } from "../primitives/TableData"
import { TableHeader, TableHeaderProps } from "../primitives/TableHeader"
import { combineClassNames } from "../utils/class-name-utils"

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  className?: string
  tableHead?: TableHeadProps
  tableRowHeader?: TableRowHeaderProps
  tableHeader?: TableHeaderProps
  tableHeader2?: TableHeaderProps
  tableHeader3?: TableHeaderProps
  tableHeader4?: TableHeaderProps
  tableHeader5?: TableHeaderProps
  tableRowHeader2?: TableRowHeaderProps
  tableHeader6?: TableHeaderProps
  tableHeader7?: TableHeaderProps
  tableHeader8?: TableHeaderProps
  tableHeader9?: TableHeaderProps
  tableHeader10?: TableHeaderProps
  tableBody?: TableBodyProps
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
  tableFoot?: TableFootProps
  tableRowFooter?: TableRowFooterProps
  tableData16?: TableDataProps
  tableData17?: TableDataProps
  tableData18?: TableDataProps
  tableData19?: TableDataProps
  tableData20?: TableDataProps
}

/**
 * Table
 *
 * Level: Module
 *
 * Intent: Schema for a standard data table with configurable columns, sorting, filtering, and row rendering options.
 *
 * Tags: table, standard, ui, data, columns, rows, filter, sort
 *
 * @example
 * ```tsx
 * <Table
 *   tableHead="{}"
 *   tableRowHeader="{}"
 *   tableHeader="{}"
 *   tableHeader1="{}"
 *   tableHeader2="{}"
 *   tableHeader3="{}"
 *   tableHeader4="{}"
 *   tableRowHeader1="{}"
 *   tableBody="{}"
 *   tableRowData="{}"
 *   tableData="{}"
 *   tableData1="{}"
 *   tableData2="{}"
 *   tableData3="{}"
 *   tableData4="{}"
 *   tableRowData1="{}"
 *   tableRowData2="{}"
 *   tableFoot="{}"
 *   tableRowFooter="{}"
 * />
 * ```
 */
export function Table({
  className = "",
  tableHead = sdn.tableHead,
  tableRowHeader,
  tableHeader,
  tableHeader2,
  tableHeader3,
  tableHeader4,
  tableHeader5,
  tableRowHeader2,
  tableHeader6,
  tableHeader7,
  tableHeader8,
  tableHeader9,
  tableHeader10,
  tableBody = sdn.tableBody,
  tableRowData,
  tableData,
  tableData2,
  tableData3,
  tableData4,
  tableData5,
  tableRowData2,
  tableData6,
  tableData7,
  tableData8,
  tableData9,
  tableData10,
  tableRowData3,
  tableData11,
  tableData12,
  tableData13,
  tableData14,
  tableData15,
  tableFoot = sdn.tableFoot,
  tableRowFooter,
  tableData16,
  tableData17,
  tableData18,
  tableData19,
  tableData20,
  ...props
}: TableProps) {
  const frameClassName = combineClassNames("sdn-table", className)
  const tableHeadProps = {
    ...sdn.tableHead,
    ...tableHead,
    className: combineClassNames(
      sdn.tableHead?.className,
      tableHead?.className,
    ),
  }
  const tableRowHeaderProps = {
    ...sdn.tableRowHeader,
    ...tableRowHeader,
    className: combineClassNames(
      sdn.tableRowHeader?.className,
      tableRowHeader?.className,
    ),
  }
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
  const tableRowHeader2Props = {
    ...sdn.tableRowHeader2,
    ...tableRowHeader2,
    className: combineClassNames(
      sdn.tableRowHeader2?.className,
      tableRowHeader2?.className,
    ),
  }
  const tableHeader6Props = {
    ...sdn.tableHeader6,
    ...tableHeader6,
    className: combineClassNames(
      sdn.tableHeader6?.className,
      tableHeader6?.className,
    ),
  }
  const tableHeader7Props = {
    ...sdn.tableHeader7,
    ...tableHeader7,
    className: combineClassNames(
      sdn.tableHeader7?.className,
      tableHeader7?.className,
    ),
  }
  const tableHeader8Props = {
    ...sdn.tableHeader8,
    ...tableHeader8,
    className: combineClassNames(
      sdn.tableHeader8?.className,
      tableHeader8?.className,
    ),
  }
  const tableHeader9Props = {
    ...sdn.tableHeader9,
    ...tableHeader9,
    className: combineClassNames(
      sdn.tableHeader9?.className,
      tableHeader9?.className,
    ),
  }
  const tableHeader10Props = {
    ...sdn.tableHeader10,
    ...tableHeader10,
    className: combineClassNames(
      sdn.tableHeader10?.className,
      tableHeader10?.className,
    ),
  }
  const tableBodyProps = {
    ...sdn.tableBody,
    ...tableBody,
    className: combineClassNames(
      sdn.tableBody?.className,
      tableBody?.className,
    ),
  }
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
  const tableFootProps = {
    ...sdn.tableFoot,
    ...tableFoot,
    className: combineClassNames(
      sdn.tableFoot?.className,
      tableFoot?.className,
    ),
  }
  const tableRowFooterProps = {
    ...sdn.tableRowFooter,
    ...tableRowFooter,
    className: combineClassNames(
      sdn.tableRowFooter?.className,
      tableRowFooter?.className,
    ),
  }
  const tableData16Props = {
    ...sdn.tableData16,
    ...tableData16,
    className: combineClassNames(
      sdn.tableData16?.className,
      tableData16?.className,
    ),
  }
  const tableData17Props = {
    ...sdn.tableData17,
    ...tableData17,
    className: combineClassNames(
      sdn.tableData17?.className,
      tableData17?.className,
    ),
  }
  const tableData18Props = {
    ...sdn.tableData18,
    ...tableData18,
    className: combineClassNames(
      sdn.tableData18?.className,
      tableData18?.className,
    ),
  }
  const tableData19Props = {
    ...sdn.tableData19,
    ...tableData19,
    className: combineClassNames(
      sdn.tableData19?.className,
      tableData19?.className,
    ),
  }
  const tableData20Props = {
    ...sdn.tableData20,
    ...tableData20,
    className: combineClassNames(
      sdn.tableData20?.className,
      tableData20?.className,
    ),
  }

  return (
    <HTMLTable className={frameClassName} {...props}>
      <TableHead
        {...tableHeadProps}
        tableRowHeader={tableRowHeaderProps}
        tableHeader={tableHeaderProps}
        tableHeader2={tableHeader2Props}
        tableHeader3={tableHeader3Props}
        tableHeader4={tableHeader4Props}
        tableHeader5={tableHeader5Props}
        tableRowHeader2={tableRowHeader2Props}
        tableHeader6={tableHeader6Props}
        tableHeader7={tableHeader7Props}
        tableHeader8={tableHeader8Props}
        tableHeader9={tableHeader9Props}
        tableHeader10={tableHeader10Props}
      />
      <TableBody
        {...tableBodyProps}
        tableRowData={tableRowDataProps}
        tableData={tableDataProps}
        tableData2={tableData2Props}
        tableData3={tableData3Props}
        tableData4={tableData4Props}
        tableData5={tableData5Props}
        tableRowData2={tableRowData2Props}
        tableData6={tableData6Props}
        tableData7={tableData7Props}
        tableData8={tableData8Props}
        tableData9={tableData9Props}
        tableData10={tableData10Props}
        tableRowData3={tableRowData3Props}
        tableData11={tableData11Props}
        tableData12={tableData12Props}
        tableData13={tableData13Props}
        tableData14={tableData14Props}
        tableData15={tableData15Props}
      />
      <TableFoot
        {...tableFootProps}
        tableRowFooter={tableRowFooterProps}
        tableData={tableData16Props}
        tableData2={tableData17Props}
        tableData3={tableData18Props}
        tableData4={tableData19Props}
        tableData5={tableData20Props}
      />
    </HTMLTable>
  )
}

const sdn: TableProps = {
  tableHead: {
    className: "sdn-tableHead-JyDUp712",
  },
  tableRowHeader: {
    className: "sdn-tableRowHeader-7sRw4XQt",
  },
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
  tableRowHeader2: {
    className: "sdn-tableRowHeader-7sRw4XQt",
  },
  tableHeader6: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
  tableHeader7: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
  tableHeader8: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
  tableHeader9: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
  tableHeader10: {
    children: "Column",
    className: "sdn-tableHeader-9KhFscIS",
  },
  tableBody: {
    className: "sdn-tableBody-MIRJauW6",
  },
  tableRowData: {
    className: "sdn-tableRowData-zoRe0OjF",
  },
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
  tableRowData2: {
    className: "sdn-tableRowData-zoRe0OjF",
  },
  tableData6: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData7: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData8: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData9: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData10: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableRowData3: {
    className: "sdn-tableRowData-zoRe0OjF",
  },
  tableData11: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData12: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData13: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData14: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData15: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableFoot: {
    className: "sdn-tableFoot-C0UIClJH",
  },
  tableRowFooter: {
    className: "sdn-tableRowFooter-auc2Hj7s",
  },
  tableData16: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData17: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData18: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData19: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
  tableData20: {
    children: "Cell",
    className: "sdn-tableData-mEMD5gQz",
  },
}
