import { TestimonialCard } from "./TestimonialCard"

import emilyPhoto from '../assets/image-emily.jpg'
import thomasPhoto from '../assets/image-thomas.jpg'
import jenniePhoto from '../assets/image-jennie.jpg'

export const TestimonialsContainer = () => {
	return (
		<section className="bg-white pb-16">
			<h2 className="text-center uppercase font-fontFraunces mb-16 pt-16 text-grayish-blue font-bold tracking-[4px]">Client testimonials</h2>
			<div className="lg:flex lg:w-[900px] lg:mx-auto xl:w-[1110px]">

				<TestimonialCard 
					image={emilyPhoto}
					textTestimonial='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
					name= 'Thomas S.'
					position='Marketing Director'
				/>

				<TestimonialCard 
					image={thomasPhoto}
					textTestimonial='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
					name= 'Emily R.'
					position='Chief Operating Officer'
				/>

				<TestimonialCard 
					image={jenniePhoto}
					textTestimonial='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
					name= 'Jennie F.'
					position='Business Owner'
				/>

			</div>
		</section>
	)
}
