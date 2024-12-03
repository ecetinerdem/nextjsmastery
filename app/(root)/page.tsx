import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY });

  //  const posts = [
  //    {
  //      _id: 1,
  //      _createdAt: new Date(),
  //      views: 55,
  //      author: { _id: 1, name: "Cetin Erdem" },
  //      description: "This is a description",
  //      image:
  //        "https://m.media-amazon.com/images/M/MV5BMTM0YzQyNDgtMmU3OS00ODNlLWFhZjQtNzg2OGJmMzkzNjEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  //      category: "Robots",
  //      title: "Robotar",
  //    },
  //  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
