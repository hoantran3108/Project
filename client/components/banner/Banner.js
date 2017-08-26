import React from 'react'
import { Image } from 'semantic-ui-react'
import banner from '../../../dist/css/banner'

const Banner = ({ index, image, number }) => (
  <Image src={image} hidden={number!==index} className={banner.image} />
)

export default Banner
