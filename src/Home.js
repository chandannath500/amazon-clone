import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/SA_SummerStore/SA_summercarnical_21/Summer-carnival-hero_1500x600._CB658124135_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"
            price={42999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="LG 260L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-S292RDSX, Dazzle Steel, Convertible)"
            price={24999}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71nd0B5mhFL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="IFB 6 kg 5 Star Fully-Automatic Front Loading Washing Machine (Diva Aqua SX, Silver, Inbuilt Heater, Aqua Energie water softener)"
            price={22800}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/61F91pD42cL._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="BLIVE Regular fit Solid Men's Henley Neck Full Sleeve Cotton Blend T Shirts"
            price={399}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61hh8wS16wL._UL1300_.jpg"
          />
          <Product
            id="3254354345"
            title="Titan Analog Black Dial Men's Watch 1834NL01/NN1834NL01"
            price={2795}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71OpL2oTJqL._UL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={10000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
