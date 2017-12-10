import React from 'react'
import { Button } from 'semantic-ui-react'
import banner from 'CSS/banner'

const BannerButton = ({ decrementIndex, incrementIndex}) => (
  <Button.Group>
    <Button className={[banner.button, banner.buttonLeft].join(' ')} onClick={decrementIndex}>&#10094;</Button>
    <Button className={[banner.button, banner.buttonRight].join(' ')} onClick={incrementIndex}>&#10095;</Button>
  </Button.Group>
)

export default BannerButton
