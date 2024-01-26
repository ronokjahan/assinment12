

const Cartmenu = ({items}) => {
    const{image,name,recipe}=items
    return (
        <div className="flex">
            <img  style={{borderRadius:'0 200px 200px 200px'}} className="w-[128px]" src={image} alt="" />
            <div>
                <h1>{name}</h1>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default Cartmenu;