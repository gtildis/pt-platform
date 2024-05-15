import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
	return (
		<div className="flex flex-col bg-card md:h-[600px] h-[450px] w-auto py-2 hero-container">
			<div className="text-center flex flex-col items-center">
				<h3 className="border-t-white w-fit text-2xl border-top border-bottom">
					Achileas Metsovitis
				</h3>
				<p>PERSONAL TRAINER</p>
			</div>
			<div className="flex flex-col justify-center items-center grow">
				<h1 className="text-center text-5xl">Unleash your inner BEAST</h1>
				<p>Κάθε μέρα και ένα ακόμα Challenge.</p>
			</div>
			<div className="flex flex-col justify-center items-center py-6 ">
				<div className="flex-col md:flex items-center gap-10">
					<div>
						<span>Τσεκαρε τα 👉</span>
						<Link href="/Search">
							<Button size="lg" variant="default">
								Courses
							</Button>
						</Link>
					</div>
					<div>
						<Link href="/Search">
							<Button size="lg" variant="default">
								Book
							</Button>
						</Link>
						<div className="flex flex-col text-center">
							<span>☝️ Κλείσε ενα μάθημα </span>
							<span className="text-xs">Ερχεται συντομα </span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
