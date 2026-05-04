import './Header.css'

export function Header() {
	return (
		<div className="header-block">
			<img className="header-logo" src="../src/assets/logo.png" alt="Логотип" />
			<nav className="header-links">
				<ul>
					<li><a className='header-link active' href="">Поиск фильмов</a></li>
					<li><a className='header-link' href="">Мои фильмы</a></li>
					<li><a className='header-link' href="">Войти <img src="../src/assets/login.png" /></a></li>
				</ul>
			</nav>
		</div>
	)
}