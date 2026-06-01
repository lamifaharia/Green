const CategoryCard = ({ title, image }) => {
    return (
        <div className="card shadow-lg image-full">
            <figure>
                <img src={image} alt={title} />
            </figure>

            <div className="card-body justify-center items-center">
                <h2 className="card-title text-3xl">{title}</h2>
            </div>
        </div>
    );
};

export default CategoryCard;