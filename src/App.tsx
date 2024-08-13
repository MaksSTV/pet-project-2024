import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'


const App = () => {

	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Сменить тему</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Загрузка...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageLazy />} />
					<Route path={'/'} element={<MainPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App