const CategoryCard = ({ title, image }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title justify-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;