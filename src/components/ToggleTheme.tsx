'use client';

import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ToggleTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  const handleToggle = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  console.log('Current Theme:', currentTheme);

  return (
    <div className="cursor-pointer" onClick={handleToggle}>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode className="text-xl hover:text-amber-500 transition" />
        ) : (
          <MdDarkMode className="text-xl hover:text-amber-500 transition" />
        ))}
    </div>
  );
}
