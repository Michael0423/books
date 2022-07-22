import './Book.style.css'
import { Link } from "react-router-dom"
import blockImg from '../../asset/images/w150h150-block.svg'

export function Book({ id }) {
    
    return (
        <>
            <Link to={'/books/'+id}>
                <div className="book">
                    <div className="book-name">Book {id}</div>
                    <img src={blockImg} alt="book" srcSet="" />
                </div>
            </Link>
        </>
    )
}