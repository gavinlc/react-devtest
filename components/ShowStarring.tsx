import styled from "styled-components";
import { device } from "../lib/media";
import { CastItem } from "../model/Show";
import ListItem from "./ListItem";

const ShowStarringContainer = styled.div`
  padding: 4rem;
  flex-basis: 50%;
  @media ${device.mobile} {
    padding: 0 2rem 2rem 2rem;
    flex-basis: 100%;
  }
`;

type Props = {
  cast: CastItem[];
};

export default function ShowStarring({ cast }: Props) {
  return (
    <ShowStarringContainer>
      <h3>Starring</h3>
      {cast.map((castMember) => (
        <ListItem
          key={castMember.person.id}
          title={castMember.person.name}
          definition={castMember.character.name}
          imageSrc={
            castMember.person.image?.medium || "http://via.placeholder.com/50"
          }
        ></ListItem>
      ))}
    </ShowStarringContainer>
  );
}
