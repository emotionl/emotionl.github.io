const fs = require('fs')
const util = require('util')
const path = require('path')

const articlePath = path.resolve(__dirname, './../article')
const outputFilePath = path.resolve(__dirname, './../00-Article.md')
const readFileAsync = util.promisify(fs.readFile)

async function updateArticle() {
    let files = fs.readdirSync(articlePath)
    // let isFilesAlready = files.every(file => fs.statSync(articlePath + '/' + file).isFile())
    files.pop()
    let contentList = files.map(item => {
        let regex = /\d{3}\-(.+)\.md/
        return item.replace(regex, (match, title) => {
            return `- [${title}](doc/article/${match})`
        })
    })
    contentList.unshift('# 文章')
    let content = contentList.join('\n\n')
    fs.writeFileSync(outputFilePath, content, 'utf8')
    console.log('your data has been written!')
}
updateArticle()
