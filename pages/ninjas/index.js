import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default Ninjas;