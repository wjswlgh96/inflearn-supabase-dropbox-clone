"use client";

import DropboxImageList from "./components/dropbox-image-list";
import FileDragDropZone from "./components/file-dragdropzone";
import Logo from "./components/logo";
import SearchComponent from "./components/search-component";
import { useState } from "react";

export default function UI() {
  const [serachInput, setSearchInput] = useState("");

  return (
    <main className="w-full p-2 flex flex-col gap-4">
      <Logo />
      <SearchComponent
        serachInput={serachInput}
        setSearchInput={setSearchInput}
      />
      <FileDragDropZone />
      <DropboxImageList />
    </main>
  );
}
