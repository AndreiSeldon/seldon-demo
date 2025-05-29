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
import { TableRowFooter } from "../elements/TableRowFooter";
import { TableRowHeader } from "../elements/TableRowHeader";
import { TableBody } from "../parts/TableBody";
import { TableFoot } from "../parts/TableFoot";
import { TableHead } from "../parts/TableHead";
import { TableStandard } from "../parts/TableStandard";

interface TableActionsTokens {}

type TableActionsProps = HTMLAttributes<HTMLTableElement> & TableActionsTokens;

export const TableActions = ({ style, ...props }: TableActionsProps) => {
  const styles = style || defaultStyles;

  return (
    <Frame style={styles} {...props}>
      <TableStandard
        style={{
          backgroundColor: "hsl(0deg 4% 98%)",
          cursor: "pointer",
          borderTopWidth: "var(--hairline)",
          borderTopStyle: "solid",
          borderTopColor: "hsl(0deg 0% 15%)",
          borderRightWidth: "var(--hairline)",
          borderRightStyle: "solid",
          borderRightColor: "hsl(0deg 0% 15%)",
          borderBottomWidth: "var(--hairline)",
          borderBottomStyle: "solid",
          borderBottomColor: "hsl(0deg 0% 15%)",
          borderLeftWidth: "var(--hairline)",
          borderLeftStyle: "solid",
          borderLeftColor: "hsl(0deg 0% 15%)",
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
            backgroundColor: "hsl(0deg 0% 15% / 15%)",
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
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
            </TableHeader>
          </TableRowHeader>
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
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
            </TableHeader>
            <TableHeader
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Column
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
              borderTopColor: "hsl(0deg 4% 56%)",
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
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
          </TableRowData>
          <TableRowData
            style={{
              cursor: "pointer",
              borderTopWidth: "0.031rem",
              borderTopStyle: "solid",
              borderTopColor: "hsl(0deg 4% 56%)",
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
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
          </TableRowData>
          <TableRowData
            style={{
              cursor: "pointer",
              borderTopWidth: "0.031rem",
              borderTopStyle: "solid",
              borderTopColor: "hsl(0deg 4% 56%)",
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
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
          </TableRowData>
        </TableBody>
        <TableFoot
          style={{
            backgroundColor: "hsl(0deg 0% 15% / 25%)",
            cursor: "pointer",
            overflow: "hidden",
            flexWrap: "nowrap",
            alignSelf: "stretch",
            height: "fit-content",
            verticalAlign: "inherit",
          }}
        >
          <TableRowFooter
            style={{
              cursor: "pointer",
              borderTopWidth: "0.031rem",
              borderTopStyle: "solid",
              borderTopColor: "hsl(0deg 0% 15%)",
              overflow: "hidden",
              borderTopRightRadius: "0.25rem",
              borderBottomRightRadius: "0.25rem",
              borderBottomLeftRadius: "0.25rem",
              borderTopLeftRadius: "0.25rem",
              flexWrap: "nowrap",
              alignSelf: "stretch",
              height: "fit-content",
            }}
          >
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
            <TableData
              style={{
                cursor: "pointer",
                color: "hsl(0deg 4% 8%)",
                paddingTop: "0.5rem",
                paddingRight: "0.5rem",
                paddingBottom: "0.5rem",
                paddingLeft: "0.5rem",
                alignSelf: "stretch",
                height: "fit-content",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.25,
                textAlign: "left",
                whiteSpace: "normal",
                verticalAlign: "inherit",
              }}
            >
              Cell
            </TableData>
          </TableRowFooter>
        </TableFoot>
      </TableStandard>
      <ButtonBar
        style={{
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
            backgroundColor: "hsl(0deg 0% 15%)",
            cursor: "pointer",
            borderTopWidth: "0.069rem",
            borderTopStyle: "solid",
            borderTopColor: "hsl(0deg 0% 15%)",
            borderRightWidth: "0.069rem",
            borderRightStyle: "solid",
            borderRightColor: "hsl(0deg 0% 15%)",
            borderBottomWidth: "0.069rem",
            borderBottomStyle: "solid",
            borderBottomColor: "hsl(0deg 0% 15%)",
            borderLeftWidth: "0.069rem",
            borderLeftStyle: "solid",
            borderLeftColor: "hsl(0deg 0% 15%)",
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
            icon="__default__"
          />
          <LabelButton
            style={{
              color: "hsl(0deg 4% 98%)",
              fontFamily: "Inter",
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
            Label
          </LabelButton>
        </Button>
        <ButtonIconic
          style={{
            backgroundColor: "hsl(0deg 0% 15%)",
            cursor: "pointer",
            borderTopWidth: "0.069rem",
            borderTopStyle: "solid",
            borderTopColor: "hsl(0deg 0% 15%)",
            borderRightWidth: "0.069rem",
            borderRightStyle: "solid",
            borderRightColor: "hsl(0deg 0% 15%)",
            borderBottomWidth: "0.069rem",
            borderBottomStyle: "solid",
            borderBottomColor: "hsl(0deg 0% 15%)",
            borderLeftWidth: "0.069rem",
            borderLeftStyle: "solid",
            borderLeftColor: "hsl(0deg 0% 15%)",
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
            icon="__default__"
          />
        </ButtonIconic>
      </ButtonBar>
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  cursor: "pointer",
  borderTopWidth: "var(--hairline)",
  borderTopStyle: "solid",
  borderTopColor: "hsl(0deg 0% 15%)",
  borderRightWidth: "var(--hairline)",
  borderRightStyle: "solid",
  borderRightColor: "hsl(0deg 0% 15%)",
  borderBottomWidth: "var(--hairline)",
  borderBottomStyle: "solid",
  borderBottomColor: "hsl(0deg 0% 15%)",
  borderLeftWidth: "var(--hairline)",
  borderLeftStyle: "solid",
  borderLeftColor: "hsl(0deg 0% 15%)",
  overflow: "hidden",
  borderTopRightRadius: "0.25rem",
  borderBottomRightRadius: "0.25rem",
  borderBottomLeftRadius: "0.25rem",
  borderTopLeftRadius: "0.25rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  alignSelf: "stretch",
  height: "fit-content",
};
