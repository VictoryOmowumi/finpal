import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon} from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className=' text-gray-500 dark:text-gray-300 hover:text-[#9a6ef9] transition-colors duration-200 ease-in-out cursor-pointer'
    >
      {theme === 'dark' ? <SunIcon size={10} className='w-5' /> : <MoonIcon size={10} className='w-5' />}
    </button>
  );
}