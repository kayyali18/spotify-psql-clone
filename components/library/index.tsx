'use client';

import {
  AiOutlineGooglePlus,
  AiOutlinePlus,
  AiOutlinePlusCircle,
  AiOutlinePlusSquare,
  AiOutlinePullRequest,
} from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';

const Library = () => {
  const uploadToLibrary = () => {
    // Handle Upload
  };

  return (
    <section className="flex h-full w-full flex-col">
      <header className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <h4 className="text-md font-medium text-neutral-400">Your Library</h4>
        </div>
        <AiOutlinePlus
          className="cursor-pointer text-neutral-400 transition hover:text-white"
          onClick={uploadToLibrary}
        />
      </header>
      <article className="mt-4 flex flex-col gap-y-2 px-5">
        {Array.from(Array(4)).map((_, i) => (
          <p key={i}>Song {i}</p>
        ))}
      </article>
    </section>
  );
};

export default Library;
