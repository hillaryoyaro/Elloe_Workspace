import styles from '../style';
import { discount,hero_right,hero_left } from '../assets';
import GetStarted from './GetStarted';

const Hero = () =>  (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[35px] h-[35px]"/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">14 days</span> Free trial {" "}
            <span className="text-white">No Credit Card</span> Required
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[50px] text-[10px] text-white ss:leading-[60px] leading-[15px]">
            Engage with your <br className="sm:block hidden"/> {" "}
            <span className="text-orange-gradient">Customers</span> {" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted/>
        </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[38px] text-[10px] text-white ss:leading-[60px] leading-[15px] w-full">instantly...</h1>
        <p className={`${styles.paragraph} max-w-[450px] mt-3 `}>
          Drive more revenue, engage with customers,
          and deliver more value through conversations in Instagram Direct Messages,
          Facebook Messenger, and WhatsApp to grow your brand.
        </p>
      </div>
      <div className={`flex ${styles.flexCenter} md:my-0 my-10 relative `}>
        <img src={hero_left} alt="model" className="w-[50%] h-[50%] relative z-[5]"/> 
        <img src={hero_right} alt="model" className="w-[65%] h-[65%] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full buttom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 buttom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  );

export default Hero