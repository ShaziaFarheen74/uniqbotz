'use client'

import React, {useEffect, useState} from 'react';
import {PlayIcon} from "@/components/icons/play";
import {cn} from "@/lib/utils";
import Wrapper from "@/components/wrapper";
import Overlay from "@/components/overlay";

export default function VideoModal({ videoUrl, className }: {videoUrl: string; className?: string}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
      e.preventDefault()
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
        document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
        document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
      <>
          {/*<button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">*/}
          {/*    Open YouTube Video*/}
          {/*</button>*/}
          <div className={cn("play-btn before:bg-secondary relative", className)}>
              {/*<span className="inline-block absolute rounded-full animate-pig h-20 w-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-secondary"></span>*/}
              <a  onClick={openModal} href="https://www.youtube.com/watch?v=RJLMpjZCv9I"
                 className="relative z-10 inline-flex justify-center items-center h-16 w-16 rounded-full bg-gradient-to-r from-secondary to-primary">
                  <PlayIcon className="fill-white h-9 w-9"/>
              </a>
          </div>

          {isOpen && (
              <>
              <Overlay isOpen={isOpen} handleOpen={closeModal} />
              <Wrapper className="fixed top-1/2 -translate-y-1/2 flex items-center justify-center z-50" tabIndex={0}>
                  <div className="bg-black p-4 rounded-lg relative max-w-2xl w-full grid place-content-center">
                      {/* Close button */}
                      <button onClick={closeModal} className="absolute top-2 right-2 text-white">
                          X
                      </button>
                      {/* YouTube iframe */}
                      <div className="">
                          <iframe
                              width="560"
                              height="315"
                              src={videoUrl}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="max-w-full"
                          ></iframe>
                      </div>
                  </div>
              </Wrapper>
              </>
          )}
      </>
  );
}
