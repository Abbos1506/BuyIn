import { useState, useEffect } from "react";


const ProductPage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "your-api-key",
            "X-RapidAPI-Host": "e-commers",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setData(result);
          })
          .catch((error) => console.log(error));
      }, []);

    return <div className="products">
       <div className="container">
        <div className="products__cards">
            {
                data.slice(0,6).map(item => (
                    <div className="products__card" key={item.id}>
                        <div className="products__info">
                            <h3>{item.category}</h3>
                            <p>{item.title}</p>
                        </div>
                        <div className="products__image">
                            <img src={item.image} alt={item.title} />
                        </div>
                    </div>
                ))
            }
        </div>
       </div>
    </div>
}

export default ProductPage;