import Button from "../components/Button";

import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          className="object-contain w-full"
          src={offer}
          alt="offert"
          width={773}
          height={687}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover the extraordinary value awaiting you at our Nike-inspired
          footwear emporium. Our commitment to delivering exceptional deals on
          premium-quality shoes is unwavering. Whether you're an athlete, a
          style enthusiast, or simply seeking unbeatable comfort, our special
          offers are designed with you in mind.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Explore a world of savings where your budget and style align
          seamlessly. From limited-time discounts on the latest releases to
          exclusive bundles that enhance your athletic journey, our special
          offers are crafted to cater to your unique needs.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="text-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
