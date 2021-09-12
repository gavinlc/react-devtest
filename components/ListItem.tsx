import styled from "styled-components";
import Image from "next/image";
import { device } from "../lib/media";

const ListItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
  margin: 1rem 0;
  height: 4rem;

  @media ${device.mobile} {
    border-bottom: none;
  }
`;

const Item = styled.dl`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  align-items: center;
  @media ${device.mobile} {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const ImageContainer = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border-radius: 2rem;
  overflow: hidden;
`;

const ItemTitle = styled.dt`
  width: 33%;
  @media ${device.mobile} {
    width: 100%;
  }
`;
const ItemDefinition = styled.dd`
  margin-left: auto;
  width: 66%;
  color: #666666;
  @media ${device.mobile} {
    width: 100%;
  }
`;

type Props = {
  title: string;
  definition: string;
  imageSrc?: string;
};

export default function ListItem({ title, definition, imageSrc }: Props) {
  return (
    <ListItemContainer>
      {imageSrc && (
        <ImageContainer>
          <Image
            src={imageSrc || "http://via.placeholder.com/50"}
            alt={`Cover Image for ${title}`}
            layout="responsive"
            width="50"
            height="50"
          />
        </ImageContainer>
      )}
      <Item>
        <ItemTitle>{title}</ItemTitle>
        <ItemDefinition>{definition}</ItemDefinition>
      </Item>
    </ListItemContainer>
  );
}
