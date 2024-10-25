"use client";

import * as React from "react";
import { BeakerIcon, BrainCircuitIcon, AtomIcon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "s" || e.key === "S") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <VisuallyHidden asChild>
          <DialogTitle>Command Menu</DialogTitle>
        </VisuallyHidden>
        <CommandInput placeholder="Search subjects and exam boards..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Biology">
            <CommandItem>
              <BeakerIcon />
              <span>AQA Biology</span>
            </CommandItem>
            <CommandItem>
              <BeakerIcon />
              <span>Edexcel Biology</span>
            </CommandItem>
            <CommandItem>
              <BeakerIcon />
              <span>OCR Biology</span>
            </CommandItem>
            <CommandItem>
              <BeakerIcon />
              <span>WJEC Biology</span>
            </CommandItem>
            <CommandItem>
              <BeakerIcon />
              <span>CAIE Biology</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Chemistry">
            <CommandItem>
              <AtomIcon />
              <span>AQA Chemistry</span>
            </CommandItem>
            <CommandItem>
              <AtomIcon />
              <span>Edexcel Chemistry</span>
            </CommandItem>
            <CommandItem>
              <AtomIcon />
              <span>OCR Chemistry</span>
            </CommandItem>
            <CommandItem>
              <AtomIcon />
              <span>WJEC Chemistry</span>
            </CommandItem>
            <CommandItem>
              <AtomIcon />
              <span>CAIE Chemistry</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Physics">
            <CommandItem>
              <BrainCircuitIcon />
              <span>AQA Physics</span>
            </CommandItem>
            <CommandItem>
              <BrainCircuitIcon />
              <span>Edexcel Physics</span>
            </CommandItem>
            <CommandItem>
              <BrainCircuitIcon />
              <span>OCR Physics</span>
            </CommandItem>
            <CommandItem>
              <BrainCircuitIcon />
              <span>WJEC Physics</span>
            </CommandItem>
            <CommandItem>
              <BrainCircuitIcon />
              <span>CAIE Physics</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
