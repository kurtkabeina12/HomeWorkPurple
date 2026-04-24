import './App.css'
import { Button } from './components/Button/Button'
import { Headline } from './components/Headline/Headline'
import { Paragraph } from './components/Paragraph/Paragraph'

function App() {

  return (
    <>
     <Headline text={'Поиск'}/>
     <Button text={'Искать'}/>
     <Paragraph data={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} textSize={'16px'} textHeigth={'150%'}/>
    </>
  )
}

export default App
