"use client"
import {FC, useState} from "react"
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

interface PPedagogRecord{
    title: string;
    text: string;
    number: number;
    handleClicked?: number;
}

const PedagogRecord: FC<PPedagogRecord> = (props) =>{
    const [clicked, setClicked] = useState(false);
    const [clickCount, setClickCount] = useState(props.handleClicked || 0);
    const handleClick = () => {
        console.log("Kliknul jsen na " + props.title);
        setClicked(true);
        setClickCount(clickCount + 1);
    }

    return(
        <>
            <div className="maly" onClick={() => handleClick()} style={{background: clicked ? "red" : "white"}}>
                <div>{props.title}</div>
                <div>{props.text}</div>
                <div>{props.number}</div>
                <div>Počet kliknutí:</div>
                <div>{clickCount}</div>
                {}
            </div>
            {clickCount >= 1 && clickCount % 2 === 0 && <div className="maly">
                <div>Vyučované předměty:</div>
                <div>{props.text}</div>
                <div>Kabinet:</div>
                <div>{props.number}</div>
            </div>
            }
        </>
    );
}

const PedagogickySbor: FC = () =>{
    const pedagogs = [
        {title: "Michal Jakubec", text:"HS, HsC", number: 207 },
        {title: "MKamil Friš", text:"UPG, AS, TWA", number: 218 },
        {title: "Jaroslav Vedral", text:"OS", number: 218 }
    ];

    return <div className="flex flex-col" style={{gap: "2rem"}}>
        {pedagogs.map((item, index) => {
            return <PedagogRecord title={item.title} text={item.text} number={item.number} key={index} />
        })}
    </div>
}

export default PedagogickySbor;