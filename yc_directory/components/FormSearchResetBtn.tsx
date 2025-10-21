"use client";

import { X } from "lucide-react";
import Link from "next/link";

function FormSearchResetBtn() {
  function reset() {
    const form = document.querySelector(".form-search") as HTMLFormElement;

    if (form) form.reset();
  }

  return (
    <button onClick={reset} type="reset">
      <Link href="/" className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
}

export default FormSearchResetBtn;
