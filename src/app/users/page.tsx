
// interface users{
//     id?: number;
//     name?: string;

// }

export default async function Users(  ){
    // const response = await fetch('http://localhost:8080/users')
    // const data = await response.json()
    return(
        <div className="bg-slate-900 h-screen text-white p-5">
            
            <h1 className="text-center text-3xl mt-5">Users</h1>
            {/* {
                data.map(( item: users ) => (
                    <ul key={ item.id }>
                        <li> { item.name } </li>
                    </ul>
                ))
            } */}
        </div>
    )
}