const getNavbarItemPrimaryColor = (isSelected: boolean) =>
  isSelected ? "black" : "#c7c6c4";

const SideNav = () => {
  const currentRoute: string = "store";
  return (
    <div className="flex h-screen w-[60px] flex-col items-center justify-between border-r p-[20px]">
      <img src="assets/home.svg" alt="home" width={20} />
      <div className="flex flex-col gap-[20px]">
        <svg
          stroke={getNavbarItemPrimaryColor(currentRoute === "home")}
          fill={getNavbarItemPrimaryColor(currentRoute === "home")}
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path d="M12.97 2.59a1.5 1.5 0 0 0-1.94 0l-7.5 6.363A1.5 1.5 0 0 0 3 10.097V19.5A1.5 1.5 0 0 0 4.5 21h4.75a.75.75 0 0 0 .75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 0 0 1.5-1.5v-9.403a1.5 1.5 0 0 0-.53-1.144l-7.5-6.363Z"></path>
        </svg>
        <svg
          stroke={getNavbarItemPrimaryColor(currentRoute === "store")}
          fill={getNavbarItemPrimaryColor(currentRoute === "store")}
          strokeWidth="0"
          viewBox="0 0 640 512"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path d="M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z"></path>
        </svg>
        <svg
          stroke={getNavbarItemPrimaryColor(currentRoute === "workflow")}
          fill={getNavbarItemPrimaryColor(currentRoute === "workflow")}
          strokeWidth="0"
          version="1.2"
          baseProfile="tiny"
          viewBox="0 0 24 24"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path d="M17 16c-1.305 0-2.403.837-2.816 2h-3.184c-1.654 0-3-1.346-3-3v-3.025c.838.634 1.87 1.025 3 1.025h3.184c.413 1.163 1.512 2 2.816 2 1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.305 0-2.403.837-2.816 2h-3.184c-1.654 0-3-1.346-3-3v-.184c1.163-.413 2-1.512 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.304.837 2.403 2 2.816v7.184c0 2.757 2.243 5 5 5h3.184c.413 1.163 1.512 2 2.816 2 1.657 0 3-1.343 3-3s-1.343-3-3-3zm0-5c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm-10-7c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm10 16c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z"></path>
        </svg>
      </div>
      <img src="assets/user.svg" alt="home" width={20} />
    </div>
  );
};

export default SideNav;
