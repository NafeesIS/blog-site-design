"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { RiPlayFill } from "react-icons/ri";

export function ContactUs({ className, children,button }) {
  return (
    <div className={cn(className)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="group h-10 w-24 cursor-pointer p-2 text-white transition-all bg-indigo-600 md:h-10 md:w-24"
            asChild
          >
            <div className="relative">
              <div className=" text-base font-medium leading-relaxed">
                {button}
              </div>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="h-full max-h-96 max-w-96 border-none bg-transparent p-0 shadow-none sm:max-w-sm md:max-h-[500px] md:max-w-xl lg:max-w-3xl">
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
