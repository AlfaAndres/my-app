"use client"
export default function Home() {
    return (
        <div className="hlavni w-screen inline-flex flex-col items-center justify-start gap-24">
            <p className="text-xl flex">Color Shower</p>
            <div className="vyber flex justify-between w-3/5 gap-24">
                <input className="flex border-4 border-black" type="text"/>
                <button className="flex bg-green-500 p-6 rounded-[10px]">Show</button>
            </div>

                <div className="velky w-24 h-24 bg-[#FFB200] justify-center gap-24"></div>
                <div className="maly inline-flex flex-row gap-6">
                    <div className="prvni bg-red-500 w-12 h-12"></div>
                    <div className="druhy bg-gray-500 w-12 h-12"></div>
                    <div className="treti bg-blue-500 w-12 h-12"></div>
                </div>

        </div>
    );
}