// import {FaSearch} from 'react-icons/fa';

// function header() {
// return (
//     <header className="bg-slate-200 shadow-md">
//         <div className="flex flex-col sm:flex-row justify-between items-center p-2 max-w-7xl mx-auto">
//             <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
//                 <span className="text-slate-500">Kashif</span>
//                 <span className="text-slate-700">Khan</span>
//             </h1>
//             <form className="bg-slate-100 p-3 rounded-b-lg flex items-center mt-2 sm:mt-0 w-full sm:w-auto">
//                 <input type="text" placeholder="Search" className="bg-transparent focus:outline-none w-full sm:w-64" />
//                 <FaSearch className="text-slate-600" />
//             </form>
//             <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
//                 <a href="/" className="text-slate-700 hover:text-slate-900 mx-2">Home</a>
//                 <a href="/about" className="text-slate-700 hover:text-slate-900 mx-2">About</a>
//                 <a href="/sign" className="text-slate-700 hover:text-slate-900 mx-2">Sign</a>
//             </nav>
//         </div>
//     </header>
// )
// }
// export default header;
import { FaSearch } from 'react-icons/fa';

function header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center p-2 max-w-7xl mx-auto">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Kashif</span>
          <span className="text-slate-700">Khan</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-b-lg flex items-center mt-2 sm:mt-0 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-full sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0">
          <a href="/" className="text-slate-700 hover:text-slate-900 mx-2">
            Home
          </a>
          <a href="/about" className="text-slate-700 hover:text-slate-900 mx-2">
            About
          </a>
          <a href="/signin" className="text-slate-700 hover:text-slate-900 mx-2">
            Signin
          </a>
        </nav>
      </div>
    </header>
  );
}

export default header;