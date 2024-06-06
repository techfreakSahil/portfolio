import { HomeIcon, MailIcon, TvIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row gap-3 bg-white dark:bg-slate-950 p-2 sticky items-center justify-between rounded-xl shadow-sm border-gray-200 dark:border-gray-800 border-[1px]">
      <div>
        <Button variant={"outline"} size={"sm"}>
          @techfreakSahil
        </Button>
      </div>
      <div className="flex gap-2">
        <Link href="/">
          <Button
            className="flex justify-center items-center gap-1"
            variant={"outline"}
            size={"sm"}
          >
            <HomeIcon size={15} />
            <div className="hidden lg:inline-block">Home</div>
          </Button>
        </Link>
        <Link href="#projects">
          <Button
            className="flex justify-center items-center gap-1"
            variant={"outline"}
            size={"sm"}
          >
            <TvIcon size={15} />
            <div className="hidden lg:inline-block">Projects</div>
          </Button>
        </Link>
        <Link href="#contact">
          <Button
            className="flex justify-center items-center gap-1"
            variant={"outline"}
            size={"sm"}
          >
            <MailIcon size={15} />
            <div className="hidden lg:inline-block">Contact</div>
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
