import React from 'react'

function Footer(props) {
  return (
    <div class="container">
      <footer class="py-5">
        <div class="row">
          <div class="col-2">
            <h5>О нас</h5>
            <h5>Q/A</h5>
            <h5>Контакты</h5>
          </div>
    
          <div class="col-2">
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">info@mediainsider.kz</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+7 727 243 47 90</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Алматы қ., Жандосов к-сі, 98, (Навой) </a></li>
            </ul>
          </div>
    
    
          <div class="col-4 offset-1">
            <form>
              <p>© 2022, 5Q media. Все права защищены.

                Сайт использует IP адреса, cookie и данные геолокации Пользователей сайта</p>
            </form>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer