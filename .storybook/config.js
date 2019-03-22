import { configure, addDecorator } from '@storybook/react'
import 'storybook-chromatic'

import 'normalize.css'
import fonts from '../src/styles/fonts'
import reset from '../src/styles/reset'

addDecorator(storyFn => (
  <div>
    {storyFn()}

    <style jsx global>
      {fonts}
    </style>
    <style jsx global>
      {reset}
    </style>
  </div>
))

const req = require.context('../src/components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
