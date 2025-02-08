import premiumImg from '../assets/premium_badge_tv.svg'
function FeaturedShow( {imageSrc, alter} ) {
  return (
    <>
        <div className='relative flex-nowrap overflow-x-auto overflow-y-hidden'>
            <img src={imageSrc} alt={alter} className="flex-shrink-0 rounded-lg w-[290px] h-[304px]" />
            <img src={premiumImg} alt={alter} className='absolute w-[24px] top-2 left-2' />
        </div>
    </>
  )
}

export default FeaturedShow;
