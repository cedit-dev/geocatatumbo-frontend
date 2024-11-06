'use client'
import { useState } from 'react';
import { 
  MdKeyboardArrowRight, 
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdMap,
  MdDashboard,
  MdSettings 
} from "react-icons/md";

interface MenuItem {
  id: number;
  title: string;
  icon: JSX.Element;
  items?: { id: string; label: string }[];
}

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState(new Set());

  const menuItems: MenuItem[] = [
    {
      id: 1,
      title: 'Dashboard',
      icon: <MdDashboard className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Mapas',
      icon: <MdMap className="w-6 h-6" />,
      items: [
        { id: 'map-1', label: 'Mapa Base' },
        { id: 'map-2', label: 'Capas' },
        { id: 'map-3', label: 'Análisis' },
      ]
    },
    {
      id: 3,
      title: 'Configuración',
      icon: <MdSettings className="w-6 h-6" />,
      items: [
        { id: 'config-1', label: 'General' },
        { id: 'config-2', label: 'Apariencia' },
      ]
    }
  ];

  const toggleSection = (sectionId: number) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionId)) {
      newOpenSections.delete(sectionId);
    } else {
      newOpenSections.add(sectionId);
    }
    setOpenSections(newOpenSections);
  };

  return (
    <div className="relative flex">
      <div 
        className={`
          bg-white shadow-lg h-screen transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-16' : 'w-64'}
        `}
      >
        {/* Logo o título */}
        <div className="p-4 border-b">
          {!isCollapsed && <h1 className="text-lg font-bold">Mi App</h1>}
        </div>

        {/* Menú */}
        <div className="p-2">
          {menuItems.map((item) => (
            <div key={item.id} className="mb-2">
              <button
                onClick={() => item.items && toggleSection(item.id)}
                className={`
                  w-full flex items-center justify-between p-2 rounded-md
                  hover:bg-gray-100 transition-colors duration-200
                  ${openSections.has(item.id) ? 'bg-gray-50' : ''}
                `}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {!isCollapsed && <span>{item.title}</span>}
                </div>
                {!isCollapsed && item.items && (
                  openSections.has(item.id) 
                    ? <MdKeyboardArrowDown className="w-5 h-5" />
                    : <MdKeyboardArrowRight className="w-5 h-5" />
                )}
              </button>
              
              {/* Subitems */}
              {!isCollapsed && item.items && openSections.has(item.id) && (
                <div className="ml-8 mt-2 space-y-2">
                  {item.items.map((subItem) => (
                    <button
                      key={subItem.id}
                      className="w-full text-left text-sm text-gray-600 hover:text-gray-900 py-1"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Botón para colapsar/expandir */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`
            absolute top-2 -right-4 p-2 rounded-full bg-white shadow-md
            hover:bg-gray-100 transition-colors duration-200
          `}
        >
          {isCollapsed ? (
            <MdKeyboardDoubleArrowRight className="w-4 h-4" />
          ) : (
            <MdKeyboardArrowLeft className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};