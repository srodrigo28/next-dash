import { AddUser } from "./add-user"

interface users{
    id: string;
    name: string;
}

export default async function Users( props: users ){
    const response = await fetch('http://localhost:8080/users')
    const data = await response.json()
    return(
        <div className="bg-slate-900 h-screen text-white p-5 flex flex-col items-center">
            <AddUser />
            <div className="md:w-[600] -mt-2 bg-slate-900 p-5">
                <h1 className="text-center text-3xl mt-5 mb-5 animate-ping duration-700">Users</h1>
                <div className="w-full 
                    h-[600] 
                    bg-black     
                    p-4 
                    scrollbar-thin
                    overflow-y-scroll 
                    scrollbar-thumb-green-500 
                    scrollbar-track-red-600
                    flex flex-col gap-2
                  ">
                {
                    data.map(( item: users ) => (
                        <ul key={ item.id } className="c">
                            <li className="flex gap-2 justify-between items-center bg-zinc-900 rounded-md"> 
                                <p className="pl-4 capitalize text-xl">{ item.name }</p> 
                                <div className="flex justify-center gap-3 p-5">
                                    <button className="bg-red-600 p-2 px-3" >X</button> 
                                    <button className="bg-yellow-600 p-2 px-3">E</button>
                                </div>
                            </li>
                        </ul>
                    ))
                  }
                  </div>
            </div>
        </div>
    )
}