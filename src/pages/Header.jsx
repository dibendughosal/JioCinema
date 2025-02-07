import JClogo from "../assets/jc_logo.svg";
import crown from "../assets/crown.svg";
import SearchIcon from "../assets/search.svg";
import voiceSearch from "../assets/voice-search.svg";

function Header() {
  return (
    <header className="bg-[#241d13] text-white w-full h-[70px] flex justify-between">
      {/* Navigations */}
      <nav className="w-fit h-full flex gap-x-[30px] items-center px-[40px]">
        <div className="w-fit flex gap-x-[10px] items-center">
          <img src={JClogo} alt="JioCinema Logo" className="w-[139px]" />
          <div className="h-[32px] border-[2px] border-[#c1a362] flex items-center gap-2 px-2 rounded-2xl">
            <img src={crown} alt="Premium" className="w-4 h-4" />
            <p className="text-[#c1a362] font-bold text-sm">Go Premium</p>
          </div>
        </div>
        <ul className="flex w-fit h-[70px] items-center gap-5 font-bold text-[14px]">
          <a href="#" className="hover:border-b-4 py-[21px] border-[#d9008d]"><li>Home</li></a>
          <a href="" className="hover:border-b-4 py-[21px] hover:text-white text-[#bab8b5] border-[#d9008d]"><li>Sports</li></a>
          <a href="" className="hover:border-b-4 py-[21px] hover:text-white text-[#bab8b5] border-[#d9008d]"><li>Movies</li></a>
          <a href="" className="hover:border-b-4 py-[21px] hover:text-white text-[#bab8b5] border-[#d9008d]"><li>TV Shows</li></a>
          <a href="" className="hover:border-b-4 py-[21px] hover:text-white text-[#bab8b5] border-[#d9008d]"><li>More</li></a>
          
        </ul>
      </nav>
      {/* Search Area */}
      <div className=" w-[32%] h-[70px] flex items-center">
          <div className="bg-[#39332a] w-[318px] h-[40px] rounded-[55px] flex items-center justify-around">
            <div className="h-[40px] w-[40px] hover:bg-gray-400 flex flex-row items-center justify-center rounded-[50%]">
              <img src={SearchIcon} alt="Search Icon" className="w-[21px]"/>
            </div>
            <input type="text" placeholder="Movies, Shows and more" />
            <div className="h-[40px] w-[40px] hover:bg-gray-400 flex flex-row items-center justify-center rounded-[50%]">
              <img src={voiceSearch} alt="Voice Search Icon" className="w-[21px] h-[21px]"/>
            </div>
          </div>
      </div>
    </header>
  );
}

export default Header;
