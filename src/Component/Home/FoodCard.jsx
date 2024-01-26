import { Link } from "react-router-dom";


const FoodCard = ({items}) => {
    const{image,name,recipe}=items
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
     <Link> <button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;