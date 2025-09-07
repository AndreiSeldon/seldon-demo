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
import { TableRowHeader, TableRowHeaderProps } from "../elements/TableRowHeader"
import { HTMLThead } from "../native-react/HTML.Thead"
import { TableHeader, TableHeaderProps } from "../primitives/TableHeader"
import { combineClassNames } from "../utils/class-name-utils"

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string
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
}

/**
 * Table Head
 *
 * Level: Part
 *
 * Intent: Defines the header section of a table including column titles, sorting controls, and accessibility markup.
 *
 * Tags: table, header, head, columns, ui, sort, titles, accessibility
 *
 * @example
 * ```tsx
 * <TableHead
 *   tableRowHeader="{}"
 *   tableHeader="{}"
 *   tableHeader1="{}"
 *   tableHeader2="{}"
 *   tableHeader3="{}"
 *   tableHeader4="{}"
 *   tableRowHeader1="{}"
 * />
 * ```
 */
export function TableHead({
  className = "",
  tableRowHeader = sdn.tableRowHeader,
  tableHeader,
  tableHeader2,
  tableHeader3,
  tableHeader4,
  tableHeader5,
  tableRowHeader2 = sdn.tableRowHeader2,
  tableHeader6,
  tableHeader7,
  tableHeader8,
  tableHeader9,
  tableHeader10,
  ...props
}: TableHeadProps) {
  const frameClassName = combineClassNames("sdn-tableHead", className)
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

  return (
    <HTMLThead className={frameClassName} {...props}>
      <TableRowHeader
        {...tableRowHeaderProps}
        tableHeader={tableHeaderProps}
        tableHeader2={tableHeader2Props}
        tableHeader3={tableHeader3Props}
        tableHeader4={tableHeader4Props}
        tableHeader5={tableHeader5Props}
      />
      <TableRowHeader
        {...tableRowHeader2Props}
        tableHeader={tableHeader6Props}
        tableHeader2={tableHeader7Props}
        tableHeader3={tableHeader8Props}
        tableHeader4={tableHeader9Props}
        tableHeader5={tableHeader10Props}
      />
    </HTMLThead>
  )
}

const sdn: TableHeadProps = {
  tableRowHeader: {
    className: "sdn-tableRowHeader-bwETb2nO",
  },
  tableHeader: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
  tableHeader2: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
  tableHeader3: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
  tableHeader4: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
  tableHeader5: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
  tableRowHeader2: {
    className: "sdn-tableRowHeader-bwETb2nO",
  },
  tableHeader6: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
  tableHeader7: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
  tableHeader8: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
  tableHeader9: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
  tableHeader10: {
    children: "Column",
    className: "sdn-tableHeader-vuu0itV7",
  },
}
