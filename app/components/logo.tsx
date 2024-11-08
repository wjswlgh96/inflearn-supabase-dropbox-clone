"use client";

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={"/images/dropbox_icon.png"}
        alt={"Mini Dropbox Logo"}
        width={0}
        height={0}
        sizes="50px"
        className="w-8 aspect-auto"
      />
      <span className="text-xl font-bold">Minibox</span>
    </div>
  );
}
