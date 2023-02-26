"use client";

import Link from "next/link";
import Image from "next/image";

const Movie = ({movie}) => {
  return (
    <div className="border-8 rounded-xl border-black p-8 mt-4 bg-white">
        <h1 className="text-2xl font-bold my-2">{movie.title}</h1>
        <h2 className="text-xl font-bold mb-2">{movie.release_date}</h2>
        <Link href={`/${movie.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={800} height={800} alt={movie.title} />
        </Link>
    </div>
  );
}

export default Movie;