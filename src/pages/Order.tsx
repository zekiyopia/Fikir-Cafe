import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Dummy menu items (should match Menu.tsx)
const menuItems = [
	{
		id: 1,
		name: 'Traditional Bunna Ceremony',
		nameAmharic: 'ባህላዊ ቡና ሥነ ሥርዓት',
		price: '150 ETB',
		category: 'ceremony',
		image: '/api/placeholder/400/300',
		description:
			'Full traditional coffee ceremony with roasting, grinding, and three rounds of coffee',
	},
	{
		id: 2,
		name: 'Ethiopian Single Origin',
		nameAmharic: 'የኢትዮጵያ ቡና',
		price: '45 ETB',
		category: 'hot',
		image: '/api/placeholder/400/300',
		description: 'Premium Ethiopian coffee beans from Yirgacheffe region',
	},
	{
		id: 3,
		name: 'Macchiato Ethiopian Style',
		nameAmharic: 'ማኪያቶ',
		price: '55 ETB',
		category: 'hot',
		image: '/api/placeholder/400/300',
		description: 'Espresso with steamed milk, Ethiopian coffee blend',
	},
	{
		id: 4,
		name: 'Iced Coffee with Honey',
		nameAmharic: 'በረዶ ቡና በማር',
		price: '50 ETB',
		category: 'cold',
		image: '/api/placeholder/400/300',
		description: 'Cold brew coffee sweetened with Ethiopian honey',
	},
	{
		id: 5,
		name: 'Injera with Berbere Butter',
		nameAmharic: 'እንጀራ በበርበሬ ቅቤ',
		price: '35 ETB',
		category: 'snacks',
		image: '/api/placeholder/400/300',
		description: 'Traditional sourdough flatbread with spiced butter',
	},
	{
		id: 6,
		name: 'Honey Wine (Tej)',
		nameAmharic: 'ጠጅ',
		price: '80 ETB',
		category: 'special',
		image: '/api/placeholder/400/300',
		description: 'Traditional Ethiopian honey wine',
	},
];

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const Order = () => {
	const query = useQuery();
	const navigate = useNavigate();
	const itemId = Number(query.get('id'));
	const item = useMemo(() => menuItems.find(i => i.id === itemId), [itemId]);

	if (!item) {
		return (
			<div className="min-h-screen flex flex-col">
				<Navigation />
				<div className="flex-1 flex items-center justify-center">
					<div className="text-center text-lg text-red-500">
						Menu item not found.
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen mt-10 flex flex-col bg-background">
			<Navigation />
			<main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
				<Button
					variant="outline"
					className="mb-6 self-start"
					onClick={() => navigate(-1)}
				>
					← Back
				</Button>
				<div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-8">
					<div className="flex items-center gap-4 mb-6">
						<img
							src={item.image}
							alt={item.name}
							className="w-28 h-28 object-cover rounded-lg border"
						/>
						<div>
							<h2 className="text-2xl font-bold text-primary">
								{item.name}
							</h2>
							<p className="amharic-text text-accent">
								{item.nameAmharic}
							</p>
							<div className="mt-1 text-lg font-semibold">
								{item.price}
							</div>
						</div>
					</div>
					<p className="text-muted-foreground mb-4">
						{item.description}
					</p>
					<form
						className="space-y-4"
						onSubmit={e => {
							e.preventDefault();
							alert('Order placed! (Demo)');
							navigate('/');
						}}
					>
						<input
							type="text"
							placeholder="Your Name"
							required
							className="w-full border rounded px-3 py-2"
						/>
						<input
							type="tel"
							placeholder="Phone Number"
							required
							className="w-full border rounded px-3 py-2"
						/>
						<input
							type="number"
							min={1}
							defaultValue={1}
							placeholder="Quantity"
							required
							className="w-full border rounded px-3 py-2"
						/>
						<Button type="submit" className="w-full">
							Confirm Order
						</Button>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Order;
