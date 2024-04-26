export const TextServices = ( {order, title, text, colorButton } ) => {
	return (
		<div className={ ` ${order} text-center h-[437px] px-6 flex flex-col place-content-around tablet:h-auto lg:px-[65px] lg:text-left desktop:pl-[165px] desktop:py-[140px] desktop:pr-[105px]` }>
			<h2 className="font-fontFraunces text-[2rem] font-black py-6 tablet:text-[1.25rem] lg:text-[2.5rem] desktop:leading-tight"> {title} </h2>
			<p className="font-fontBarlow text-dark-grayish-blue text-[1.125rem] leading-[1.875rem] tablet:text-[0.8rem] tablet:leading-[1.5rem] lg:text-[18px]"> {text} </p>
			<div className="relative">
				<button className="uppercase font-fontFraunces font-bold lg:text-[1.1rem]">Learn more</button>
				<div className={ `w-[137px] h-[10px] ${colorButton} rounded-full absolute mx-auto right-0 left-0 bottom-0 -z-10 bg-opacity-25 lg:mx-0 lg:left-[-10px]` }></div>
			</div>
		</div>
	)
}
