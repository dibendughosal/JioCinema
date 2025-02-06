import JCLogo from "../../public/jc_logo.svg";
import PremiumLogo from "../../public/premium_badge_tv.svg";
function Header() {
  return (
    <header className="bg-black text-white w-full h-[70px] flex justify-between">
      {/* Navigations */}
      <nav className="w-[40%] h-full bg-red-600">
        <img src={JCLogo} alt="JioCinema Logo" />
        <div className="w-fit h-[30px] border-[2px] border-[#c1a362] flex items-center gap-2 px-2 rounded-2xl">
          <img src={PremiumLogo} alt="Premium" className="w-[22px]"/>
          <p>Premium</p>
        </div>
      </nav>
      {/* Search Area */}
      <div className="bg-blue-700 w-[30%] h-full"></div> 
    </header>
  )
}

export default Header;
