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
import { Title } from "../primitives/Title";
import { Frame } from "../frames/Frame";
import { Button } from "../elements/Button";
import { ButtonBar } from "../elements/ButtonBar";
import { TextblockDetails } from "../elements/TextblockDetails";

interface CardProductFeaturedTokens {}

type CardProductFeaturedProps = HTMLAttributes<HTMLElement> &
  CardProductFeaturedTokens;

export const CardProductFeatured = ({
  style,
  ...props
}: CardProductFeaturedProps) => {
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
          alignItems: "start",
          justifyContent: "start",
          gap: "0.5rem",
          alignSelf: "stretch",
          flex: "1 0 0",
        }}
      >
        <Title
          style={{
            color: "hsl(0deg 4% 98%)",
            textShadow: "0px 1px 0.125rem hsl(0deg 4% 8% / 33%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Lexend",
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
          Domplein 2
        </Title>
        <Description
          style={{
            color: "hsl(0deg 4% 98%)",
            textShadow: "0px 1px 0.125rem hsl(0deg 4% 8% / 33%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 600,
            fontSize: "0.875rem",
            lineHeight: 1.25,
            whiteSpace: "normal",
          }}
        >
          3512 JE Utrecht
        </Description>
        <Description
          style={{
            color: "hsl(0deg 4% 98%)",
            textShadow: "0px 1px 0.125rem hsl(0deg 4% 8% / 33%)",
            alignSelf: "stretch",
            height: "fit-content",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontSynthesisStyle: "none",
            fontWeight: 600,
            fontSize: "0.875rem",
            lineHeight: 1.25,
            whiteSpace: "normal",
          }}
        >
          €490.000
        </Description>
      </TextblockDetails>
      <ButtonBar
        style={{
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
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
            backgroundColor: "hsl(0deg 4% 8% / 50%)",
            cursor: "pointer",
            borderTopRightRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            borderBottomLeftRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem",
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
            icon="material-person"
          />
          <LabelButton
            style={{
              color: "hsl(0deg 4% 98%)",
              fontFamily: "Manrope",
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
            4
          </LabelButton>
        </Button>
        <Button
          style={{
            backgroundColor: "hsl(0deg 4% 8% / 50%)",
            cursor: "pointer",
            borderTopRightRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            borderBottomLeftRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem",
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
            icon="material-fullscreen"
          />
          <LabelButton
            style={{
              color: "hsl(0deg 4% 98%)",
              fontFamily: "Manrope",
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
            150 m²
          </LabelButton>
        </Button>
      </ButtonBar>
    </Frame>
  );
};

const defaultStyles: CSSProperties = {
  backgroundColor: "hsl(0deg 4% 98%)",
  backgroundImage:
    "linear-gradient(0deg, hsl(0deg 4% 8% / 66%) 0%, hsl(0deg 4% 8% / 0%) 33%), url(/seldon/11165ecf-e5ab-46f9-a499-27338bf50b8e.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  cursor: "pointer",
  borderTopRightRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
  borderBottomLeftRadius: "0.5rem",
  borderTopLeftRadius: "0.5rem",
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
  alignItems: "end",
  justifyContent: "space-between",
  gap: "auto",
  paddingTop: "1rem",
  paddingRight: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "1rem",
  boxShadow: "0px 4px 0.375rem 0.125rem hsl(0deg 4% 8% / 15%)",
  alignSelf: "stretch",
  height: "24rem",
};
