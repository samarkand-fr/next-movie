'use client'
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
  children: ReactNode;
}

// Providers component to wrap the entire application with theme and global styles.
const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    // ThemeProvider from next-themes to manage theme switching.
    <ThemeProvider defaultTheme='system' attribute='class'>
      {/* Container with global styles and theme-dependent colors. */}
      <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-900 min-h-screen select-none transition-colors duration-300'>
        {/* Render the child components passed to Providers. */}
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
