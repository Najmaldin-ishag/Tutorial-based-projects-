import Link from "next/link";
import Navigation from "./components/Navigation";

function page() {
  return (
    <>
      <h1>The wild Oasis welcome to paradise</h1>
      <Link href="/cabins">Explore luxury cabins</Link>
    </>
  );
}

export default page;
