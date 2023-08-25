// create a functional component with snippet
// sfc + tap : stateless functional component
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MB BLOG</h1>
        <div className="links">
          <a href="./">Home</a>
          <a href="./create">New Blog</a>
        </div>
    </nav>
  );
}
 
export default Navbar;