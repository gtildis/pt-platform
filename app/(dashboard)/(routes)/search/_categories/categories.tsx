"use client";

import { Category } from "@prisma/client";

import {
	FcEngineering,
	FcFilmReel,
	FcMultipleDevices,
	FcMusic,
	FcOldTimeCamera,
	FcSportsMode,
} from "react-icons/fc";
import { IconType } from "react-icons/lib";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
	items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
	"Body weight exercises": FcMusic,
	"Cardiovascular adjustments": FcFilmReel,
	"Mobility conditioning": FcSportsMode,
	"Muscle hypertrophy": FcMultipleDevices,
	"Fat loss": FcOldTimeCamera,
	Engineering: FcEngineering,
};

const Categories = ({ items }: CategoriesProps) => {
	return (
		<div className="flex items-center gap-x-2 overflow-x-auto pb-2 categories-routes">
			{items.map((item) => (
				<CategoryItem
					key={item.id}
					label={item.name}
					icon={iconMap[item.name]}
					value={item.id}
				/>
			))}
		</div>
	);
};

export default Categories;
