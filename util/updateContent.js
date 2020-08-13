const fs = require('fs')
const path = require('path')

const ARTICLE_CONFIG = {
  dirPath: path.resolve(__dirname, './../doc/article'),
  outputPath: path.resolve(__dirname, './../doc/00-Article.md'),
  bridgePath: '/doc/article/',
  title: '文章'
}

const MATH_CONFIG = {
  dirPath: path.resolve(__dirname, './../doc/math'),
  outputPath: path.resolve(__dirname, './../doc/15-Math.md'),
  bridgePath: '/doc/math/',
  title: '数学'
}

const JS_CONFIG = {
  dirPath: path.resolve(__dirname, './../doc/js-advanced'),
  outputPath: path.resolve(__dirname, './../doc/20-JS-Advanced.md'),
  bridgePath: '/doc/js-advanced/',
  title: 'JS Advanced'
}

const INTERVIEW_CONFIG = {
  dirPath: path.resolve(__dirname, './../doc/interview'),
  outputPath: path.resolve(__dirname, './../doc/18-Interview.md'),
  bridgePath: '/doc/interview/',
  title: '面试'
}

const ALGORITHM_CONFIG = {
  dirPath: path.resolve(__dirname, './../doc/algorithm'),
  outputPath: path.resolve(__dirname, './../doc/21-Algorithm.md'),
  bridgePath: '/doc/algorithm/',
  title: '算法'
}

async function updateContent(config) {
  let { dirPath, outputPath, bridgePath, title } = config
  let files = fs.readdirSync(dirPath)
  // console.log(files)
  // let isFilesAlready = files.every(file => fs.statSync(articlePath + '/' + file).isFile())
  files.pop()
  let contentList = files
    .filter((item) => !item.includes('Todo') && item.includes('.md'))
    .map((item) => {
      let regex = /\d{3}\-(.+)\.md/
      return item.replace(regex, (match, pad) => {
        return `- [${pad}](${bridgePath}${match})`
      })
    })
  contentList.unshift(`# ${title}`)
  let content = contentList.join('\n\n')
  console.log(content)
  fs.writeFileSync(outputPath, content, 'utf8')
  console.log(`\n${title} has been written!`)
}

const mode = process.argv[2]
const UPDATE_MAP = {
  at: ARTICLE_CONFIG,
  math: MATH_CONFIG,
  iv: INTERVIEW_CONFIG,
  js: JS_CONFIG,
  ag: ALGORITHM_CONFIG
}
if (UPDATE_MAP[mode]) updateContent(UPDATE_MAP[mode])
