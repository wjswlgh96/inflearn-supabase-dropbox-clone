"use client";

import { IconButton } from "@material-tailwind/react";
import Image from "next/image";

export default function DropboxImage() {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rouded-2xl shadow-md">
      <div>
        <Image
          src="/images/cutedog.jpeg"
          alt="커여운 강아지"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full aspect-square rounded-2xl"
        />
      </div>

      <div>cutedog.jpeg</div>

      <div className="absolute top-4 right-4">
        <IconButton
          color="red"
          placeholder={"이미지 삭제 버튼"}
          onClick={() => {}}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
