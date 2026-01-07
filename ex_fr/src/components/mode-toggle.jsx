// import { Moon, Sun } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx'
import { useTheme } from '@/components/providers/theme-provider.jsx'

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="capitalize">
          {theme}
          <span className="sr-only">Toggle theme</span>
        </div>
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
