import { useParams } from "react-router-dom";

const CategoryPage = ({ foods }) => {
  const { type } = useParams();

  const filtered = foods.filter((item) => item.category === type);

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6 ">

      {filtered.map((item, index) => (
        <div key={index} className="shadow p-4 rounded">
          <img src={item.img} className="h-40 w-full object-cover" />
          <h2>{item.name}</h2>
          <p>₹ {item.price}</p>
        </div>
      ))}

    </div>
  );
};

export default CategoryPage;