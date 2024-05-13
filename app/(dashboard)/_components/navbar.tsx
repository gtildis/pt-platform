import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
	return (
		<div className="p-3 border-b h-full flex items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 shadow-sm navbar">
			<MobileSidebar />
			<NavbarRoutes />
		</div>
	);
};
