"use client"

export default function clientComp(){
    return (
        <div>
            <h1>ClientComponent</h1>

            <button className="border-2 border-black" onClick={() => alert("hii")}>click me</button>
        </div>
    )
}