import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
      <>
        <Head>
          <title>Home Pg</title>
          <meta name="keywords" content="keyword, another"/>
        </Head>   
        {/* // <div className={styles.container}> */}
        <div>
            <h1 className={styles.title}>Home Page</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque rerum quidem quia voluptatem, voluptatum sint unde error iusto consequatur reiciendis corrupti distinctio expedita sed labore? Corrupti vel vero voluptas delectus non! Corporis laudantium culpa inventore illum beatae quas, asperiores optio dolores dignissimos odio?</p>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A incidunt quae, rem necessitatibus minus dolores! Magni, incidunt asperiores?</p>
            <Link href="ninjas">
            <a className={styles.btn}>See Ninja Listing</a>
            </Link>
        </div>
      </>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
  )
}
