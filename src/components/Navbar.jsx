import iconBurgerMenu from '../assets/icon-hamburger.svg'
import { useState } from 'react'

export const Navbar = () => {

	const [menuClicked, setMenuClicked] = useState(false)

	const handleClick = () => {
		setMenuClicked(prevState => !prevState)
	}

	// Switch del icono de hamburguesa
	// console.log(menuClicked)

	return (
		<nav className='sm:h-[24px]'>
			<ul className={`${menuClicked ? 'flex' : 'hidden'} bg-white py-[39px] w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[12px] after:border-t-transparent after:border-r-white after:border-b-white after:border-l-transparent text-dark-grayish-blue text-xl z-10
	
			sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:py-0 sm:relative sm:mt-0 sm:text-white
			
			md:w-[500px]`}>
				<li className='cursor-pointer'>About</li>
				<li className='cursor-pointer'>Services</li>
				<li className='cursor-pointer'>Projects</li>
				<li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-fontFraunces text-very-dark-desaturated-blue font-bold text-[15px] sm:h-[24px] uppercase sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-white'>contact</li>
			</ul>
			<div className='cursor-pointer sm:hidden' onClick={handleClick}>
				<img src={iconBurgerMenu} alt="Icon Burger Menu" />
			</div>
		</nav>
	)
}
