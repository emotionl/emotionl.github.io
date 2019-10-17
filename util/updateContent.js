const fs = require('fs')
const path = require('path')

const ARTICLE_CONFIG = {
    dirPath: path.resolve(__dirname, './../doc/article'),
    outputPath: path.resolve(__dirname, './../doc/00-Article.md'),
    bridgePath: 'doc/article/',
    title: '文章'
}

const MATH_CONFIG = {
    dirPath: path.resolve(__dirname, './../doc/math'),
    outputPath: path.resolve(__dirname, './../doc/16-Math.md'),
    bridgePath: 'doc/math/',
    title: '数学'
}

const INTERVIEW_CONFIG = {
    dirPath: path.resolve(__dirname, './../doc/interview'),
    outputPath: path.resolve(__dirname, './../doc/18-Interview.md'),
    bridgePath: 'doc/interview/',
    title: '面试'
}

async function updateContent(config) {
    let { dirPath, outputPath, bridgePath, title } = config
    let files = fs.readdirSync(dirPath)
    console.log(files)
    // let isFilesAlready = files.every(file => fs.statSync(articlePath + '/' + file).isFile())
    files.pop()
    let contentList = files
        .filter(item => !item.includes('Todo'))
        .map(item => {
            let regex = /\d{3}\-(.+)\.md/
            return item.replace(regex, (match, pad) => {
                return `- [${pad}](${bridgePath}${match})`
            })
        })
    contentList.unshift(`# ${title}`)
    let content = contentList.join('\n\n')
    console.log(content)
    fs.writeFileSync(outputPath, content, 'utf8')
    console.log(`${title} has been written!`)
}

let mode = process.argv[2]
if (mode === 'article') {
    updateContent(ARTICLE_CONFIG)
} else if (mode === 'math') {
    updateContent(MATH_CONFIG)
} else if (mode === 'interview') {
    updateContent(INTERVIEW_CONFIG)
} else {
    console.log('参数错误')
}
