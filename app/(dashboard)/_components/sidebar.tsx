import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
	return (
		<div className="h-full border-r flex flex-col overflow-y-auto  shodow-sm sidebar-dashboard">
			<div className="p-6 h-[80px]">
				<Logo />
			</div>
			<div className="flex flex-col w-full">
				<SidebarRoutes />
			</div>
		</div>
	);
};
