import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DynamicRouting() {
  const router = useRouter();
  const { slug } = router.query;

  //const movie = volumes.find(({ slug }) => slug === slug);

  const movie = volumes.find((volume) => volume.slug === slug);
  console.log(movie);
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <h2>Books</h2>
      {movie.books.map((book) => {
        return (
          <ul key={book.title}>
            <li>{book.ordinal}</li>
            <li>{book.title}</li>
          </ul>
        );
      })}
      <Image
        src={`/images/${slug}.png`}
        height={230}
        width={140}
        alt={`${movie.title}`}
      />
      <nav>
        <Link href="/volumes">← All Volumes</Link>
      </nav>
    </>
  );
}