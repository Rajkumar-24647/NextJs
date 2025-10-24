export default async function ServerComp() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div>
      <h1>Server Component</h1>

      {data.map((item: any, index: number) => (
        <div key={index}>
          <h2>{index}: {item.title}</h2>
        
        </div>
      ))}
    </div>
  );
}
