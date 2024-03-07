"use client"
import React, {FC, useState} from "react";

const Counter: FC = () => {
    const [clickCount1, setClickCount1] = useState(0);
    const [clickCount2, setClickCount2] = useState(0);
    const [totalClickCount, setTotalClickCount] = useState(0);

    const handleBlueClick = () => {
        setClickCount1(prevCount => prevCount + 1);
        setTotalClickCount(prevCount => prevCount + 1);
    };
0
    const handleRedClick = () => {
        setClickCount2(prevCount => prevCount + 1);
        setTotalClickCount(prevCount => prevCount - 1);
    };

    return (
        <div className="flex flex-col">
            <p className="text-green-500 flex justify-center items-center bg-amber-200 border-double border-8 border-fuchsia-500 w-32">Total
                Click
                Count: {totalClickCount}</p>
            <div className="flex gap-y-2 justify-center items-center h-screen gap-x-5">
                <p className="text-blue-500 gap-x-5">Click Count Blue: {clickCount1}</p>
                <button className="bg-blue-500 h-16 rounded-lg p-5 shadow-lg gap-x-5" onClick={handleBlueClick}>
                    Klik Blue
                </button>
                <button className="bg-red-500 h-16 rounded-lg p-5 shadow-lg gap-x-5" onClick={handleRedClick}>
                    Klik Red
                </button>
                <p className="text-red-500 gap-x-5">Click Count Red: {clickCount2}</p>
            </div>
        </div>

    );
};

export default Counter;