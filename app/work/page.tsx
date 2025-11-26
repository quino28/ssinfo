import { getWorks } from "../server/work";

export default async function WorksPage() {
  const works = await getWorks();

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
