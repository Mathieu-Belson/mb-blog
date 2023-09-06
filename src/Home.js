import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); // we can name the data whatever we want. we are destructuring the object that is returned from the useFetch hook

    return (
      <div className="home">
        {error && <div>{ error }</div>}
        {isPending &&<div>Loading...</div>}
        {blogs && <BlogList blogs={ blogs } title="All blogs"/>} 
      </div>
    );
}

export default Home;