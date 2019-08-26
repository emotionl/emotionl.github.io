const fs = require('fs')
const util = require('util')
const path = require('path')

const readFileAsync = util.promisify(fs.readFile)

const ARTICLE_CONFIG = {
    dirPath: path.resolve(__dirname, './../article'),
    outputPath: path.resolve(__dirname, './../00-Article.md'),
    bridgePath: 'doc/article/'
}

const MATH_CONFIG = {
    dirPath: path.resolve(__dirname, './../math'),
    outputPath: path.resolve(__dirname, './../17-Math.md'),
    bridgePath: 'doc/math/'
}

async function updateArticle(config) {
    let { dirPath, outputPath, bridgePath } = config
    let files = fs.readdirSync(dirPath)
    // let isFilesAlready = files.every(file => fs.statSync(articlePath + '/' + file).isFile())
    files.pop()
    let contentList = files.map(item => {
        let regex = /\d{3}\-(.+)\.md/
        return item.replace(regex, (match, title) => {
            return `- [${title}](${bridgePath}${match})`
        })
    })
    contentList.unshift('# 文章')
    let content = contentList.join('\n\n')
    fs.writeFileSync(outputPath, content, 'utf8')
    console.log('your data has been written!')
}
// updateArticle(ARTICLE_CONFIG)
updateArticle(MATH_CONFIG)
