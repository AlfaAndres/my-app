"use client"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faBook, faFile, faGear, faLink, faPrint, fas} from "@fortawesome/free-solid-svg-icons";
import {FC, useState} from "react";

const page: FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="flex">
            <div
                className="w-20 py-0 bg-neutral-50 border-r-2 border-stone-100 flex-col justify-between items-start inline-flex h-screen">
                <div className="self-stretch h-56 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch h-16 flex-col justify-center items-center gap-2.5 flex">
                        <FontAwesomeIcon icon={fas.faHouse} size="lg"/></div>
                    <div className="self-stretch h-16 flex-col justify-center items-center gap-2.5 flex cursor-pointer hover:bg-gray-500">
                        <FontAwesomeIcon icon={faBook} size="lg"/></div>
                    <div className="self-stretch h-16 flex-col justify-center items-center gap-2.5 flex">
                        <FontAwesomeIcon icon={faGear} size="lg"/></div>
                </div>
                <div className="w-20 h-16 flex-col justify-start items-start gap-4 inline-flex">
                    <button onClick={() => setIsExpanded(!isExpanded)}
                            className="w-20 h-16 flex-col justify-center items-center gap-2.5 inline-flex">
                        <FontAwesomeIcon
                            icon={faArrowLeft} size={"lg"}/>
                    </button>
                </div>
            </div>
            { isExpanded && (
            <div className="w-48 py-8 h-screen bg-neutral-50 border-r-2 border-gray-100 flex-col justify-start items-start gap-1 inline-flex">
                <div className="w-48 h-7 px-4 py-1.5 justify-start items-start gap-2.5 inline-flex cursor-pointer hover:bg-gray-500">
                    <FontAwesomeIcon icon={faFile} />
                    <p className="text-neutral-900 text-opacity-60 text-xs font-normal font-['Inter'] cursor-pointer">I4 HS</p>
                </div>
                <div className="w-48 h-7 px-4 py-1.5 justify-start items-start gap-2.5 inline-flex cursor-pointer hover:bg-gray-500">
                    <FontAwesomeIcon icon={faFile} />
                    <p className="text-neutral-900 text-opacity-60 text-xs font-normal font-['Inter'] cursor-pointer">I3 HS</p>
                </div>
                <div className="w-48 h-7 px-4 py-1.5 justify-start items-start gap-2.5 inline-flex cursor-pointer hover:bg-gray-500">
                    <FontAwesomeIcon icon={faFile} />
                    <p className="text-neutral-900 text-opacity-60 text-xs font-normal font-['Inter'] cursor-pointer">I2 HS</p>
                </div>
            </div>
            )}
            <div className="w-full h-screen flex-col justify-start items-center gap-32 inline-flex">
                <div className="w-full h-10 px-9 py-3 border-b border-stone-100 justify-between items-start inline-flex">
                    <div className="w-9 h-4 justify-start items-start gap-2.5 inline-flex">
                        <p className="text-neutral-900 text-opacity-60 text-sm font-semibold font-['Inter']">I4 HS</p>
                    </div>
                    <div className="">
                        <div className="w-12 h-4 justify-end items-start gap-4 inline-flex">
                            <FontAwesomeIcon icon={faPrint} />
                            <FontAwesomeIcon icon={faLink} />
                        </div>
                    </div>
                </div>
                <div className="w-96 h-96 flex-col justify-start items-start inline-flex">
                    <div
                        className="self-stretch py-3 border-b border-gray-100 justify-start items-start gap-2.5 inline-flex">
                        <div className="w-96 text-black text-4xl font-bold font-['Inter']">I4 HS</div>
                    </div>
                    <div className="w-96 h-20 pt-9 pb-2 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="self-stretch text-stone-700 text-3xl font-semibold font-['Inter']">Dynamický
                            routing
                        </div>
                    </div>
                    <div className="w-96 py-1 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div>Dynamický routing nám zajišťuje routovací infrastrukturu, do které již nemusíme zasahovat.
                            Nemusíme psát routovací tabulku, nemusíme myslet na změny v síti. Musíme DRP jen nastavit.
                        </div>
                    </div>
                    <div className="w-96 h-8 py-1 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-96 text-stone-700 text-base font-normal font-['Inter'] leading-normal">Kromě
                            funkcí routingu nám DRP poskytují:
                        </div>
                    </div>
                    <ul className="w-96 text-stone-700 text-base font-normal font-['Inter'] leading-normal pl-6"
                        style={{listStyleType: 'disc'}}>
                        <li>Škálovatelnost</li>
                        <li>Rychlou Konvergenci</li>
                        <li>Dostupnost</li>
                    </ul>
                    <div className="w-96 h-20 pt-9 pb-2 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div
                            className="self-stretch text-stone-700 text-3xl font-semibold font-['Inter']">Charakteristika
                            DRP
                        </div>
                    </div>
                    <div className="w-96 py-1 flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-96 text-stone-700 text-base font-normal font-['Inter'] leading-normal">O
                            každém dynamickém routovacím protokolu můžeme říct, že má minimálně:
                        </div>
                    </div>
                    <ul className="w-96 text-stone-700 text-base font-normal font-['Inter'] leading-normal pl-6"
                        style={{listStyleType: 'disc'}}>
                        <li>Algoritmus</li>
                        <li>Metriku</li>
                        <li>Zprávy daného protokolu</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default page