"use client";
import { Moon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

const items = [
  { href: "/", title: "Home" },
  { href: "/projects", title: "Projects" },
  { href: "/blog", title: "Blog" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex h-30 items-center justify-end px-6 py-2">
      <div>
        <ul className="flex items-center justify-center gap-7 rounded-4xl px-6 py-3 text-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border dark:border-neutral-800 dark:bg-neutral-900">
          {items.map((item, index) => {
            return (
              <li
                onClick={() => setActive(item.title)}
                className={`cursor-pointer font-medium transition-all duration-300 ease-in-out ${
                  active === item.title
                    ? "border-b border-zinc-500"
                    : "border-transparent text-zinc-500"
                }`}
                key={index}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            );
          })}
          <li className="cursor-pointer" onClick={handleTheme}>
            {theme === "dark" ? <SunIcon /> : <Moon />}
          </li>
        </ul>
      </div>
    </div>
  );
}
