import { EssentialsIcon } from "../../icons/EssentialsIcon";

export default function page(): JSX.Element {
  return (
    <div className="w-[414px] h-[929px] bg-[#1b232a] rounded-[40px] overflow-hidden">
      <div className="inline-flex items-start gap-[20px] top-[53px] flex-col relative">
        <div className="inline-flex items-center gap-[14px] flex-[0_0_auto] flex-col relative">
          <header className="flex w-[414px] items-center px-[10px] py-0 relative flex-[0_0_auto] bg-transparent">
            <EssentialsIcon className="!relative !w-[44px] !h-[44px]" />
            <div className="relative w-fit [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0.48px] leading-[normal]">
              About Us
            </div>
          </header>
        </div>
        <div className="inline-flex items-center gap-[40px] flex-[0_0_auto] flex-col relative">
          <div className="flex w-[414px] items-start gap-[20px] px-[22px] py-0 flex-[0_0_auto] flex-col relative">
            <div className="relative w-[366px] mt-[-1.00px] [font-family:'Space_Grotesk-Bold',Helvetica] font-bold text-white text-[32px] tracking-[0.84px] leading-[46px]">
              CuanBot BETA
            </div>
            <p className="relative w-[366px] h-[341px] [font-family:'Lato-Regular',Helvetica] font-normal text-[#a6aeb6] text-[14px] tracking-[0.37px] leading-[normal]">
              Welcome to CuanBot! We&#39;re your trusted trading companion, harnessing cutting-edge RPA technology. As
              we strive for perfection, CuanBot is currently undergoing enhancements in its beta version.
              <br />
              <br />
              We believe in the power of innovation. Our journey began with a vision to simplify and enhance trading
              experiences for both beginners and seasoned investors. We are constantly pushing the boundaries of
              what&#39;s possible in the world of automated trading.
              <br />
              <br />
              We invite you to be part of the CuanBot community as we redefine the future of trading. Stay tuned for
              exciting updates, and together, let&#39;s unlock new possibilities in the financial markets.
              <br />
              <br />
              Discover the power of CuanBot today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
