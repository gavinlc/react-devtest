import { ScheduleItem } from "../model/Show";

export async function getAllShows() {
  const res = await fetch("https://api.tvmaze.com/schedule?country=GB");
  const items: ScheduleItem[] = await res.json();

  //map items to shows
  const allShows = items.map((entry) => entry.show);
  //filter out duplicates
  const shows = allShows.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  );

  return shows;
}
