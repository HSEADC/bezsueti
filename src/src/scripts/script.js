document
  .querySelector('.gradient-button')
  .addEventListener('click', function () {
    window.location.href = 'index.html' // Переход на главную страницу КАТРИН, В КАВЫЧКАХ УКАЖИ ССЫЛКУ ЗАГЛУШКИ, ОБНИМАЮ)
  })

const button = document.getElementById('hoverButton')

button.addEventListener('mouseover', () => {
  button.style.background = '#505050'
})

button
  .addEventListener('mouseout', () => {
    button.style.background =
      'linear-gradient(to right, #EF9437, #F5A34E, #FFECA3)'
  })

  .querySelector('.title')
  .addEventListener('click', function () {
    window.location.href = 'index.html' // Переход на страницу о проекте  КАТРИН, В КАВЫЧКАХ УКАЖИ ССЫЛКУ ЗАГЛУШКИ, ОБНИМАЮ)
  })

  .querySelector('.title1')
  .addEventListener('click', function () {
    window.location.href = 'index.html' // Переход на страницу погружение КАТРИН, В КАВЫЧКАХ УКАЖИ ССЫЛКУ ЗАГЛУШКИ, ОБНИМАЮ)
  })
