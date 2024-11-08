"use client";

import { Input } from "@material-tailwind/react";

export default function SearchComponent({ serachInput, setSearchInput }) {
  return (
    <Input
      value={serachInput}
      onChange={(e) => setSearchInput(e.target.value)}
      label="Search Images"
      icon={<i className="fa-solid fa-magnifying-glass" />}
    />
  );
}
