"use client";
import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";
import { Separator } from "@/components/ui/separator";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-11 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="lg:col-span-4 md:col-span-6 col-span-6 flex flex-col gap-6">
            <Logo />
            <p className="text-white/60">
              A passionate frontend developer with a love for creating beautiful and functional web applications.
            </p>
            <div className="flex gap-6 items-center relative z-1">
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:linkedin-in"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:github"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="#" className="group">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <p className="text-white/40 text-center py-8">
          © {new Date().getFullYear()} Ram Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
