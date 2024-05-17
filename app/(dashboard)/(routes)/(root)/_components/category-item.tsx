import thunder from "@/public/thunder.svg";

interface CategoryItemProps {
  label: string;
  p: string;
}

const CategoryItem = ({ label, p }: CategoryItemProps) => {
  return (
    <div className="mt-28 flex flex-col items-center md:w-56">
      <h3 className="text-center text-2xl mb-4">{label}</h3>
      <p className="text-center w-[300px]">{p}</p>
    </div>
  );
};

export default CategoryItem;
