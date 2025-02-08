import colorsLogo from '../assets/channels-colors-marathi.png';
import mtvLogo from '../assets/channel-mtv-1712766852178.png';
import channel3 from '../assets/bengali_1x1-1709298573558.jpg';
import channel4 from '../assets/channel-kannada-1712766915268.png';
import channel5 from '../assets/channel-nick-1712767223433.png';
import channel6 from '../assets/channel-peacock-hub-1712767042516.png';


function Cards() {
  return (
    <div className='flex gap-[10px] w-full'>
      <img src={colorsLogo} alt="Colors Logo"/>
      <img src={mtvLogo} alt="MTV Logo" />
      <img src={channel3} alt="Channel 3 Logo" />
      <img src={channel4} alt="Channel 4 Logo" />
      <img src={channel5} alt="Channel 5 Logo" />
      <img src={channel6} alt="Channel 6 Logo" />

    </div>
  )
}

export default Cards;
