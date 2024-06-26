"use client";

import { BarChart, Compass, Layout, List, BookCheck } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
	{
		icon: BookCheck,
		label: "About",
		href: "/",
	},
	{
		icon: Compass,
		label: "Browse courses",
		href: "/search",
	},
	{
		icon: Layout,
		label: "Your dashboard",
		href: "/dashboard",
	},
];

const teacherRoutes = [
	{
		icon: List,
		label: "Courses",
		href: "/teacher/courses",
	},
	{
		icon: BarChart,
		label: "Browse",
		href: "/teacher/analytics",
	},
];

export const SidebarRoutes = () => {
	const pathname = usePathname();

	const isTeacherPage = pathname?.includes("/teacher");

	const routes = isTeacherPage ? teacherRoutes : guestRoutes;

	return (
		<div className="flex flex-col w-full sidebar-routes-dashboard">
			{routes.map((route) => (
				<SidebarItem
					key={route.href}
					icon={route.icon}
					label={route.label}
					href={route.href}
				/>
			))}
		</div>
	);
};
