import Image from "next/image";
import styled from "styled-components";
import ShowHeader from "../../components/ShowHeader";
import ShowInfo from "../../components/ShowInfo";
import ShowStarring from "../../components/ShowStarring";

import { getAllShows } from "../../lib/api";
import { Show } from "../../model/Show";

type Props = {
  show: Show;
};

const ShowPage = styled.div`
  background: #e6e6e6;
`;
const ShowContent = styled.div`
  display: flex;
  background: white;
  margin-top: -7rem;
`;

export default function ShowDetails({ show }: Props) {
  if (!show) return <div>Loading...</div>;

  const rating = Math.floor(Math.random() * (5 - 0 + 1) + 0);

  return (
    <ShowPage>
      <ShowHeader
        title={show.name}
        rating={rating}
        description={show.summary}
        imageSrc={show.image.medium}
      ></ShowHeader>
      <ShowContent>
        <ShowInfo
          channel={show.network.name}
          schedule={show.schedule}
          status={show.status}
          genres={show.genres}
        ></ShowInfo>
        <ShowStarring cast={show._embedded.cast}></ShowStarring>
      </ShowContent>
    </ShowPage>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://api.tvmaze.com/shows/${params.id}?embed=cast`
  );
  const show = await res.json();

  console.log("ShowDetails: getStaticProps: data: ", show);

  return {
    props: { show },
  };
}

export async function getStaticPaths() {
  const allShows = await getAllShows();

  const paths = allShows?.map(({ id }) => `/show/${id}`) ?? [];

  console.log("ShowDetails: getStaticPaths: paths: ", paths);

  return {
    paths,
    fallback: true,
  };
}
