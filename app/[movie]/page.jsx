import Image from "next/image";

const MovieDetails = async ({params}) => {
  const { movie } = params;
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
  const response = await data.json();

  return (
    <div>
        <div className="mt-10">
            <h2 className="text-3xl font-bold">{response.title}</h2>
            <h2 className="text-lg">{response.release_date}</h2>
            <h2>Runtime: {response.runtime} minutes</h2>
            <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-white">{response.status}</h2>
            <Image className="my-4 w-full" src={`https://image.tmdb.org/t/p/original/${response.backdrop_path}`}width={600} height={600} priority />
            <p className="text-xl">{response.overview}</p>
        </div>
    </div>
  );
}

export default MovieDetails;