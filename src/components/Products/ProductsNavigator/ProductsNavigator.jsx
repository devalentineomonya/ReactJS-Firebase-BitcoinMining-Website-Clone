import "./ProductsNavigator.css";
import ProductsNavLinks from "../../../assets/Data/ProductsNavLinks";
const ProductsNavigator = ({activeTab, setActiveTab}) => {

  return (
    <div className="products-navigator-container">
      <ul className="navigator-links-container">
        {ProductsNavLinks.map((productNavLink) => (
          <li className={`navigator-item ${activeTab === productNavLink.id ? "active" : null}`} key={productNavLink.id} onClick={()=>setActiveTab(productNavLink.id)}>
            {productNavLink.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsNavigator;
