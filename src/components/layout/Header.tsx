import { Menu, Bell, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { userProfile } = useAuth();

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-emerald-100 bg-white/80 backdrop-blur-sm px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {/* Mobile menu button */}
      <button
        type="button"
        className="rounded-lg p-2 text-gray-700 lg:hidden hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
        onClick={onMenuClick}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-emerald-200 lg:hidden" />

      {/* Search or Title */}
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex flex-1 items-center">
          <h1 className="text-lg font-semibold text-gray-900 lg:text-xl">
            Climate Resilience Dashboard
          </h1>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Notifications */}
          <button
            type="button"
            className="relative rounded-lg p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
          >
            <span className="sr-only">View notifications</span>
            <Bell className="h-5 w-5" />
            {/* Notification badge */}
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-emerald-200" />
    
          {/* Profile */}
          <div className="flex items-center gap-x-3">
            <div className="hidden lg:block text-right">
              <p className="text-sm font-medium text-gray-900">
                {userProfile?.user.first_name && userProfile?.user.last_name
                  ? `${userProfile.user.first_name} ${userProfile.user.last_name}`
                  : 'Farmer'}
              </p>
              <p className="text-xs text-gray-500">
                {userProfile?.location || 'Kenya'}
              </p>
            </div>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}