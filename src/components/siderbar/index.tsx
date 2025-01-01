import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Home, Package, Package2, PanelBottom, Settings2, ShoppingBag, Users2 } from "lucide-react";
import { Button } from "../ui/button";

export function Siderbar(){
    return(
        <div className="flex w-full bg-muted/40 text-black">

            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background 
                sm:flex sm:bg-zinc-900 sm:w-screen sm:text-white">
            </aside>

            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background 
                    gap-4 sm:static sm:h-auto sm:border-0 sm:transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5 text-foreground" />
                                <span className="sr-only">Abrir / Fechar menu</span>
                            </Button>
                        </SheetTrigger>

                        {/* mudar a diração de abertura */}
                        {/* mudar a diração de abertura */}
                        {/* mudar a diração de abertura */}
                        {/* mudar a diração de abertura */}
                        <SheetContent side="right" className="sm:max-w-x">
                            <SheetTitle className="text-zinc-500 mb-5 border-b-2">Editar Perfil</SheetTitle>
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link href="/" className="flex h-10 w-10 bg-primary rounded-full 
                                    text-lg items-center justify-center text-primary-foreground
                                    gap-2 duration-300
                                    " prefetch={false}> 
                                    <Package className="h-5 w-5 tranition-all" />
                                    <span className="sr-only">Logo do projeto</span>
                                </Link>

                                <Link href=""
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground
                                    hover:bg-slate-800 p-2 hover:text-white font-semibold rounded-md"
                                    prefetch={false}
                                >
                                    <Home className="h-5 w-5 trantion-all" />
                                    <span>Início</span>
                                </Link>

                                <Link href=""
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground
                                    hover:bg-slate-800 p-2 hover:text-white font-semibold rounded-md"
                                    prefetch={false}
                                >
                                    <ShoppingBag className="h-5 w-5 trantion-all" />
                                    <span>Pedidos</span>
                                </Link>

                                <Link href=""
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground
                                    hover:bg-slate-800 p-2 hover:text-white font-semibold rounded-md"
                                    prefetch={false}
                                >
                                    <Package2 className="h-5 w-5 trantion-all" />
                                    <span>Produtos</span>
                                </Link>

                                <Link href=""
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground
                                    hover:bg-slate-800 p-2 hover:text-white font-semibold rounded-md"
                                    prefetch={false}
                                >
                                    <Users2 className="h-5 w-5 trantion-all" />
                                    <span>Clientes</span>
                                </Link>

                                <Link href=""
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground
                                    hover:bg-slate-800 p-2 hover:text-white font-semibold rounded-md"
                                    prefetch={false}
                                >
                                    <Settings2 className="h-5 w-5 trantion-all" />
                                    <span>Cconfigurações</span>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2 className="text-foreground">Menu</h2>
                </header>
            </div>
        </div>
    )
}