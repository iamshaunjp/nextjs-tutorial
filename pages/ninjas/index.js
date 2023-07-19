import Head from "next/dist/next-server/lib/head";
import styles from "../../styles/Ninjas.module.css"
export const getStaticProps = async () => {
  const url = "https://jsonplaceholder.typicode.com/users"
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: { ninjas: data }
  }
}
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <Head><title>Ninjas</title></Head>
      <h1>All Ninjas</h1>
      {
        ninjas.map(ninja => (
          <div key={ninja.id}>
            <a className={styles.single}>
              <h3>{ ninja.name}</h3>
            </a>
          </div>
        ))
      }
    </div>
  );
}

export default Ninjas;