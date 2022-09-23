import React from 'react';

export const Navbar = () => {
  return (
    <div className="sticky flex  items-center text-justify top-0 p-5 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <div className="text-4xl font-extrabold">XITE</div>
      <div className="font-normal mx-1 text-center text-gray-700 dark:text-gray-400">
        We love music videos
      </div>
    </div>
  );
};
