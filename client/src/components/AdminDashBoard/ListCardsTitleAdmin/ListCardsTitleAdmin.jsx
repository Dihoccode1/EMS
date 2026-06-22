import React from "react";
import CardTitleAdmin from "./CardTitleAdmin/CardTitleAdmin";

const ListCardsTitleAdmin = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
      {cards.map((card) => (
        <CardTitleAdmin key={card.label} {...card} />
      ))}
    </div>
  );
};

export default ListCardsTitleAdmin;
