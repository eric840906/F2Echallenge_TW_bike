import Lottie from 'lottie-react'
import PropType from 'prop-types'

const LottieContainer = ({ LottieFile, styleObj }) => {
  return <Lottie style={{ ...styleObj }} animationData={LottieFile} />
}

LottieContainer.propTypes = {
  LottieFile: PropType.any,
  styleObj: PropType.object
}

export default LottieContainer
