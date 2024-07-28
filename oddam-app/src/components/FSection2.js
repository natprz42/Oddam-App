import React, { useState } from 'react';

const posts = [
    {
        id: 1,
        foundation: "Stowarzyszenie Obrona Zwierząt",
        aim: "Cel i misja: Pomoc zwierzętom",
        description: "jedzenie, zabawki, koce, poduszki"
    },
    {
        id: 2,
        foundation: "Stowarzyszenie Przyjaciół Integracji",
        aim: "Cel i misja: Pomoc dzieciom z ubogich rodzin.",
        description: "ubrania, zabawki, ksiązki"
    },
    {
        id: 3,
        foundation: "PasjoNacja",
        aim: "Cel i misja: Pomoc osobom w rozwijaniu ich pasji",
        description: "sprzęt sportowy, akcesoria do malowania"
    },
    {
        id: 4,
        foundation: "Bezpieczny Port",
        aim: "Cel i misja: Pomoc młodym artystom",
        description: "ksiązki, gazety, akcesoria do malowania"
    },
    {
        id: 5,
        foundation: "Akademia Głuchych",
        aim: "Cel i misja: Pomoc osobom niepełnosprawnym.",
        description: "ubrania, meble, zabawki"
    },
    {
        id: 6,
        foundation: "PasjoNacja",
        aim: "Cel i misja: Pomoc osobom w rozwijaniu ich pasji",
        description: "sprzęt sportowy, akcesoria do malowania"
    },
];
const FSection2 = () => {
    const [current,setCurrent] = useState(1)
    const [count,setCount] = useState(3)
    const [activePg,setActivePg] =useState(1)

    const last = current * count;
    const first = last - count;

    const values = posts.slice(first,last);


    const buttonCount = []
    for(let i=1;i<=Math.ceil(posts.length/count);i++){
        buttonCount.push(i)
    }

    const handleClick =(i)=>{
        console.log(i)
        setCurrent(i)
        setActivePg(i)
    }

    const arrayDataItems = values.map((post) =>
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
        <div>
            <div className="container">
                {arrayDataItems};
                <div className="paginationBtn">
                    {
                        buttonCount.map((btn)=>
                            <button key={btn} className={btn===activePg?"active":""} onClick={()=>handleClick(btn)}>{btn}</button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default FSection2;