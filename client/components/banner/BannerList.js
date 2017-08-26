import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers, lifecycle, withStateHandlers, renderComponent, branch, renderNothing } from 'recompose'
import { getBanners } from '../../actions/bannerAction'
import Banner from './Banner'
import BannerButton from './BannerButton'
import Spinner from '../common/Spinner'
import List from '../common/List'
import Fade from '../transitions/Fade'
import banner from '../../../dist/css/banner'

const BannerList = ({ banners, show, index, mouseOver, mouseLeave, ...rest }) => (
  <Fade in={show}>
    <div className={banner.container} onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
      {banners.map(List(Banner, { index }))}
      {showButtonOnMouseEnter({ ...rest })}
    </div>
  </Fade>
)

const onMouseEnter = ({ showButton }) => showButton

const showButtonOnMouseEnter = branch(
  onMouseEnter,
  renderComponent(BannerButton)
)(renderNothing)

const bannerSelector = (state) => state.get('banners').toJS()

const mapStatetoProps = (state) => ({
  banners: bannerSelector(state)
})

const enhance = compose(
  connect(mapStatetoProps, { getBanners }),
  withState('index', 'plusDivs', 1),
  withState('show', 'toggleShow', false),
  withHandlers({
    incrementIndex: ({ index, plusDivs, toggleShow, show, banners }) => e => {
      toggleShow(!show),
      (index+1) > banners.length ? plusDivs(1) : plusDivs(index+1)
    },
    decrementIndex: ({ index, plusDivs, toggleShow, show, banners }) => e => {
      toggleShow(!show),
      (index-1) < 1 ? plusDivs(banners.length) : plusDivs(index-1)
    }
  }),
  withStateHandlers(
    { showButton: false },
    {
      mouseOver: ({ showButton }) => () => ({
        showButton: true
      }),
      mouseLeave: ({ showButton }) => () => ({
        showButton: false
      })
    }
  ),
  lifecycle({
    componentDidMount() {
      const { index, incrementIndex, getBanners } = this.props
      getBanners()
      this.switchIndex = setInterval(incrementIndex, 3000)
    },
    componentWillUnmount() {
      clearInterval(this.switchIndex)
    }
  }),
)

export default enhance(BannerList)
