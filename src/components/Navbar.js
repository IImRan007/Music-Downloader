// import { useState } from "react";

const Navbar = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="navbar bg-[#d1cfcd1a]">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl text-[#00ffbb]"
          href="/"
        >
          Music Downloader
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered mr-4 w-64"
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <button className="btn btn-active btn-ghost">Search</button>
        </div>
      </div>
    </div>

    //   <div className="flex items-center justify-between border-b border-gray-400 py-8 bg-[#d1cfcd1a]">
    //     <a className="btn btn-ghost normal-case text-xl text-[#00ffbb]" href="/">
    //       Music Downloader
    //     </a>
    //     <nav>
    //       <section className="flex lg:hidden">
    //         <div
    //           className="HAMBURGER-ICON space-y-2 cursor-pointer"
    //           onClick={() => setIsNavOpen((prev) => !prev)}
    //         >
    //           <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
    //           <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
    //           <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
    //         </div>

    //         <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
    //           <div
    //             className="absolute top-0 right-0 px-8 py-8 cursor-pointer"
    //             onClick={() => setIsNavOpen(false)}
    //           >
    //             <svg
    //               className="h-8 w-8 text-gray-600"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             >
    //               <line x1="18" y1="6" x2="6" y2="18" />
    //               <line x1="6" y1="6" x2="18" y2="18" />
    //             </svg>
    //           </div>
    //           <div className="flex-none gap-2">
    //             <div className="form-control">
    //               <input
    //                 type="text"
    //                 placeholder="Search"
    //                 className="input input-bordered mr-4 w-64"
    //               />
    //             </div>
    //           </div>
    //           <div className="flex-none gap-2">
    //             <div className="form-control">
    //               <button className="btn btn-active btn-ghost">Search</button>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //       <div className="flex-none gap-2 hidden lg:flex">
    //         <div className="form-control">
    //           <input
    //             type="text"
    //             placeholder="Search"
    //             className="input input-bordered mr-4 w-64"
    //           />
    //         </div>
    //         <div className="flex-none gap-2">
    //           <div className="form-control">
    //             <button className="btn btn-active btn-ghost">Search</button>
    //           </div>
    //         </div>
    //       </div>
    //     </nav>
    //     <style>{`
    //   .hideMenuNav {
    //     display: none;
    //   }
    //   .showMenuNav {
    //     display: block;
    //     position: absolute;
    //     width: 100%;
    //     height: 100vh;
    //     top: 0;
    //     left: 0;
    //     background: #323232;
    //     z-index: 10;
    //     display: flex;
    //     justify-content: space-evenly;
    //     align-items: center;
    //   }
    // `}</style>
    //   </div>
  );
};

export default Navbar;
