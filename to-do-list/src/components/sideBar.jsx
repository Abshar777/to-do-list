import Button from "./ui/button";

function SideBar({active,setActive}) {
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
  return (
    <div className="w-2/12 h-full py-4 px-2  hidden md:flex flex-col border-r-[1px] border-zinc-800">
      <Button
        icon={"ri-triangle-fill"}
        border={true}
        secIcon={"ri-expand-up-down-line"}
        name={"Abshar"}
      />
      <div className="md:flex flex-col gap-[.2rem] py-4">
        {navItems.map((e, i) => (
          <div
            className=""
            onClick={() => setActive(i)}
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
