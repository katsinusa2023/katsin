import { v4 as uuid } from 'uuid';

export const saladAndAppetizers = [
  {
    id: uuid(),
    name: 'Katsin HUMMUS',
    type: 'V, GF',
    description: [
      {
        name: 'fried chickpea , yogurt with herbs',
      },
    ],
    price: '15',
  },
  {
    id: uuid(),
    name: 'RED PEPPER WALNUT DIP',
    type: 'V, GF',
    description: [
      {
        name: 'Grilled red peppers, garlic,',
      },
      {
        name: 'walnuts, PARMESAN SAUCE',
      },
    ],
    price: '15',
  },
  {
    id: uuid(),
    name: 'EGGPLANT CAVIAR WITH TAHINI',
    type: 'VG, GF',
    description: [
      {
        name: 'Roasted eggplant dip, zucchini,',
      },
      {
        name: 'tahini dressing, truffle mayo',
      },
    ],
    price: '15',
  },
  {
    id: uuid(),
    name: 'Set of katsin appetizers to share',
    type: 'V',
    description: [
      {
        name: 'flatbread, hummus, eggplant caviar,',
      },
      {
        name: 'red pepper dip, avocado hummus',
      },
    ],
    price: '55',
  },
  {
    id: uuid(),
    name: 'Avocado hummus',
    type: 'VG, GF',
    description: [
      {
        name: 'Tahini, chickpeas, tomato, capers, AVOCADO',
      },
    ],
    price: '15',
  },
  {
    id: uuid(),
    name: 'Salmon caviar with parmegiano waffles',
    description: [
      {
        name: 'salmon caviar, cream cheese,',
      },
      {
        name: 'cheese waffles, herbs',
      },
    ],
    price: '39',
  },
  {
    id: uuid(),
    name: 'SEAFOOD SALAD',
    description: [
      {
        name: 'shrimp, Cuttlefish, Parmesan sauce,',
      },
      {
        name: 'mustard sauce, tomatoes , CRUNCH'
      }
    ],
    price: '26',
  },
  {
    id: uuid(),
    name: 'BURRATA SALAD',
    type: 'V, GF',
    description: [
      {
        name: 'heirloom, tomatoes, chutney',
      },
      {
        name: 'BASIL PESTO, olives'
      }
    ],
    price: '25',
  },
  {
    id: uuid(),
    name: 'MOZZARELA AVOCADO SALAD',
    type: 'V, GF',
    description: [
      {
        name: 'fresh mozzarela, tomatoes,',
      },
      {
        name: 'avocado, lettuce, pine nuts, basil pesto'
      }
    ],
    price: '23',
  },
  {
    id: uuid(),
    name: 'KATSIN HEIRLOOM TOMATO SALAD',
    type: 'V, GF',
    description: [
      {
        name: 'PONZU, FETA, TOMATOES,',
      },
      {
        name: 'SOYA SEEDS SAUCE, GOOSEBERRY'
      }
    ],
    price: '23',
  },
  {
    id: uuid(),
    name: 'ICEBERG Ceasar Salad',
    type: 'V, GF',
    description: [
      {
        name: 'lettuce, terragon dressing , parmegiano',
      },
    ],
    price: '19',
  },
  {
    id: uuid(),
    name: 'AVOCADO SALAD',
    type: 'V, VG',
    description: [
      {
        name: 'MIX SALAD, PONZU SAUCE, BLACK GARLIC',
      },
      {
        name: 'TAHINI SAUCE , PISTACHIO',
      },
    ],
    price: '23',
  },
  {
    id: uuid(),
    name: 'BLACK CAVIAR',
    description: [
      {
        name: 'sour cream, egg whites, crepes',
      },
    ],
    price: 'MP',
  },
];

export const rawBar = [
  {
    id: uuid(),
    name: 'SPICY TUNA & SALMON CRISPY BITES',
    description: [
      {
        name: 'Fried japanese rice, tuna,',
      },
      {
        name: 'SALMON, tom yam paste'
      }
    ],
    price: '18',
  },
  {
    id: uuid(),
    name: 'BEEF TARTARE',
    type: 'GF',
    description: [
      {
        name: 'Truffle mayo, capers, onions',
      },
    ],
    price: '18',
  },
  {
    id: uuid(),
    name: 'BEEF carpaccio',
    type: 'GF',
    description: [
      {
        name: 'arugula, french dressing, ponzu sauce',
      },
      {
        name: 'Truffle mayo, Croutons',
      },
    ],
    price: '23',
  },
  {
    id: uuid(),
    name: 'TUNA MILANESE',
    description: [
      {
        name: 'Breaded tuna slices, DILL SAUCE, tomatoes,',
      },
      {
        name: 'SHALOT ONION, C0RIANDER, SESAME',
      },
    ],
    price: '20',
  },
  {
    id: uuid(),
    name: 'TUNA TARTARE',
    description: [
      {
        name: 'Avocado, masahosu sauce, yolk cream,',
      },
      {
        name: 'capers, masago sauce',
      },
    ],
    price: '19',
  },
  {
    id: uuid(),
    name: 'SALMON TARTARE',
    type: 'GF',
    description: [
      {
        name: 'Spinach, tamarind sauce, avocado cream,',
      },
      {
        name: 'capers, yolk cream',
      },
    ],
    price: '19',
  },
  {
    id: uuid(),
    name: 'YEllowtail sashimi ',
    type: 'GF',
    description: [
      {
        name: 'COCONUT TIGER MILK, SRIRACA',
      },
    ],
    price: '19',
  },
  {
    id: uuid(),
    name: 'TRIO TARTARE',
    description: [
      {
        name: 'Tuna, Salmon & Hamachi',
      },
    ],
    price: '53',
  },
  {
    id: uuid(),
    name: 'CHILLED OYSTERS',
    type: 'GF',
    description: [
      {
        name: 'CHERRY SHALLOT, VINEGAR SAUCE, AIOLI SPICY SAUCE',
      },
    ],
    price: '32/54',
  },
];

export const specialties = [
  {
    id: uuid(),
    name: 'GRILLED LAMB CHOPS',
    type: 'GF',
    description: [
      {
        name: 'BABY zucchini, Potato mousse, BLACK GARLIC',
      },
      {
        name: 'TAHINI SAUCE, wafu SAUCE, herbs'
      }
    ],
    price: '55',
  },
  {
    id: uuid(),
    name: 'ROASTED WHOLE LAMB NECK',
    description: [
      {
        name: 'Potato mousse, BLACK GARLIC TAHINI SAUCE, ',
      },
      {
        name: 'FLATBREAD, LETTUCE, herbs'
      }
    ],
    price: '69',
  },
  {
    id: uuid(),
    name: 'SLOW COOKED 36 HRS BEEF SHORTRIBS',
    type: 'GF',
    description: [
      {
        name: 'Potato mousse, baby zuccini,',
      },
      {
        name: 'SPINACH MARINATED ASPARAGUS'
      }
    ],
    price: '47',
  },
  {
    id: uuid(),
    name: 'SLOW COOKED 24 HRS BEEF CHEEKS',
    description: [
      {
        name: 'Parmegiano Gnochi, herbs, demiglace',
      },
    ],
    price: '44',
  },
  {
    id: uuid(),
    name: 'Grilled branzino',
    type:'GF',
    description: [
      {
        name: 'ESTRAGON (TARRAGON) sauce, herbs',
      },
    ],
    price: '48',
  },
  {
    id: uuid(),
    name: 'GRILLED TIGER PRAWNS',
    type: "gf",
    description: [
      {
        name: 'black garlic butter,',
      },
      {
        name: 'ESTRAGON (TARRAGON) sauce',
      },
    ],
    price: '39',
  },
  {
    id: uuid(),
    name: 'CHILEAN SEA BASS FILET',
    type:  'gf',
    description: [
      {
        name: 'Spinach, GRILLED BROCCOLINI,',
      },
      {
        name: 'asian style sauce, Edamame',
      },
    ],
    price: '56',
  },
  {
    id: uuid(),
    name: 'ATLANTIC SALMON FILET',
    type: 'gf',
    description: [
      {
        name: 'Asparagus, dill sauce, Edamame',
      },
    ],
    price: '38',
  },
  {
    id: uuid(),
    name: 'MORROCOAN OCTOPUS',
    type: 'gf',
    description: [
      {
        name: 'Confit potato, red pepper mousse',
      },
    ],
    price: '34',
  },

  {
    id: uuid(),
    name: 'TACO STYLE wagyu MINI KEBAB',
    description: [
      {
        name: 'GROUND MEAT, chopped wagyu meet addition,',
      },
      {
        name: 'FRESH HERBS , ONION, MARINATED dill sauce',
      },
    ],
    price: '48',
  },
  {
    id: uuid(),
    name: 'GRILLED CHICKEN BREAST',
    type: 'gf',
    description: [
      {
        name: 'POtatoes, chicken juice,',
      },
      {
        name: 'wild mushroom sauce'
      }
    ],
    price: '31',
  },
  {
    id: uuid(),
    name: 'CAULIFLOWER STEAK',
    type: 'V, VG, GF',
    description: [
      {
        name: 'AVOCADO, HUMMUS, BLACK GARLIC',
      },
      {
        name: 'TAHINI SAUCE, SRIRACHA SAUCE'
      }
    ],
    price: '24',
  },
];

export const steaksFromCharcoalOven = [
  {
    id: uuid(),
    name: 'PRIME ANGUS TOMAHAWK, 36 OZ',
    type: 'GF',
    // description: 'chickpea tahini dup, edamame, mushrooms, fresh herbs',
    price: '158',
  },
  {
    id: uuid(),
    name: 'PRIME ANGUS RIBEYE FILLET, 16 OZ',
    type: 'GF',
    // description: 'Grilled red peppers, garlic, wallnuts, fresh herbs',
    price: '69',
  },
  {
    id: uuid(),
    name: 'ANGUS FILET MIGNON, 8 OZ',
    type: 'GF',
    // description: 'Grilled red peppers, garlic, wallnuts, fresh herbs',
    price: '59',
  },
  {
    id: uuid(),
    name: 'PRIME ANGUS NEW YORK STRIP, 14 oz',
    type: 'GF',
    // description:
    //   'Roasted eggplant dip, toasted breadcrumbs, zucchini, pomegranate, tahini dressing, basil',
    price: '62',
  },
];
export const favor = [
  {
    id: uuid(),
    name: 'PEPPERCORN SAUCE',
    type: 'V, Gf',
    price:'4'
  },
  {
    id: uuid(),
    name: 'BLUE CHEESE SAUCE',
    type: 'V, GF',
    price:'4'
  },
  {
    id: uuid(),
    name: 'BBQ SAUCE',
    type: 'V, Gf',
    price:'4'
  },
  {
    id: uuid(),
    name: 'RUNCH SAUCE',
    type: 'V, Gf',
    price:'4'
  },
  {
    id: uuid(),
    name: 'TRUFFLE MAYO',
    type: 'V, Gf',
    price:'4'
  },
]

export const sides = [
  {
    id: uuid(),
    name: 'LOBSTER MASHED POTATOES',
    type: 'GF',
    // description: '',
    price: '26',
  },
  {
    id: uuid(),
    name: 'ASPARAGUS with Hollandaise sauce',
    type: 'GF',
    // description: '',
    price: '16',
  },
  {
    id: uuid(),
    name: 'GRILLED VEGETABLES',
    type: 'GF, v, vg',
    // description: '',
    price: '14',
  },
  {
    id: uuid(),
    name: 'TRUFFLE ORZO',
    type: 'v  ',
    // description: '',
    price: '21',
  },
  {
    id: uuid(),
    name: 'MAC & CHEESE WITH SHRIMP',
    // description: '',
    price: '24',
  },
  {
    id: uuid(),
    name: 'FRENCH FRIES set',
    type: 'GF',
    // description: '',
    price: '18',
  },
  {
    id: uuid(),
    name: 'BREAD BASKET LG/SM',
    // description: '',
    price: '7/5',
  },
];

// export const sauces = [
//   {
//     id: uuid(),
//     name: 'PEPPERCORN',
//     // description: '',
//     price: '6',
//   },
//   {
//     id: uuid(),
//     name: 'MUSHROOM',
//     // description: '',
//     price: '6',
//   },
//   {
//     id: uuid(),
//     name: 'BLUE CHEESE',
//     // description: '',
//     price: '6',
//   },
//   {
//     id: uuid(),
//     name: 'BBQ',
//     // description: '',
//     price: '6',
//   },
// ];

export const dessert = [
  {
    id: uuid(),
    name: 'CHOUX WITH BERRIES AND VANILLA ICE CREAM',
    // description: '',
    price: '14',
  },
  {
    id: uuid(),
    name: 'BROWNIE WITH GELATO',
    // description: '',
    price: '15',
  },
  {
    id: uuid(),
    name: 'pahlava CHEESECAKE',
    // description: '',
    price: '18',
  },
  {
    id: uuid(),
    name: 'MEDOVIK WITH GELATO',
    // description: '',
    price: '16',
  },
  {
    id: uuid(),
    name: 'MILLEFEUILLE',
    // description: '',
    price: '15',
  },
  {
    id: uuid(),
    name: 'MONTBLANC',
    // description: '',
    price: '16',
  },
  {
    id: uuid(),
    name: 'berry plate',
    // description: '',
    price: '35',
  }
];
export const specials = [
  {
    id: uuid(),
    name: 'SEAFOOD PLATER',
    description: [
      {
        name: 'EAST & WEST COAST OYSTERS, jumbo tiger shrimp,'
      },
      {
        name: 'crab clamps, salmon tartar, EAST COAST LOBSTER'
      },
      {
        name: 'TAIL, SHRIMP COCKTAIL,'
      },
      {
        name: 'CHERRY SHALLOT VINEGAR SAUCE AIOLI SPICY SAUCE,'
      },
      {
        name: 'COCKTAIL SAUCE, TABASCO'
      }
    ],
    price: '248',
  },
  {
    id: uuid(),
    name: 'CHILLED OYSTERS',
    description: [
      {
        name: 'CHERRY SHALLOT VINEGAR SAUCE AIOLI SPICY SAUCE'
      },
    ],
    price: '32/54 (HALF DOZEN/DOZEN)',
  },
  {
    id: uuid(),
    name: 'BLACK CAVIAR',
    description: [
      {
        name: 'sour cream, egg whites, crepes'
      },
    ],
    price: 'MP',
  },
]

export const foodMenu = [
  {
    id: uuid(),
    title: 'APPETIZERS & SALADS',
    type: saladAndAppetizers,
  },
  {
    id: uuid(),
    title: 'RAW BAR',
    type: rawBar,
  },
  // {
  //   id: uuid(),
  //   title: 'SALADS & SOUP',
  //   type: saladsSoup,
  // },

  {
    id: uuid(),
    title: 'SPECIALTIES',
    description: 'Roasted in charcoal oven',
    type: specialties,
  },
  {
    id: uuid(),
    title: 'STEAKS FROM CHARCOAL OVEN',
    type: steaksFromCharcoalOven,
  },
  {
    id: uuid(),
    title: 'SIDES',
    type: sides,
  },
  {
    id: uuid(),
    title: 'Enhance the favor of your dish with',
    type: favor,
  },
  // {
  //   id: uuid(),
  //   title: 'SAUCES',
  //   type: sauces,
  // },
  {
    id: uuid(),
    title: 'DESSERT',
    type: dessert,
  },
  // {
  //   id: uuid(),
  //   title: 'specialS',
  //   type: specials,
  // },
];
