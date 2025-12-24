'use client';

import Image from 'next/image';
import appScreen from '../public/assets/images/app-screen.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {
	const appImage = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: appImage,
		offset: ['start end', 'end end'],
	});

	const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<section className="bg-linear-to-b from-black to-[#5D2CA8] text-white py-16 sm:py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
					Intuitive interface
				</h2>

				{/* Description */}
				<p className="mx-auto mt-4 max-w-xl sm:max-w-2xl text-center text-base sm:text-lg md:text-xl text-white/70">
					Celebrate the joy of accomplishment with an app designed to track your progress, motivate your
					efforts, and celebrate your successes, one task at a time.
				</p>

				{/* Image */}
				<motion.div
					ref={appImage}
					style={{
						opacity,
						rotateX,
						transformPerspective: '800px',
					}}
					className="mt-12 sm:mt-16 flex justify-center"
				>
					<Image
						src={appScreen}
						alt="The product screenshot"
						className="w-full max-w-5xl rounded-xl shadow-2xl"
						priority
					/>
				</motion.div>
			</div>
		</section>
	);
};
