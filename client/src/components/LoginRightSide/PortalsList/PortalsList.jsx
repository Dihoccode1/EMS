import { Link } from "react-router-dom";
import React from "react";

import Portals from "./Portals/Portals";
const PortalsList = ({ portalOption }) => {
  return (
    <div className="space-y-4">
      {portalOption.map((portal) => (
        <Link
          key={portal.to}
          to={portal.to}
          className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-slate-400 hover:bg-indigo-50"
        >
          <Portals portal={portal} />
        </Link>
      ))}
    </div>
  );
};

export default PortalsList;
