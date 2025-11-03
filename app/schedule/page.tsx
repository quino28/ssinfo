'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'

const PC_BREAKPOINT = 768;

export default function SchedulePage() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : PC_BREAKPOINT
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';
  const MOCK_EVENTS = [
    {
      id: '1',
      title: 'mock data',
      start: '2025-11-28',
      allDay: true,
      textColor: isDarkMode ? '#ededed' : '#0a0a0a',
      backgroundColor: isDarkMode ? '#5469b6' : '#abbcfb',
      borderColor: isDarkMode ? '#5469b6' : '#abbcfb',
    },
  ];

  const isMobile = windowWidth < PC_BREAKPOINT;

  return (
    <div className="mx-auto max-w-5xl p-6">
      <FullCalendar
        events={MOCK_EVENTS}
        plugins={[ dayGridPlugin ]}
        initialView='dayGridMonth'
        headerToolbar={{
            start: 'today',
            center: 'title',
            end: 'prev next',
        }}
        titleFormat={
          isMobile
          ? { year: 'numeric', month: 'short' }
          : { year: 'numeric', month: 'long' }
        }
        aspectRatio={ isMobile ? '0.7' : '1.6' }
      />
    </div>
  )
}
