import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {[
        "home",
        "expertises",
        "work",
        "articles",
        // "testimonials",
        "contact",
      ].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313bac" } : {}}
        >
          {" "}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
