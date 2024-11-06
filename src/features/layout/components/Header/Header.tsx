'use client'
import { MdNotifications, MdPerson } from 'react-icons/md';

export const Header = () => {
  return (
    <header className="h-16 bg-white shadow-sm z-10">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MdNotifications className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MdPerson className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};