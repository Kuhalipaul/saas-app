import Image from 'next/image';
import logoImage from '../public/assets/images/logosaas.png';
import MenuIcon from '../public/assets/icons/menu.svg';

export const Navbar = () => {
	return (
		<div className=" bg-black ">
			<div className="px-4">
				<div className="py-4 flex items-center justify-between">
					<div className="relative">
						<div className="absolute inset-x-0 top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
						<Image src={logoImage} alt="Saas logo" className="h-12 w-12 relative" />
					</div>
					<div
						className="border border-white border-opacity-30 h-10 w-10
				inline-flex justify-center items-center rounded-lg sm:hidden"
					>
						<MenuIcon className="text-white" />
					</div>
					<nav className="gap-6 items-center hidden sm:flex">
						<a href="#" className="text-white/60 hover:text-white transition-colors">
							About
						</a>
						<a href="#" className="text-white/60 hover:text-white transition-colors">
							Features
						</a>
						<a href="#" className="text-white/60 hover:text-white transition-colors">
							Update
						</a>
						<a href="#" className="text-white/60 hover:text-white transition-colors">
							Help
						</a>
						<a href="#" className="text-white/60 hover:text-white transition-colors">
							Customers
						</a>

						<button className="bg-white py-2 px-4 rounded-lg">Get for free</button>
					</nav>
				</div>
			</div>
		</div>
	);
};
