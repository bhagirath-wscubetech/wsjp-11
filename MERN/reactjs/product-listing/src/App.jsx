import { useEffect, useState } from "react";
import Filter from "./Components/Filter";
import Listing from "./Components/Listing";
import axios from "axios";

function App() {
  const [categories, setCategory] = useState([]);
  const [products, setProduct] = useState([]);
  const [cat, setCat] = useState([]);
  const [rating, setRating] = useState(null);
  const [range, setRange] = useState({
    from: 0,
    to: 0
  })

  const catHandler = (category) => {
    if (category == null) {
      setCat([]);
      return;
    }
    const i = cat.indexOf(category);
    if (i != -1) {
      const newCat = cat.filter(
        (d) => {
          if (d != category) return true;
          else return false;
        }
      );
      setCat(newCat);
    } else {
      const newCat = [...cat, category];
      setCat(newCat);

    }
  }


  useEffect(
    () => {
      axios.get("https://fakestoreapi.com/products/categories")
        .then(
          (success) => {
            // console.log(success.data);
            setCategory(success.data);
          }
        )
        .catch(
          (error) => {

          }
        )

      axios.get(
        "https://fakestoreapi.com/products",
      ).then(
        (success) => {
          setProduct(success.data);
        }
      ).catch(
        (error) => {
          console.log(error);
        }
      )
    },
    []
  )


  return (
    <div className="gap-[10px] max-w-[1200px] mx-auto grid grid-cols-5">
      <Filter rating={rating} ratingHandler={setRating} range={range} rangeHandler={setRange} categories={categories} cat={cat} catHandler={catHandler} products={products}/>
      <Listing rating={rating} range={range} products={products} cat={cat} />
    </div>
  );
}

export default App;
