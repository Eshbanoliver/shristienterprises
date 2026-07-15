import imgDesign from '../assets/ai_kitchens/modular_kitchen_design_1781325837835.png';
import imgMfg from '../assets/ai_kitchens/modular_kitchen_manufacturing_1781325848566.png';
import imgLShaped from '../assets/ai_kitchens/l_shaped_kitchen_1781325860992.png';
import imgUShaped from '../assets/ai_kitchens/u_shaped_kitchen_1781325878596.png';
import imgParallel from '../assets/ai_kitchens/parallel_kitchen_1781325892473.png';
import imgIsland from '../assets/ai_kitchens/island_kitchen_1781325903278.png';

export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  category: 'kitchen' | 'interior';
  image: string;
}

export const services: Service[] = [
  {
    id: 'modular-kitchen-design',
    title: 'Modular Kitchen Design',
    description: 'Transform your kitchen space with our expert design consultations. We craft personalized layouts tailored to your lifestyle, space, and aesthetic preferences.',
    benefits: ['3D Design Visualization', 'Space Optimization', 'Personalized Layouts', 'Material Consultation'],
    icon: 'LayoutDashboard',
    category: 'kitchen',
    image: imgDesign,
  },
  {
    id: 'modular-kitchen-manufacturing',
    title: 'Modular Kitchen Manufacturing',
    description: 'Precision-crafted modular kitchen units manufactured in our state-of-the-art facility using premium-grade materials and advanced machinery.',
    benefits: ['Premium Quality Materials', 'In-House Manufacturing', 'Quality Assurance', 'Custom Sizing'],
    icon: 'Factory',
    category: 'kitchen',
    image: imgMfg,
  },
  {
    id: 'l-shaped-kitchen',
    title: 'L-Shaped Kitchens',
    description: 'Maximize corner spaces with our elegant L-shaped kitchen solutions — perfect for medium-sized kitchens that need efficient workflow and ample storage.',
    benefits: ['Efficient Work Triangle', 'Maximum Storage', 'Great for Medium Spaces', 'Open Layout Friendly'],
    icon: 'CornerUpRight',
    category: 'kitchen',
    image: imgLShaped,
  },
  {
    id: 'u-shaped-kitchen',
    title: 'U-Shaped Kitchens',
    description: 'Surround yourself with functionality. Our U-shaped kitchens offer maximum counter space and storage, ideal for serious home chefs.',
    benefits: ['Maximum Counter Space', 'Three-Wall Storage', 'Professional Feel', 'Ideal for Large Kitchens'],
    icon: 'Square',
    category: 'kitchen',
    image: imgUShaped,
  },
  {
    id: 'parallel-kitchen',
    title: 'Parallel Kitchens',
    description: 'Efficient and sleek — our parallel kitchen designs create two parallel workspaces for multitasking, ideal for narrow rectangular kitchen layouts.',
    benefits: ['Dual Workspace', 'High Efficiency', 'Perfect for Narrow Spaces', 'Professional Grade'],
    icon: 'AlignJustify',
    category: 'kitchen',
    image: imgParallel,
  },
  {
    id: 'island-kitchen',
    title: 'Island Kitchens',
    description: 'Add a stunning centerpiece to your kitchen with a custom island — the ultimate in luxury, providing additional workspace, storage, and dining area.',
    benefits: ['Extra Prep Space', 'Social Cooking Area', 'Built-in Storage', 'Luxury Aesthetic'],
    icon: 'Layers',
    category: 'kitchen',
    image: imgIsland,
  },
  {
    id: 'straight-kitchen',
    title: 'Straight Kitchens',
    description: 'Clean, linear, and space-efficient. Our straight kitchen designs are perfect for compact spaces and open-plan living areas.',
    benefits: ['Space Efficient', 'Easy Workflow', 'Budget Friendly', 'Modern Aesthetic'],
    icon: 'Minus',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80',
  },
  {
    id: 'custom-kitchen',
    title: 'Custom Modular Kitchens',
    description: 'Your dream kitchen, built from scratch. We design and manufacture completely bespoke modular kitchens to match your unique vision and space requirements.',
    benefits: ['Fully Bespoke', 'Any Shape or Size', 'Premium Finishes', 'Unique to You'],
    icon: 'Sparkles',
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
  },
  {
    id: 'kitchen-renovation',
    title: 'Kitchen Renovation',
    description: 'Breathe new life into your existing kitchen with our professional renovation services — from cabinet refacing to complete kitchen transformations.',
    benefits: ['Cost-Effective', 'Minimal Disruption', 'Fast Turnaround', 'Updated Look'],
    icon: 'RefreshCw',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80',
  },
  {
    id: 'wardrobe-design',
    title: 'Wardrobe Design',
    description: 'Beautifully designed, efficiently organized wardrobes that maximize storage while elevating your bedroom\'s aesthetic.',
    benefits: ['Smart Organization', 'Custom Compartments', 'Soft-Close Fittings', 'Multiple Finishes'],
    icon: 'DoorOpen',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80',
  },
  {
    id: 'cabinet-manufacturing',
    title: 'Cabinet Manufacturing',
    description: 'High-quality custom cabinets for every room — from kitchen cabinets to TV units, bathroom vanities, and office storage.',
    benefits: ['Durable Construction', 'Variety of Finishes', 'Custom Dimensions', 'Multiple Room Types'],
    icon: 'Package',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80',
  },
  {
    id: 'storage-solutions',
    title: 'Storage Solutions',
    description: 'Innovative and smart storage solutions that declutter your home while maintaining a premium aesthetic.',
    benefits: ['Optimized Space', 'Hidden Storage', 'Modular Systems', 'Easy Access Design'],
    icon: 'Archive',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&q=80',
  },
  {
    id: 'kitchen-accessories',
    title: 'Kitchen Accessories Installation',
    description: 'Complete kitchen accessory installation — from pull-out baskets and soft-close hinges to dish racks, cutlery trays, and more.',
    benefits: ['Premium Hardware', 'Expert Installation', 'Lifetime Durability', 'Wide Range'],
    icon: 'Wrench',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80',
  },
  {
    id: 'interior-consultation',
    title: 'Interior Consultation',
    description: 'Expert interior design consultation to help you visualize and plan your dream space with professional guidance and 3D rendering.',
    benefits: ['Expert Guidance', '3D Visualization', 'Material Samples', 'Budget Planning'],
    icon: 'MessageSquare',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80',
  },
  {
    id: 'wooden-door',
    title: 'Wooden Doors',
    description: 'Premium solid wooden doors crafted from high-quality timber to provide security, durability, and a classic aesthetic to your home.',
    benefits: ['Premium Solid Timber', 'Custom Designs & Carvings', 'Termite & Borer Resistant', 'Exquisite Polish Finish'],
    icon: 'DoorOpen',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
  },
  {
    id: 'sagwan-door',
    title: 'Sagwan (Teakwood) Doors',
    description: 'Exquisite doors made from authentic Sagwan (teakwood) renowned for outstanding longevity, natural grain beauty, and premium hand-carving.',
    benefits: ['100% Genuine Teakwood', 'Highly Durable & Weatherproof', 'Elegant Natural Grain', 'Premium Artisan Carving'],
    icon: 'DoorOpen',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80',
  },
  {
    id: 'flush-door',
    title: 'Flush Doors',
    description: 'Sleek, modern, and cost-effective flush doors with a smooth veneer or laminate finish, offering exceptional strength and sound insulation.',
    benefits: ['Smooth Veneer/Laminate Finish', 'Strong Solid Core', 'Water Resistant Options', 'Modern & Economical'],
    icon: 'DoorOpen',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80',
  },
  {
    id: 'furniture-wardrobes',
    title: 'Furniture & Wardrobes',
    description: 'Bespoke wardrobes, walk-in closets, and bedroom storage solutions designed to maximize storage with premium sliding or openable doors.',
    benefits: ['Custom Space Planning', 'Premium Soft-Close Hinges', 'Integrated Lighting Options', 'Ergonomic Drawer Trays'],
    icon: 'Columns',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80',
  },
  {
    id: 'wooden-furniture',
    title: 'Wooden Furniture',
    description: 'Custom-made wooden furniture including beds, dining tables, sofa frames, and study desks, handcrafted by skilled artisans in Udaipur.',
    benefits: ['Solid Wood Construction', 'Bespoke Dimensions', 'Traditional & Modern Designs', 'Fine Polish & Paint Finishes'],
    icon: 'Armchair',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80',
  },
  {
    id: 'pvc-furniture',
    title: 'PVC Furniture',
    description: '100% waterproof and termite-proof PVC furniture, cabinets, and storage units. Ideal for high-moisture areas like kitchens and bathrooms.',
    benefits: ['100% Waterproof & Rustproof', 'Termite & Borer Proof', 'Zero Maintenance', 'Highly Durable & Light'],
    icon: 'Layers',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
  },
];
