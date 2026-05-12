import './App.css'
import { Button } from './components/Button/Button'
import { Headline } from './components/Headline/Headline'
import { Input } from './components/Input/Input'
import { CardsList } from './components/CardsList/CardsList'
import { Paragraph } from './components/Paragraph/Paragraph'
import { Search } from './components/Search/Search'
import { Header } from './layouts/Header/Header'
import { images } from './assets/images'

const FILMS_LIST = [
  {
    id:1,
    image: images.blackWidowImg,
    filmName: "Black Widow",
    filmRating: 324
  },
  {
    id:2,
    image: images.shangChiImg,
    filmName: "Shang Chi",
    filmRating: 124
  },
  {
    id:3,
    image: images.lokiImg,
    filmName: "Loki",
    filmRating: 235
  },
  {
    id:4,
    image: images.howIMetYourMotherImg,
    filmName: "How I Met Your Mother",
    filmRating: 123
  },
  {
    id:5,
    image: images.moneyHeistImg,
    filmName: "Money Heist",
    filmRating: 8125
  },
  {
    id:6,
    image: images.friendsImg,
    filmName: "Friends",
    filmRating: 123
  },
  {
    id:7,
    image: images.bigBangTheoryImg,
    filmName: "The Big Bang Theory",
    filmRating: 12
  },
  {
    id:8,
    image: images.twoAndAHalfMenImg,
    filmName: "Two And a Half Men",
    filmRating: 456
  }
]

function App() {

  return (
    <div className='app'>
      <Header />
      <Headline text={'Поиск'} />
      <Paragraph data={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'} textSize={'16px'} textHeigth={'150%'} />
      <Search />
      <CardsList data={FILMS_LIST} />
    </div>
  )
}

export default App
