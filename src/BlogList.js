const BlogList = (props) => { // props object is passed to the component
    //or const BlogList = ({blogs, title}) => {    // destructuring props object
    const blogs = props.blogs;
    const title = props.title;
    console.log(props, blogs);

    return (
        <div className="blog-list">
            <h2>{ title }</h2> 
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }> {/* each item in the array needs a unique key for react to keep track of it*/ }
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;