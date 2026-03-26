import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-28">
              <li>
                <NavigationMenuLink
                  render={
                    <Link
                      href="/about"
                      className="flex-row items-center gap-2 hover:text-[#630D15] transition-colors"
                    >
                      About
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link
                      href="/team"
                      className="flex-row items-center gap-2 hover:text-[#630D15] transition-colors"
                    >
                      Team
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link
                      href="/sponsers"
                      className="flex-row items-center gap-2 hover:text-[#630D15] transition-colors"
                    >
                      Sponsers
                    </Link>
                  }
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Journey</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-28">
              <li>
                <NavigationMenuLink
                  render={
                    <Link
                      href="/blogs"
                      className="flex-row items-center gap-2 hover:text-[#630D15] transition-colors"
                    >
                      Blogs
                    </Link>
                  }
                />
                <NavigationMenuLink
                  render={
                    <Link
                      href="/making"
                      className="flex-row items-center gap-2 hover:text-[#630D15] transition-colors"
                    >
                      Making
                    </Link>
                  }
                />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Initiative</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-56 hover:text-[#630D15] transition-colors">
              <ListItem href="/initiative/pakarnaattam" title="Pakarnaattam">
                Documentaion on theyyam
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            render={<Link href="/connect">Connect</Link>}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="text-muted-foreground line-clamp-2">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
