import Head from "next/head";
import styled from 'styled-components'

import { getAllShows } from "../lib/api";
import { ScheduleItem, Show } from "../model/Show";
import { device } from '../lib/media';

import ShowOverview from "../components/ShowOverview";

type Props = {
  shows: Show[];
};

const HomeContainer = styled.div`
  background-color: white ;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Header = styled.header`
  padding: 4rem 4rem 14rem 4rem;
  background: #e6e6e6;
  @media ${device.mobile} {
    padding: 2rem;
  }
`;

const Main = styled.main`
  padding: 4rem;
  margin-top: -14rem;
  @media ${device.mobile} {
    margin-top: 0;
    padding: 2rem;
  }
`;

const ShowContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0;
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
        <p>Create personalised schedules. Episode guide, cast, crew and character information</p>
      </Header>
      <Main>
        <h2>Latest Added Shows</h2>
        <ShowContainer>
          {shows.map((show) => (
            <ShowOverview key={show.id} show={show}></ShowOverview>
          ))}
        </ShowContainer>
      </Main>
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
