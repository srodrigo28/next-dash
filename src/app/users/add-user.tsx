'use client'

export function AddUser(){
    // const [name, setName] = useState('')

    // async function handleCreateUser(event: FormEvent) {
    //     event.preventDefault()
    //     if(!name) {
    //         return
    //     }
    //     await fetch('http://localhost:8080/users', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             name
    //         })
    //     })
    //     alert(" Adicionado com sucesso ")
    // }
    return(
        <form className="bg-slate-800 text-white h-20 flex items-center justify-center gap-2 p-5" >
            <input type="text" placeholder="Nome do usuário" className="p-2 text-black rounded-md flex-1" 
            />
            <button className="bg-green-700 p-2 px-5 rounded-md">Adicionar</button>
        </form>
    )
}