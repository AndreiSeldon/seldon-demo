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
import { CalendarWeek, CalendarWeekProps } from "../elements/CalendarWeek"
import { HTMLTbody } from "../native-react/HTML.Tbody"
import { TableData, TableDataProps } from "../primitives/TableData"
import { combineClassNames } from "../utils/class-name-utils"

export interface CalendarMonthProps extends HTMLAttributes<HTMLElement> {
  className?: string
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
 * Month
 *
 * Level: Part
 *
 * Intent: Schema for a full month view, rendering weeks with events, selection state, and range interactions.
 *
 * Tags: calendar, week, schedule, timeslot, events, overlap, scroll, ui
 *
 * @example
 * ```tsx
 * <CalendarMonth
 *   display="show"
 *   ariaHidden="false"
 *   orientation="vertical"
 *   align="left"
 *   width="fill"
 *   height="fit"
 *   wrapChildren="false"
 * />
 * ```
 */
export function CalendarMonth({
  className = "",
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
}: CalendarMonthProps) {
  const frameClassName = combineClassNames("sdn-calendarMonth", className)
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
    <HTMLTbody className={frameClassName} {...props}>
      <CalendarWeek {...calendarWeekProps} />
      <CalendarWeek {...calendarWeek2Props} />
      <CalendarWeek {...calendarWeek3Props} />
      <CalendarWeek {...calendarWeek4Props} />
      <CalendarWeek {...calendarWeek5Props} />
    </HTMLTbody>
  )
}

const sdn: CalendarMonthProps = {
  calendarWeek: {
    display: "show",
    ariaHidden: "false",
    orientation: "horizontal",
    align: "left",
    width: "fill",
    height: "fill",
    wrapChildren: "false",
    className: "sdn-calendarWeek-AcrbpcmY",
  },
  tableData: {
    ariaHidden: "false",
    children: "01",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-nevz6yex",
  },
  tableData2: {
    ariaHidden: "false",
    children: "",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData3: {
    ariaHidden: "false",
    children: "",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData4: {
    ariaHidden: "false",
    children: "",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData5: {
    ariaHidden: "false",
    children: "01",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData6: {
    ariaHidden: "false",
    children: "02",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData7: {
    ariaHidden: "false",
    children: "03",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData8: {
    ariaHidden: "false",
    children: "04",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  calendarWeek2: {
    display: "show",
    ariaHidden: "false",
    orientation: "horizontal",
    align: "left",
    width: "fill",
    height: "fill",
    wrapChildren: "false",
    className: "sdn-calendarWeek-AcrbpcmY",
  },
  tableData9: {
    ariaHidden: "false",
    children: "02",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-nevz6yex",
  },
  tableData10: {
    ariaHidden: "false",
    children: "05",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData11: {
    ariaHidden: "false",
    children: "06",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData12: {
    ariaHidden: "false",
    children: "07",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData13: {
    ariaHidden: "false",
    children: "08",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData14: {
    ariaHidden: "false",
    children: "09",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData15: {
    ariaHidden: "false",
    children: "10",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData16: {
    ariaHidden: "false",
    children: "11",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  calendarWeek3: {
    display: "show",
    ariaHidden: "false",
    orientation: "horizontal",
    align: "left",
    width: "fill",
    height: "fill",
    wrapChildren: "false",
    className: "sdn-calendarWeek-AcrbpcmY",
  },
  tableData17: {
    ariaHidden: "false",
    children: "03",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-nevz6yex",
  },
  tableData18: {
    ariaHidden: "false",
    children: "12",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData19: {
    ariaHidden: "false",
    children: "13",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData20: {
    ariaHidden: "false",
    children: "14",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData21: {
    ariaHidden: "false",
    children: "15",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData22: {
    ariaHidden: "false",
    children: "16",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData23: {
    ariaHidden: "false",
    children: "17",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData24: {
    ariaHidden: "false",
    children: "18",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  calendarWeek4: {
    display: "show",
    ariaHidden: "false",
    orientation: "horizontal",
    align: "left",
    width: "fill",
    height: "fill",
    wrapChildren: "false",
    className: "sdn-calendarWeek-AcrbpcmY",
  },
  tableData25: {
    ariaHidden: "false",
    children: "04",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-nevz6yex",
  },
  tableData26: {
    ariaHidden: "false",
    children: "19",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData27: {
    ariaHidden: "false",
    children: "20",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData28: {
    ariaHidden: "false",
    children: "21",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData29: {
    ariaHidden: "false",
    children: "22",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData30: {
    ariaHidden: "false",
    children: "23",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData31: {
    ariaHidden: "false",
    children: "24",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData32: {
    ariaHidden: "false",
    children: "25",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  calendarWeek5: {
    display: "show",
    ariaHidden: "false",
    orientation: "horizontal",
    align: "left",
    width: "fill",
    height: "fill",
    wrapChildren: "false",
    className: "sdn-calendarWeek-AcrbpcmY",
  },
  tableData33: {
    ariaHidden: "false",
    children: "05",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-nevz6yex",
  },
  tableData34: {
    ariaHidden: "false",
    children: "26",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData35: {
    ariaHidden: "false",
    children: "27",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData36: {
    ariaHidden: "false",
    children: "28",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData37: {
    ariaHidden: "false",
    children: "29",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData38: {
    ariaHidden: "false",
    children: "30",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData39: {
    ariaHidden: "false",
    children: "31",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
  tableData40: {
    ariaHidden: "false",
    children: "",
    width: "[object Object]",
    height: "fit",
    color: "@swatch.black",
    textAlign: "left",
    textCase: "normal",
    textDecoration: "none",
    wrapText: "true",
    className: "sdn-tableData-p6ZKEayj",
  },
}
