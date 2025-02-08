import JClogo from "../assets/jc_logo.svg";
import crown from "../assets/crown.svg";
import SearchIcon from "../assets/search.svg";
import voiceSearch from "../assets/voice-search.svg";
import guestIcon from "../assets/avatar_guest.svg"

function Header() {
  return (
    <header className="bg-[#0d0e10] text-white w-full h-[70px] flex justify-between border-b border-[#2c2c2c]">
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
          <a href="#" className="border-b-4 py-[21px] border-[#d9008d]"><li>Home</li></a>
          <a href="" className="py-[21px] hover:text-white text-[#bab8b5]"><li>Sports</li></a>
          <a href="" className="py-[21px] hover:text-white text-[#bab8b5]"><li>Movies</li></a>
          <a href="" className="py-[21px] hover:text-white text-[#bab8b5]"><li>TV Shows</li></a>
          <a href="" className="py-[21px] hover:text-white text-[#bab8b5]"><li>More</li></a>   
        </ul>
      </nav>
      {/* Search Area */}
      <div className=" w-[32%] h-[70px] flex items-center gap-7">
          <div className="bg-[#39332a] w-[318px] h-[40px] rounded-[55px] flex items-center gap-x-1 px-3">
            <div className="h-[40px] w-[40px] hover:bg-gray-400 flex flex-row items-center justify-center rounded-[50%]">
              <img src={SearchIcon} alt="Search Icon" className="w-[21px]"/>
            </div>
            <input type="text" placeholder="Movies, Shows and more" className="w-[201px] text-[15px] h-[18px] px-[8px] placeholder:font-medium text-start outline-none border-none" />
            <div className="h-[40px] w-[40px] hover:bg-gray-400 flex flex-row items-center justify-center rounded-[50%]">
              <img src={voiceSearch} alt="Voice Search Icon" className="w-[21px] h-[21px]"/>
            </div>
          </div>
          <div className="h-[40px] w-[40px] hover:bg-gray-400 flex flex-row items-center justify-center rounded-[50%]">
              <img src={guestIcon} alt="Guest Icon" className="w-[40px] h-[40px]"/>
            </div>
      </div>
    </header>
  );
}

export default Header;
