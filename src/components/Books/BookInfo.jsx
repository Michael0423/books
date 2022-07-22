import { Link, useParams } from "react-router-dom";

export function BookInfo() {
    let { bookId } = useParams();
    
    return (
        <>
            <div><Link to='/books'>Back To Books</Link></div>
            <div>ID: {bookId}</div>
        </>
    )
}