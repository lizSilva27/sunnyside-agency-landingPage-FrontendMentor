export const TestimonialCard = ( {image, textTestimonial, name, position} ) => {
	return (
		<div className="flex flex-col items-center text-center">
			<img className="w-[72px] rounded-full" src={image} alt="Photo Testimonial" />
			<p className="my-8 font-fontBarlow text-very-dark-grayish-blue px-4 max-w-[400px]">{textTestimonial}</p>
			<h3 className="font-fontFraunces text-[18px] text-very-dark-desaturated-blue font-bold">{name}</h3>
			<p className="text-grayish-blue font-fontBarlow font-semibold text-[14px]">{position}</p>
		</div>
	)
}
