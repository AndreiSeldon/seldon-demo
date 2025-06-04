/**
 * This code was generated using Seldon (https://seldon.app)
 * Licensed under the Terms of Use: https://seldon.app/terms
 * Do not redistribute or sublicense without permission.
 */
import { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { Description } from "../primitives/Description";
import { Icon } from "../primitives/Icon";
import { Tagline } from "../primitives/Tagline";
import { Title } from "../primitives/Title";
import { Frame } from "../frames/Frame";
import { ButtonBar } from "../elements/ButtonBar";
import { ButtonIconic } from "../elements/ButtonIconic";
import { TextblockDetails } from "../elements/TextblockDetails";

interface CardProductRatingTokens {}

type CardProductRatingProps = HTMLAttributes<HTMLElement> &
  CardProductRatingTokens;

export const CardProductRating = ({
  style,
  ...props
}: CardProductRatingProps) => {
  const styles = style || defaultStyles;

  return (
    <Frame style={styles} {...props}>
      <ButtonBar
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "end",
          gap: "1rem",
          marginTop: "1rem",
          marginRight: "1rem",
          marginBottom: "1rem",
          marginLeft: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
      >
        <ButtonIconic
          style={{
            backgroundColor: "hsl(0deg 4% 98%)",
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
            boxShadow: "0px 2px 0.375rem 0.125rem hsl(0deg 4% 8% / 33%)",
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <Icon
            style={{ color: "hsl(0deg 4% 98%)", fontSize: "1rem" }}
            icon="material-upload"
          />
        </ButtonIconic>
        <ButtonIconic
          style={{
            backgroundColor: "hsl(0deg 4% 98%)",
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
            boxShadow: "0px 2px 0.375rem 0.125rem hsl(0deg 4% 8% / 33%)",
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <Icon
            style={{ color: "hsl(0deg 4% 98%)", fontSize: "1rem" }}
            icon="material-favorite"
          />
        </ButtonIconic>
      </ButtonBar>
      <TextblockDetails
        style={{
          cursor: "pointer",
          borderBottomStyle: "none",
          overflow: "hidden",
          flexWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
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
            color: "hsl(60deg 100% 46%)",
            textShadow: "0px 1px 0.125rem hsl(0deg 4% 8% / 33%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Quicksand",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 600,
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
          ★ 4.6 stars
        </Tagline>
        <Title
          style={{
            color: "hsl(0deg 4% 98%)",
            textShadow: "0px 1px 0.125rem hsl(0deg 4% 8% / 33%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Quicksand",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 700,
            fontSize: "1.501rem",
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
          Berkeley Springs
        </Title>
        <Description
          style={{
            color: "hsl(0deg 4% 98%)",
            textShadow: "0px 1px 0.125rem hsl(0deg 4% 8% / 33%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Quicksand",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.25,
            whiteSpace: "normal",
          }}
        >
          Feb 4-9 · $100-200
        </Description>
      </TextblockDetails>
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  backgroundImage:
    "linear-gradient(0deg, hsl(0deg 4% 8%) 0%, hsl(0deg 4% 8% / 0%) 50%), url(/seldon/f7ff6be2-864c-4c8f-a2c2-6b878433334c.png)",
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
  boxShadow: "0px 4px 0.375rem 0.125rem hsl(0deg 4% 8% / 15%)",
  alignSelf: "stretch",
  height: "22rem",
};
