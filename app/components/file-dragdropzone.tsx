"use client";

import { Button } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "actions/storageActions";
import { queryClient } from "config/ReactQueryClientProvider";
import { useRef } from "react";

export default function FileDragDropZone() {
  const fileRef = useRef<HTMLInputElement>(null);
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const file = fileRef.current.files[0];
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          await uploadImageMutation.mutate(formData);
        }
      }}
      className="w-full py-20 border-4 border-dotted border-indigo-700 flex flex-col items-center justify-center"
    >
      <input ref={fileRef} type="file" />
      <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.</p>
      <Button type="submit" loading={uploadImageMutation.isPending}>
        파일 업로드
      </Button>
    </form>
  );
}
