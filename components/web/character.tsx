"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Character() {
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const hasHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    setIsTouchDevice(!hasHover);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    character: string,
  ) => {
    if (!isTouchDevice) return;
    e.preventDefault();
    setActiveCharacter(character);
    const route =
      character === "kannan"
        ? "/pakarnaattam/character/kannan"
        : "/pakarnaattam/character/neelu";
    setTimeout(() => {
      router.push(route);
    }, 800);
  };

  const imageSizes =
    "(max-width: 640px) 256px, (max-width: 768px) 288px, 320px";

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center px-6 w-full">
        <p className="animate-pulse text-center">
          Click on a character to continue
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-20 w-full">
          <Link
            href="/pakarnaattam/character/kannan"
            onClick={(e) => handleClick(e, "kannan")}
          >
            <motion.div
              className="flex flex-col items-center gap-4 cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate={activeCharacter === "kannan" ? "hover" : "rest"}
            >
              <div className="relative w-64 h-96 sm:w-72 sm:h-112 md:w-80 md:h-128">
                <motion.div
                  variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/pakarnaattam/kannan.jpg"
                    alt="Kannan"
                    fill
                    sizes={imageSizes}
                    className="object-contain"
                    priority
                  />
                </motion.div>

                <motion.div
                  variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/pakarnaattam/kannan-mask.jpg"
                    alt="Kannan Mask"
                    fill
                    sizes={imageSizes}
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              <motion.p
                className="text-lg sm:text-xl font-semibold"
                variants={{
                  rest: { scale: 1, color: "#ffffff" },
                  hover: { scale: 1.05, color: "#dc2626" },
                }}
                transition={{ duration: 0.3 }}
              >
                Kannan
              </motion.p>
            </motion.div>
          </Link>

          <Link
            href="/pakarnaattam/character/neelu"
            onClick={(e) => handleClick(e, "neelu")}
          >
            <motion.div
              className="flex flex-col items-center gap-4 cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate={activeCharacter === "neelu" ? "hover" : "rest"}
            >
              <div className="relative w-64 h-96 sm:w-72 sm:h-112 md:w-80 md:h-128">
                <motion.div
                  variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/pakarnaattam/neelu.jpg"
                    alt="Neelu"
                    fill
                    sizes={imageSizes}
                    className="object-contain"
                    priority
                  />
                </motion.div>

                <motion.div
                  variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/pakarnaattam/neelu-mask.jpg"
                    alt="Neelu Mask"
                    fill
                    sizes={imageSizes}
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>

              <motion.p
                className="text-lg sm:text-xl font-semibold"
                variants={{
                  rest: { scale: 1, color: "#ffffff" },
                  hover: { scale: 1.05, color: "#dc2626" },
                }}
                transition={{ duration: 0.3 }}
              >
                Neelu
              </motion.p>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
