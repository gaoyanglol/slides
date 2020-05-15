var n
init()
setInterval(()=>{
  setLeave(getImage(x(n)))
  .one('transitionend', (e)=>{
    $(e.currentTarget).removeClass().addClass('enter')
  })
  setCurrent(getImage(x(n+1)))
  n++
}, 1000)

function x(n) {
  if(n > 3) {
    n = n % 3
    if (n%3 === 0) {
      n = 3
    }
  }
  return n
}
function getImage(n) {
  return $(`.images > img:nth-child(${n})`)
}
function init() {
  n = 1
  $('.images > img:nth-child(1)').addClass('current').siblings().addClass('enter')
}
function setLeave($node) {
  return $node.removeClass().addClass('leave')
}
function setEnter($node) {
  return $node.removeClass().addClass('enter')
}
function setCurrent($node) {
  return $node.removeClass().addClass('current')
}