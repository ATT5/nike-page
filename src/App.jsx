import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";
import SliderMenu from "./components/SliderMenu";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const open = () => setOpenMenu(true);
  const close = () => setOpenMenu(false);

  return (
    <main className="relative">
      <Nav onClick={open} />
      <AnimatePresence>
        {openMenu && <SliderMenu onClick={close} />}
      </AnimatePresence>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pd-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
