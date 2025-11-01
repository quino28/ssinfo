'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useState, useEffect } from 'react';

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

  const isMobile = windowWidth < PC_BREAKPOINT;

  return (
    <div className="mx-auto max-w-5xl p-6">
      <FullCalendar
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
