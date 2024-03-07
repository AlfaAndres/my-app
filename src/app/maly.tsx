import {FC, PropsWithChildren} from "react";

interface PMaly extends PropsWithChildren{
    href: string;
    color: string;
}
export const Maly: FC<PMaly> = (props) =>{
    console.log(props);
    return (
        <div className="maly" style={{ background: props.color }}>
            {props.children}
            <p>-</p>
            <a href={props.href}>
            <button>Prozkoumat</button>
            </a>
        </div>
    )
}