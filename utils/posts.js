export const getPost = post => {
  const { default: Component, meta } = require(`../pages/blog/${post}`)

  const name = post.split('.')[0]

  return {
    Component,
    ...meta,
    name
  }
}

export const getPage = post => {
  const { default: Component, meta } = require(`../pages/${post}`)

  const name = post.split('.')[0]

  return {
    Component,
    ...meta,
    name
  }
}

export const pluck = (route, list) => {
  const splitRoute = route.split('/')
  let compName =
    splitRoute.length > 0 ? splitRoute[splitRoute.length - 1] : null

  // for the root path, we want index.js file
  compName = route == '/' ? 'index' : compName

  return list.find(post => post.name == compName)
}

const postFiles = () =>
  preval`module.exports = require('fs').readdirSync('./pages/blog/')` || []

const ignoreList = ['_app.js', '_document.js', 'blog', '.DS_Store']
const pageFiles = () => {
  const allFilesInPages =
    preval`module.exports = require('fs').readdirSync('./pages/')` || []
  return allFilesInPages.filter(p => !ignoreList.includes(p))
}

export const posts = () => postFiles().map(getPost)
export const pages = () => pageFiles().map(getPage)
