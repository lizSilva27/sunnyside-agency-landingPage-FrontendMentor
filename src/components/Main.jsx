import imgHeaderMobile from '../assets/mobile/image-header.jpg'
import imgHeaderDesktop from '../assets/desktop/image-header.jpg'
import arrowDown from '../assets/icon-arrow-down.svg'

export const Main = () => {
	return (
		<section>
			<picture>
				<source media="(max-width: 639px)" srcSet={ imgHeaderMobile } />
				<source media="(min-width: 640px)" srcSet={ imgHeaderDesktop } />
				<img src={ imgHeaderMobile } alt="Background Header" />
			</picture>
			<p className='absolute font-fontFraunces text-[40px] uppercase tracking-[6.25px] text-white w-[327px] text-center top-[144px] left-0 right-0 mx-auto sm:w-[600px]'>We are creatives</p>
			<img className='absolute top-[294px] left-0 right-0 mx-auto sm:top-[220px]' src={ arrowDown } alt="Icon Flecha abajo" />
		</section>
	)
}
