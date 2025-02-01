import react from "react";
import "./style_body.scss";
import Product from "../Product/Product";
import InfoContent from "../InfoContent/InfoContent";
import prod1 from './img/products/prod1.png';
import prod2 from './img/products/prod2.png';
import prod3 from './img/products/prod3.png';
import prod4 from './img/products/prod4.png';
import prod5 from './img/products/prod5.png';
import prod6 from './img/products/prod6.png';
import shadow from './img/products/prodShadow.png';


const Body = () => {
	const products = [
    {
      id: 1,
      imageUrl: prod1,
      shadowImageUrl: shadow,
      price: "\$52.00",
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi."
    },
    {
      id: 2,
      imageUrl: prod2,
      shadowImageUrl: shadow,
      price: "\$65.00",
      title: "ANOTHER PRODUCT",
      description: "Description for another product."
    },
    {
      id: 3,
      imageUrl: prod3,
      shadowImageUrl: shadow,
      price: "\$65.00",
      title: "ANOTHER PRODUCT",
      description: "Description for another product."
    },
		{
      id: 4,
      imageUrl: prod4,
      shadowImageUrl: shadow,
      price: "\$65.00",
      title: "ANOTHER PRODUCT",
      description: "Description for another product."
    },
		{
      id: 5,
      imageUrl: prod5,
      shadowImageUrl: shadow,
      price: "\$65.00",
      title: "ANOTHER PRODUCT",
      description: "Description for another product."
    },
		{
      id: 6,
      imageUrl: prod6,
      shadowImageUrl: shadow,
      price: "\$65.00",
      title: "ANOTHER PRODUCT",
      description: "Description for another product."
    },
  ];
  
	

  return (
    <div>
      <section className="banner-section">
				<div className="banner-wrapper"></div>
				<div className="banner-text">
				<div className="banner-title">
					<div className="banner__title__wrap">
					<h1 className="banner__title1">THE BRAND</h1>
					<h2 className="banner__title2">OF LUXERIOUS <span>FASHION</span></h2> </div>
				</div>
				</div>
			</section>
			<section className="category-section">
				<div className="container">
					<div className="category__wrapper">
						<div className="category-women">
							<div className="category-bg">
								<p className="category-text">30% OFF</p>
								<h3 className="category-title">FOR WOMEN</h3>
							</div>
						</div>

						<div className="category-men">
							<div className="category-bg">
								<p className="category-text">HOT DEAL</p>
								<h3 className="category-title">FOR MEN</h3>
							</div>
						</div>

						<div className="category-kids">
							<div className="category-bg">
								<p className="category-text">NEW ARRIVALS</p>
								<h3 className="category-title">FOR KIDS</h3>
							</div>
						</div>

						<div className="category-accesories">
							<div className="category-bg">
								<p className="category-text">LUXIROUS & TRENDY</p>
								<h3 className="category-title">ACCESORIES</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="mainContent">
			<div className="header">
      <h2>Featured Items</h2>
      <p>Shop for items based on what we featured in this week</p>
    </div>
		<div className="cards">
      {products.map(product => (
        <Product
          key={product.id}
					imageUrl={product.imageUrl} 
          shadowImageUrl={product.shadowImageUrl}
          price={product.price}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
		</section>
		<div class="knopka">
    <a href="#"><button class="knopka-text">Browse All Products</button></a>
  </div>
	<div>
<InfoContent />
	</div>
    </div>
  )
};
export default Body;