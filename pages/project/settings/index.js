import React, { useState } from "react";
import Layout from "../../../components/Layout";
import ProjectSettings from "../../../components/Settings";
import Git from "../../../components/Settings/git";
import Variables from "../../../components/Settings/variables";
export default function Settings() {
  const [component, setComponent] = useState('general')

  const handleClick = e => {
    switch(e.target.getAttribute('name')){
      case 'git':
        setComponent('git')
        break;
      case 'variables':
        setComponent('variables')
        break;
      default:
        setComponent('general')
    }
  }

  return (
    <>
      <div className="w-full h-auto py-28 font-['Inter']">
        <div className="container w-full items-center mx-auto">
          <div className="flex items-center justify-between py-12">
            <h2 className="text-4xl font-bold">Project Settings</h2>
          </div>
          <div className="border-b border-gray-500"></div>

          <div className="w-full flex justify-between items-start">
            <div className="w-[25%] mt-12">
              <ul className="w-full">
                <li name='general' className={`${component === 'general' ? "bg-transparent text-gray-900 hover:text-gray-900 font-semibold hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md" : "bg-transparent text-gray-500 hover:text-gray-900 font-medium hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md"}`} onClick={handleClick}>
                  General
                </li>
                <li name='git' className={`${component === 'git' ? "bg-transparent text-gray-900 hover:text-gray-900 font-semibold hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md" : "bg-transparent text-gray-500 hover:text-gray-900 font-medium hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md"}`} onClick={handleClick}>
                  Git
                </li>
                <li name='variables' className={`${component === 'variables' ? "bg-transparent text-gray-900 hover:text-gray-900 font-semibold hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md" : "bg-transparent text-gray-500 hover:text-gray-900 font-medium hover:cursor-pointer hover:bg-gray-200 p-2 rounded-md"}`} onClick={handleClick}>
                  Environment Variables
                </li>
              </ul>
            </div>
            {component === 'git' ? <Git /> : component === 'variables' ? <Variables /> : <ProjectSettings />}
          </div>
        </div>
      </div>
    </>
  );
}

Settings.Layout = Layout;
