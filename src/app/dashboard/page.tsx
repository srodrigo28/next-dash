import { Siderbar } from "@/components/siderbar";
import Link from "next/link";

export default function Dashboard(){
    return(
        <div className="bg-slate-700 flex h-screen text-white relative w-screen">
            <h1 className="text-3xl">Dashboard</h1>
            <Siderbar />

        </div>
    )
}