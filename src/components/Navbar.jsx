import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import NavBarLi from "./NavBarLi";
export default function Navbar() {
  return (
    <header className="flex justify-between border border-sky-500 p-3 ">
      <section className="flex gap-1 items-center text-2xl font-bold">
        <span>
          <AiOutlineStar />
        </span>
        <span>HAKI</span>
      </section>
      <section className=" border border-sky-500  ">
        <ul className="flex gap-2 ">
          <NavBarLi text="Home" />
          <NavBarLi text="About" />
          <NavBarLi text="Skill" />
          <NavBarLi text="My work" />
          <NavBarLi text="Contact" />
        </ul>
      </section>
    </header>
  );
}
