/*
 * @Author: 王剑
 * @Date: 2021-12-12 12:14:21
 * @LastEditTime: 2021-12-20 21:59:45
 * @LastEditors: 王剑
 * @Description: 
 * @FilePath: \Anniversary gift\src\index.js
 */
const btn = document.querySelector('.enter')
const content = document.getElementById('content')
const card = document.querySelector('.card')
let index = 0
let str = '今天是2021年12月20日，不知不觉就和彦彦同学在一起四年了。我们从校园走到了毕业工作，我们一起度过了很多美好的时光。虽然免不了平时生气吵架，但并不会影响我们的感情，希望在接下来的日子里我们依然能够一起走下去，让我们共同努力迎接下一个四年，无数个四年，向着美好的未来前进，爱你的剑剑♥♥♥~~~'.split('')

btn.onclick = (e) => {
  card.className = "card hidden"
  setTimeout(() => {
    writing(index)
  }, 2000);
}

function writing(index) {
  if (index < str.length) {
      content.innerHTML += str[index]
      setTimeout(writing.bind(this), 200, ++index)
  }
}