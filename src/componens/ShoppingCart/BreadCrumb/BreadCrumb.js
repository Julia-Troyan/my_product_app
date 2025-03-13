import "./style_bread.scss";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title = "NEW ARRIVALS", showNavigation = true }) => {
  return (
    <div className="top-head">
     <div className="top-head_right">
     <Link to="/prodInfo">
        <h2 className="top-head__heading">{title}</h2>
      </Link>
     </div>

      <div div className="top-head_left">
      {showNavigation && (
        <nav className="breadcrumbs">
          <a href="#" className="breadcrumbs__link">
            HOME /
          </a>
          <a href="#" className="breadcrumbs__link">
            MEN /
          </a>
          <a href="#" className="breadcrumbs__link breadcrumbs__link-site">
            {title}
          </a>
        </nav>
      )}
      </div>
    </div>
  );
};

export default BreadCrumb;