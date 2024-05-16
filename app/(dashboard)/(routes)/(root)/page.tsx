import CategoriesLand from "./_components/categories-land";
import Hero from "./_components/hero";
import PersonalCard from "./_components/personal-card";
import Testimonials from "./_components/testimonials";

const Landing = () => {
  return (
    <div className="flex flex-col items-center landing-page-headers w-full ">
      <div className="w-full">
        <Hero />
      </div>
      <div className="left-crop w-full">
        <CategoriesLand />
      </div>
      <div className="w-full">
        <PersonalCard />
      </div>
      <div className="w-full">
        <Testimonials />
      </div>
      <div>{/* Contact */}</div>
    </div>
  );
};

export default Landing;
