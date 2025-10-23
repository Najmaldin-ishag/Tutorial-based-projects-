import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(), // or "yesterday"
      views: 55,
      postId: 1,
      author: {
        name: "Adrian",
        _id: 1,
      },

      description: "This is a description",
      image: "https://placehold.co/600x400", // Example image
      category: "robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30semibold">
          {query ? `Search Results for "${query}"` : `All Startups`}
        </p>

        <ul className="card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard post={post} key={post?.postId} />
            ))
          ) : (
            <p className="no-results">No startups found.</p>
          )}
        </ul>
      </section>
    </>
  );
}

export default Home;
