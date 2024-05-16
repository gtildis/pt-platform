import CategoryItem from "./category-item";

const categories = {
  hiit: {
    label: "1 ΟΝ 1 Μάθημα",
    p: "Προσωποποιημενο μαθημα με βαση τις αναγκες σας.",
  },
  personal: {
    label: "Ηιιτ Ασκησεις",
    p: "Εντονες ασκησεις Ηιιτ για να αποκτησετε καλυτερο καρδιο και να χασετε κιλα",
  },
  mobility: {
    label: "Μαθημετα Ονλαιν",
    p: "Εαν προτιματε την ευκολια του σπιτιου σας μπορειτε να εγγραφειτε σε ενα απο τα ονλαιν μαθηματα",
  },
};

const CategoriesLand = () => {
  return (
    <div className="mb-12 lg:mb-0">
      <div className="lg:h-[500px] md:h-[650px] h-[800px] w-full z-50">
        <div className="h-[50px] background-gray cropped-right-top -mt-12"></div>
        <div className="lg:h-[400px] md:[550px] w-full background-gray">
          <div className="text-center flex justify-center text-2xl">
            <h3 className="border-top border-bottom w-fit mt-4">EXPERTISE</h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center ml-16">
            <CategoryItem label={categories.hiit.label} p={categories.hiit.p} />
            <CategoryItem
              label={categories.mobility.label}
              p={categories.mobility.p}
            />
            <CategoryItem
              label={categories.personal.label}
              p={categories.personal.p}
            />
          </div>
        </div>

        <div className="h-[50px] background-gray cropped-right-bottom "></div>
      </div>
    </div>
  );
};

export default CategoriesLand;
