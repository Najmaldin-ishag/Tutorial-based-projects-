import Form from "next/form";
import FormSearchResetBtn from "./FormSearchResetBtn";
import { Search } from "lucide-react";

function SearchForm({ query }: { query?: string }) {
  return (
    <Form
      action="/"
      className="search-form flex justify-between"
      scroll={false}
    >
      <input
        type="text"
        defaultValue=""
        placeholder="Search Startups"
        name="query"
      />

      <div className="flex gap-2 ">
        {query && <FormSearchResetBtn />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}

export default SearchForm;
