import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
	{
		question: 'What payment methods do you accept?',
		answer: 'We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.',
	},
	{
		question: 'How does the pricing work for teams?',
		answer: 'Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.',
	},
	{
		question: 'Can I change my plan later?',
		answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.',
	},
	{
		question: 'Is my data secure?',
		answer: 'Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.',
	},
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="py-7 border-b border-white/30 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
			<div className="flex items-center gap-4">
				<span className="flex-1 text-lg font-bold">{question}</span>
				{isOpen ? <Minus className="h-5 w-5 text-white" /> : <Plus className="h-5 w-5 text-white" />}
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0, marginTop: 0 }}
						animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
						exit={{ opacity: 0, height: 0, marginTop: 0 }}
						className="text-white/70"
					>
						{answer}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export const FAQs = () => {
	return (
		<section className="bg-gradient-to-b from-[#5D2CA8] to-black text-white py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="mx-auto max-w-[648px] text-center text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
					Frequently asked questions
				</h2>

				<div className="mx-auto mt-12 max-w-[648px]">
					{items.map(({ question, answer }) => (
						<AccordionItem question={question} answer={answer} key={question} />
					))}
				</div>
			</div>
		</section>
	);
};
