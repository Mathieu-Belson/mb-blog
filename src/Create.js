/* eslint-disable no-lone-blocks */
import { useState } from "react";
import { useHistory } from "react-router-dom";
 const Create = () => {
    const [title, setTitle] = useState(''); {/* Ne rien écrire entre les guillemets */}
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mathieu');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); // on invoque le hook useHistory

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/'); // on redirige l'utilisateur vers la page d'accueil (home
        }); {/* On pointe sur les données et on envoie les données au serveur en indiquant le type de requête envoyé */}
    }

    return (  
     <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit ={handleSubmit} >
                <label>Title:</label>
                <input
                 type="text"
                 required
                 value={title}
                 onChange = {(e) => setTitle(e.target.value)}
                 />
                 <label>Content:</label>
                 <textarea
                 required
                 value={body}
                 onChange= {(e) => setBody(e.target.value)}
                 ></textarea>
                 <label>Author:</label>
                 <select
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}
                 >
                    <option value="Mathieu">Mathieu</option>
                    <option value="Peter">Peter</option>
                    <option value="Philips">Philips</option>
                    <option value="Sarah">Sarah</option>
                    <option value="Alex">Alex</option>
                    <option value="Hiroshi">Hiroshi</option>
                 </select>
                 { !isPending && <button>Add Blog</button> }
                 { isPending && <button disabled>Adding blog...</button> }
                 {/* <p>{title}</p>
                 <p>{body}</p>
                 <p>{author}</p> */}
            </form>
     </div>   
    );
}
 
export default Create;