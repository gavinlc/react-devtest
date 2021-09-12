import Image from 'next/image'

import { getAllShows } from "../../lib/api";
import { Show } from "../../model/Show";


type Props = {
  show: Show;
}
export default function ShowDetails({show}: Props) {
 
  if (!show) return <div>Loading...</div>
  
  return (
    <div>
    <h1>{show?.name}</h1>
    <div>
      <Image src={show?.image.medium} alt={show?.name} width="200" height="300"></Image>
    </div>
    </div>
  );
}

export async function getStaticProps({ params }: {params: {id: string}}) {

  const res = await fetch(`https://api.tvmaze.com/shows/${params.id}?embed=cast`)
  const show = await res.json()

  console.log('ShowDetails: getStaticProps: data: ', show);

  return {
    props: { show }
  }

}

export async function getStaticPaths() {
  const allShows = await getAllShows();

  const paths = allShows?.map(({ id }) => `/show/${id}`) ?? [];

  console.log('ShowDetails: getStaticPaths: paths: ', paths);

  return {
    paths,
    fallback: true,
  }
}