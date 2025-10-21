import { auth } from "../_lib/auth";

export const metadata = { title: "Account " };

async function page() {
  const session = await auth();

  const firstName = session.user.name.split(" ").at(0);
  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome, {firstName}
    </h2>
  );
}

export default page;
