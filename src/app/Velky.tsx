import {FC, PropsWithChildren} from "react";

interface PVelky extends PropsWithChildren{
    image?:string;
    color?:string;
    title:string;
    date:string;
}


export const Velky: FC<PVelky> = (props) =>{
    return (
        <div className="velky" style={{ alignItems: "start"}}>
            <div className="flex flex-col">
                <div className="flex flex-row" style={{ alignItems: "center", gap: "1rem"}}>
                    <h3 style={{ fontSize: "1.5rem"}}>{props.title}</h3>
                    <small>{props.date}</small>
                </div>
                {props.children}
            </div>
            {props.image &&
                <div>
                    <img src={props.image}/>
                </div>
            }
        </div>
    );
}