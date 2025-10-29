'use client'

import { GoSun, GoMoon } from "react-icons/go"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    resolvedTheme === 'dark'
      ? <GoMoon size={20} onClick={() => setTheme('light')} />
      : <GoSun size={20} onClick={() => setTheme('dark')} />
  );
}
