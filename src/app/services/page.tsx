import Image from "next/image"
export default function Services(){

    return (
        <div className="w-full h-screen bg-gray-950 flex justify-center items-center">

            <div className="w-52 h-62 bg-white rounded-lg flex flex-col">

                <div className="image  h-24 flex justify-center items-center">
                    <div  className="w-20 h-20 bg-red-300 rounded-full flex justify-center items-center text-2xl">
                    
                    <Image src={"/vercel.svg"} width={400} height={400} alt="vercel"
                    className="w-full h-full"
                    />
                
                    </div>

                </div>
                    <div className="text-center mt-7">
                        <h1 className="text-2xl">Name: Rajkumar</h1>
                    </div>

            </div>

        </div>
    )
}