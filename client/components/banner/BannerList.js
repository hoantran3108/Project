import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers, lifecycle, withStateHandlers, renderComponent, branch, renderNothing } from 'recompose'
import Banner from './Banner'
import BannerButton from './BannerButton'
import BannerDot from './BannerDot'
import { Container, List } from 'semantic-ui-react'
import Spinner from '../common/Spinner'
import renderList from '../common/renderList'
import Fade from '../transitions/Fade'
import banner from 'CSS/banner'

const BannerList = ({ banners, show, index, mouseOver, mouseLeave, ...rest }) => (
  <Container>
    <Fade in={show} timeout={500}>
      <div className={banner.container} onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>
        {banners.map(renderList(Banner, { index }))}
        {showButtonOnMouseEnter({ ...rest })}
      </div>
    </Fade>
    <BannerDot banners={banners} index={index} {...rest} />
  </Container>
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
  connect(mapStatetoProps),
  withState('index', 'plusDivs', 1),
  withState('show', 'toggleShow', false),
  withHandlers({
    incrementIndex: ({ index, plusDivs, toggleShow, show, banners }) => () => {
      toggleShow(!show),
      (index+1) > banners.length ? plusDivs(1) : plusDivs(index+1)
    },
    decrementIndex: ({ index, plusDivs, toggleShow, show, banners }) => () => {
      toggleShow(!show),
      (index-1) < 1 ? plusDivs(banners.length) : plusDivs(index-1)
    },
    changeIndex: ({ toggleShow, plusDivs, show }) => i => {
      toggleShow(!show),
      plusDivs(i+1)
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
      const { incrementIndex } = this.props
      this.switchIndex = setInterval(incrementIndex, 5000)
    },
    componentWillUnmount() {
      clearInterval(this.switchIndex)
    }
  })
)

export default enhance(BannerList)
