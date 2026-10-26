export type Category = 'Parcel Packing Clips' | 'PPE Strap';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  longDescription: string;
  unit: string;
  pricePerUnit: number;
  packSize: string;
  image: string;
  specs: { label: string; value: string }[];
  featured?: boolean;
}

// Verified products from vikashpack.com (Oct 2026)
export const PRODUCTS: Product[] = [
  {
    id: 'gp-clips',
    name: 'GP-Clips',
    category: 'Parcel Packing Clips',
    description: 'Galvanized metal parcel packing clips for secure strapping seals.',
    longDescription:
      'GP-Clips are galvanized metal seals engineered for closing parcel strapping. They grip securely under tension and resist corrosion, making them suitable for high-volume courier and warehouse operations.',
    unit: '/kg',
    pricePerUnit: 72,
    packSize: '25 KG',
    image: '/gp.png',
    specs: [
      { label: 'Material', value: 'Galvanized steel' },
      { label: 'Unit price', value: '₹72 / kg' },
      { label: 'Pack size', value: '25 KG' },
      { label: 'Use', value: 'Parcel strapping seals' },
    ],
    featured: true,
  },
  {
    id: 'silver-clip',
    name: 'Silver-Clip',
    category: 'Parcel Packing Clips',
    description: 'Premium silver-finish metal clips for heavy-duty strapping.',
    longDescription:
      'Silver-Clip is a premium-grade metal packing clip with a smooth silver finish, designed for heavier parcel and industrial strapping loads. Each clip is formed to maintain a tight grip under tension.',
    unit: '/pcs',
    pricePerUnit: 80,
    packSize: '25 pcs',
    image: '/tape.png',
    specs: [
      { label: 'Material', value: 'Steel, silver finish' },
      { label: 'Unit price', value: '₹80 / pcs' },
      { label: 'Pack size', value: '25 pcs' },
      { label: 'Use', value: 'Heavy-duty strapping' },
    ],
    featured: true,
  },
  {
    id: 'ppe-strap-virgin',
    name: 'PPE Strap — 100% Virgin Plastic',
    category: 'PPE Strap',
    description: 'High-tensile virgin plastic strapping for industrial loads.',
    longDescription:
      'PPE Strap manufactured from 100% virgin plastic offers consistent tensile strength and minimal elongation, ideal for securing heavy cartons, pallets, and industrial consignments during transit.',
    unit: '/coil',
    pricePerUnit: 0,
    packSize: 'On enquiry',
    image: 'https://images.pexels.com/photos/236748/pexels-photo-236748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    specs: [
      { label: 'Material', value: '100% Virgin PPE' },
      { label: 'Unit price', value: 'On enquiry' },
      { label: 'Format', value: 'Coil' },
      { label: 'Use', value: 'Carton & pallet strapping' },
    ],
  },
];

export const CATEGORIES: Category[] = ['Parcel Packing Clips', 'PPE Strap'];

export const COMPANY = {
  name: 'Vikash Pack',
  legalName: 'Vikas Packaging Works',
  tagline: 'Precision in Every Package',
  foundedYear: 2004,
  founder: 'Shree Ghanshyam Mishra',
  currentHead: 'Rinku Mishra',
  website: 'vikashpack.com',
  aboutShort:
    'Vikas Packaging Works is a trusted name in industrial and commercial packaging, specializing in the manufacture of metal parcel packing clips and PPE strapping.',
};
