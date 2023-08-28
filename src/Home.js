import { useState } from 'react'; // this is a hook that allows us to use state in a functional component
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlog] = useState([   //* useState is used because the blog preview will be interactive delete or modify options later
    { title: 'Bonjour du Japon', body: 'yoyoyoyo...', author: 'Mathieu', id: 1 }, // id is unique
    { title: 'Bonjour de Kawasaki', body: 'yoyoyoyo...', author: 'Peter', id: 2 },
    { title: 'Bonjour de la maison', body: 'yoyoyoyo...', author: 'Philips', id: 3 }
  ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/> {/* blogs is a prop that is passed to BlogList component. */}
        </div>
     );
}

export default Home;