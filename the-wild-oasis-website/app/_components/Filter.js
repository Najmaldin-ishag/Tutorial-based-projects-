"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex border border-primary-800">
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("all")}
      >
        All cabins
      </button>
      <button
        onClick={() => handleFilter("small")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        1&mdash;3 guests
      </button>
      <button
        onClick={() => handleFilter("medium")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        4&mdash;3 guests
      </button>
      <button
        onClick={() => handleFilter("large")}
        className="px-5 py-2 hover:bg-primary-700"
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
