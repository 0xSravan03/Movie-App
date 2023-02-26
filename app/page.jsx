import Movie from "./components/movie";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const response = await data.json();

  return (
    <main>
      <h1 className="text-4xl font-bold text-red-500 text-center my-8">Movie List</h1>
      <div className="grid gap-12 grid-cols-fluid">
      {
        response.results.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))
      }
      </div>
    </main>
  );
}
