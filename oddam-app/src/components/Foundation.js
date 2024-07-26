import Decoration from "../assets/Decoration.png";
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Pagination from "./Pagination";


const posts = [
    {
        id: 1,
        foundation: "Fundacja “Dbam o Zdrowie”",
        aim: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        description: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        id: 2,
        foundation: "Fundacja “Dla dzieci”",
        aim: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        description: "ubrania, meble, zabawki"
    },
    {
        id: 3,
        foundation: "Fundacja “Bez domu”",
        aim: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        description: "ubrania, jedzenie, ciepłe koce"
    },
    {
        id: 4,
        foundation: "Fundacja “Bez domu”",
        aim: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        description: "ubrania, jedzenie, ciepłe koce"
    },
    {
        id: 5,
        foundation: "Fundacja “Dla dzieci”",
        aim: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        description: "ubrania, meble, zabawki"
    },
    {
        id: 6,
        foundation: "Fundacja “Dbam o Zdrowie”",
        aim: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        description: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        id: 7,
        foundation: "Fundacja “Dbam o Zdrowie”",
        aim: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        description: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        id: 8,
        foundation: "Fundacja “Dbam o Zdrowie”",
        aim: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        description: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        id: 9,
        foundation: "Fundacja “Dla dzieci”",
        aim: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        description: "ubrania, meble, zabawki"
    },
];

const Foundation = () => {

 /*   const [blogPosts, setBlogPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };*/

    const arrayDataItems = posts.map(post =>
        <div key={post.id} className="box">
            <div className="box1">
                <div className="box2">
                    <h2>{post.foundation}</h2>
                    <p>{post.aim}</p>
                </div>
                <div className="box3">
                    <p>{post.description}</p>
                </div>
            </div>
            <div className="box4">
            </div>
        </div>
    )

        return (
        <div className="foundation" id="/foundation">
            <div>
                <h1 id="help">Komu pomagamy</h1>
                <img className="decoration2" src={Decoration} alt={"decoration"}/>
            </div>
            <div className="categories">
                <button className="btn3">
                    Fundacjom
                </button>
                <button className="btn3">
                    Organizacjom pozarządowym
                </button>
                <button className="btn3">
                    Lokalnym zbiórkom
                </button>
            </div>
            <div>
                <p className="foundationDescription">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>

            <div className="container">
                <div className="boxy">
                    {arrayDataItems};
                </div>{
                /*<ReactPaginate
                    onPageChange={paginate}
                    pageCount={Math.ceil(blogPosts.length / postsPerPage)}
                    containerClassName={'pagination'}
                    pageLinkClassName={'page-number'}
                    activeLinkClassName={'active'}/>*/
            }
            </div>

        </div>
    );
};

export default Foundation;