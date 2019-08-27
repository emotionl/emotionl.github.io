# 实用函数

1. 解决定时器不能立即执行函数的问题

    ```javascript
    const setIntervalOwn = (callBack, duration) => {
        callBack()
        return setInterval(() => {
            callBack()
        }, duration)
    }
    ```

2. 检查数字是否是正整数

   ```javascript
   const isPositiveInt = value => /^[0-9]+$/.test(value)
   ```

3. 把秒数转换成 xx时:xx分:xx秒 这样的格式

   ```javascript
   const getHourMinuteAndSecond = time => {
       const ONE_MINUTE_SECONDS = 60
       const ONE_HOUR_SECONDS = ONE_MINUTE_SECONDS * 60
       let newTime = ''
       let hour = 0
       let minute = 0
       let second = 0
       if (time >= ONE_HOUR_SECONDS) {
           hour = parseInt(time / ONE_HOUR_SECONDS)
           minute = parseInt((time % ONE_HOUR_SECONDS) / ONE_MINUTE_SECONDS)
           second = (time % ONE_HOUR_SECONDS) % ONE_MINUTE_SECONDS
       } else if (time >= ONE_MINUTE_SECONDS && time < ONE_HOUR_SECONDS) {
           minute = parseInt(time / ONE_MINUTE_SECONDS)
           second = time % ONE_MINUTE_SECONDS
       } else if (time < ONE_MINUTE_SECONDS) {
           second = time
       }
       if (hour !== 0) newTime += `${hour}时`
       if (minute !== 0) newTime += `${minute}分`
       if (second !== 0) newTime += `${second}秒`
       return newTime
   }
   ```

4. 按照固定大小切割数组

   ```javascript
   const chunkArray = (input, size) => {
       return input.reduce((arr, item, idx) => {
           return idx % size === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]]
       }, [])
   }
   ```

5. 字节数组转化成整形数字

   ```javascript
   const byteArrayToInt = byteArray => {
       let byteArrayLen = byteArray.length
       return byteArray.reduce((prev, curr, index) => {
       	return prev + curr * Math.pow(256, byteArrayLen - index - 1)
       }, 0)
   }
   ```

6. 获取指定区间的随机数

   ```javascript
   const getRandomNum = (min, max) => parseInt(Math.random() * (max - min + 1) + min, 10)
   ```

7. 字符串转Unicode

   ```javascript
   const stringToUnicode = (text, dec = 10) => {
       return text.length === 1 
       ? text.charCodeAt().toString(dec) 
       : text.split('').map(item => item.charCodeAt().toString(dec))
   }
   ```

8. 获取系统语言

    ```javascript
    const getSystemLanguage = () => {
        let language
        if (window.navigator.language.indexOf('en') >= 0) {
            language = 'en'
        }
        if (window.navigator.language.indexOf('zh') >= 0) {
            language = 'zh'
        }
        return language
    }
    ```

9. 判断PC还是移动端

    ```javascript
    const getClientInfo = () => {
        let userAgentInfo = navigator.userAgent
        let agentList = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
        let agentInfo = null
        for (let i = 0; i < agentList.length; i++) {
            if (userAgentInfo.indexOf(agentList[i]) > 0) {
                agentInfo = agentList[i]
                break
            }
        }
        return agentInfo ? agentInfo : 'PC'
    }
    ```

10. 判断数据类型

    ```javascript
    const getValueType = val => {
        let regex = /\[object\s(\w+)\]/
        let result = Object.prototype.toString.call(val)
        return result.replace(regex, (match, p1) => p1.toLocaleLowerCase())
    }
    ```

11. 乱序数组

     ```js
     const shuffle = ([...arr]) => {
         let m = arr.length
         while (m) {
             const i = Math.floor(Math.random() * m--)
             ;[arr[m], arr[i]] = [arr[i], arr[m]]
         }
         return arr
     }
     ```
