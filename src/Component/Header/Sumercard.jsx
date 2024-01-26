import { Link } from "react-router-dom";


const Sumercard = ({card}) => {
  console.log(card);
    const{photo,name,age,_id }=card
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
        {/* <Link to={`/allservice/${_id}`} >   */}
        <h2 className="card-title hover:bg-current">
           {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          {/* </Link> */}
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <Link to={`/allservice/${_id}`}>

          <button className="btn btn-info">ViewDetails</button>
          </Link>
       
        </div>
      </div>
    );
};

export default Sumercard;