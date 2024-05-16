import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col bg-card md:h-[650px] h-[650px] w-auto py-2 hero-container-image">
      <div className="text-center flex flex-col items-center">
        <h3 className="border-t-white w-fit text-2xl border-top border-bottom">
          Achileas Metsovitis
        </h3>
        <p>PERSONAL TRAINER</p>
      </div>
      <div className="flex flex-col justify-center items-center grow">
        <div className="relative">
          <span className="text-primary absolute -top-8 md:text-[70px] font-extrabold rotate-45 -left-6">
            | |
          </span>
          <span className="text-primary absolute -top-8 md:text-[70px] font-extrabold -rotate-45 -left-6">
            ||
          </span>
          <h1 className="text-center text-[50px] md:text-[100px] z-50">
            Unleash your inner BEAST
          </h1>
          <span className="text-primary absolute bottom-[-12px] md:text-[70px] text-[30px] font-extrabold rotate-45 -right-3">
            | |
          </span>
          <span className="text-primary absolute bottom-[-12px] md:text-[70px] text-[30px] font-extrabold -rotate-45 right-1">
            ||
          </span>
        </div>
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
