import React from 'react'
import "./Houses.css"
import Card from '../Card/Card'
import house from '../../assets/house.jpg'
import house1 from '../../assets/houseKitchen.jpg'
import house2 from '../../assets/houseLiving.jpg'
import villa from '../../assets/villa.avif'
import villa1 from '../../assets/villa1.avif'
import villa2 from '../../assets/villa2.avif'
import village from '../../assets/village.jpg'
import village1 from '../../assets/village1.jpg'
import village2 from '../../assets/village2.jpg'
import cottage from '../../assets/cottage.avif'
import cottage1 from '../../assets/cottage1.avif'
import cottage2 from '../../assets/cottage2.avif'

function Houses() {
  return (
    <div id='houses'>
        <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in Jhansi"} price={"40,000"}/>
        <Card image1={villa} image2={villa1} image3={villa2} title={"2BHK Modern Villa in Jhansi"} price={"50,000"}/>
        <Card image1={village} image2={village1} image3={village2} title={"2BHK House in Jhansi"} price={"30,000"}/>
        <Card image1={cottage} image2={cottage1} image3={cottage2} title={"Independent Cottage in Goa"} price={"90,000"}/>
    </div>
  )
}

export default Houses