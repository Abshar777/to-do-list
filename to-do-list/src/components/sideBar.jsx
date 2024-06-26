import { useEffect } from "react";
import Button from "./ui/button";

function SideBar({active,setActive,setTab,tab,show,showClick,overlay}) {

  const navItems = [
    {
      icon: "ri-inbox-2-line",
      name: "all tasks",
      secIcon: [""],
      count: 123,
      border: false,
    },
    {
      icon: "ri-sticky-note-add-line",
      name: "add tasks",
      secIcon: [""],
      count: "",
      border: false,
    },
    {
      icon: "ri-t-shirt-line",
      name: "theme",
      secIcon: "ri-moon-line",
      count: "",
      border: false,
    },
    {
      icon: "ri-account-circle-line",
      name: "account",
      secIcon: [""],
      count: 2,
      border: false,
    },
    {
      icon: "ri-settings-6-line",
      name: "settings",
      secIcon: [""],
      count: 10,
      border: false,
    },
  ];
 useEffect(()=>{
  tab=='addTask'&&setActive(1)
 },[tab])
 
  return (
    <div style={{transition:"all ease 0.5s"}} className={ `${!show?"right-[100%]":"right-[30%]"}  w-[70%] md:w-2/12 md:shadow-[0_0_0_0] shadow-[2px_4px_9px_4px_#00000078] h-full py-4 px-2 md:left-0 bg-zinc-950 md:bg-transparent md:z-[1] z-[9999]  flex absolute md:relative flex-col border-r-[1px] border-zinc-800`}>
      <Button
        icon={"ri-triangle-fill"}
        border={true}
        secIcon={"ri-expand-up-down-line"}
        name={"Abshar"}
      />
      <div className="w-full h-[.5px] mt-4 bg-zinc-700 "></div>
      <div className="md:flex flex-col gap-[.2rem] py-4">
        {navItems.map((e, i) => (
          <div
            className=""
            onClick={() => {
              i==1&&setTab('addTask')
              i==0&&setTab('alltask')
              i!==active&&showClick()
              overlay()
              setActive(i)}}
            key={i}
          >
            <Button
            
              active={i == active}
              key={i}
              icon={e.icon}
              border={e.border}
              count={e.count}
              secIcon={e.secIcon}
              name={e.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
