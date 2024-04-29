
"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

import { MenuList } from "./menu";

type MenuItem = {
  name: string,
  path: string,
  icon: React.ElementType
}

export function SidebarComponent() {
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  return (
    <Sidebar className="h-screen w-[30%] bg-teal-600 p-2" aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {
            menu.map((item,index)=>(
              <Sidebar.Item key={index} as={Link} href={item.path}  icon={item.icon}>
                {item.name}
              </Sidebar.Item>
            ))
          }
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
export default SidebarComponent;