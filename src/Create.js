const Create = () => {
    return (  
     <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Title:</label>
                <input
                 type="text"
                 required
                 />
                 <label>Content:</label>
                 <textarea
                 required
                 ></textarea>
                 <label>Author:</label>
                 <select >
                    <option value="Mathieu">Mathieu</option>
                    <option value="Peter">Peter</option>
                    <option value="Philips">Philips</option>
                    <option value="Sarah">Sarah</option>
                    <option value="Alex">Alex</option>
                    <option value="Hiroshi">Hiroshi</option>
                 </select>
                 <button>Add Blog</button>
            </form>
     </div>   
    );
}
 
export default Create;