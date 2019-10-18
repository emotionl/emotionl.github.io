const getXiaoceTitle = () => {
    let eles = Array.from(document.querySelectorAll('.heading'))
    return eles
        .map(item => {
            return '## ' + item.childNodes[0].textContent
        })
        .join('\n\n')
}
