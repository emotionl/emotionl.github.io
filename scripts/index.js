var removeElement = `
<script>
return
const _historyWrap = function (type) {
  const orig = history[type]
  const e = new Event(type)
  return function () {
    const rv = orig.apply(this, arguments)
    e.arguments = arguments
    window.dispatchEvent(e)
    return rv
  }
}

history.replaceState = _historyWrap('replaceState')

window.addEventListener('replaceState', removeElement)

window.addEventListener('popstate', removeElement)

removeElement()

function removeElement() {
  const recentComments = document.querySelector('.sidebar-box')
  if (recentComments && recentComments.parentNode) {
    recentComments.parentNode.removeChild(recentComments)
  }
  setTimeout(() => {
    const comments = document.getElementById('comments')
    if (comments && comments.parentNode) {
      comments.parentNode.removeChild(comments)
    }
  }, 1000)
}
</script>
`
hexo.extend.injector.register('body_end', removeElement, 'default')
