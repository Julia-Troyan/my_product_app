import "./style_bread.scss"



const BreadCrumb = () => {
  return (
    <div className="top-head center">
    <h2 className="top-head__heading">NEW ARRIVALS</h2>
    <nav className="breadcrumbs">
      <a href="#" className="breadcrumbs__link">HOME / </a>
      <a href="#" className="breadcrumbs__link"> MEN / </a>
      <a href="#" className="breadcrumbs__link breadcrumbs__link-site">NEW ARRIVALS</a>
    </nav>
  </div>
  );
};
export default BreadCrumb;