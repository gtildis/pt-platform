import { Button } from "@/components/ui/button";
import Link from "next/link";

const PersonalCard = () => {
  return (
    <div className="-mt-16 lg:h-[500px] md:h-[550px] h-[-800px] w-full relative">
      <div className="mt-16">
        <div className="flex justify-center">
          <h3 className="text-2xl border-top border-bottom mb-12">Services</h3>
        </div>
        <div className="flex flex-col items-center md:relative">
          <div className="w-96 md:absolute md:right-16 md:text-left text-center">
            <p className="text-left">
              Ειτε Θελετε να χασετε κιλα, να χτισετε μυς, να αυξησετε τις
              αντοχες σας ή απλα να νιωσετε πιο ομορφα ή και με παραπανω
              ενεργεια, εδω μπορειτε να βρειτε το καταλληλο μαθημα για εσας.
              Προσφερουμε μια μεγαλη γκαμα απο γουορκαουτ κορσις και συμβουλες
              διατροφης για να καταφερετε να φτασετε στο στοχο σας. Ενω σας
              δινετε παντα η επιλογη να φτιαξουμε παρεα το προσωπικο σας πλανο
              αναλογα με τις αναγκες σας. Απο μαθηματα περσοναλ μεχρι ονλαιν
              συνεδριες ή ονλαιν μαθηματα με βιντεο. Ενημερωθητε για τις
              προσφορες.
            </p>
            <div className="mt-4 mb-20 md:mb-2 z-50">
              <Link href="/search">
                <Button size="lg" variant="default">
                  Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute services-image w-[150px] h-[300px] bottom-[-150px] md:w-[300px] right-4 md:right-0 lg:w-[400px] lg:left-0 lg:bottom-10 lg:h-[500px]"></div>
    </div>
  );
};

export default PersonalCard;
