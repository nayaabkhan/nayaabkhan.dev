const { css } = require('styled-components')

const sizes = {
  medium: 768,
  large: 1100,
}

export const small = {
  maxWidth: sizes.medium - 1,
}

export const medium = {
  minWidth: sizes.medium,
  maxWidth: sizes.large - 1,
}

export const large = {
  minWidth: sizes.large,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `

  return acc
}, {})
