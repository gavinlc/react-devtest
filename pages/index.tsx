import Head from "next/head";
import styled from 'styled-components'

import { getAllShows } from "../lib/api";
import { ScheduleItem, Show } from "../model/Show";

import ShowOverview from "../components/ShowOverview";

type Props = {
  shows: Show[];
};

const HomeContainer = styled.div`
  background-color: green;
`;

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Header = styled.header`
  padding: 4rem;
  background: #e6e6e6;
`;

function Home({ shows }: Props) {
  return (
    <HomeContainer>
      <Head>
        <title>TV Bland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Title>TV Bland</Title>
        <p>TV Show and web series database</p>
        <p>
          Create personalised schedules. Episode guide, cast, crew and character
          information
        </p>
      </Header>
      <main>
        <h2>Latest Added Shows</h2>
        <ul>
          {shows.map((show) => (
            <ShowOverview key={show.id} show={show}></ShowOverview>
          ))}
        </ul>
      </main>
    </HomeContainer>
  );
}

export async function getStaticProps() {
  const shows = await getAllShows();

  if (!shows) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      shows,
    },
  };
}

export default Home;
