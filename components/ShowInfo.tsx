import styled from "styled-components";
import { device } from "../lib/media";
import { Schedule } from "../model/Show";
import ListItem from "./ListItem";

type Props = {
  channel: string;
  schedule: Schedule;
  status: string;
  genres: string[];
};

const ShowInfoContainer = styled.div`
  padding: 4rem;
  flex-basis: 50%;
  @media ${device.mobile} {
    padding: 2rem 2rem 0 2rem;
    flex-basis: 100%;
  }
`;

export default function ShowInfo({ channel, schedule, status, genres }: Props) {
  const scheduleOutput = schedule.days.join(", ");
  const genresOutput = genres.join(", ");

  return (
    <ShowInfoContainer>
      <h3>Show Info</h3>
      <ListItem title="Streamed On" definition={channel} />
      <ListItem title="Schedule" definition={scheduleOutput} />
      <ListItem title="Status" definition={status} />
      <ListItem title="Genres" definition={genresOutput} />
    </ShowInfoContainer>
  );
}
