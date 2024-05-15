"use client";

import { Category } from "@prisma/client";

import {
	GiMuscularTorso,
	GiBodyBalance,
	GiWeightScale,
	GiWeightLiftingUp,
	GiBrokenHeartZone,
	GiDiscobolus,
} from "react-icons/gi";

import {
	FcBearish,
	FcEngineering,
	FcFilmReel,
	FcMultipleDevices,
	FcMusic,
	FcOldTimeCamera,
	FcSportsMode,
	FcChargeBattery,
} from "react-icons/fc";
import { IconType } from "react-icons/lib";
import { CategoryItem } from "./category-item";

interface CategoriesProps {
	items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
	"Body weight exercises": GiBodyBalance,
	"Cardiovascular adjustments": GiBrokenHeartZone,
	"Mobility conditioning": GiDiscobolus,
	"Muscle hypertrophy": GiMuscularTorso,
	"Fat loss": GiWeightScale,
	"Hiit workout": GiWeightLiftingUp,
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
