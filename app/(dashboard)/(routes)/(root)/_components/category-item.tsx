import thunder from "@/public/thunder.svg";

interface CategoryItemProps {
  label: string;
  p: string;
}

const CategoryItem = ({ label, p }: CategoryItemProps) => {
  return (
    <div className="mt-28 w-56">
      <h3 className="text-center text-2xl mb-4">{label}</h3>
      <p className="text-center">{p}</p>
    </div>
  );
};

export default CategoryItem;
