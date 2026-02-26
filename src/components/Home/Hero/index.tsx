"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative py-2 pt-30 overflow-hidden -z-1"
      id="main-banner"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full items-center">
          <motion.div
            {...leftAnimation}
            className="flex flex-col items-center lg:items-start gap-10 h-fit"
          >
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h1 className="font-medium xl:text-[72px] md:text-6xl sm:text-5xl text-4xl text-white leading-tight">
                Ram Singh
              </h1>
              <p className="text-white text-lg tracking-wider">
                Full-Stack Developer
              </p>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <Link href="/#work">
                <Button
                  size="lg"
                  className="text-base bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-background cursor-pointer"
                >
                  View My Work
                  <Image
                    src={"/images/icons/icon-arrow.svg"}
                    alt="arrow-icon"
                    width={20}
                    height={20}
                  />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="justify-self-center h-fit"
          >
            <div className="w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/portfolio/Gemini_Generated.png"
                alt="Banner"
                width={584}
                height={582}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
