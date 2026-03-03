import type { PageResponse } from "@/app/(public)/(generic)/home/types";

export function Expose(props: PageResponse["data"]["mediaSection"]) {
  return (
    <iframe allowFullScreen
      src={props.url}
      title={props.title}
      className="h-200 w-full"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
}