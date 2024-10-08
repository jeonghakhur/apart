"use client";

import Link from "next/link";
import { useRef } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

const menu = [
  {
    href: "/",
    name: "HOME",
  },
  // {
  //   href: "/business",
  //   name: "사업개요",
  // },
  // {
  //   href: "/location",
  //   name: "입지안내",
  // },
  // {
  //   href: "/size",
  //   name: "평형안내",
  // },
  // {
  //   href: "/press",
  //   name: "보도자료",
  // },
  // {
  //   href: "/development",
  //   name: "주변개발계획",
  // },
  // {
  //   href: "/market",
  //   name: "주변시장동향",
  // },
  {
    href: "/customer",
    name: "관심고객등록",
  },
];

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const handleNav = () => {
    if (window.matchMedia("(max-width: 768px").matches) {
      setTimeout(function () {
        if (navRef.current) {
          navRef.current.style.display = "none";
        }
      }, 500);
    }
  };
  const pathName = usePathname();
  return (
    <>
      <header className='ly-header'>
        <h1>
          <Link href='/' className='font-bold text-3xl flex flex-col'>
            구리인창
            <span className='bg-white text-neutral-900 mt-2 p-2 inline-block mx-auto'>
              성원상떼빌
            </span>
          </Link>
        </h1>
        <button type='button' className='btn-nav-open'>
          <MdMenu />
        </button>
      </header>
      <nav className='ly-nav' ref={navRef}>
        <button type='button' className='btn-nav-close'>
          <MdClose />
        </button>
        <ul>
          {menu?.map((item, index) => (
            <li
              key={index}
              className={`${pathName === item.href ? "active" : ""}`}
            >
              <Link href={item.href} className='nav-link' onClick={handleNav}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
