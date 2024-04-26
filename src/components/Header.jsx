import logo from '../assets/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
	return (
		<header className='absolute w-full px-6 pt-8 font-fontBarlow'>
			<div className='flex place-content-between'>
				<img src={logo} alt="Imagen Logo" />
				<Navbar />
			</div>
		</header>
	)
}
