# Node.js-Function

1. 根据文件名生成同名文件夹，并将文件复制进去

   ```javascript
   const fs = require('fs')
   const util = require('util')
   const path = require('path')
   const dirPath = path.resolve(__dirname, './')
   
   const renameAsync = util.promisify(fs.rename)
   const mkdirAsync = util.promisify(fs.mkdir)
   
   async function createDirByFile() {
       try {
           let files = fs.readdirSync('./')
           for (const file of files) {
               if (fs.statSync('./' + file).isFile() && file.includes('.pdf')) {
                   let fileName = file.split('.pdf')[0]
                   let dirName = './' + fileName
                   await mkdirAsync(dirName)
                   let oldPath = path.join(dirPath, file)
                   let newPath = path.join(dirPath, dirName, file)
                   await renameAsync(oldPath, newPath)
               }
           }
       } catch (error) {
           console.log(error)
       }
   }
   
   createDirByFile()
   
   
   ```
