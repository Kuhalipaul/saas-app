import { Instagram, Twitter, Youtube, Music } from 'lucide-react';

export const Footer = () => {
	return (
		<footer className="border-t border-white/20 bg-black py-5 text-white/60">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
					<div className="text-center">© 2024 Your Company, Inc. All rights reserved</div>

					<ul className="flex gap-3">
						<li>
							<Twitter className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
						</li>
						<li>
							<Instagram className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
						</li>
						<li>
							<Music className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
						</li>
						<li>
							<Youtube className="h-5 w-5 cursor-pointer hover:text-white transition-colors" />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
