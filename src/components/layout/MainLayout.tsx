import React from 'react';
import { Menu, ShoppingBag, Users, Truck, UserCircle, Package, LayoutDashboard, LogOut } from 'lucide-react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useAuthStore from '../../lib/store/authStore';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Hello Shoes Management System</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="text-gray-500 hover:text-gray-700"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? 'w-64' : 'w-20'
          } bg-white shadow-sm transition-all duration-300 ease-in-out`}
        >
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <LayoutDashboard size={20} />
                  {isSidebarOpen && <span>Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/sales"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <ShoppingBag size={20} />
                  {isSidebarOpen && <span>Sales</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/inventory"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Package size={20} />
                  {isSidebarOpen && <span>Inventory</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Users size={20} />
                  {isSidebarOpen && <span>Customers</span>}
                </Link>
              </li>
              <li>
                <Link
                  to="/suppliers"
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <Truck size={20} />
                  {isSidebarOpen && <span>Suppliers</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;