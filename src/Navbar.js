// create a functional component with snippet
// sfc + tap : stateless functional component
import { Link } from 'react-router-dom'; // Link is a component that we import from react-router-dom. It is a component that we use to create links in our application.

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MB BLOG</h1>
        <div className="links">
          <Link to="./">Home</Link> {/* Link is a component that we import from react-router-dom. It is a component that we use to create links in our application. */}
          <Link to="./create">New Blog</Link>
        </div>
    </nav>  
  );
}
 
export default Navbar;