import '../css/_home.css'
import GrantCard from '../components/GrantCard';

function HomePage() {
    return (
      <div>
        <div class="middle_box pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="middle_box_text">Pricing</h1>
          <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>
        <GrantCard 
        price='4000'
        partner='МОН РК, ОВПО, НПО' 
        start='01.01.2022' 
        title='Студенческие стипендии Фонда Нурсултана Назарбаева'
        participant='студенты очного обучения высших и средних специальных (искусство и культура) учебных заведений'
      />
      <GrantCard 
        price='3000'
        partner='МОН РК, ОВПО, НПО' 
        start='01.01.2022' 
        title='Студенческие стипендии Фонда Нурсултана Назарбаева'
        participant='студенты очного обучения высших и средних специальных (искусство и культура) учебных заведений'
      />
        



      </div>
    )
  }

export default HomePage;