import Image from "next/image";
import {Maly} from "@/app/maly";
import React from "react";
import {Velky} from "@/app/Velky";
import PedagogickySbor from "@/app/PedagogSbor";


export default function Home() {
    const blocks = [
        {title: "IT", color: "red", link: "https://www.uzlabina.cz/informacni-technologie"},
        {title: "Elektro", color: "green", link: "https://www.uzlabina.cz/elektrotechnika"},
        {title: "Gymnázium", color: "blue", link: "https://www.uzlabina.cz/gymnazium"}
    ]
    const a = 1;
  return (
    <main style={{ backgroundColor: "white", display:"flex", flexDirection:"column", alignItems:"center" }}>
      <h1>Hello World</h1>
        <div className="obr">
            <Image src="/logo.png" alt="Úžlabinalogo" width={256} height={256}/>
        </div>
        <div className="3divy" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "2rem"
        }}>
            {blocks.map((item, index) => {
                return <Maly href={item.link} color={item.color} key={index}>{item.title}</Maly>
            })}
        </div>
        <div className="flex flex-row" style={{gap: "2rem"}}>
            <Velky title="Chlebíčky" date="25.01.2024" image="/trotl.jpg" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem consequatur culpa deleniti, error esse illo modi nam optio placeat porro quam quod soluta temporibus unde voluptas. Commodi, cupiditate.</Velky>
            <Velky title="Chlebíčky" date="25.01.2024"  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab dicta dolores eius et eum excepturi hic incidunt ipsum labore maxime, mollitia, necessitatibus neque nulla quae quam, sed similique tempora?</Velky>
            <Velky title="Chlebíčky" date="25.01.2024" image="/trotl.jpg" color="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dicta ea, earum exercitationem molestias nobis porro quis repellat repudiandae sequi tempora. A adipisci consequuntur dolorem iure magni non quia.</Velky>
            <Velky title="Chlebíčky" date="25.01.2024"  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae debitis dolor dolores doloribus dolorum fugit harum incidunt maiores minima nostrum odio, officiis quae quis recusandae rem repellendus rerum sapiente!</Velky>
        </div>
        <div className="flex flex-col" style={{gap: "2rem"}}>
            <PedagogickySbor></PedagogickySbor>
        </div>
    </main>
  );
}
