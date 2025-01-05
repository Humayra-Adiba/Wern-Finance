import { Button } from "@nextui-org/button";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center mt-10 lg:mt-16 xl:mt-[128px] md:mx-0 mx-3">
      <div className="space-y-9 sm:w-1/2">
        <h1 className="font-semibold leading-8 md:text-[56px] text-[30px] md:text-6xl mt-[-17px]">
          Spend your Cardano anywhere, anytime.
        </h1>

        <p className="text-blue-300 w-4/5 text-[18px] font-normal lg:text-[40px] xl:text-base mt-6">
          Our user-friendly platform enables businesses and individuals to
          seamlessly convert and spend their crypto for everyday purchases.
        </p>

        
        <Button color="primary" variant="solid" radius="full">
          Get Started <img src="/arrow.svg" alt="" className="w-5" />
        </Button>
        
      </div>

      <img
        className="xl:-mr-[130px] w-10/12 sm:w-1/2"
        src="/hero.svg"
        alt="hero card"
      />
    </section>
  );
};

export default Hero;