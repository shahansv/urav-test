"use client";

import Image from "next/image";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { NavDropdownMenu } from "./nav-dropdown-menu";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full bg-[#F5F2E9]"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12"
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label="Go to homepage"
        >
          <div className="relative w-32 h-8">
            <Image
              src="/assets/logo.png"
              alt="Urav logo"
              fill
              sizes="128px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <div className="hidden lg:flex items-center justify-center bg-[#630D15] text-white rounded-2xl px-4 py-0.5">
          <NavMenu />
        </div>

        <div className="flex lg:hidden items-center">
          <NavDropdownMenu />
        </div>
      </nav>
    </motion.header>
  );
}
