import Link from "next/link";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
	return (
		<div className="h-full border-r flex flex-col overflow-y-auto  shodow-sm sidebar-dashboard">
			<Link href={`/`}>
				<div className="flex items-center p-3 h-[80px]">
					<Logo />
				</div>
			</Link>
			<div className="flex flex-col w-full">
				<SidebarRoutes />
			</div>
		</div>
	);
};
