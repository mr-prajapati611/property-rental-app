import React from 'react'
import { useContext } from 'react'
import "./Home.css"
import Card from '../Card/Card'
import house from '../../assets/house.jpg'
import house1 from '../../assets/houseKitchen.jpg'
import house2 from '../../assets/houseLiving.jpg'
import farmhouse from '../../assets/farmhouse.jpg'
import farmhouse1 from '../../assets/farmhouse1.jpg'
import farmhouse2 from '../../assets/farmhouse2.jpg'
import ski from '../../assets/ski.avif'
import ski1 from '../../assets/ski1.avif'
import ski2 from '../../assets/ski2.avif'
import flat from '../../assets/flat.jpg'
import flat1 from '../../assets/flat1.jpg'
import flat2 from '../../assets/flat2.jpg'
import villa from '../../assets/villa.avif'
import villa1 from '../../assets/villa1.avif'
import villa2 from '../../assets/villa2.avif'
import mountain from '../../assets/mountain.jpg'
import mountain1 from '../../assets/mountain1.jpg'
import mountain2 from '../../assets/mountain2.jpg'
import huthouse from '../../assets/huthouse.avif'
import huthouse1 from '../../assets/huthouse1.avif'
import huthouse2 from '../../assets/huthouse2.avif'
import village from '../../assets/village.jpg'
import village1 from '../../assets/village1.jpg'
import village2 from '../../assets/village2.jpg'
import mumbai from '../../assets/mumbai.jpg'
import mumbai1 from '../../assets/mumbai1.jpg'
import mumbai2 from '../../assets/mumbai2.jpg'
import old from '../../assets/old.avif'
import old1 from '../../assets/old1.avif'
import old2 from '../../assets/old2.avif'
import room from '../../assets/room.avif'
import room1 from '../../assets/room1.avif'
import room2 from '../../assets/room2.avif'
import cottage from '../../assets/cottage.avif'
import cottage1 from '../../assets/cottage1.avif'
import cottage2 from '../../assets/cottage2.avif'
import { dataContext } from '../../Context/Usercontext'

function Home() {
  let {
          title,
          setTitle,
          addListing,
          setaddListing,
          addImage1,
          setaddImage1,
          addImage2,
          setaddImage2,
          addImage3,
          setaddImage3,
          price,
          setprice
      } = useContext(dataContext)
  return (
    <div id='home'>
        <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in Jhansi"} price={"40,000"}/>
        <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK Farmhouse in Lucknow"} price={"60,000"}/>
        <Card image1={ski} image2={ski1} image3={ski2} title={"1BHK Flat in Manali"} price={"60,000"}/>
        <Card image1={flat} image2={flat1} image3={flat2} title={"1BHK Modern Flat in Kanpur"} price={"30,000"}/>
        <Card image1={villa} image2={villa1} image3={villa2} title={"2BHK Modern Villa in Jhansi"} price={"50,000"}/>
        <Card image1={mountain} image2={mountain1} image3={mountain2} title={"1BHK House in Manali"} price={"50,000"}/>
        <Card image1={huthouse} image2={huthouse1} image3={huthouse2} title={"1BHK Huthouse in Kasol"} price={"70,000"}/>
        <Card image1={village} image2={village1} image3={village2} title={"2BHK House in Jhansi"} price={"30,000"}/>
        <Card image1={mumbai} image2={mumbai1} image3={mumbai2} title={"1BHK Flat in Mumbai"} price={"20,000"}/>
        <Card image1={old} image2={old1} image3={old2} title={"1BHK House in Bangalore"} price={"40,000"}/>
        <Card image1={room} image2={room1} image3={room2} title={"1BHK Flat in Hyderabad"} price={"30,000"}/>
        <Card image1={cottage} image2={cottage1} image3={cottage2} title={"Independent Cottage in Goa"} price={"90,000"}/>
        { addListing?<Card image1={URL.createObjectURL(addImage1)} image2={URL.createObjectURL(addImage2)} image3={URL.createObjectURL(addImage3)} title={title} price={price}/>:""}
    </div>
  )
} 

export default Home