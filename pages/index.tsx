import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { getAllShows } from '../lib/api'
import { ScheduleItem, Show } from '../model/Show'
import styles from '../styles/Home.module.css'

type Props = {
  shows: Show[]
}

function Home({shows}: Props) {
 return (
   <ul>
     {shows.map((show) => (
        <li key={show.id}>
          <Link as={`/show/${show.id}`} href={`/show/${show.id}`}>
           <a>{show.name}</a>
          </Link>
          </li>
      ))}
   </ul>
 )
}
// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
        
//       </main>

//       <footer className={styles.footer}>
        
//       </footer>
//     </div>
//   )
// }

export async function getStaticProps() {
  
  const shows = await getAllShows();

  if (!shows) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      shows
    },
  }
}


export default Home
