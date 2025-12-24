import { useEffect, useRef } from 'react';
import Image from 'next/image';
// import EcosystemIcon from '../public/assets/icons/ecosystem.svg';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export const Feature = ({ title, description }: { title: string; description: string }) => {
	const offsetX = useMotionValue(-100);
	const offsetY = useMotionValue(-100);
	const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
	const border = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateMousePosition = (event: MouseEvent) => {
			if (!border.current) return;
			const borderRect = border.current?.getBoundingClientRect();
			offsetX.set(event.x - borderRect.x);
			offsetY.set(event.y - borderRect.y);
		};
		window.addEventListener('mousemove', updateMousePosition);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	return (
		<div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
			<motion.div
				className="absolute inset-0 border-2 border-purple-400 rounded-xl"
				style={{
					WebkitMaskImage: maskImage,
					maskImage,
				}}
				ref={border}
			></motion.div>
			<div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
				<Image
					src="/assets/icons/ecosystem.svg"
					alt="Ecosystem icon"
					width={24}
					height={24}
					className="w-6 h-6 sm:w-8 sm:h-8"
				/>
			</div>
			<h3 className="mt-6 font-bold">{title}</h3>
			<p className="mt-2 text-white/70">{description}</p>
		</div>
	);
};
