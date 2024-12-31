import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { PanelBottom } from "lucide-react";
import { Button } from "../ui/button";

export function Siderbar(){
    return(
        <div className="flex w-full bg-muted/40">
            <div className="flex flex-col">
                <header>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden bg-blue-600 p-2 px-5 rounded-lg m-2">
                                <PanelBottom />
                                <span className="sr-only">Abrir / Fechar</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link href="/"> <span>Logo</span> </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </div>
    )
}