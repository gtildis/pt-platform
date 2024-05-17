import Thunder from "./svg/ThunderIcon";

interface CategoryItemProps {
  label: string;
  p: string;
}

const CategoryItem = ({ label, p }: CategoryItemProps) => {
  return (
    <div className="mt-20 flex flex-col items-center md:w-56">
      <div className="thunder-icon--category-item">
        <Thunder />
      </div>
      <h3 className="text-center text-2xl mb-4">{label}</h3>
      <p className="text-center w-[300px]">{p}</p>
    </div>
  );
};

export default CategoryItem;
