
import fish from "../assets/fish.webp";
import mutton from "../assets/mutton.avif";
import chicken from "../assets/chicken.webp";
import prawns from "../assets/prawns.webp";
import noodles from "../assets/noodles.webp";
import lollypop from "../assets/lollypop.webp";
import grillchicken from "../assets/grillchicken.png";

import pasta from "../assets/pasta.png";
import paneer from "../assets/paneer.png";
import pizza from "../assets/pizza.png";
import manchuria from "../assets/manchuria.webp";

import oceanblue from "../assets/oceanblue.webp";
import orangeflavour from "../assets/orangeflavour.png";
import mixedfruit from "../assets/mixedfruit.webp";
import greenapple from "../assets/greenapple.png";
import redberry from "../assets/redberry.png";
import tropical from "../assets/tropical.png";

import burger from "../assets/burger.webp";
import paneerburger from "../assets/paneerburger.jpg";
import cheesyburger from "../assets/cheesyburger.jpg";
import grillchickenburger from "../assets/grillchickenburger.jpg";
import chickentikkaburger from "../assets/chickentikkaburger.jpg";

import veggrilled from "../assets/veggrilled.jpg";
import paneersandwich from "../assets/paneerSandwich.webp";
import grillchickensandwich from "../assets/grillchickensandwich.jpg";
import tandhoorichicken from "../assets/tandhoorichicken.jpg";
import chickentikkasandwich from "../assets/grillchickensandwich.jpg";

import oreo from "../assets/oreo.png";
import mango from "../assets/mango.png";
import kitkat from "../assets/kitkat.png";
import vanilla from "../assets/vanila.jpg";
import strawberry from "../assets/strawberry.jpg";

import apricoit from "../assets/apricoit.webp";
import mangodelight from "../assets/mangodelight.webp";
import khubani from "../assets/khubani.jpg";
import doublekametha from "../assets/doublekametha.webp";

const foods = [
  {
    name: "Fish Curry",
    price: 399,
    category: "Non-Veg",
    img: fish,
  },

  {
    name: "Mutton Curry",
    price: 599,
    category: "Non-Veg",
    img: mutton,
  },

  {
    name: "Chicken Curry",
    price: 299,
    category: "Non-Veg",
    img: chicken,
  },
 {
    name: "Prawns Fry",
    price: 499,
    category: "Non-Veg",
    img: prawns,
  },

  {
    name: "Chicken Noodles",
    price: 349,
    category: "Non-Veg",
    img: noodles,
  },

  {
    name: "Chicken LollyPop",
    price: 299,
    category: "Non-Veg",
    img: lollypop,
  },

  {
    name: "Grilled Chicken",
    price: 549,
    category: "Non-Veg",
    img: grillchicken,
  },

  {
    name: "White Pasta",
    price: 299,
    category: "Veg",
    img: pasta,
  },

  {
    name: "Paneer Tikka",
    price: 249,
    category: "Veg",
    img: paneer,
  },

  {
    name: "Cheese Pizza",
    price: 199,
    category: "Pizza",
    img: pizza,
  },
   
  {
    name: "Veg Manchurian",
    price: 149,
    category: "Veg",
    img: manchuria,
  },

  {
    name: "OceanBlue Mocktail",
    price: 199,
    category: "Drinks",
    img: oceanblue,
  },

  {
    name: "Orange Flavour Mocktail",
    price: 299,
    category: "Drinks",
    img: orangeflavour,
  },

  {
    name: "Mixed Fruit Mocktail",
    price: 249,
    category: "Drinks",
    img: mixedfruit,
  },

  {
    name: "Green Apple Mocktail",
    price: 199,
    category: "Drinks",
    img: greenapple,
  },

  {
    name: "Red Berry Mocktail",
    price: 249,
    category: "Drinks",
    img: redberry,
  },

  {
    name: "Tropical Mocktail",
    price: 199,
    category: "Drinks",
    img: tropical,
  },

 
   {
     name: "Chicken Burger", 
    price: 249,
     category: "Burger", 
     img: burger
     },

    { 
      name: "Paneer Burger", 
      price: 149, 
      category: "Burger", 
      img: paneerburger
     },

    {
       name: "Chicken Cheesy Burger",
        price: 349,
         category: "Burger", 
         img: cheesyburger
    },

    { 
      name: "Chicken Grilled", 
      price: 249,
       category: "Burger", 
      img: grillchickenburger
    },

    { 
      name: "Chicken Tikka",
       price: 249, 
       category: "Burger", 
       img:chickentikkaburger
      },

    {
       name: "Veg Grilled Sandwitch",
        price: 299,
         category: "Sandwich", 
        img: veggrilled
       },

    {
       name: "Paneer Sandwitch",
        price: 299, 
        category: "Sandwich" 
        , img:paneersandwich
      },

    {
       name: "Chicken Sandwitch", 
       price: 349,
        category: "Sandwich",
         img: chickentikkasandwich
         },

    { 
      name: "Chicken Tandhori Sandwitch"
      , price: 339, 
      category: "Sandwich",
       img: tandhoorichicken
     },

    { 
      name: "Chicken Tikka sandwitch",
       price: 299, 
      category: "Sandwich",
       img: chickentikkasandwich

    },

     { 
      name: "Oreo Milkshake", 
      price: 149,
       category: "Milkshakes" ,
       img: oreo
     },

    {
       name: "Mango Milkshake", 
      price: 199, 
      category: "Milkshakes", 
      img: mango
     },

    {
      name: "Kit-Kat Milkshake ",
       price: 199, 
      category: "Milkshakes", 
      img: kitkat
     },

    { name: "Venilaa Milkkshake", 
      price: 149, 
      category: "Milkshakes", 
      img: vanilla
    },

    {
       name: "Strabwerry Milkshake", 
      price: 249, 
      category: "Milkshakes",
       img: strawberry
       },

    { 
      name: "Apricoit Delight", 
      price: 199, 
      category: "Desserts", 
      img: apricoit

    },

    {
       name: "Mango Delight", 
      price: 149, 
      category: "Desserts", 
      img: mangodelight

     },

    {
       name: "Khubhani ka Metha ",
       price: 149, 
      category: "Desserts", 
      img: khubani

     },

    {
       name: "Double ka Metha",
       price: 149, 
      category: "Desserts",
       img:doublekametha

     },
     
    


];

export default foods;