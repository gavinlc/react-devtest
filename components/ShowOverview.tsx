import Link from "next/link";
import Image from "next/image";

import { Show } from "../model/Show";

type Props = {
  show: Show;
};

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

  if (!show) return <p>Loading...</p>;

  return (
    <li key={show.id}>
      <Link as={`/show/${show.id}`} href={`/show/${show.id}`}>
        <a aria-label={show.name}>
          {image}
          <h3>{show.name}</h3>
        </a>
      </Link>
    </li>
  );
}
