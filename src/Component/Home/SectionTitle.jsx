

const SectionTitle = ({subheading,hading}) => {
    return (
        <div className=" text-center">
            <p className='text-3xl from-neutral-100' >{subheading}</p>
            <h3 className="text-6xl from-neutral-content text-blue-500">{hading}</h3>
        </div>
    );
};

export default SectionTitle;

