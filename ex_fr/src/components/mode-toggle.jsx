import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx'
import { useTheme } from '@/components/providers/theme-provider.jsx'

const SunIcon = () => {
  return (
    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
  )
}

const MoonIcon = () => {
  return (
    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
  )
}
export default function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span role="button" tabIndex={0} className="inline-flex">
          <Button variant="outline" size="icon">
            {/* {theme} */}
            <SunIcon />
            <MoonIcon />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          style={{ backgroundColor: theme === 'light' ? '#cfcfcf' : '' }}
          onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          style={{ backgroundColor: theme === 'dark' ? '#cfcfcf' : '' }}
          onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          style={{ backgroundColor: theme === 'system' ? '#cfcfcf' : '' }}
          onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
