import React, { useState } from 'react';

const posts = [
    {
        id: 1,
        foundation: "Zbiórka dla ubogich rodzin",
        aim: "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        description: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        id: 2,
        foundation: "Zbiórka chore psiaki",
        aim: "Cel i misja: Pomoc chorym zwierzętom.",
        description: "koce, leki, jedzenie"
    },
    {
        id: 3,
        foundation: "Zbiórka na nowy dom",
        aim: "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.",
        description: "ubrania, jedzenie, ciepłe koce"
    },
];
const FSection3 = () => {
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

export default FSection3;