/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { Description } from "../primitives/Description";
import { Icon } from "../primitives/Icon";
import { LabelButton } from "../primitives/LabelButton";
import { Tagline } from "../primitives/Tagline";
import { Title } from "../primitives/Title";
import { Frame } from "../frames/Frame";
import { Button } from "../elements/Button";
import { ButtonBar } from "../elements/ButtonBar";
import { ButtonIconic } from "../elements/ButtonIconic";
import { TextblockDetails } from "../elements/TextblockDetails";

interface CardProductTokens {}

type CardProductProps = HTMLAttributes<HTMLElement> & CardProductTokens;

export const CardProduct = ({ style, ...props }: CardProductProps) => {
  const styles = style || defaultStyles;

  return (
    <Frame style={styles} {...props}>
      <TextblockDetails
        style={{
          cursor: "pointer",
          borderBottomStyle: "none",
          overflow: "hidden",
          flexWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
      >
        <Tagline
          style={{
            color: "hsl(0deg 4% 98%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 500,
            fontSize: "0.75rem",
            lineHeight: 1.25,
            whiteSpace: "normal",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            lineClamp: 2,
            WebkitBoxOrient: "vertical",
            boxOrient: "vertical",
          }}
        >
          Tagline
        </Tagline>
        <Title
          style={{
            color: "hsl(0deg 4% 98%)",
            marginBottom: "1rem",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 600,
            fontSize: "2.002rem",
            lineHeight: 1.25,
            whiteSpace: "normal",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            lineClamp: 2,
            WebkitBoxOrient: "vertical",
            boxOrient: "vertical",
          }}
        >
          Product Card Title
        </Title>
        <Description
          style={{
            color: "hsl(0deg 4% 98%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 500,
            fontSize: "0.75rem",
            lineHeight: 1.25,
            whiteSpace: "normal",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          purus. Donec euismod in fringilla.
        </Description>
      </TextblockDetails>
      <ButtonBar
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          width: "fit-content",
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
  backgroundImage:
    "linear-gradient(90deg, hsl(0deg 0% 15% / 80%) 0%, hsl(0deg 0% 15% / 0%) 75%), url(/image-default.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  cursor: "pointer",
  borderTopRightRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
  borderBottomLeftRadius: "0.5rem",
  borderTopLeftRadius: "0.5rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-between",
  gap: "auto",
  boxShadow: "0px 2px 0.375rem 0.125rem hsl(0deg 4% 8% / 15%)",
  alignSelf: "stretch",
  height: "fit-content",
};
