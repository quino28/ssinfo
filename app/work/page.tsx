'use client'

import { useState, useEffect } from 'react';
import { getWorks } from "../server/work";

export default function WorksPage() {
  const [works, setWorks] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    getWorks().then(setWorks);
  }, []);

  if (!works || works.length === 0) {
    return <p>No data</p>;
  }

  return (
    <div>
      <ul>
				{works.map((w) => (
					<li key={w.id}>{w.name}</li>
				))}
      </ul>
    </div>
  );
}
