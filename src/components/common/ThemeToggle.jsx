import { useTheme } from 'next-themes';

import { SunIcon, MoonIcon} from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className=' text-gray-500 hover:text-[#BFA7F2] transition-colors duration-200 ease-in-out cursor-pointer'
    >
      {theme === 'dark' ? <SunIcon size={10} className='w-5' /> : <MoonIcon size={10} className='w-5' />}
    </button>
  );
}