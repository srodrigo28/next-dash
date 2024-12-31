import { Siderbar } from "@/components/siderbar";
import Link from "next/link";

export default function Dashboard(){
    return(
        <div className="bg-black flex h-screen text-white relative">
            <Siderbar />
            <Link href="/">
                <button className=" p-2 px-3 text-white  bg-red-600 rounded-full absolute top-3 right-3" >X</button>
            </Link>
            <h1 className="text-3xl">Dashboard</h1>

        </div>
    )
}