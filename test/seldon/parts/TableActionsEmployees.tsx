/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { Icon } from "../primitives/Icon";
import { LabelButton } from "../primitives/LabelButton";
import { TableData } from "../primitives/TableData";
import { TableHeader } from "../primitives/TableHeader";
import { Frame } from "../frames/Frame";
import { Button } from "../elements/Button";
import { ButtonBar } from "../elements/ButtonBar";
import { ButtonIconic } from "../elements/ButtonIconic";
import { TableRowData } from "../elements/TableRowData";
import { TableRowHeader } from "../elements/TableRowHeader";
import { TableBody } from "../parts/TableBody";
import { TableHead } from "../parts/TableHead";
import { TableStandard } from "../parts/TableStandard";

interface TableActionsEmployeesTokens {}

type TableActionsEmployeesProps = HTMLAttributes<HTMLTableElement> &
  TableActionsEmployeesTokens;

export const TableActionsEmployees = ({
  style,
  ...props
}: TableActionsEmployeesProps) => {
  const styles = style || defaultStyles;

  return (
    <Frame style={styles} {...props}>
      <TableStandard
        style={{
          backgroundColor: "hsl(0deg 0% 100%)",
          cursor: "pointer",
          borderTopWidth: "var(--hairline)",
          borderTopStyle: "solid",
          borderTopColor: "hsl(257deg 25% 45%)",
          borderRightWidth: "var(--hairline)",
          borderRightStyle: "solid",
          borderRightColor: "hsl(257deg 25% 45%)",
          borderBottomWidth: "var(--hairline)",
          borderBottomStyle: "solid",
          borderBottomColor: "hsl(257deg 25% 45%)",
          borderLeftWidth: "var(--hairline)",
          borderLeftStyle: "solid",
          borderLeftColor: "hsl(257deg 25% 45%)",
          overflow: "hidden",
          borderTopRightRadius: "0.25rem",
          borderBottomRightRadius: "0px",
          borderBottomLeftRadius: "0px",
          borderTopLeftRadius: "0.25rem",
          flexWrap: "nowrap",
          alignSelf: "stretch",
          height: "fit-content",
          borderCollapse: "collapse",
        }}
      >
        <TableHead
          style={{
            backgroundColor: "hsl(257deg 25% 45% / 15%)",
            cursor: "pointer",
            overflow: "hidden",
            borderTopRightRadius: "0.25rem",
            borderTopLeftRadius: "0.25rem",
            flexWrap: "nowrap",
            alignSelf: "stretch",
            height: "fit-content",
            verticalAlign: "inherit",
          }}
        >
          <TableRowHeader
            style={{
              cursor: "pointer",
              overflow: "hidden",
              borderTopRightRadius: "0.25rem",
              borderBottomRightRadius: "0.25rem",
              borderBottomLeftRadius: "0.25rem",
              borderTopLeftRadius: "0.25rem",
              flexWrap: "nowrap",
              alignSelf: "stretch",
              height: "fit-content",
              verticalAlign: "inherit",
            }}
          >
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              ID
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              First
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Last
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Role
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Building
            </TableHeader>
          </TableRowHeader>
        </TableHead>
        <TableBody
          style={{
            cursor: "pointer",
            overflow: "hidden",
            flexWrap: "nowrap",
            alignSelf: "stretch",
            height: "fit-content",
            verticalAlign: "inherit",
          }}
        >
          <TableRowData
            style={{
              cursor: "pointer",
              borderTopWidth: "0.031rem",
              borderTopStyle: "solid",
              borderTopColor: "hsl(276deg 38% 95%)",
              overflow: "hidden",
              flexWrap: "nowrap",
              alignSelf: "stretch",
              height: "fit-content",
              verticalAlign: "inherit",
            }}
          >
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              US-0001
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Andrei
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Herasimchuk
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              CEO
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              AMS
            </TableData>
          </TableRowData>
          <TableRowData
            style={{
              cursor: "pointer",
              borderTopWidth: "0.031rem",
              borderTopStyle: "solid",
              borderTopColor: "hsl(276deg 38% 95%)",
              overflow: "hidden",
              flexWrap: "nowrap",
              alignSelf: "stretch",
              height: "fit-content",
              verticalAlign: "inherit",
            }}
          >
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              NL-0002
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Emil
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Rijcken
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              AI Lead
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              UTR
            </TableData>
          </TableRowData>
          <TableRowData
            style={{
              cursor: "pointer",
              borderTopWidth: "0.031rem",
              borderTopStyle: "solid",
              borderTopColor: "hsl(276deg 38% 95%)",
              overflow: "hidden",
              flexWrap: "nowrap",
              alignSelf: "stretch",
              height: "fit-content",
              verticalAlign: "inherit",
            }}
          >
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              DR-0003
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Lior
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Oren
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              CTO
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              HMB
            </TableData>
          </TableRowData>
          <TableRowData
            style={{
              cursor: "pointer",
              borderTopWidth: "0.031rem",
              borderTopStyle: "solid",
              borderTopColor: "hsl(276deg 38% 95%)",
              overflow: "hidden",
              flexWrap: "nowrap",
              alignSelf: "stretch",
              height: "fit-content",
              verticalAlign: "inherit",
            }}
          >
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              DR-0003
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Matheiu
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Schaafsma
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Media
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              UTR
            </TableData>
          </TableRowData>
          <TableRowData
            style={{
              cursor: "pointer",
              borderTopWidth: "0.031rem",
              borderTopStyle: "solid",
              borderTopColor: "hsl(276deg 38% 95%)",
              overflow: "hidden",
              flexWrap: "nowrap",
              alignSelf: "stretch",
              height: "fit-content",
              verticalAlign: "inherit",
            }}
          >
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              DR-0003
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Sir
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Bentley
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              CHO
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(264deg 8% 12%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Roboto",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                letterSpacing: "0.5px",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              AMS
            </TableData>
          </TableRowData>
        </TableBody>
      </TableStandard>
      <ButtonBar
        style={{
          borderTopWidth: "var(--hairline)",
          borderTopStyle: "solid",
          borderTopColor: "hsl(257deg 25% 45%)",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "0.25rem",
          borderBottomLeftRadius: "0.25rem",
          borderTopLeftRadius: "0px",
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "end",
          gap: "1rem",
          paddingTop: "0.5rem",
          paddingRight: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "0.5rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
      >
        <Button
          style={{
            backgroundColor: "hsl(257deg 25% 45%)",
            cursor: "pointer",
            borderTopWidth: "0.069rem",
            borderTopStyle: "solid",
            borderTopColor: "hsl(257deg 25% 45%)",
            borderRightWidth: "0.069rem",
            borderRightStyle: "solid",
            borderRightColor: "hsl(257deg 25% 45%)",
            borderBottomWidth: "0.069rem",
            borderBottomStyle: "solid",
            borderBottomColor: "hsl(257deg 25% 45%)",
            borderLeftWidth: "0.069rem",
            borderLeftStyle: "solid",
            borderLeftColor: "hsl(257deg 25% 45%)",
            borderTopRightRadius: "99999px",
            borderBottomRightRadius: "99999px",
            borderBottomLeftRadius: "99999px",
            borderTopLeftRadius: "99999px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            paddingTop: "0.5rem",
            paddingRight: "0.875rem",
            paddingBottom: "0.5rem",
            paddingLeft: "0.75rem",
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <Icon
            style={{ color: "hsl(0deg 4% 98%)", fontSize: "0.8rem" }}
            icon="material-search"
          />
          <LabelButton
            style={{
              color: "hsl(0deg 4% 98%)",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontSynthesisStyle: "none",
              fontWeight: 500,
              fontSize: "0.8rem",
              lineHeight: 1.15,
              letterSpacing: "0.1px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            Search
          </LabelButton>
        </Button>
        <ButtonIconic
          style={{
            backgroundColor: "hsl(257deg 25% 45%)",
            cursor: "pointer",
            borderTopWidth: "0.069rem",
            borderTopStyle: "solid",
            borderTopColor: "hsl(257deg 25% 45%)",
            borderRightWidth: "0.069rem",
            borderRightStyle: "solid",
            borderRightColor: "hsl(257deg 25% 45%)",
            borderBottomWidth: "0.069rem",
            borderBottomStyle: "solid",
            borderBottomColor: "hsl(257deg 25% 45%)",
            borderLeftWidth: "0.069rem",
            borderLeftStyle: "solid",
            borderLeftColor: "hsl(257deg 25% 45%)",
            borderTopRightRadius: "99999px",
            borderBottomRightRadius: "99999px",
            borderBottomLeftRadius: "99999px",
            borderTopLeftRadius: "99999px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "0.5rem",
            paddingRight: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "0.5rem",
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <Icon
            style={{ color: "hsl(0deg 4% 98%)", fontSize: "0.8rem" }}
            icon="material-moreHoriz"
          />
        </ButtonIconic>
      </ButtonBar>
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 0% 100%)",
  cursor: "pointer",
  borderTopWidth: "var(--hairline)",
  borderTopStyle: "solid",
  borderTopColor: "hsl(257deg 25% 45%)",
  borderRightWidth: "var(--hairline)",
  borderRightStyle: "solid",
  borderRightColor: "hsl(257deg 25% 45%)",
  borderBottomWidth: "var(--hairline)",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(257deg 25% 45%)",
  borderLeftWidth: "var(--hairline)",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(257deg 25% 45%)",
  overflow: "hidden",
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0px 3px 0.375rem 0.125rem hsl(264deg 8% 12% / 12%)",
  alignSelf: "stretch",
  height: "fit-content",
};
