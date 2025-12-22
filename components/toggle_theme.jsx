import { Moon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function ToggleTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  function handleToggleTheme() {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggleTheme}
      className="relative flex size-8 cursor-pointer items-center justify-center rounded-md"
    >
      <Moon className="absolute inset-0 m-auto size-4 scale-100 text-neutral-500 transition-all duration-300 dark:scale-0 dark:rotate-45" />
      <SunIcon className="absolute inset-0 m-auto size-4 scale-0 rotate-45 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:text-neutral-200" />
    </motion.button>
  );
}
