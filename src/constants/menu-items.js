export const menuCategories = {
  breakfast: {
    title: 'Breakfast',
    items: [
      {
        id: 'b1',
        name: 'Classic Breakfast',
        description: 'Eggs, bacon, toast, and hash browns',
        price: 12.99,
        image: '/images/menu/breakfast-classic.jpg',
        isVegetarian: false,
        isSpicy: false,
      },
    ],
  },
  mainCourse: {
    title: 'Main Course',
    items: [
      {
        id: 'm1',
        name: 'Signature Pasta',
        description: 'Fresh homemade pasta with special sauce',
        price: 16.99,
        image: '/images/menu/signature-pasta.jpg',
        isVegetarian: true,
        isSpicy: false,
      },
    ],
  },
  desserts: {
    title: 'Desserts',
    items: [
      {
        id: 'd1',
        name: 'Chocolate Fondant',
        description: 'Warm chocolate cake with vanilla ice cream',
        price: 8.99,
        image: '/images/menu/chocolate-fondant.jpg',
        isVegetarian: true,
        isSpicy: false,
      },
    ],
  },
  beverages: {
    title: 'Beverages',
    items: [
      {
        id: 'dr1',
        name: 'Specialty Coffee',
        description: 'House blend premium coffee',
        price: 4.99,
        image: '/images/menu/specialty-coffee.jpg',
        isVegetarian: true,
        isSpicy: false,
      },
    ],
  },
}; 