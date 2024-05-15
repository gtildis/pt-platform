import CategoriesLand from "./_components/categories-land";
import Hero from "./_components/hero";

const Landing = () => {
	return (
		<div className="flex flex-col items-center landing-page-headers w-full ">
			<div className="w-full">
				<Hero />
			</div>
			<div className="left-crop w-full">
				<CategoriesLand />
			</div>
			<div>{/* Personal */}</div>
			<div>{/* Testimonials */}</div>
			<div>{/* Contact */}</div>
		</div>
	);
};

export default Landing;
