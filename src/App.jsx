import './App.css'
import { Button } from './components/Button/Button'
import { Headline } from './components/Headline/Headline'
import { Input } from './components/Input/Input'
import { Paragraph } from './components/Paragraph/Paragraph'
import { Header } from './layouts/header/Header'

function App() {

  return (
    <div className='app'>
      <Header />
      <Headline text={'Поиск'} />
      <Input placeholder={'Введите название'} image={true} />
      <Button text={'Искать'} />
      <Paragraph data={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} textSize={'16px'} textHeigth={'150%'} />
    </div>
  )
}

export default App
