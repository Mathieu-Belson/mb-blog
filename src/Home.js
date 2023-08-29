import { useState, useEffect } from 'react'; // this is a hook that allows us to use state in a functional component
import BlogList from './BlogList';

const Home = () => { // this is a functional component and the data is initiliazed here
  const [blogs, setBlogs] = useState([   //* useState is used because the blog preview will be interactive delete or modify options later
    { title: 'Bonjour du Japon', body: 'yoyoyoyo...', author: 'Mathieu', id: 1 }, // id is unique
    { title: 'Bonjour de Kawasaki', body: 'yoyoyoyo...', author: 'Peter', id: 2 },
    { title: 'Bonjour de la maison', body: 'yoyoyoyo...', author: 'Philips', id: 3 }
  ]);

  const [name, setName] = useState('Mario');

  const handleClick = () => {
    if (name === 'Mario') {
        setName('Luigi');
    } else {
        setName('Mario');
    }
};

  const handleDelete = (id) => { // this function is passed to BlogList component as a prop. const handleDelete is in the scope of Home component. That allows us to modify the state of the blogs array.
    const newBlogs = blogs.filter(blog => blog.id !== id ); // filter returns a new array with the items that return true in the function
    setBlogs(newBlogs); // setBlogs is a function that allows us to modify the state of the blogs array
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]); // useEffect gonna watch for changes in the name variable.  
  //If there is a change, it will run the function inside useEffect. 
  // If there is no variable, it will run the function only once at the beginning.

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/> {/* blogs is a prop that is passed to BlogList component. */}
            <button onClick= {(handleClick)}>Change name</button>
            <p>{ name }</p>
        </div>
     );
}

export default Home;