import FeaturedShow from './FeaturedShow';
import Show2 from './Show2';
const Featured = () => {
  return (
    <>
      <section className="w-full h-[350px] bg-[#0d0e10] py-[10px] px-[2%] ">
        <div className='w-full flex flex-col '>
            <h1 className="font-extrabold text-[22px] w-full text-white">Hot Right Now 🔥</h1>
            <div className=" py-6 flex gap-2 w-full">
                <FeaturedShow imageSrc="https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1736860115169.jpg" alter="Dune"/>
                <Show2 src="https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-cta-1738930017723.jpg" alt="Roadies"/>   
                <FeaturedShow imageSrc="https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1white-1737525174094.jpg" alter="The White Lotus"/> 
                <Show2 src="https://v3img.voot.com/resizeMedium,w_384,h_384/v3Storage/assets/1x1-1738998321101.jpg" alt="on news"/>           
            </div>
        </div>
      </section>
    </>
  )
}

export default Featured;
