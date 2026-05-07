"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export function VideoModal() {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setVideoModal(true)}
        className="border-primary/20 bg-primary-light group absolute top-1/2 left-1/2 mx-auto grid size-10 -translate-1/2 place-items-center rounded-full border shadow-[0_0_0_10px_rgba(255,255,255,0.15),0_0_0_4px_rgba(255,255,255,0.20)] duration-300 sm:size-14"
      >
        <span className="absolute inset-0 -z-1 animate-[ping_2s_ease-out_infinite] rounded-full bg-white/20" />
        <Play className="fill-primary text-primary size-4 shrink-0 duration-300 group-hover:scale-90 lg:size-6" />
        <span className="sr-only">Play video</span>
      </button>

      {videoModal && (
        <div
          className="fixed inset-0 z-51 flex items-center justify-center overflow-y-auto bg-black/70"
          onClick={() => setVideoModal(false)}
        >
          <div
            className="relative m-auto w-full max-w-5xl p-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setVideoModal(false)}
              className="absolute top-0 right-0 rounded-full bg-white p-1 text-2xl text-black transition hover:scale-105"
            >
              <X className="size-5" />
              <span className="sr-only">Close</span>
            </button>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/GGf1JjSAKP4?rel=0&autoplay=1&v=GGf1JjSAKP4"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
