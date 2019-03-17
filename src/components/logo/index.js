import PropTypes from 'prop-types'

const Logo = ({ option, ...props }) => {
  switch (option) {
    case 0:
      return (
        <svg
          viewBox="0 0 127 126"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M126.1 64.85l-62.8-26.4L.9 64.65v-19.6l62.4-25.4 62.8 25.8v19.4zM.9.45h125.2v18H.9v-18zm125.2 103.3v16.6H.9v-18.2l90.4-26.4H.9v-16.6h125.2v19l-87.8 25.6h87.8z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      )
    case 1:
      return (
        <svg
          viewBox="0 0 137 203"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M.5 28.3V.7h136v27.6H76.7l2 18.4 57.8 22.4v31.4L68.3 70.9.5 101.3V69.5l54.2-22.8-2-18.4H.5zm0 65h136v46.6l-112 32.8v2h112v27.6H.5v-45.4l112-34v-2H.5V93.3z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      )
    case 2:
      return (
        <svg
          viewBox="0 0 138 265"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M137.8.3v46.4H81.6v14.4l56.2 26.6v46.2h-9l-59.2-31.6-60.4 36.2h-9V89.9l54.6-29.6V46.7H.2V.3h137.6zm0 133v40.2l-74.2 54.8h74.2v35.8H.2v-40l71.6-55.2H.2v-35.6h137.6z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      )
    case 3:
      return (
        <svg
          viewBox="0 0 133 228"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M.1 43.2V.4h132v42.8H.1zm132 33.6v42.4L70.7 87.8.1 122V78.2l66.8-31 65.2 29.6zM.1 177.4l97.8-41H.1v-22.6h132V164l-97.8 40.8h97.8v22.8H.1v-50.2z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      )
    case 4:
      return (
        <svg
          viewBox="0 0 250 140"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M125.2 0h36.6l46.8 54.2V0H250v139.8h-41.4V81.4l-46.8 58.4H85.2L41.4 66.6v73.2H0V0h40.2l43.6 73.2V0h41.4zm0 17.892V120.8l42.4-53-42.4-49.908z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      )
  }
}

Logo.propTypes = {
  option: PropTypes.number,
}

Logo.defaultProps = {
  option: 0,
}

export default Logo
