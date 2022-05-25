import React, { useEffect, useState } from "react";

import { db } from "../../config/Config";
import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

export default function Sales() {
  const [salesProducts, setSalesProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [sale, setSale] = useState("");
  const [showSale, setShowSale] = useState(false);
  const salesUpdateData = async () => {
    let salesAllData = [];
    const querySnapshot = await getDocs(collection(db, "sales"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      let data = { ...doc.data(), id: doc.id };
      salesAllData.push(data);
    });
    setSalesProducts(salesAllData);
    setShowSale(true);
    console.log("user data sales", salesAllData);
  };
  useEffect(() => {
    salesUpdateData();
  }, []);
  return (
    <div>
      <h1>Sales</h1>
      <div className="addSales">
        <div className="addSales-form">
          <div className="addSales-form-title">
            <h1>Sales Options</h1>
          </div>
          <div className="addSales-form-input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              id="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="addSales-form-input">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              placeholder="Description"
              id="desc"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="addSales-form-input">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              placeholder="Price"
              id="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="addSales-form-input">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              placeholder="Image"
              id="image"
              onChange={(e) => {
                setImgLink(e.target.value);
              }}
            />
          </div>
          <div className="addSales-form-input">
            <label htmlFor="Sale">Sale Price</label>
            <input
              type="text"
              placeholder="Sale Price"
              id="Sale"
              onChange={(e) => {
                setSale(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="addSales-form-button">
          <button
            onClick={async () => {
              try {
                const docRef = await addDoc(collection(db, "sales"), {
                  Title: title,
                  Description: description,
                  price: price,
                  imgLink: imgLink,
                  sale: sale,
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              salesUpdateData();
              setTitle("");
              setDescription("");
              setPrice("");
              setImgLink("");
              setSale("");
            }}
          >
            Add
          </button>
        </div>
      </div>
      <hr />
      <br />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Sale Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {salesProducts.map((sales, index) => {
            return (
              <tr key={index}>
                <td>{sales.Title}</td>
                <td>{sales.Description}</td>
                <td>{sales.price}</td>
                <td>{sales.imgLink}</td>
                <td>{sales.sale}</td>
                <td>
                  <button
                    onClick={() => {
                      setShowSale(false);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setShowSale(false);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
