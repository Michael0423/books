import { useState, useEffect } from "react";
import './Pagination.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

export function Pagination({ totalCount, pageCount, onChange }) {
    const [page, setPage] = useState(1);
    let totalPage = Math.ceil(totalCount/pageCount);
    let p = [];
    if(totalPage < 5){
        for (let i = 0; i < totalPage; i++) {
            p.push(i+1);                
        }
    }else{
        if(page < 3){
            p = [1,2,3,4,5];
        }else if(page > totalPage-2){
            p = [totalPage-4, totalPage-3, totalPage-2, totalPage-1, totalPage];
        }else{
            p = [page-2, page-1, page, page+1, page+2];
        }
    }
    const [pageArr, setPageArr] = useState(p);

    useEffect(()=> {
        updatePageArr();
        onChange(page)
    }, [page, pageCount]);
    
    const prevPage = () => {
        if(page === 1) return;

        setPage(pre => pre-1);
    }

    const nextPage = () => {    
        if(page === totalPage) return;

        setPage(pre => pre+1);
    }

    const gotoPage = (p) => {
        setPage(p);
    }

    const updatePageArr = () => {
        let p = [];
        if(totalPage < 5){
            for (let i = 0; i < totalPage; i++) {
                p.push(i+1);                
            }
        }else{
            if(page < 3){
                p = [1,2,3,4,5];
            }else if(page >= totalPage-2){
                p = [totalPage-4, totalPage-3, totalPage-2, totalPage-1, totalPage];
            }else{
                p = [page-2, page-1, page, page+1, page+2];
            }
        }
        
        setPageArr(p);
    }

    const getBtnClass = (btn) => {
        return (btn === page) ? 'btn active' : 'btn';
    }

    return (
        <>
            <div className="pagination">
                <div className="btn" onClick={() => gotoPage(1)}>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </div>
                <div className="btn" onClick={() => prevPage()}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                {
                    
                    pageArr.map(v => {
                        return (
                            <div className={getBtnClass(v)} key={"btn-"+v} onClick={() => gotoPage(v)}>
                                {v}
                            </div>
                        )
                    })
                }
                <div className="btn" onClick={() => nextPage()}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
                <div className="btn" onClick={() => gotoPage(totalPage)}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                </div>
            </div>
        </>
    )
}