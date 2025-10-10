import { Link, useLocation } from 'react-router';
import { Home, Cloud, Sprout, Award, LogOut, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Weather', href: '/weather', icon: Cloud },
  { name: 'Crops', href: '/crops', icon: Sprout },
  { name: 'GreenPoints', href: '/greenpoints', icon: Award },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const { logout, userProfile } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white border-r border-emerald-100 px-6 pb-4">
          {/* Logo */}
          <div className="flex h-16 shrink-0 items-center">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AgriSave
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={cn(
                            'group flex gap-x-3 rounded-lg p-3 text-sm font-semibold leading-6 transition-all',
                            isActive
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                              : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                          )}
                        >
                          <item.icon
                            className={cn(
                              'h-5 w-5 shrink-0',
                              isActive ? 'text-white' : 'text-gray-500 group-hover:text-emerald-600'
                            )}
                          />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>

              {/* User Section */}
              <li className="mt-auto">
                <div className="rounded-lg bg-emerald-50 p-4 mb-3">
                  <p className="text-xs font-medium text-gray-600 mb-1">Logged in as</p>
                  <p className="text-sm font-semibold text-emerald-700 truncate">
                    {userProfile?.user.email || 'User'}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="group -mx-2 flex w-full gap-x-3 rounded-lg p-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all"
                >
                  <LogOut className="h-5 w-5 shrink-0 text-gray-500 group-hover:text-red-600" />
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 w-64 transform bg-white transition-transform duration-300 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-emerald-100 px-6 pb-4">
          {/* Mobile Header */}
          <div className="flex h-16 shrink-0 items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-2" onClick={onClose}>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AgriSave
              </span>
            </Link>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
                            'group flex gap-x-3 rounded-lg p-3 text-sm font-semibold leading-6 transition-all',
                            isActive
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                              : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                          )}
                        >
                          <item.icon
                            className={cn(
                              'h-5 w-5 shrink-0',
                              isActive ? 'text-white' : 'text-gray-500 group-hover:text-emerald-600'
                            )}
                          />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>

              {/* Mobile User Section */}
              <li className="mt-auto">
                <div className="rounded-lg bg-emerald-50 p-4 mb-3">
                  <p className="text-xs font-medium text-gray-600 mb-1">Logged in as</p>
                  <p className="text-sm font-semibold text-emerald-700 truncate">
                    {userProfile?.user.email || 'User'}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="group -mx-2 flex w-full gap-x-3 rounded-lg p-3 text-sm font-semibold leading-6 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all"
                >
                  <LogOut className="h-5 w-5 shrink-0 text-gray-500 group-hover:text-red-600" />
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}