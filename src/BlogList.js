const BlogList = ({blogs, title, handleDelete}) => { // props is an object that contains all the props passed to the component
   
    return (
        <div className="blog-list">
            <h2>{ title }</h2> 
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }> {/* each item in the array needs a unique key for react to keep track of it*/ }
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={()=> handleDelete(blog.id)}>Delete</button> {/* the function handleDelete is passed to the component as a prop */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;