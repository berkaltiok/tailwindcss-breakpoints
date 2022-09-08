const postcss = require('postcss')

module.exports = function () {
  return function ({ addVariant, e, theme }) {
    const screens = theme('screens')
    Object.keys(screens)
      .reverse()
      .map((screen) => {
        addVariant(`<${screen}`, ({ container, separator }) => {
          const mediaRule = postcss.atRule({ name: 'media', params: `(max-width: ${screens[screen]})` })
          mediaRule.append(container.nodes)
          container.append(mediaRule)
          mediaRule.walkRules((rule) => {
            rule.selector = `.${e(
              `<${screen}${separator}${rule.raws?.tailwind.classCandidate ?? rule.selector.slice(1)}`
            )}`
          })
        })
      })
  }
}
