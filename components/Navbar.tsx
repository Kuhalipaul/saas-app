import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logoImage from '../public/assets/images/logosaas.png';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="relative z-50 bg-black">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between py-3 sm:py-4">
					{/* Logo */}
					<div className="relative">
						<div className="absolute inset-x-0 top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
						<Image src={logoImage} alt="Saas logo" className="relative h-10 w-10 sm:h-12 sm:w-12" />
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(true)}
						className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 text-white md:hidden"
						aria-label="Open menu"
					>
						<Menu size={22} />
					</button>

					{/* Desktop Menu */}
					<nav className="hidden md:flex items-center gap-6">
						<a className="text-white/60 hover:text-white transition-colors">About</a>
						<a className="text-white/60 hover:text-white transition-colors">Features</a>
						<a className="text-white/60 hover:text-white transition-colors">Update</a>
						<a className="text-white/60 hover:text-white transition-colors">Help</a>
						<a className="text-white/60 hover:text-white transition-colors">Customers</a>

						<button className="ml-2 rounded-lg bg-white px-4 py-2 text-black">Get for free</button>
					</nav>
				</div>
			</div>

			{/* ---------- Mobile Menu ---------- */}
			{isOpen && (
				<>
					{/* Overlay */}
					<div
						className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
						onClick={() => setIsOpen(false)}
					/>

					{/* Slide-in Menu */}
					<div className="fixed top-0 right-0 h-full w-72 bg-black p-6 md:hidden">
						<div className="flex justify-end">
							<button onClick={() => setIsOpen(false)} aria-label="Close menu" className="text-white">
								<X size={24} />
							</button>
						</div>

						<nav className="mt-8 flex flex-col gap-6">
							{['About', 'Features', 'Update', 'Help', 'Customers'].map((item) => (
								<a
									key={item}
									onClick={() => setIsOpen(false)}
									className="text-white/80 hover:text-white transition-colors"
								>
									{item}
								</a>
							))}

							<button className="mt-4 rounded-lg bg-white py-2 text-black">Get for free</button>
						</nav>
					</div>
				</>
			)}
		</header>
	);
};
