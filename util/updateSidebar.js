const fs = require('fs')
const path = require('path')

const UPDATE_PATH_LIST = [
    path.resolve(__dirname, './../doc'), 
    path.resolve(__dirname, './../'), 
    path.resolve(__dirname, './../doc/math'), 
    path.resolve(__dirname, './../doc/chord'), 
    path.resolve(__dirname, './../doc/article'),
    path.resolve(__dirname, './../doc/interview'),
    path.resolve(__dirname, './../doc/js-advanced'),
    path.resolve(__dirname, './../doc/algorithm'),

]

const SIDEBAR_DIR_PATH = path.resolve(__dirname, './../doc')

const isFile = path => fs.statSync(path).isFile()

async function updateSidebar() {
    let files = fs.readdirSync(SIDEBAR_DIR_PATH)
    let sidebarFiles = files.filter(item => {
        return isFile(SIDEBAR_DIR_PATH + '/' + item) && item !== '_sidebar.md'
    })
    let contentList = sidebarFiles.map(item => {
        let regex = /\d{2}\-(.+)\.md/
        return item.replace(regex, (match, pad) => {
            return `[${pad}](/doc/${match})`
        })
    })
    let content = contentList.join('\n\n')
    for (let i = 0; i < UPDATE_PATH_LIST.length; i++) {
        let outputPath = UPDATE_PATH_LIST[i] + '/' + '_sidebar.md'
        fs.writeFileSync(outputPath, content, 'utf8')
    }
    console.log('侧边栏更新完成')
}
updateSidebar()
