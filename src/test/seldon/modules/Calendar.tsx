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
import { CalendarWeek, CalendarWeekProps } from "../elements/CalendarWeek"
import {
  CalendarWeekdays,
  CalendarWeekdaysProps,
} from "../elements/CalendarWeekdays"
import { HTMLTable } from "../native-react/HTML.Table"
import { CalendarHeader, CalendarHeaderProps } from "../parts/CalendarHeader"
import { CalendarMonth, CalendarMonthProps } from "../parts/CalendarMonth"
import { TableData, TableDataProps } from "../primitives/TableData"
import { TableHeader, TableHeaderProps } from "../primitives/TableHeader"
import { combineClassNames } from "../utils/class-name-utils"

export interface CalendarProps extends TableHTMLAttributes<HTMLTableElement> {
  className?: string
  calendarHeader?: CalendarHeaderProps
  calendarWeekdays?: CalendarWeekdaysProps
  tableHeader?: TableHeaderProps
  tableHeader2?: TableHeaderProps
  tableHeader3?: TableHeaderProps
  tableHeader4?: TableHeaderProps
  tableHeader5?: TableHeaderProps
  tableHeader6?: TableHeaderProps
  tableHeader7?: TableHeaderProps
  tableHeader8?: TableHeaderProps
  calendarMonth?: CalendarMonthProps
  calendarWeek?: CalendarWeekProps
  tableData?: TableDataProps
  tableData2?: TableDataProps
  tableData3?: TableDataProps
  tableData4?: TableDataProps
  tableData5?: TableDataProps
  tableData6?: TableDataProps
  tableData7?: TableDataProps
  tableData8?: TableDataProps
  calendarWeek2?: CalendarWeekProps
  tableData9?: TableDataProps
  tableData10?: TableDataProps
  tableData11?: TableDataProps
  tableData12?: TableDataProps
  tableData13?: TableDataProps
  tableData14?: TableDataProps
  tableData15?: TableDataProps
  tableData16?: TableDataProps
  calendarWeek3?: CalendarWeekProps
  tableData17?: TableDataProps
  tableData18?: TableDataProps
  tableData19?: TableDataProps
  tableData20?: TableDataProps
  tableData21?: TableDataProps
  tableData22?: TableDataProps
  tableData23?: TableDataProps
  tableData24?: TableDataProps
  calendarWeek4?: CalendarWeekProps
  tableData25?: TableDataProps
  tableData26?: TableDataProps
  tableData27?: TableDataProps
  tableData28?: TableDataProps
  tableData29?: TableDataProps
  tableData30?: TableDataProps
  tableData31?: TableDataProps
  tableData32?: TableDataProps
  calendarWeek5?: CalendarWeekProps
  tableData33?: TableDataProps
  tableData34?: TableDataProps
  tableData35?: TableDataProps
  tableData36?: TableDataProps
  tableData37?: TableDataProps
  tableData38?: TableDataProps
  tableData39?: TableDataProps
  tableData40?: TableDataProps
}

/**
 * Calendar
 *
 * Level: Module
 *
 * Intent: Schema for a full calendar component supporting month, week, and day views with events, navigation, and selection logic.
 *
 * Tags: calendar, ui, month, week, day, events, navigation, selection
 *
 * @example
 * ```tsx
 * <Calendar
 *   calendarHeader="{}"
 *   calendarWeekdays="{}"
 *   tableHeader="{}"
 *   tableHeader1="{}"
 *   tableHeader2="{}"
 *   tableHeader3="{}"
 *   tableHeader4="{}"
 *   tableHeader5="{}"
 *   tableHeader6="{}"
 *   tableHeader7="{}"
 *   calendarMonth="{}"
 *   calendarWeek="{}"
 *   tableData="{}"
 *   tableData1="{}"
 *   tableData2="{}"
 *   tableData3="{}"
 *   tableData4="{}"
 *   tableData5="{}"
 *   tableData6="{}"
 *   tableData7="{}"
 *   calendarWeek1="{}"
 *   calendarWeek2="{}"
 *   calendarWeek3="{}"
 *   calendarWeek4="{}"
 * />
 * ```
 */
export function Calendar({
  className = "",
  calendarHeader = sdn.calendarHeader,
  calendarWeekdays,
  tableHeader,
  tableHeader2,
  tableHeader3,
  tableHeader4,
  tableHeader5,
  tableHeader6,
  tableHeader7,
  tableHeader8,
  calendarMonth = sdn.calendarMonth,
  calendarWeek,
  tableData,
  tableData2,
  tableData3,
  tableData4,
  tableData5,
  tableData6,
  tableData7,
  tableData8,
  calendarWeek2,
  tableData9,
  tableData10,
  tableData11,
  tableData12,
  tableData13,
  tableData14,
  tableData15,
  tableData16,
  calendarWeek3,
  tableData17,
  tableData18,
  tableData19,
  tableData20,
  tableData21,
  tableData22,
  tableData23,
  tableData24,
  calendarWeek4,
  tableData25,
  tableData26,
  tableData27,
  tableData28,
  tableData29,
  tableData30,
  tableData31,
  tableData32,
  calendarWeek5,
  tableData33,
  tableData34,
  tableData35,
  tableData36,
  tableData37,
  tableData38,
  tableData39,
  tableData40,
  ...props
}: CalendarProps) {
  const frameClassName = combineClassNames("sdn-calendar", className)
  const calendarHeaderProps = {
    ...sdn.calendarHeader,
    ...calendarHeader,
    className: combineClassNames(
      sdn.calendarHeader?.className,
      calendarHeader?.className,
    ),
  }
  const calendarWeekdaysProps = {
    ...sdn.calendarWeekdays,
    ...calendarWeekdays,
    className: combineClassNames(
      sdn.calendarWeekdays?.className,
      calendarWeekdays?.className,
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
  const calendarMonthProps = {
    ...sdn.calendarMonth,
    ...calendarMonth,
    className: combineClassNames(
      sdn.calendarMonth?.className,
      calendarMonth?.className,
    ),
  }
  const calendarWeekProps = {
    ...sdn.calendarWeek,
    ...calendarWeek,
    className: combineClassNames(
      sdn.calendarWeek?.className,
      calendarWeek?.className,
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
  const calendarWeek2Props = {
    ...sdn.calendarWeek2,
    ...calendarWeek2,
    className: combineClassNames(
      sdn.calendarWeek2?.className,
      calendarWeek2?.className,
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
  const tableData16Props = {
    ...sdn.tableData16,
    ...tableData16,
    className: combineClassNames(
      sdn.tableData16?.className,
      tableData16?.className,
    ),
  }
  const calendarWeek3Props = {
    ...sdn.calendarWeek3,
    ...calendarWeek3,
    className: combineClassNames(
      sdn.calendarWeek3?.className,
      calendarWeek3?.className,
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
  const tableData21Props = {
    ...sdn.tableData21,
    ...tableData21,
    className: combineClassNames(
      sdn.tableData21?.className,
      tableData21?.className,
    ),
  }
  const tableData22Props = {
    ...sdn.tableData22,
    ...tableData22,
    className: combineClassNames(
      sdn.tableData22?.className,
      tableData22?.className,
    ),
  }
  const tableData23Props = {
    ...sdn.tableData23,
    ...tableData23,
    className: combineClassNames(
      sdn.tableData23?.className,
      tableData23?.className,
    ),
  }
  const tableData24Props = {
    ...sdn.tableData24,
    ...tableData24,
    className: combineClassNames(
      sdn.tableData24?.className,
      tableData24?.className,
    ),
  }
  const calendarWeek4Props = {
    ...sdn.calendarWeek4,
    ...calendarWeek4,
    className: combineClassNames(
      sdn.calendarWeek4?.className,
      calendarWeek4?.className,
    ),
  }
  const tableData25Props = {
    ...sdn.tableData25,
    ...tableData25,
    className: combineClassNames(
      sdn.tableData25?.className,
      tableData25?.className,
    ),
  }
  const tableData26Props = {
    ...sdn.tableData26,
    ...tableData26,
    className: combineClassNames(
      sdn.tableData26?.className,
      tableData26?.className,
    ),
  }
  const tableData27Props = {
    ...sdn.tableData27,
    ...tableData27,
    className: combineClassNames(
      sdn.tableData27?.className,
      tableData27?.className,
    ),
  }
  const tableData28Props = {
    ...sdn.tableData28,
    ...tableData28,
    className: combineClassNames(
      sdn.tableData28?.className,
      tableData28?.className,
    ),
  }
  const tableData29Props = {
    ...sdn.tableData29,
    ...tableData29,
    className: combineClassNames(
      sdn.tableData29?.className,
      tableData29?.className,
    ),
  }
  const tableData30Props = {
    ...sdn.tableData30,
    ...tableData30,
    className: combineClassNames(
      sdn.tableData30?.className,
      tableData30?.className,
    ),
  }
  const tableData31Props = {
    ...sdn.tableData31,
    ...tableData31,
    className: combineClassNames(
      sdn.tableData31?.className,
      tableData31?.className,
    ),
  }
  const tableData32Props = {
    ...sdn.tableData32,
    ...tableData32,
    className: combineClassNames(
      sdn.tableData32?.className,
      tableData32?.className,
    ),
  }
  const calendarWeek5Props = {
    ...sdn.calendarWeek5,
    ...calendarWeek5,
    className: combineClassNames(
      sdn.calendarWeek5?.className,
      calendarWeek5?.className,
    ),
  }
  const tableData33Props = {
    ...sdn.tableData33,
    ...tableData33,
    className: combineClassNames(
      sdn.tableData33?.className,
      tableData33?.className,
    ),
  }
  const tableData34Props = {
    ...sdn.tableData34,
    ...tableData34,
    className: combineClassNames(
      sdn.tableData34?.className,
      tableData34?.className,
    ),
  }
  const tableData35Props = {
    ...sdn.tableData35,
    ...tableData35,
    className: combineClassNames(
      sdn.tableData35?.className,
      tableData35?.className,
    ),
  }
  const tableData36Props = {
    ...sdn.tableData36,
    ...tableData36,
    className: combineClassNames(
      sdn.tableData36?.className,
      tableData36?.className,
    ),
  }
  const tableData37Props = {
    ...sdn.tableData37,
    ...tableData37,
    className: combineClassNames(
      sdn.tableData37?.className,
      tableData37?.className,
    ),
  }
  const tableData38Props = {
    ...sdn.tableData38,
    ...tableData38,
    className: combineClassNames(
      sdn.tableData38?.className,
      tableData38?.className,
    ),
  }
  const tableData39Props = {
    ...sdn.tableData39,
    ...tableData39,
    className: combineClassNames(
      sdn.tableData39?.className,
      tableData39?.className,
    ),
  }
  const tableData40Props = {
    ...sdn.tableData40,
    ...tableData40,
    className: combineClassNames(
      sdn.tableData40?.className,
      tableData40?.className,
    ),
  }

  return (
    <HTMLTable className={frameClassName} {...props}>
      <CalendarHeader
        {...calendarHeaderProps}
        calendarWeekdays={calendarWeekdaysProps}
        tableheader={tableHeaderProps}
        tableHeader={tableHeader2Props}
        tableHeader2={tableHeader3Props}
        tableHeader3={tableHeader4Props}
        tableHeader4={tableHeader5Props}
        tableHeader5={tableHeader6Props}
        tableHeader6={tableHeader7Props}
        tableHeader7={tableHeader8Props}
      />
      <CalendarMonth
        {...calendarMonthProps}
        calendarWeek={calendarWeekProps}
        tabledata={tableDataProps}
        tableData={tableData2Props}
        tableData2={tableData3Props}
        tableData3={tableData4Props}
        tableData4={tableData5Props}
        tableData5={tableData6Props}
        tableData6={tableData7Props}
        tableData7={tableData8Props}
        calendarWeek2={calendarWeek2Props}
        tableData8={tableData9Props}
        tableData9={tableData10Props}
        tableData10={tableData11Props}
        tableData11={tableData12Props}
        tableData12={tableData13Props}
        tableData13={tableData14Props}
        tableData14={tableData15Props}
        tableData15={tableData16Props}
        calendarWeek3={calendarWeek3Props}
        tableData16={tableData17Props}
        tableData17={tableData18Props}
        tableData18={tableData19Props}
        tableData19={tableData20Props}
        tableData20={tableData21Props}
        tableData21={tableData22Props}
        tableData22={tableData23Props}
        tableData23={tableData24Props}
        calendarWeek4={calendarWeek4Props}
        tableData24={tableData25Props}
        tableData25={tableData26Props}
        tableData26={tableData27Props}
        tableData27={tableData28Props}
        tableData28={tableData29Props}
        tableData29={tableData30Props}
        tableData30={tableData31Props}
        tableData31={tableData32Props}
        calendarWeek5={calendarWeek5Props}
        tableData32={tableData33Props}
        tableData33={tableData34Props}
        tableData34={tableData35Props}
        tableData35={tableData36Props}
        tableData36={tableData37Props}
        tableData37={tableData38Props}
        tableData38={tableData39Props}
        tableData39={tableData40Props}
      />
    </HTMLTable>
  )
}

const sdn: CalendarProps = {
  calendarHeader: {
    className: "sdn-calendarHeader-u2dLM6Go",
  },
  calendarWeekdays: {
    className: "sdn-calendarWeekdays-1gi4AgYQ",
  },
  tableHeader: {
    children: "Jan",
    className: "sdn-tableHeader-i6Dg4Tqb",
  },
  tableHeader2: {
    children: "Mon",
    className: "sdn-tableHeader-2ZG04UVD",
  },
  tableHeader3: {
    children: "Tue",
    className: "sdn-tableHeader-2ZG04UVD",
  },
  tableHeader4: {
    children: "Wed",
    className: "sdn-tableHeader-2ZG04UVD",
  },
  tableHeader5: {
    children: "Thu",
    className: "sdn-tableHeader-2ZG04UVD",
  },
  tableHeader6: {
    children: "Fri",
    className: "sdn-tableHeader-2ZG04UVD",
  },
  tableHeader7: {
    children: "Sat",
    className: "sdn-tableHeader-2ZG04UVD",
  },
  tableHeader8: {
    children: "Sun",
    className: "sdn-tableHeader-2ZG04UVD",
  },
  calendarMonth: {
    className: "sdn-calendarMonth-zK9HbeV5",
  },
  calendarWeek: {
    className: "sdn-calendarWeek-Ga2T7ueL",
  },
  tableData: {
    children: "01",
    className: "sdn-tableData-D8pYHkhB",
  },
  tableData2: {
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData3: {
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData4: {
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData5: {
    children: "01",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData6: {
    children: "02",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData7: {
    children: "03",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData8: {
    children: "04",
    className: "sdn-tableData-v0DCcfBn",
  },
  calendarWeek2: {
    className: "sdn-calendarWeek-Ga2T7ueL",
  },
  tableData9: {
    children: "02",
    className: "sdn-tableData-D8pYHkhB",
  },
  tableData10: {
    children: "05",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData11: {
    children: "06",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData12: {
    children: "07",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData13: {
    children: "08",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData14: {
    children: "09",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData15: {
    children: "10",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData16: {
    children: "11",
    className: "sdn-tableData-v0DCcfBn",
  },
  calendarWeek3: {
    className: "sdn-calendarWeek-Ga2T7ueL",
  },
  tableData17: {
    children: "03",
    className: "sdn-tableData-D8pYHkhB",
  },
  tableData18: {
    children: "12",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData19: {
    children: "13",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData20: {
    children: "14",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData21: {
    children: "15",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData22: {
    children: "16",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData23: {
    children: "17",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData24: {
    children: "18",
    className: "sdn-tableData-v0DCcfBn",
  },
  calendarWeek4: {
    className: "sdn-calendarWeek-Ga2T7ueL",
  },
  tableData25: {
    children: "04",
    className: "sdn-tableData-D8pYHkhB",
  },
  tableData26: {
    children: "19",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData27: {
    children: "20",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData28: {
    children: "21",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData29: {
    children: "22",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData30: {
    children: "23",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData31: {
    children: "24",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData32: {
    children: "25",
    className: "sdn-tableData-v0DCcfBn",
  },
  calendarWeek5: {
    className: "sdn-calendarWeek-Ga2T7ueL",
  },
  tableData33: {
    children: "05",
    className: "sdn-tableData-D8pYHkhB",
  },
  tableData34: {
    children: "26",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData35: {
    children: "27",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData36: {
    children: "28",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData37: {
    children: "29",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData38: {
    children: "30",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData39: {
    children: "31",
    className: "sdn-tableData-v0DCcfBn",
  },
  tableData40: {
    className: "sdn-tableData-v0DCcfBn",
  },
}
