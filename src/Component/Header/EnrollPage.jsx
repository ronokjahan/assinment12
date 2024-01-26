
import { useLoaderData } from "react-router-dom";



const EnrollPage = () => {
  const loader=useLoaderData([])
  const{photo,name,age,_id,details }=loader
   const enrollhandel=event=>{
    event.preventDefault()
    const from=event.target 
    const name=from.name.value 
    const email=from.email.value
    const price=from.price.value 
    const date=from.date.value
    const all={name,email,price,date,photo}
    console.log(all); 
  fetch('http://localhost:3000/enroll',{
    method:'POST',
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(all),
  })
  .then(res=>res.json())
  .then(data=>console.log(data))

   }
    return (
        <div >
  <div >
    
    <div className="" >
      <form onSubmit={enrollhandel} className="card-body  ">
        <div className="md:grid grid-cols-2 gap-3">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
        </div>
        
        </div>
        <div className="form-control mt-6  w-2/3 mx-auto ">
          <button  type="submit" className="btn btn-primary">Enroll Now</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default EnrollPage;