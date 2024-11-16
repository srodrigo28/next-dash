"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="bg-slate-950 flex items-center justify-center h-screen">

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Login</Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center bg-slate-800 text-white border-none">
          <SheetHeader>
            <SheetTitle className="mt-20 text-white">Seja bem vindo.</SheetTitle>
            <SheetDescription className="text-white">
              Nossa area para membros
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right"> E-mail </Label>
              <Input id="email" className="col-span-3" value={email} onChange={ e=> setEmail(e.target.value)} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="senha" className="text-right"> Senha: </Label>
              <Input id="senha" className="col-span-3" type="password" value={password} onChange={ e => setPassword(e.target.value)} />
            </div>
          </div>
          <SheetFooter>
            <div className="btn-group flex gap-2">
              <SheetClose asChild>
                <button className="bg-blue-600 hover:bg-blue-700 w-28 text-white p-1 rounded-md">Entrar</button>
              </SheetClose>
              <button className="bg-green-600 hover:bg-green-700 text-white p-1 w-28 rounded-md">Cadastrar ?</button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
