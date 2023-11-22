import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { AlignJustify } from "lucide-react"

import Link from "next/link"
  

const ActionButtons = () => {
  return (
    <div>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <AlignJustify />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                                <Link href="#"> Sign in</Link>
                                <Link href="#"> Get started</Link>
                                <Link href="#"> Pricing</Link>
                                <Link href="#"> Features</Link>
                                <Link href="#"> About</Link>
                                <Link href="#"> Contact</Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
            <div className="hidden md:flex space-x-4">
                <Button
                 className=" text-md "
                 variant="ghost"
                > 
                Sign in
                </Button>
                <Button
                 className=" text-md bg-blue-500"
                > 
                get started
                </Button>
        </div>
    </div>
  )
}

export default ActionButtons;
