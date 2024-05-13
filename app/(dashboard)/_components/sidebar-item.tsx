"use-client";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
	icon: LucideIcon;
	label: string;
	href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
	const pathname = usePathname();
	const router = useRouter();

	const isActive =
		(pathname === "/" && href === "/") ||
		pathname === href ||
		pathname?.startsWith(`${href}/`);

	const onCLick = () => {
		router.push(href);
	};

	return (
		<button
			onClick={onCLick}
			type="button"
			className={cn(
				"flex items-center gap-x-2 text-slate-100 text-sm font-[500] pl-6 transition-all  hover:bg-slate-700/20",
				isActive &&
					"text-primary bg-sky-200/20 hover:bg-sky-200/20 hover:text-primary"
			)}
		>
			<div className="flex items-center gap-x-2 py-4 sidebar-item-dashboard">
				<Icon
					size={22}
					className={cn("text-slate-100", isActive && "text-primary")}
				/>
				{label}
			</div>
			<div
				className={cn(
					"ml-auto opacity-0 border-2 border-primary h-full transition-all",
					isActive && "opacity-100"
				)}
			/>
		</button>
	);
};
