"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function LatestWork() {
  return (
    <section>
      <Link href="/initiative/pakarnaattam" scroll={true}>
        <motion.div
          initial="initial"
          whileHover="hover"
          className="group w-full bg-[#F5F2E9] rounded-2xl p-3 sm:p-5 md:p-8 lg:p-10 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-10 lg:gap-14"
        >
          <div className="w-full md:w-3/5 overflow-hidden rounded-2xl">
            <motion.div
              className="w-full h-full origin-left"
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.4 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src="/pakarnaattam/thayam.jpg"
                  alt="Pakarnaattam Theyyam"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </motion.div>
          </div>

          <div className="text-left lg:text-right text-black space-y-1 md:w-2/5">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
              Pakarnaattam
            </h2>

            <p className="text-sm sm:text-base md:text-lg">
              - An illustrated documentation on Theyyam
            </p>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
