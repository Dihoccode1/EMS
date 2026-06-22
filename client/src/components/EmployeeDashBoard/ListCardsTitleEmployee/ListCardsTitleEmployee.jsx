import React from "react";
import CardTitleEmployee from "./CardTitleEmployee/CardTitleEmployee";

const ListCardsTitleEmployee = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
      {cards.map((card) => (
        <CardTitleEmployee
          key={card.title}
          {...card}
        />
      ))}
    </div>
  );
};

export default ListCardsTitleEmployee;
