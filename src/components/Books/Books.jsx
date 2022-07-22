import { useEffect, useState } from "react";
import { Book } from "./Book"
import './Books.style.css'
import { Pagination } from "../Pagination/Pagination"

export function Books() {
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(5);
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    
    let max = page * pageCount;
    let min = max - pageCount + 1;
    let pageArr = data.filter((v,i) => i+1 >= min && i < max);

    useEffect(() => {
        const max = page * pageCount;
        const min = max - pageCount + 1;
        pageArr = data.filter((v,i) => i+1 >= min && i < max);
    }, [page, pageCount]);
    
    const changePage = (currentPage) => {
        setPage(currentPage);
    }
    const changePageCount = (evt) => {
        const c = evt.target.value;
        setPageCount(c);
    }
    return (
        <>
            <div className="search-bar">
                <input type="text" name="search" placeholder="search" />
                <button>Search</button>

                <select name="pageCount" onChange={changePageCount}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div className="books">
                {
                    pageArr.map(e => {
                        return (<Book key={'book' + e} id={e}></Book>)
                    })
                }
            </div>
            <Pagination totalCount={data.length} pageCount={pageCount} onChange={changePage}></Pagination>
        </>
    )
}