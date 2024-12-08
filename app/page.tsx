import React from "react";
import Hero from "./components/Hero";
import LoginForm from "./components/LoginForm";
import ContactUs  from "./components/ContactUs";
import  ProductCard from "./components/ProductCard";

export default function Home(){
  return(
    <div>
<Hero/>
<LoginForm/>
<ContactUs/>
<ProductCard/>
    </div>
  )
}