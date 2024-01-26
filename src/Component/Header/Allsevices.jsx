import { Link, useLoaderData } from "react-router-dom";


const Allsevices = () => {
    


    const loader=useLoaderData([])
    const{photo,name,age,_id,details }=loader
 
    return (
        <div>
          <div >
          <img className=" mx-auto rounded-3xl mt-5" style={{ width: 1200, height: 700 }} src={photo} alt="" />
          </div>
          <div className="text-xl font-semibold text-center">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit perferendis, quis, voluptatibus fugit <br />perspiciatis vel totam aliquid voluptas tempore inventore repellat corporis commodi! Excepturi accusantium quidem distinctio quo a asperiores?</p>
          </div>
          <div>
         <h1 className="text-4xl font-semibold text-center mt-4">LEAVE A COMMENT</h1>
<div className="mb-4 mx-auto mt-4 text-center">
  <Link to={`/enrollpage/${_id}`}>
  <button to='enrollpage/:id' className="text-center">
  <h1 className="text-3xl  text-gray-200 rounded"><span className="bg-red-600 p-2 rounded-2xl font-bold ">Enroll Now</span> </h1>
  </button>
  
  </Link>
  
</div>
          </div>
        </div>
    );
};

export default Allsevices;