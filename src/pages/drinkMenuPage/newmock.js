import { v4 as uuid } from 'uuid';

const americanWhiskey = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'ANGEL’S ENVY',
        price: '18',
      },
      {
        id: uuid(),
        name: 'BASIL HAYDEN',
        price: '18',
      },
      {
        id: uuid(),
        name: 'BLADE AND BOW',
        price: '19',
      },
      {
        id: uuid(),
        name: 'BOOKER’S',
        price: '29',
      },
      {
        id: uuid(),
        name: 'BULLEIT Rye',
        price: '15',
      },
      {
        id: uuid(),
        name: 'BULLEIT BOURBON',
        price: '15',
      },
      {
        id: uuid(),
        name: 'ELIJAH CRAIG',
        price: '14',
      },
      {
        id: uuid(),
        name: 'ELIJAH CRAIG 18 YR',
        price: '45',
      },
      {
        id: uuid(),
        name: 'FOUR ROSES SINGLE BARREL',
        price: '18',
      },
      {
        id: uuid(),
        name: 'FOUR ROSES YELLOW',
        price: '14',
      },
      {
        id: uuid(),
        name: 'JEFFERSON\'S RESERVE',
        price: '17',
      },
      {
        id: uuid(),
        name: 'JEFFERSON\'S OCEAN AGED AT SEA',
        price: '25',
      },
      {
        id: uuid(),
        name: 'JEFFERSON\'S MARIAN MCLAIN',
        price: '75',
      },
      {
        id: uuid(),
        name: 'KNOB CREEK',
        price: '16',
      },
      {
        id: uuid(),
        name: 'LEGENT',
        price: '15',
      },
      {
        id: uuid(),
        name: 'MAKER’S MARK',
        price: '15',
      },
      {
        id: uuid(),
        name: 'MICHTER\'S US ★ 1 KENTUCKY STRAIGHT RYE',
        price: '16',
      },
      {
        id: uuid(),
        name: 'MICHTER\'S US ★ 1 KENTUCKY STRAIGHT BOURBON',
        price: '16',
      },
      {
        id: uuid(),
        name: 'MICHTER\'S US ★ 1 AMERICAN WHISKEY',
        price: '16',
      },
      {
        id: uuid(),
        name: 'MICHTER\'S US ★ 1 SOUR MASH',
        price: '16',
      },
      {
        id: uuid(),
        name: 'OLD FORESTER',
        price: '15',
      },
      {
        id: uuid(),
        name: 'RUSSELL\'S RESERVE 10YR',
        price: '16',
      },
      {
        id: uuid(),
        name: 'RUSSELL\'S SINGLE RICKHOUSE',
        price: '75',
      },
      {
        id: uuid(),
        name: 'WILD TURKEY LONGBRANCH',
        price: '15',
      },
      {
        id: uuid(),
        name: 'WILD TURKEY RARE BREED BARREL PROOF',
        price: '19',
      },
      {
        id: uuid(),
        name: 'WYOMING WHISKEY SMALL BATCH',
        price: '16',
      },{
        id: uuid(),
        name: 'ANGEL\'S ENVY RUM CASK',
        price: '24',
      },
      {
        id: uuid(),
        name: 'OLD FORESTER 1870',
        price: '15',
      },
      {
        id: uuid(),
        name: 'OLD POTRERO',
        price: '23',
      },
      {
        id: uuid(),
        name: 'PEERLESS',
        price: '38',
      },
      {
        id: uuid(),
        name: 'RUSSELL\'S 6YR',
        price: '15',
      },
      {
        id: uuid(),
        name: 'TEMPLETON',
        price: '16',
      },
      {
        id: uuid(),
        name: 'WILD TURKEY 101',
        price: '15',
      },{
        id: uuid(),
        name: 'WOODFORD RESERVE',
        price: '17',
      },{
        id: uuid(),
        name: 'BLACKENED',
        price: '18',
      },{
        id: uuid(),
        name: 'STRANAHAN\'S COLORADO',
        price: '18',
      },{
        id: uuid(),
        name: 'UNCLE NEAREST 1884',
        price: '20',
      },{
        id: uuid(),
        name: 'UNCLE NEAREST 1856',
        price: '21',
      },{
        id: uuid(),
        name: 'WESTLAND AMERICAN SINGLE MALT',
        price: '21',
      },
    ],
  },
]

const indianWhiskey = [
  {
    id: uuid(),
    drinkTitle: 'INDIAN WHISKY',
    drink: [
      {
        id: uuid(),
        name: 'PAUL JOHN BRILLIANCE',
        price: '18',
      },
      {
        id: uuid(),
        name: 'PAUL JOHN EDITED',
        price: '18',
      },
      {
        id: uuid(),
        name: 'PAUL JOHN BOLD',
        price: '18',
      },
    ],
  },
]

const scotch = [
  {
    id: uuid(),
    drinkTitle: 'Highland',
    drink: [
      {
        id: uuid(),
        name: 'DALWHINNIE 15 YR',
        price: '28',
      },
      {
        id: uuid(),
        name: 'DALMORE CIGAR MALT RESERVE',
        price: '50',
      },
      {
        id: uuid(),
        name: 'DALMORE 12 YR SHERRY CASK',
        price: '27',
      },
      {
        id: uuid(),
        name: 'DALMORE 15 YR',
        price: '35',
      },
      {
        id: uuid(),
        name: 'DALMORE 18 YR',
        price: '81',
      },
      {
        id: uuid(),
        name: 'DALMORE KING ALEXANDER III',
        price: '76',
      },
      {
        id: uuid(),
        name: 'DALMORE 21 YR',
        price: '150',
      },
      {
        id: uuid(),
        name: 'DALMORE 25 YR',
        price: '280',
      },
      {
        id: uuid(),
        name: 'OBAN 14 YR',
        price: '33',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Scotch Speyside',
    drink: [
      {
        id: uuid(),
        name: 'BALVENIE DOUBLEWOOD 12 YR',
        price: '24',
      },
      {
        id: uuid(),
        name: 'BALVENIE 14 YR CARIBBEAN CASK',
        price: '28',
      },
      {
        id: uuid(),
        name: 'BALVENIE 16 YR',
        price: '60',
      },
      {
        id: uuid(),
        name: 'BALVENIE 21 YR PORTWOOD',
        price: '74',
      },
      {
        id: uuid(),
        name: 'BALVENIE RARE MARRIAGES 25 YR',
        price: '108',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 12 YR',
        price: '20',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 12 YR SHERRY CASK FINISH',
        price: '21',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 14 YR BOURBON BARREL RESERVE',
        price: '21',
      },
      {
        id: uuid(),
        name: 'GLENFIDIICH 15 YR',
        price: '23',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 18 YR',
        price: '42',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 21 YR GRAN RESERVA',
        price: '55',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 23 YR GRAND CRU',
        price: '80',
      },
      {
        id: uuid(),
        name: 'GLENFIDDICH 26 yR GRANDE COURONNE',
        price: '130',
      },{
        id: uuid(),
        name: 'GLENLIVET 12 YR',
        price: '16',
      },{
        id: uuid(),
        name: 'GLENLIVET 14 YR',
        price: '20',
      },{
        id: uuid(),
        name: 'GLENLIVET 15 YR',
        price: '22',
      },{
        id: uuid(),
        name: 'GLENLIVET 18 YR',
        price: '46',
      },{
        id: uuid(),
        name: 'MACALLAN 12 YR',
        price: '30',
      },{
        id: uuid(),
        name: 'MACALLAN 15 YR',
        price: '53',
      },{
        id: uuid(),
        name: 'MACALLAN 18 YR',
        price: '75',
      },{
        id: uuid(),
        name: 'MACALLAN 25 YR',
        price: '330',
      },{
        id: uuid(),
        name: 'MACALLAN 30 YR',
        price: '600',
      },{
        id: uuid(),
        name: 'MACALLAN RARE CASK',
        price: '98',
      },{
        id: uuid(),
        name: 'MACALLAN HARMONY COLLECTION',
        price: '53',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Islay',
    drink: [
      {
        id: uuid(),
        name: 'ARDBEG 10 YR',
        price: '22',
      },
      {
        id: uuid(),
        name: 'LAGAVULIN 16 YR',
        price: '38',
      },
      {
        id: uuid(),
        name: 'LAPHROAIG 10 YR',
        price: '23',
      },
      {
        id: uuid(),
        name: 'PORT CHARLOTTE 10 YR HEAVILY PEATED',
        price: '24',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Lowland & Orkney',
    drink: [
      {
        id: uuid(),
        name: 'AUCHENTOSHAN 3 WOOD',
        price: '22',
      },
      {
        id: uuid(),
        name: 'GLENKINCHIE 12 YR',
        price: '26',
      },
      {
        id: uuid(),
        name: 'HIGHLAND PARK 12 YR',
        price: '16',
      },
      {
        id: uuid(),
        name: 'HIGHLAND PARK 15 YR',
        price: '38',
      },
      {
        id: uuid(),
        name: 'HIGHLAND PARK 18 YR',
        price: '46',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Blended Scotch Whiskey',
    drink: [
      {
        id: uuid(),
        name: 'JOHNNIE WALKER BLACK LABEL',
        price: '20',
      },
      {
        id: uuid(),
        name: 'JOHNNIE WALKER GREEN LABEL',
        price: '22',
      },
      {
        id: uuid(),
        name: 'JOHNNIE WALKER DOUBLE BLACK',
        price: '19',
      },
      {
        id: uuid(),
        name: 'JOHNNIE WALKER BLUE LABEL',
        price: '68',
      },
      {
        id: uuid(),
        name: 'CHIVAS REGAL 12 YR',
        price: '15',
      },
      {
        id: uuid(),
        name: 'CHIVAS REGAL 18 YR',
        price: '23',
      },
      {
        id: uuid(),
        name: 'CHIVAS REGAL ROYAL SALUTE 21 YR',
        price: '48',
      },
    ],
  },
]

const irishWhiskey = [
  {
    id: uuid(),
    drinkTitle: 'Irish whiskey',
    drink: [
      {
        id: uuid(),
        name: 'BUSHMILLS',
        price: '14',
      },
      {
        id: uuid(),
        name: 'REDBREAST 12 YR',
        price: '23',
      },
      {
        id: uuid(),
        name: 'REDBREAST 21 YR',
        price: '65',
      },
      {
        id: uuid(),
        name: 'TULLAMORE DEW',
        price: '12',
      },
      {
        id: uuid(),
        name: 'JAMESON',
        price: '24',
      },
    ],
  },
]

const japanesewiskey = [
  {
    id: uuid(),
    drinkTitle: 'JAPANESE WHISKY',
    drink: [
      {
        id: uuid(),
        name: 'HATOZAKI JAPANESE FINEST',
        price: '17',
      },
      {
        id: uuid(),
        name: 'HATOZAKI SMALL BATCH',
        price: '19',
      },
      {
        id: uuid(),
        name: 'NIKKA FROM THE BARREL',
        price: '22',
      },
      {
        id: uuid(),
        name: 'NIKKA PURE MALT TAKETSURU',
        price: '23',
      },
      {
        id: uuid(),
        name: 'SUNTORY HAKUSHU 12 YR',
        price: '34',
      },
      {
        id: uuid(),
        name: 'SUNTORY HAKUSHU 18 YR',
        price: '80',
      },
      {
        id: uuid(),
        name: 'SUNTORI TOKI',
        price: '15',
      },
    ],
  },
]

const taiwaneseWhiskey = [
  {
    id: uuid(),
    drinkTitle: 'TAIWANESE WHISKY',
    drink: [
      {
        id: uuid(),
        name: 'KAVALAN CLASSIC',
        price: '30',
      },
      {
        id: uuid(),
        name: 'KAVALAN SHERRY OAK',
        price: '38',
      },
      {
        id: uuid(),
        name: 'KAVALAN CONCERTMASTER',
        price: '28',
      },
    ],
  },
]

const tequila = [
  {
    id: uuid(),
    drinkTitle: 'Blanco',
    drink: [
      {
        id: uuid(),
        name: 'CASAMIGOS',
        price: '19',
      },
      {
        id: uuid(),
        name: 'CLASÉ AZUL PLATA',
        price: '48',
      },
      {
        id: uuid(),
        name: 'CINCORO',
        price: '26',
      },
      {
        id: uuid(),
        name: 'CÓDIGO 1530',
        price: '17',
      },
      {
        id: uuid(),
        name: 'DON JULIO',
        price: '21',
      },
      {
        id: uuid(),
        name: 'Don Julio Alma Miel',
        price: '35',
      },
      {
        id: uuid(),
        name: 'EL TESORO',
        price: '20',
      },
      {
        id: uuid(),
        name: 'ESPOLON',
        price: '15',
      },
      {
        id: uuid(),
        name: 'FORTALEZA',
        price: '35',
      },
      {
        id: uuid(),
        name: 'PATRON SILVER',
        price: '18',
      },
      {
        id: uuid(),
        name: 'TEQUILA OCHO',
        price: '20',
      },
      {
        id: uuid(),
        name: 'VOLCAN',
        price: '21',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Reposado',
    drink: [
      {
        id: uuid(),
        name: 'CASAMIGOS',
        price: '19',
      },
      {
        id: uuid(),
        name: 'CLASÉ Azul',
        price: '52',
      },
      {
        id: uuid(),
        name: 'CLASÉ Azul Gold',
        price: '100',
      },
      {
        id: uuid(),
        name: 'CINCORO',
        price: '35',
      },
      {
        id: uuid(),
        name: 'CÓDIGO 1530',
        price: '20',
      },
      {
        id: uuid(),
        name: 'DON Julio',
        price: '20',
      },
      {
        id: uuid(),
        name: 'DON Julio Rosado',
        price: '42',
      },
      {
        id: uuid(),
        name: 'DON Julio Primavera',
        price: '35',
      },
      {
        id: uuid(),
        name: 'FORTALEZA',
        price: '40',
      },
      {
        id: uuid(),
        name: 'TEQUILA Ocho',
        price: '22',
      },
      {
        id: uuid(),
        name: 'VOLCAN',
        price: '52',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Añejo',
    drink: [
      {
        id: uuid(),
        name: 'CASAMIGOS',
        price: '21',
      },
      {
        id: uuid(),
        name: 'CLASÉ Azul',
        price: '140',
      },
      {
        id: uuid(),
        name: 'CINCORO',
        price: '45',
      },
      {
        id: uuid(),
        name: 'CÓDIGO 1530',
        price: '38',
      },
      {
        id: uuid(),
        name: 'DON Julio',
        price: '25',
      },
      {
        id: uuid(),
        name: 'DON Julio 70 Añejo Cristalino',
        price: '28',
      },
      {
        id: uuid(),
        name: 'DON Julio 1942',
        price: '52',
      },
      {
        id: uuid(),
        name: 'FORTALEZA',
        price: '55',
      },
      {
        id: uuid(),
        name: 'HERRADURA',
        price: '21',
      },
      {
        id: uuid(),
        name: 'TEQUILA Ocho',
        price: '23',
      },
      {
        id: uuid(),
        name: 'HERRADURA legend',
        price: '48',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'Extra Añejo',
    drink: [
      {
        id: uuid(),
        name: 'CLASÉ Azul Ultra',
        price: '250',
      },
      {
        id: uuid(),
        name: 'AVION 44',
        price: '45',
      },
      {
        id: uuid(),
        name: 'TEARS of LLORONA',
        price: '80',
      },
      {
        id: uuid(),
        name: 'TEQUILA ocho',
        price: '52',
      },
      {
        id: uuid(),
        name: 'DON Julio ultima RESERVA',
        price: '130',
      },
      {
        id: uuid(),
        name: 'jose CUERVO',
        price: '53',
      },
      {
        id: uuid(),
        name: 'MAESTRO DOBEL 50',
        price: '350',
      },
    ],
  },
];

const mezcal = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'CASAMIGOS',
        price: '28',
      },
      {
        id: uuid(),
        name: 'CLASE AZUL DURANGO',
        price: '99',
      },
      {
        id: uuid(),
        name: 'CLASE AZUL GUERRERO',
        price: '99',
      },
      {
        id: uuid(),
        name: 'DEL MAGUEY CHICHICAPA',
        price: '22',
      },
      {
        id: uuid(),
        name: 'DEL MAGUEY SAN LUIS DEL RIO MICHAEL MINA',
        price: '23',
      },
      {
        id: uuid(),
        name: 'DEL MAGUEY TOBALA',
        price: '28',
      },
      {
        id: uuid(),
        name: 'DOS HOMBRES ESPADÍN',
        price: '22',
      },
      {
        id: uuid(),
        name: 'DOS HOMBRES TOBALA',
        price: '99',
      },
      {
        id: uuid(),
        name: 'EL SILENZIO ESPADÍN',
        price: '14',
      },
      {
        id: uuid(),
        name: 'MONTELOBOS',
        price: '13',
      },
    ],
  },
]

const rum = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'APPLETON 12 YR',
        price: '17',
      },
      {
        id: uuid(),
        name: 'APPLETON 15 YR',
        price: '23',
      },
      {
        id: uuid(),
        name: 'DIPLOMATICO RESERVA',
        price: '20',
      },
      {
        id: uuid(),
        name: 'FLOR DE CAÑA 12 YR',
        price: '18',
      },
      {
        id: uuid(),
        name: 'FLOR DE CAÑA 30 YR',
        price: '200',
      },
      {
        id: uuid(),
        name: 'RON ZACAPA CENTENARIO 23 YR',
        price: '16',
      },
    ],
  },
]

const brandy = [
  {
    id: uuid(),
    drinkTitle: 'Armenian',
    drink: [
      {
        id: uuid(),
        name: 'VASPURAKAN',
        price: '27',
      },
      {
        id: uuid(),
        name: 'DVIN',
        price: '28',
      },
      {
        id: uuid(),
        name: 'NAIRI',
        price: '30',
      },
      {
        id: uuid(),
        name: 'AZNAVOUR',
        price: '50',
      },
    ],
  },
]

const cognac = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'COURVOISIER VS',
        price: '16',
      },
      {
        id: uuid(),
        name: 'HENNESSY VSOP',
        price: '25',
      },
      {
        id: uuid(),
        name: 'HENNESSY XO',
        price: '70',
      },
      {
        id: uuid(),
        name: 'HENNESSY PARADIS IMPERIAL',
        price: '200',
      },
      {
        id: uuid(),
        name: 'MARTELL CORDON BLEU',
        price: '50',
      },
      {
        id: uuid(),
        name: 'REMY MARTIN VSOP',
        price: '24',
      },
      {
        id: uuid(),
        name: 'REMY MARTIN 1738',
        price: '25',
      },
      {
        id: uuid(),
        name: 'REMY MARTIN EXCELLENCE XO',
        price: '40',
      },
    ],
  },
]

const gin = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'BOMBAY SAPPHIRE',
        price: '15',
      },
      {
        id: uuid(),
        name: 'HENDRICK`S',
        price: '16',
      },
      {
        id: uuid(),
        name: 'MONKEY 47',
        price: '23',
      },
      {
        id: uuid(),
        name: 'TANQUERAY No. 10',
        price: '16',
      },
      {
        id: uuid(),
        name: 'No. 3',
        price: '17',
      },
      {
        id: uuid(),
        name: 'AVIATION',
        price: '16',
      },
    ],
  },
]

const vodka = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'ABSOLUT ELYX',
        price: '17',
      },
      {
        id: uuid(),
        name: 'GREY GOOSE',
        price: '17',
      },
      {
        id: uuid(),
        name: 'KETEL ONE',
        price: '16',
      },
      {
        id: uuid(),
        name: 'STOLI ELIT',
        price: '20',
      },
      {
        id: uuid(),
        name: 'TITO’S',
        price: '15',
      },
      {
        id: uuid(),
        name: 'CLIX',
        price: '73',
      },
      {
        id: uuid(),
        name: 'OHANYAN ORGANIC',
        price: '15',
      },
      {
        id: uuid(),
        name: 'OHANYAN PHANTOM',
        price: '15',
      },
      {
        id: uuid(),
        name: 'OHANYAN Ice',
        price: '15',
      },
    ],
  },
]

const liqueurs = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'CHARTREUS GREEN',
        price: '15',
      },
      {
        id: uuid(),
        name: 'CHARTREAUS YELLOW',
        price: '15',
      },
      {
        id: uuid(),
        name: 'DISARONNO',
        price: '17',
      },
      {
        id: uuid(),
        name: 'MR.BLACK',
        price: '16',
      },
      {
        id: uuid(),
        name: 'KAHLUA',
        price: '15',
      },
      {
        id: uuid(),
        name: 'FERNET BRANCA',
        price: '16',
      },
      {
        id: uuid(),
        name: 'Jägermeister',
        price: '15',
      },
      {
        id: uuid(),
        name: 'BAILEYS',
        price: '15',
      },
      {
        id: uuid(),
        name: 'FRANGELICO',
        price: '13',
      },
      {
        id: uuid(),
        name: 'ST-GERMAIN',
        price: '13',
      },
      {
        id: uuid(),
        name: 'PASSOA',
        price: '12',
      },
      {
        id: uuid(),
        name: 'DRAMBUIE',
        price: '15',
      },
      {
        id: uuid(),
        name: 'ITALICUS',
        price: '13',
      },
    ],
  },
]

const beer = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'STELLA',
        price: '9',
      },
      {
        id: uuid(),
        name: 'GUINNESS',
        price: '9',
      },
      {
        id: uuid(),
        name: 'MODELO',
        price: '9',
      },
    ],
  },
]

const softDrink = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'MEXICAN COKE',
        price: '6',
      },
      {
        id: uuid(),
        name: 'SPRITE',
        price: '6',
      },
      {
        id: uuid(),
        name: 'FEVER-TREE PREMIUM CLASSIC TONIC WATER',
        price: '7',
      },
      {
        id: uuid(),
        name: 'FEVER-TREE GINGER BEER',
        price: '7',
      },
      {
        id: uuid(),
        name: 'WATER',
        price: '8',
      },
      {
        id: uuid(),
        name: 'MINERAL WATER',
        price: '8',
      },
    ],
  },
]

const sparklingWinebyglass = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'SANTA MARGHERITA PROSECCO BRUT',
        price: '13',
      },
      {
        id: uuid(),
        name: 'MOET CHANDON IMPERIAL',
        price: '24',
      },
      {
        id: uuid(),
        name: 'MOET CHANDON ROSE IMPERIAL',
        price: '27',
      },
      {
        id: uuid(),
        name: 'VEUVE CLICQUOT BRUT YELLOW LABEL',
        price: '25',
      },
    ],
  },
]

const whitewhinebyglass = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'CLOUDY BAY SAUVIGNON BLANC',
        price: '15',
      },
      {
        id: uuid(),
        name: 'MER SOLEIL SANTA LUCIA HIGHLANDS CHARDONAY',
        price: '12',
      },
      {
        id: uuid(),
        name: 'TARIRI WHITE DRY',
        price: '19',
      },
    ],
  },
]

const rosebyglass = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'WHISPERING ANGEL',
        price: '13',
      },
    ],
  },
]

const redwinebyglass = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'DAVIS BYNUM RUSSIAN RIVER PINOT NOIR',
        price: '17',
      },
      {
        id: uuid(),
        name: 'CAYMUS SUISUN WALKING FOOL RED BLAND',
        price: '16',
      },
      {
        id: uuid(),
        name: 'CHARLES KRUG NAPA VALLEY CABERNET',
        price: '19',
      },
      {
        id: uuid(),
        name: 'JOSEPH PHELPS CABERNET',
        price: '32',
      },
      {
        id: uuid(),
        name: 'TARIRI RED DRY',
        price: '19',
      },
    ],
  },
]

const sweetDesertWine = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'B&G FRANCE SAUTERNES',
        price: '13',
      },
    ],
  },
]

const coffee = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'ESPRESSO',
        price: '6',
      },
      {
        id: uuid(),
        name: 'DOUBLE ESPRESSO',
        price: '9',
      },
      {
        id: uuid(),
        name: 'ESPRESSO MACCHIATO',
        price: '7',
      },
      {
        id: uuid(),
        name: 'AMERICANO / ICED',
        price: '6',
      },
      {
        id: uuid(),
        name: 'CAPPUCCINO / ICED',
        price: '7',
      },
      {
        id: uuid(),
        name: 'LATTE / ICED',
        price: '8',
      },
      {
        id: uuid(),
        name: 'COFFEE GLACE',
        price: '11',
      },
    ],
  },
]

const tea = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'BLACK',
        price: '9',
      },
      {
        id: uuid(),
        name: 'GREEN',
        price: '9',
      },
      {
        id: uuid(),
        name: 'HERBAL',
        price: '9',
      },
    ],
  },
]

const icedTea = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'PEACH',
        price: '13',
      },
      {
        id: uuid(),
        name: 'BERRY',
        price: '13',
      },
      {
        id: uuid(),
        name: 'GREEN / SOUR APPLE',
        price: '13',
      },
      {
        id: uuid(),
        name: 'TROPICAL',
        price: '13',
      },
      {
        id: uuid(),
        name: 'CLASSIC BLACK',
        price: '12',
      },
    ],
  },
]

const freshSqueezed = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'ORANGE',
        price: '13',
      },
      {
        id: uuid(),
        name: 'GRAPEFRUIT',
        price: '13',
      },
      {
        id: uuid(),
        name: 'APPLE',
        price: '13',
      },
      {
        id: uuid(),
        name: 'CARROT',
        price: '13',
      },
      {
        id: uuid(),
        name: 'CANTALOUPE',
        price: '12',
      },
      {
        id: uuid(),
        name: 'WATERMELON / Basil',
        price: '13',
      },
      {
        id: uuid(),
        name: 'PINEAPPLE',
        price: '13',
      },
      {
        id: uuid(),
        name: 'KIWI / APPLE / BASIL',
        price: '12',
      },
      {
        id: uuid(),
        name: 'GINGER',
        price: '3',
      },
      {
        id: uuid(),
        name: 'CELERY',
        price: '3',
      },
    ],
  },
]

const cocktails = [
  {
    id: uuid(),
    drinkTitle: '',
    drink: [
      {
        id: uuid(),
        name: 'AILEN FROM NICARAGUA',
        description: 'FLOR DE CANA RUM, AVERNA AMARO, GIFFARD CACAO',
        price: '20',
      },
      {
        id: uuid(),
        name: 'PINK GARDEN',
        description: 'GIN, SOUR MIX, ROSE JAM, PINK GRAPEFRUIT TONIC',
        price: '21',
      },
      {
        id: uuid(),
        name: 'VESTALIA',
        description: 'WHISKEY, ST- GERMAIN, BANANE DU BRESIL, PINEAPPLE, APPLE,\n' +
            'SOUR MIX, VANILLA SYRUP, YELLOW CHARTREUS',
        price: '22',
      },
      {
        id: uuid(),
        name: 'MISSION TO THE FRANCE',
        description: 'COGNAC, DOM BENEDICTINE, APPLE JUICE, SOUR MIX, VANILLA SYRUP,\n' +
            'ANGOSTURA AROMATIC BITTERs, GINGER ALE',
        price: '20',
      },
      {
        id: uuid(),
        name: 'ANGEL MIA',
        description: 'VODKA, ITALICUS, SOUR MIX, WHITE PEACH SYRUP, COCONUT MILK,\n' +
            'STRAWBERRY JUICE',
        price: '21',
      },
      {
        id: uuid(),
        name: 'WHAT YOU WANT',
        description: 'TEQUILA, FRESH WATERMELON JUiCE, lychee LIQUEUR, SOUR MIX,\n' +
            'PEACH SYRUP, HOMEMADE PASSION FRUIT FOAM',
        price: '22',
      },
    ]
  },
]

const wineList = [
  {
    id: uuid(),
    drinkTitle: 'SPARKLING',
    drink: [
      {
        id: uuid(),
        name: 'Moet Chandon Imperial',
        price: '147',
      },
      {
        id: uuid(),
        name: 'Moet Chandon Rose Imperial',
        price: '172',
      },
      {
        id: uuid(),
        name: 'Veuve Clicquot Brut Yellow Label',
        price: '156',
      },
      {
        id: uuid(),
        name: 'Dom Perignon Champagne Brut',
        price: '710'
      }
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'white',
    drink: [
      {
        id: uuid(),
        name: 'Cloudy Bay Sauvignon Blanc',
        price: '58',
      },
      {
        id: uuid(),
        name: 'Jacques Dumont Sancerre Sauvignon Blanc 2022',
        price: '66',
      },
      {
        id: uuid(),
        name: 'Mer Soleil Santa Lucia Highlands Chardonnay 21',
        price: '51',
      },
      {
        id: uuid(),
        name: 'Louis Jadot Chassagne-Montrachet Blanc Chardonnay',
        price: '139',
      },
      {
        id: uuid(),
        name: 'Far Niente Napa Valley Chardonay 2021',
        price: '138',
      },
      {
        id: uuid(),
        name: 'Archery Summit Willamette Valley Vireton Pinot Gris',
        price: '52',
      },
      {
        id: uuid(),
        name: 'Pierre Sparr Alsace AOC Riesling',
        price: '49',
      },
      {
        id: uuid(),
        name: 'Torbreck Cuvee Juvenile Barossa Valley White Blend 2022',
        price: '62',
      },
      {
        id: uuid(),
        name: 'TARIRI DRY WHITE WINE',
        price: '62',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'rose',
    drink: [
      {
        id: uuid(),
        name: 'Gerard Bertrand Cotes De Roses Rose 22',
        price: '54',
      },
      {
        id: uuid(),
        name: 'Whispering Angel Rose',
        price: '55',
      },
      {
        id: uuid(),
        name: 'Commanderie De Peyrassol Cotes De Provence AOP',
        price: '58',
      },
    ],
  },
  {
    id: uuid(),
    drinkTitle: 'red',
    drink: [
      {
        id: uuid(),
        name: 'Davis Bynum Russian River Valley Pinot Noir 21',
        price: '59',
      },
      {
        id: uuid(),
        name: 'Louis Jadot Cote De Beaune Villages Pinot Noir 2020',
        price: '85',
      },
      {
        id: uuid(),
        name: 'Domaine Faiveley Gevrey-Chambertin Vieilles Vignes',
        price: '52',
      },
      {
        id: uuid(),
        name: 'Charles Krug Napa Valley Cabernet 20',
        price: '52',
      },
      {
        id: uuid(),
        name: 'Joseph Phelps Cabernet Sauvignon',
        price: '138',
      },
      {
        id: uuid(),
        name: 'Beaulieu Vineyard Napa Valley Cabernet Sauvignon 2019',
        price: '79',
      },
      {
        id: uuid(),
        name: 'Stags\' Leap Napa Valley Cabernet Sauvignon 2020',
        price: '95',
      },
      {
        id: uuid(),
        name: 'Caymus Vineyards Cabernet Sauvignon California 2021',
        price: '140',
      },
      {
        id: uuid(),
        name: 'Caymus Vineyards Cabernet Sauvignon napa 2021',
        price: '185',
      },
      {
        id: uuid(),
        name: 'Caymus Suisun Walking Fool Red Blend 2021',
        price: '69',
      },
      {
        id: uuid(),
        name: 'Chateau Kirwan Margaux Red Bordeaux Blend 2020',
        price: '128',
      },
      {
        id: uuid(),
        name: 'Sequentis by DAOU Paso Robles Reserve Merlot 2021',
        price: '58',
      },
      {
        id: uuid(),
        name: 'TARIRI RESERVE 2019 DRY RED',
        price: '190',
      },
      {
        id: uuid(),
        name: 'TARIRI DRY RED WINE',
        price: '82',
      },
    ],
  },
]

export const newdrinkMenu = [
  {
    id: uuid(),
    title: 'BURBON / AMERICAN RYE & WHISKEY',
    drinks: americanWhiskey,
  },
  {
    id: uuid(),
    title: 'INDIAN WHISKY',
    drinks: indianWhiskey,
  },
  {
    id: uuid(),
    title: 'Scotch',
    drinks: scotch,
  },
  {
    id: uuid(),
    title: 'Irish whiskey',
    drinks: irishWhiskey,
  },
  {
    id: uuid(),
    title: 'JAPANESE WHISKY',
    drinks: japanesewiskey,
  },
  {
    id: uuid(),
    title: 'TAIWANESE WHISKY',
    drinks: taiwaneseWhiskey,
  },
  {
    id: uuid(),
    title: 'TEQUILA',
    drinks: tequila
  },
  {
    id: uuid(),
    title: 'Mezcal',
    drinks: mezcal,
  },
  {
    id: uuid(),
    title: 'rum',
    drinks: rum,
  },
  {
    id: uuid(),
    title: 'brandy',
    drinks: brandy,
  },
  {
    id: uuid(),
    title: 'cognac',
    drinks: cognac,
  },
  {
    id: uuid(),
    title: 'gin',
    drinks: gin,
  },
  {
    id: uuid(),
    title: 'vodka',
    drinks: vodka,
  },
  {
    id: uuid(),
    title: 'liqueurs',
    drinks: liqueurs,
  },
  {
    id: uuid(),
    title: 'beer',
    drinks: beer,
  },
  {
    id: uuid(),
    title: 'soft Drink',
    drinks: softDrink,
  },
  {
    id: uuid(),
    title: 'sparkling Wine by glass',
    drinks: sparklingWinebyglass,
  },
  {
    id: uuid(),
    title: 'white whine by glass',
    drinks: whitewhinebyglass,
  },
  {
    id: uuid(),
    title: 'rose by glass',
    drinks: rosebyglass,
  },
  {
    id: uuid(),
    title: 'red wine by glass',
    drinks: redwinebyglass,
  },
  {
    id: uuid(),
    title: 'sweet Desert Wine',
    drinks: sweetDesertWine,
  },
  {
    id: uuid(),
    title: 'coffee',
    drinks: coffee,
  },
  {
    id: uuid(),
    title: 'tea',
    drinks: tea,
  },
  {
    id: uuid(),
    title: 'iced Tea',
    drinks: icedTea,
  },
  {
    id: uuid(),
    title: 'fresh Squeezed',
    drinks: freshSqueezed,
  },
  {
    id: uuid(),
    title: 'cocktails',
    drinks: cocktails,
  },
  {
    id: uuid(),
    title: 'wine list',
    drinks: wineList,
  },

];
