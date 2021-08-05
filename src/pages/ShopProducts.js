import React, { useState, useEffect } from "react";
import Products from "../components/Products";
import Button from "../components/Button";

const ShopProducts = (props) => {
  const [products, setProducts] = useState([]);

  //function to get the products from API
  const getProducts = async () => {
    //request the data
    const response = await fetch(
      `https://cdn.contentful.com/spaces/9w5oyr18u3p9/environments/master/entries?access_token=pk_kXSL20g3wwNlLA8kMIEnr9HWrrsabJoJYJukZuws&content_type=product`
    );
    //parsing the data
    const data = await response.json();
    //storing the data in state

    //map over the array
    const itemsArr = data.items.map((item, index) => {
      return {
        productName: item.fields.productName,
        image: data.includes.Asset.filter((img) => {
          let id = img.sys.id;
          return id === item.fields.image.sys.id;
        })[0].fields.file.url,
        //recieved help on this from CJ and Sam once I ran into the same issue they had with photos not matching titles
        description: item.fields.description,
        price: item.fields.price,
        inStock: item.fields.inStock,
        id: item.fields.id,
      };
    });

    setProducts(itemsArr);
  };

  //trigger it to load
  useEffect(() => {
    getProducts();
  }, []);
  // adding an empty array avoids an infinite loop

  return (
    <div>
      <Products products={products} addToCart={props.addToCart} label="add" />
    </div>
  );
};

export default ShopProducts;
