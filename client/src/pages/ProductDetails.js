import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import "../styles/ProductImage.css";
const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  function changeImage(path) {
    // console.log(path);
    var mainImage = document.getElementById("MainImg");
    mainImage.src = `/api/v1/product/${path}/${product._id}`;
  }

  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <section id="prodetails" className="section-p1 mt-2">
        <div className="row container product-details">
          <div className="single-pro-image">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              alt
              width="100%"
              id="MainImg"
            />
            <div className="small-img-group">
              <div className="small-img-col">
                <img
                  src={`/api/v1/product/product-photo/${product._id}`}
                  alt={product.name}
                  width="100%"
                  className="small-img"
                  onClick={() => changeImage("product-photo")}
                />
              </div>
              <div className="small-img-col">
                <img
                  src={`/api/v1/product/product-photo1/${product._id}`}
                  alt={product.name}
                  width="100%"
                  className="small-img"
                  onClick={() => changeImage("product-photo1")}
                />
              </div>
              <div className="small-img-col">
                <img
                  src={`/api/v1/product/product-photo2/${product._id}`}
                  alt={product.name}
                  width="100%"
                  className="small-img"
                  onClick={() => changeImage("product-photo2")}
                />
              </div>
            </div>
          </div>

          {/* <div className="col-md-2">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-2">
          <img
            src={`/api/v1/product/product-photo1/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-2">
          <img
            src={`/api/v1/product/product-photo2/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div> */}
          <div className="col-md-6 product-details-info">
            <h1 className="text-center">Product Details</h1>
            <hr />
            <h6>Name : {product.name}</h6>
            <h6>Description : {product.description}</h6>
            <h6>
              Price :
              {product?.price?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h6>
            <h6>Category : {product?.category?.name}</h6>
            <button class="btn btn-secondary ms-1">ADD TO CART</button>
          </div>
        </div>
      </section>
      <hr />
      <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  {/* <button
                  className="btn btn-dark ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item Added to cart");
                  }}
                >
                  ADD TO CART
                </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
