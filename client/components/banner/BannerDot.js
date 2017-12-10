import React from 'react'
import banner from 'CSS/banner'
import 'CSS/banner'
import { Button } from 'semantic-ui-react'

const BannerDot = ({ changeIndex, banners, index }) => (
  <div className={banner.list}>
    {banners.map((banner, i) => <input
      type='button'
      className={index===(i+1) && 'active'}
      key={banner._id}
      onClick={() => changeIndex(i)} />)}
  </div>
)

export default BannerDot
