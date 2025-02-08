import { useState } from "react";
import '../component/style.css';
function Tags() {
    const [tags] = useState([
        "For You","Premium","Laughter Chefs","Cricket","MTV Roadies XX","FREE Movies", "Big Boss","News","BBK","Kids & Family","AUS vs IND","FREE Anime","Studios","ISL","FREE Shows","Free","Free","Free","Free","Free","Free","Free","Free","Free"
    ])
  return (
    <div className="h-[75px] w-full bg-[#0d0e10] flex items-center justify-center text-white ">
        <div className="w-[94%] mx-auto overflow-y-hidden flex items-center gap-x-1.5 overflow-x-auto flex-nowrap  scrollbar-hide p-2 transition-all">
            {tags.map((elm,idx) => {
                return (
                <button key={idx} className="py-[5px] px-[15px] bg-[#373737] w-fit rounded-[15px] whitespace-nowrap font-bold text-[11px] hover:bg-[#737271] duration-[.5s] cursor-pointer">{elm}</button>

                )
            }
            )}
        </div>
        
    </div>
  )
}

export default Tags
