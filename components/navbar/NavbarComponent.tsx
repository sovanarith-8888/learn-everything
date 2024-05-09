'use client'

import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { MenuLists } from "./menu";
import { useState } from "react";
import { MenuItemType } from "./menu";
import { useAppSelector } from "@/redux/hooks";

export function NavbarComponent() {
  const pathname =usePathname();
  const [menu, setMenu] = useState<MenuItemType[]>(MenuLists);
  const count = useAppSelector((state)=> state.counter.value)
  function handleClickMenu(path: string){
    const newMenu = menu.map((item,index)=>{
      if(item.path === path){
        return {...item,active:true}
      }else{
        return {...item, active: false}
      }
    })
    setMenu(newMenu)
  }
  return (
    <Navbar fluid rounded className="w-full">
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/brabd.jpg" className="mr-3 h-6 sm:h-9" alt="Logo Brand" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Learn Everything</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started {count}</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {
          menu.map((item,index)=>(
            <NavbarLink href={item.path} key={index} active={item.path === pathname} as={Link}
              >
              {item.name}
            </NavbarLink>
          ))
        }
      </NavbarCollapse>
    </Navbar>
  );
}
export default NavbarComponent;