import React from 'react'
import { Image } from 'semantic-ui-react'
import banner from 'CSS/banner'

const Banner = ({ index, image, number }) => (
  <Image src={image} hidden={number!==index} className={banner.image} />
)

export default Banner
