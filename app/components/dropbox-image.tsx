"use client";

import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { getImageUrl } from "utils/supabase/storage";

export default function DropboxImage({ image }) {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rouded-2xl shadow-md">
      <div>
        <Image
          src={getImageUrl(image.name)}
          alt={image.name}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full aspect-square rounded-2xl"
        />
      </div>

      <div>{image.name}</div>

      <div className="absolute top-4 right-4">
        <IconButton
          color="red"
          placeholder={"이미지 삭제 버튼"}
          onClick={() => {}}
        >
          <i className="fas fa-trash" />
        </IconButton>
      </div>
    </div>
  );
}
