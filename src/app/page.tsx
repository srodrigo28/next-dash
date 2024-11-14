import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home() {
  return  (
      <div className="bg-slate-900 flex items-center justify-center h-screen">
        <Sheet>
          <SheetTrigger>
            <button className="bg-slate-800 text-white p-4 px-10 rounded-lg">Open</button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px] bg-slate-800 border-none text-white">
            <SheetHeader>
              <SheetTitle className="text-white mt-20 text-center text-2xl">Tela Administrativa</SheetTitle>
              <SheetDescription>
                <form className="flex gap-2 flex-col mt-6">
                   <input className="bg-slate-600 p-3 rounded-md" type="text" placeholder="E-mail" />
                   <input className="bg-slate-600 p-3 rounded-md" type="text" placeholder="E-mail" />
                   <div className="btn-group flex gap-3 mt-5">
                    <button className="p-3 flex-1 rounded-md text-white  bg-green-700">Entrar</button>
                    <button className="p-3 flex-1 rounded-md text-white  bg-blue-700">Cadastrar</button>
                   </div>
                </form>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
  );
}
