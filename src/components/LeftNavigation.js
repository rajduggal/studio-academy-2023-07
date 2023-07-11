const LeftNavigation = ({ navItems, navigateToSection }) => {
  console.log(navItems);
  return (
    <div className="left-navigation">
      {navItems &&
        navItems.map((item) => {
          return (
            <div
              className={item.active ? "" : "disabled-link"}
              key={item.title}
              onClick={() => navigateToSection(item)}
            >
              {item.title}
            </div>
          );
        })}
    </div>
  );
};

export default LeftNavigation;
