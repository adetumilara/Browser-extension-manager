"use client";
import { ModeToggle } from "@/components/modeToggle";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
const extensions = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];
const filters = ["All", "Active", "Inactive"];

export default function Home() {
  const [handleFilter, setHandleFilter] = useState("All");

  const filteredExtensions =
    handleFilter === "Active"
      ? extensions.filter((ext) => ext.isActive === true)
      : handleFilter === "Inactive"
      ? extensions.filter((ext) => ext.isActive === false)
      : extensions;

  return (
    <div className="flex flex-col items-center justify-items-start bg-background mb-[4rem]">
      {/* NAV BAR */}
      <nav className="w-[80%] flex justify-between mt-[2rem] bg-background border-[0.1px] border-foreground py-[.5rem] px-[.5rem] rounded-lg">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={200}
          height={200}
        />
        <ModeToggle />
      </nav>
      {/* BUTTONS */}
      <div className="w-[80%] flex flex-col items-center justify-center mt-[2rem] md:flex-row md:justify-between md:items-center">
        <h3 className="text-[2rem]">Extension List</h3>

        <div className="flex justify-between w-[100%] mt-[1rem] md:w-[35%] md:mt-0">
          {filters.map((filter) => {
            return (
              <button
                className={`${
                  handleFilter === filter
                    ? "bg-amber-600 border-0"
                    : "bg-background border-[0.1px]"
                } text-foreground  border-foreground px-[1.5rem] py-[.5rem] rounded-full hover:bg-amber-600 hover:border-0`}
                onClick={() => setHandleFilter(filter)}
                key={filter}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
      {/* CARDS */}
      <div className="w-[80%] grid grid-cols-1  gap-5 mt-[3rem] md:grid-cols-3">
        {filteredExtensions.map((extension) => {
          return (
            <div
              key={extension.name}
              className="flex flex-col bg-background border-[0.1px] border-foreground p-2.5 rounded-lg mb-3"
            >
              <div className="flex w-[100%] items-start">
                <Image
                  src={`${extension.logo}`}
                  alt={extension.name}
                  width={50}
                  height={50}
                />
                <div className="ml-[3rem] flex flex-col justify-items-start">
                  <h3 className="text-[1.2rem]">{extension.name}</h3>
                  <p className="mt-[.5rem]">{extension.description}</p>
                </div>
              </div>
              <div className="flex w-[100%] justify-between items-center mt-[1rem]">
                <button className="p-[.5rem] bg-background border-[1px] border-foreground rounded-full hover:border-[#FF6B5C] hover:text-[#FF6B5C]">
                  Remove
                </button>
                <div>
                  <Switch
                    // className="bg-[#FF6B5C]"
                    defaultChecked={extension.isActive}
                    onClick={() => {
                      extension.isActive = !extension.isActive;
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
