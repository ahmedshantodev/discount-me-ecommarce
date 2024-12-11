// item image
import milkIcon from "/public/images/milk-icon.png";
import tShirtIcon from "/public/images/t-shirt-icon.png";
import dessertICon from "/public/images/dessert-icon.png";
import toyIcon from "/public/images/toy-icon.png";
import bookIcon from "/public/images/book-icon.png";
import noodlesIcon from "/public/images/noodles-icon.png";
import riceIcon from "/public/images/rice-icon.png";

const rastaurantListInfo = [
  {
    id: 1,
    thumbnail: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Trattoria dall'Oste",
    rating: 4.5,
    isFeatured: true,
    locatioin: "Via Luigi Alamanni, 3, 50123 Firenze",
    description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  sustainable seafood that is flown in fresh daily,",
    items: [
      { name: "Milk", image: milkIcon },
      { name: "T Shirt", image: tShirtIcon },
      { name: "Dessert", image: dessertICon },
      { name: "Toy", image: toyIcon },
      { name: "Book", image: bookIcon },
      { name: "Noodles", image: noodlesIcon },
      { name: "Rice", image: riceIcon },
    ],
  },
  {
    id: 2,
    thumbnail: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "lorem ipsum alu baru",
    rating: 3.5,
    isFeatured: true,
    locatioin: "Via Luigi Alamanni, 3, 50123 Firenze",
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  sustainable seafood that is flown in fresh daily,",
    items: [
      { name: "Milk", image: milkIcon },
      { name: "T Shirt", image: tShirtIcon },
      { name: "Dessert", image: dessertICon },
      { name: "Toy", image: toyIcon },
      { name: "Book", image: bookIcon },
      { name: "Noodles", image: noodlesIcon },
      { name: "Rice", image: riceIcon },
    ],
  },
  {
    id: 3,
    thumbnail: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Trattoria dall'Oste",
    rating: 5.0,
    isFeatured: true,
    locatioin: "Via Luigi Alamanni, 3, 50123 Firenze",
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  sustainable seafood that is flown in fresh daily,",
    items: [
      { name: "Milk", image: milkIcon },
      { name: "T Shirt", image: tShirtIcon },
      { name: "Dessert", image: dessertICon },
      { name: "Toy", image: toyIcon },
      { name: "Book", image: bookIcon },
      { name: "Noodles", image: noodlesIcon },
      { name: "Rice", image: riceIcon },
    ],
  },
  {
    id: 4,
    thumbnail: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Trattoria dall'Oste",
    rating: 4.5,
    isFeatured: false,
    locatioin: "Via Luigi Alamanni, 3, 50123 Firenze",
    description: "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  sustainable seafood that is flown in fresh daily,",
    items: [
      { name: "Milk", image: milkIcon },
      { name: "T Shirt", image: tShirtIcon },
      { name: "Dessert", image: dessertICon },
      { name: "Toy", image: toyIcon },
      { name: "Book", image: bookIcon },
      { name: "Noodles", image: noodlesIcon },
      { name: "Rice", image: riceIcon },
    ],
  },
  {
    id: 5,
    thumbnail: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "lorem ipsum alu baru",
    rating: 3.5,
    isFeatured: false,
    locatioin: "Via Luigi Alamanni, 3, 50123 Firenze",
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  sustainable seafood that is flown in fresh daily,",
    items: [
      { name: "Milk", image: milkIcon },
      { name: "T Shirt", image: tShirtIcon },
      { name: "Dessert", image: dessertICon },
      { name: "Toy", image: toyIcon },
      { name: "Book", image: bookIcon },
      { name: "Noodles", image: noodlesIcon },
      { name: "Rice", image: riceIcon },
    ],
  },
  {
    id: 6,
    thumbnail: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    name: "Trattoria dall'Oste",
    rating: 5.0,
    isFeatured: false,
    locatioin: "Via Luigi Alamanni, 3, 50123 Firenze",
    description:
      "Featuring seasonal and sustainable seafood that is flown in fresh daily, our chef-driven menu proves that no matter when you’re dining, seafood can be truly exceptional.  sustainable seafood that is flown in fresh daily,",
    items: [
      { name: "Milk", image: milkIcon },
      { name: "T Shirt", image: tShirtIcon },
      { name: "Dessert", image: dessertICon },
      { name: "Toy", image: toyIcon },
      { name: "Book", image: bookIcon },
      { name: "Noodles", image: noodlesIcon },
      { name: "Rice", image: riceIcon },
    ],
  },
];

export default rastaurantListInfo;
