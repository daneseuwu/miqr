"use client"
import { Moon,SunDim } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button

            onClick={toggleTheme}
        >
            {theme === "dark" ? (
                <SunDim />
            ) : (
                <Moon />
            )}
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}