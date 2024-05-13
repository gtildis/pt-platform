"use client";
import qs from "query-string";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons/lib";

interface CategoryItemProps {
	label: string;
	value?: string;
	icon?: IconType;
}

export const CategoryItem = ({
	label,
	value,
	icon: Icon,
}: CategoryItemProps) => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const currentCategoryId = searchParams.get("categoryId");
	const currentTitle = searchParams.get("title");

	const isSelected = currentCategoryId === value;

	const onClick = () => {
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: { title: currentTitle, categoryId: isSelected ? null : value },
			},
			{ skipNull: true, skipEmptyString: true }
		);

		router.push(url);
	};

	return (
		<button
			onClick={onClick}
			className={cn(
				"py-2 px-3 text-sm border border-slate-200 flex items-center gap-x-1 hover:border-primary transition category-item bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md",
				isSelected &&
					"border-primary font-[600] text-primary category-item transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
			)}
			type="button"
		>
			{Icon && <Icon size={20} />}
			<div className="truncate">{label}</div>
		</button>
	);
};
