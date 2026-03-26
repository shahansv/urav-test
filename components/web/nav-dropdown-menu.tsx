import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function NavDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="link" aria-label="Open navigation menu">
            <Menu />
          </Button>
        }
      />
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Overview</DropdownMenuLabel>
          <Link href="/about">
            <DropdownMenuItem>About</DropdownMenuItem>
          </Link>

          <Link href="/team">
            <DropdownMenuItem>Team</DropdownMenuItem>
          </Link>

          <Link href="/sponsers">
            <DropdownMenuItem>Sponsers</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Journey</DropdownMenuLabel>

          <Link href="/blogs">
            <DropdownMenuItem>Blogs</DropdownMenuItem>
          </Link>

          <Link href="/making">
            <DropdownMenuItem>Making</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Initiatives</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <Link href="/initiative/pakarnaattam">
                  <DropdownMenuItem>
                    <div>
                      <div className="font-semibold">Pakarnaattam</div>
                      <div className="text-neutral-500">
                        (Documentaion on theyyam)
                      </div>
                    </div>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/connect">
            <DropdownMenuItem>Connect</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
