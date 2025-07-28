const connectDB = require('./db');
const Trip = require('./models/Trip');

const sampleTrips = [
  {
    destination: 'Paris, France',
    duration: 7,
    price: 1200,
    startDate: new Date('2025-08-15'),
    description: 'Explore the city of lights and romance.',
  },
  {
    destination: 'Kyoto, Japan',
    duration: 10,
    price: 1800,
    startDate: new Date('2025-09-10'),
    description: 'Experience traditional Japanese culture and temples.',
  },
  {
    destination: 'Banff, Canada',
    duration: 5,
    price: 950,
    startDate: new Date('2025-10-01'),
    description: 'Adventure in the Canadian Rockies.',
  },
];

const seedDatabase = async () => {
  await connectDB();
  await Trip.deleteMany({});
  await Trip.insertMany(sampleTrips);
  console.log('Database seeded with sample trips');
  process.exit();
};

seedDatabase();
