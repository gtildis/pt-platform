import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:container">
      <div className="h-full teacher-layout-container">
        <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50 navbar-container lg:max-w-[1312px]">
          <Navbar />
        </div>

        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50 sidebar-container bg-background">
          <Sidebar />
        </div>
        <main className="md:pl-56 pt-[80px] h-full bg-background">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
