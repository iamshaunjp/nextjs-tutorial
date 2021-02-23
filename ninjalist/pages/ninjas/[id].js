export const getStaticPaths = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        // paths: paths
        // line above is same as below (shorter)
        paths,
        fallback: false
    }
}


// this function runs as many times as there are items in what you fetch
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    
    return {
        props: { ninja: data }
    }
    
}




const Details = ({ ninja }) => {
    

    return ( 
        <div>
            <h1>Details Page</h1>
            <h2>{ ninja.name }</h2>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            {/* <p>{ ninja.address.city }</p> */}
        </div>
     );
}
 
export default Details;