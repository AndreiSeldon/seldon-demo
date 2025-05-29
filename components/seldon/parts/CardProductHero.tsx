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

interface CardProductHeroTokens {}

type CardProductHeroProps = HTMLAttributes<HTMLElement> & CardProductHeroTokens;

export const CardProductHero = ({ style, ...props }: CardProductHeroProps) => {
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
          alignItems: "center",
          justifyContent: "center",
          gap: "0.25rem",
          marginTop: "0.25rem",
          marginRight: "0.25rem",
          marginBottom: "0.25rem",
          marginLeft: "0.25rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
      >
        <Tagline
          style={{
            color: "#CEECFF",
            textShadow: "0px 1px 0.125rem hsl(0deg 4% 8% / 33%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Outfit",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.25,
            textAlign: "center",
            whiteSpace: "normal",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            lineClamp: 2,
            WebkitBoxOrient: "vertical",
            boxOrient: "vertical",
          }}
        >
          Museum of the day
        </Tagline>
        <Title
          style={{
            color: "hsl(0deg 4% 98%)",
            textShadow: "0px 1px 0.125rem hsl(0deg 4% 8% / 33%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Merriweather",
            fontStyle: "italic",
            fontSynthesisStyle: "none",
            fontWeight: 500,
            fontSize: "2.002rem",
            lineHeight: 1.25,
            textAlign: "center",
            whiteSpace: "normal",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            lineClamp: 2,
            WebkitBoxOrient: "vertical",
            boxOrient: "vertical",
          }}
        >
          Rijksmuseum
        </Title>
        <Description
          style={{
            color: "hsl(0deg 4% 98%)",
            textShadow: "0px 1px 0.125rem hsl(0deg 4% 8% / 33%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Outfit",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.25,
            textAlign: "center",
            whiteSpace: "normal",
          }}
        >
          Amsterdam, The Netherlands
        </Description>
      </TextblockDetails>
      <ButtonBar
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          alignSelf: "stretch",
          height: "fit-content",
        }}
      >
        <Button
          style={{
            backgroundColor: "hsl(0deg 4% 98% / 15%)",
            cursor: "pointer",
            borderTopWidth: "0.069rem",
            borderTopStyle: "solid",
            borderTopColor: "hsl(0deg 4% 98% / 15%)",
            borderRightWidth: "0.069rem",
            borderRightStyle: "solid",
            borderRightColor: "hsl(0deg 4% 98% / 15%)",
            borderBottomWidth: "0.069rem",
            borderBottomStyle: "solid",
            borderBottomColor: "hsl(0deg 4% 98% / 15%)",
            borderLeftWidth: "0.069rem",
            borderLeftStyle: "solid",
            borderLeftColor: "hsl(0deg 4% 98% / 15%)",
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
            icon="material-add"
          />
          <LabelButton
            style={{
              color: "hsl(0deg 4% 98%)",
              fontFamily: "Outfit",
              fontStyle: "normal",
              fontSynthesisStyle: "none",
              fontWeight: 400,
              fontSize: "0.8rem",
              lineHeight: 1.15,
              letterSpacing: "0.1px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            Follow
          </LabelButton>
        </Button>
        <ButtonIconic
          style={{
            backgroundColor: "hsl(0deg 4% 98% / 15%)",
            cursor: "pointer",
            borderTopWidth: "0.069rem",
            borderTopStyle: "solid",
            borderTopColor: "hsl(0deg 4% 98% / 15%)",
            borderRightWidth: "0.069rem",
            borderRightStyle: "solid",
            borderRightColor: "hsl(0deg 4% 98% / 15%)",
            borderBottomWidth: "0.069rem",
            borderBottomStyle: "solid",
            borderBottomColor: "hsl(0deg 4% 98% / 15%)",
            borderLeftWidth: "0.069rem",
            borderLeftStyle: "solid",
            borderLeftColor: "hsl(0deg 4% 98% / 15%)",
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
            icon="material-upload"
          />
        </ButtonIconic>
      </ButtonBar>
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  backgroundImage:
    "linear-gradient(0deg, hsl(0deg 4% 8%) 0%, hsl(0deg 4% 8% / 0%) 50%), url(/file)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  cursor: "pointer",
  borderTopRightRadius: "1.501rem",
  borderBottomRightRadius: "1.501rem",
  borderBottomLeftRadius: "1.501rem",
  borderTopLeftRadius: "1.501rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "end",
  gap: "1rem",
  paddingTop: "1rem",
  paddingRight: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "1rem",
  boxShadow: "0px 4px 0.375rem 0.125rem hsl(0deg 4% 8% / 15%)",
  alignSelf: "stretch",
  height: "26rem",
};
