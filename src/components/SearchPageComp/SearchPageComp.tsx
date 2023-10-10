"use client";

import { useParams } from "next/navigation";

function SearchPageComp() {
  const params = useParams();
  return (
    <>
      <span className="font-semibold text-blue-700">{params.slug}</span>
    </>
  );
}

export default SearchPageComp;
