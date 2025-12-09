import { Outlet, useLocation, Link } from "react-router";
import { Home, Pill, Bell, Settings } from "lucide-react";

export function Layout() {
  const location = useLocation();
  
  // Don't show navigation on welcome screen
  const showNav = location.pathname !== "/";
  
  const navItems = [
    { path: "/scan-method", icon: Home, label: "الرئيسية" },
    { path: "/medications", icon: Pill, label: "أدويتي" },
    { path: "/alerts", icon: Bell, label: "التنبيهات" },
    { path: "/settings", icon: Settings, label: "الإعدادات" },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white" dir="rtl">
      <main className={`${showNav ? 'pb-20' : ''} min-h-screen`}>
        <Outlet />
      </main>
      
      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-md mx-auto px-4">
            <div className="flex justify-around items-center h-16">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-500 hover:text-blue-500"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5]' : ''}`} />
                    <span className={`text-xs ${isActive ? 'font-semibold' : ''}`}>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
