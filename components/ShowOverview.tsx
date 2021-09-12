import Link from "next/link";
import Image from "next/image";

import { Show } from "../model/Show";
import styled from "styled-components";
import StarRating from "./StarRating";
import { device } from "../lib/media";

type Props = {
  show: Show;
};

const ShowOverviewWrapper = styled.li`
  max-width: 200px;
  width: 200px;
  list-style: none;
  margin-bottom: 2rem;

  @media ${device.mobile} {
    width: 45%;
    margin-right: 5%;
    margin-bottom: 1rem;

    :nth-child(even){
      margin-right: 0;
      margin-left: 5%;
    }

  }

`;

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
`;

const ShowName = styled.h3`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

export default function ShowOverview({ show }: Props) {
  const image = (
    <Image
      src={show.image?.medium || "http://via.placeholder.com/300"}
      alt={`Cover Image for ${show.name}`}
      layout="responsive"
      width="300"
      height="400"
    />
  );

  const rating = Math.floor(Math.random() * (5 - 0 + 1) + 0);

  if (!show) return <p>Loading...</p>;

  return (
    <ShowOverviewWrapper key={show.id}>
      <Link as={`/show/${show.id}`} href={`/show/${show.id}`}>
        <a aria-label={show.name}>
          <ImageWrapper>
            {image}
          </ImageWrapper>
          <StarRating rating={rating} />
          <ShowName>{show.name}</ShowName>
        </a>
      </Link>
    </ShowOverviewWrapper>
  );
}
