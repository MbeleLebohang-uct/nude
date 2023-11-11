const GEOGRAPHICAL_FACTORS_BY_PROVINCE = {
  gauteng: 1588/100000,
  kwazulu_natal: 959/100000,
  eastern_cape: 633/100000,
  mpumalanga: 522/100000,
  limpopo: 520/100000,
  western_cape: 437/100000,
  north_west: 318/100000,
  free_state: 224/100000,
  northern_cape: 80/100000,
  worldwide: 2833/100000
};

const USAGE_FACTORS = {
  personal: 0.4543885883,
  work: 0.4163442633	
};

const MIN_BASE_RATE = 2400;
const MAX_BASE_RATE = 5900;
const YEARLY_PREMIUM_DISCOUNT = 0.9427;

const BRAND_FACTORS = [
  {
    brand: 'Acer',
    brand_factor: 0.16984
  },
  {
    brand: 'Lenovo',
    brand_factor: 0.15605
  },
  {
    brand: 'ASUS',
    brand_factor: 0.11949
  },
  {
    brand: 'HP',
    brand_factor: 0.5531
  },
  {
    brand: 'Samsung',
    brand_factor: 0.3431
  },
  {
    brand: 'MSI',
    brand_factor: 0.3265
  },
  {
    brand: 'LG',
    brand_factor: 0.2584
  },
  {
    brand: 'Gigabyte',
    brand_factor: 0.1472
  },
  {
    brand: 'DELL',
    brand_factor: 0.1113
  },
  {
    brand: 'Toshiba',
    brand_factor: 0.1021
  },
  {
    brand: 'Philips',
    brand_factor: 0.987
  },
  {
    brand: 'Alienware',
    brand_factor: 0.842
  },
  {
    brand: 'Huawei',
    brand_factor: 0.842
  },
  {
    brand: 'NVIDIA',
    brand_factor: 0.833
  },
  {
    brand: 'Sony',
    brand_factor: 0.786
  },
  {
    brand: 'EVGA',
    brand_factor: 0.778
  },
  {
    brand: 'Sharp',
    brand_factor: 0.758
  },
  {
    brand: 'Panasonic',
    brand_factor: 0.686
  },
  {
    brand: 'Sapphire',
    brand_factor: 0.663
  },
  {
    brand: 'PowerColor',
    brand_factor: 0.656
  },
  {
    brand: 'Hisense',
    brand_factor: 0.620
  },
  {
    brand: 'TCL',
    brand_factor: 0.616
  },
  {
    brand: 'Inno3D',
    brand_factor: 0.606
  },
  {
    brand: 'Xiaomi',
    brand_factor: 0.604
  },
  {
    brand: 'HIS',
    brand_factor: 0.569
  },
  {
    brand: 'ZTE',
    brand_factor: 0.568
  },
  {
    brand: 'Oppo',
    brand_factor: 0.562
  },
  {
    brand: 'ATI',
    brand_factor: 0.558
  },
  {
    brand: 'Gainward',
    brand_factor: 0.555
  },
  {
    brand: 'Leadtek',
    brand_factor: 0.527
  },
  {
    brand: 'BBK',
    brand_factor: 0.502
  },
  {
    brand: 'Palit',
    brand_factor: 0.499
  },
  {
    brand: 'AOC',
    brand_factor: 0.494
  },
  {
    brand: 'Dynabook',
    brand_factor: 0.494
  },
  {
    brand: 'Xenon',
    brand_factor: 0.492
  },
  {
    brand: 'Colorful',
    brand_factor: 0.485
  },
  {
    brand: 'Motorola',
    brand_factor: 0.427
  },
  {
    brand: 'Club 3D',
    brand_factor: 0.397
  },
  {
    brand: 'HV',
    brand_factor: 0.393
  },
  {
    brand: 'Axle3D',
    brand_factor: 0.358
  },
  {
    brand: 'ZOTAC',
    brand_factor: 0.355
  },
  {
    brand: 'ELSA',
    brand_factor: 0.350
  },
  {
    brand: 'PNY',
    brand_factor: 0.334
  },
  {
    brand: 'Sparkle',
    brand_factor: 0.333
  },
  {
    brand: 'Nokia',
    brand_factor: 0.329
  },
  {
    brand: 'ViewSonic',
    brand_factor: 0.328
  },
  {
    brand: 'AMD',
    brand_factor: 0.315
  },
  {
    brand: 'XFX',
    brand_factor: 0.315
  },
  {
    brand: 'Fujitsu',
    brand_factor: 0.312
  },
  {
    brand: 'Grundig',
    brand_factor: 0.309
  },
  {
    brand: 'Point of View',
    brand_factor: 0.285
  },
  {
    brand: 'HTC',
    brand_factor: 0.277
  },
  {
    brand: 'Vizio',
    brand_factor: 0.268
  },
  {
    brand: 'VisionTek',
    brand_factor: 0.261
  },
  {
    brand: 'Iiyama',
    brand_factor: 0.234
  },
  {
    brand: 'BenQ',
    brand_factor: 0.231
  },
  {
    brand: 'Manli',
    brand_factor: 0.215
  },
  {
    brand: 'Galax',
    brand_factor: 0.214
  },
  {
    brand: 'MEDION',
    brand_factor: 0.196
  },
  {
    brand: 'AFOX',
    brand_factor: 0.195
  },
  {
    brand: 'Alcatel',
    brand_factor: 0.190
  },
  {
    brand: 'VTX3D',
    brand_factor: 0.180
  },
  {
    brand: 'Apple',
    brand_factor: 0.169
  },
  {
    brand: 'Kuroutoshikou',
    brand_factor: 0.158
  },
  {
    brand: 'Hitachi',
    brand_factor: 0.156
  },
  {
    brand: 'Coolpad',
    brand_factor: 0.143
  },
  {
    brand: 'Yeston',
    brand_factor: 0.142
  },
  {
    brand: 'Diamond Multimedia',
    brand_factor: 0.140
  },
  {
    brand: 'Galaxy',
    brand_factor: 0.139
  },
  {
    brand: 'bluechip',
    brand_factor: 0.134
  },
  {
    brand: 'PixelView',
    brand_factor: 0.126
  },
  {
    brand: 'Archos',
    brand_factor: 0.119
  },
  {
    brand: 'Lava',
    brand_factor: 0.119
  },
  {
    brand: 'Micromax',
    brand_factor: 0.117
  },
  {
    brand: 'Thomson',
    brand_factor: 0.116
  },
  {
    brand: 'AOpen',
    brand_factor: 0.114
  },
  {
    brand: 'NEC',
    brand_factor: 0.107
  },
  {
    brand: 'RIM',
    brand_factor: 0.107
  },
  {
    brand: 'Biostar',
    brand_factor: 0.104
  },
  {
    brand: 'KFA2',
    brand_factor: 0.100
  },
  {
    brand: 'Meizu',
    brand_factor: 0.100
  },
  {
    brand: 'GiONEE',
    brand_factor: 0.92
  },
  {
    brand: 'Hannspree',
    brand_factor: 0.88
  },
  {
    brand: 'Kyocera',
    brand_factor: 0.86
  },
  {
    brand: 'Sceptre',
    brand_factor: 0.84
  },
  {
    brand: 'Blu',
    brand_factor: 0.82
  },
  {
    brand: 'Wiko',
    brand_factor: 0.82
  },
  {
    brand: 'OnePlus',
    brand_factor: 0.80
  },
  {
    brand: 'ECS',
    brand_factor: 0.79
  },
  {
    brand: 'EIZO',
    brand_factor: 0.77
  },
  {
    brand: 'T-Mobile',
    brand_factor: 0.77
  },
  {
    brand: 'Allview',
    brand_factor: 0.73
  },
  {
    brand: 'Intex',
    brand_factor: 0.69
  },
  {
    brand: 'Dopod',
    brand_factor: 0.66
  },
  {
    brand: 'Intel',
    brand_factor: 0.66
  },
  {
    brand: 'Tecno Mobile',
    brand_factor: 0.61
  },
  {
    brand: 'Vodafone',
    brand_factor: 0.56
  },
  {
    brand: 'Doogee',
    brand_factor: 0.54
  },
  {
    brand: 'Blackview',
    brand_factor: 0.52
  },
  {
    brand: 'Sony Ericsson',
    brand_factor: 0.52
  },
  {
    brand: 'uleFone',
    brand_factor: 0.52
  },
  {
    brand: 'Haier',
    brand_factor: 0.51
  },
  {
    brand: 'Maxsun',
    brand_factor: 0.51
  },
  {
    brand: 'Cherry Mobile',
    brand_factor: 0.50
  },
  {
    brand: 'Orange',
    brand_factor: 0.50
  },
  {
    brand: 'ASRock',
    brand_factor: 0.49
  },
  {
    brand: 'InFocus',
    brand_factor: 0.49
  },
  {
    brand: 'Vestel',
    brand_factor: 0.49
  },
  {
    brand: 'Metz Blue',
    brand_factor: 0.47
  },
  {
    brand: 'Lantic',
    brand_factor: 0.46
  },
  {
    brand: 'NTT DoCoMo',
    brand_factor: 0.46
  },
  {
    brand: 'UMI',
    brand_factor: 0.46
  },
  {
    brand: 'Continental Edison',
    brand_factor: 0.45
  },
  {
    brand: 'O2',
    brand_factor: 0.45
  },
  {
    brand: 'Microsoft',
    brand_factor: 0.43
  },
  {
    brand: 'Skyworth',
    brand_factor: 0.42
  },
  {
    brand: 'Zopo',
    brand_factor: 0.39
  },
  {
    brand: 'Karbonn',
    brand_factor: 0.38
  },
  {
    brand: 'Loewe',
    brand_factor: 0.38
  },
  {
    brand: 'Prestigio',
    brand_factor: 0.38
  },
  {
    brand: 'Viotek',
    brand_factor: 0.38
  },
  {
    brand: 'Yashi',
    brand_factor: 0.38
  },
  {
    brand: 'SoftBank',
    brand_factor: 0.37
  },
  {
    brand: 'Google',
    brand_factor: 0.36
  },
  {
    brand: 'Hewlett-Packard',
    brand_factor: 0.36
  },
  {
    brand: 'JVC',
    brand_factor: 0.36
  },
  {
    brand: 'Infinix',
    brand_factor: 0.35
  },
  {
    brand: 'Pantech',
    brand_factor: 0.35
  },
  {
    brand: 'Cubot',
    brand_factor: 0.34
  },
  {
    brand: 'Elephone',
    brand_factor: 0.34
  },
  {
    brand: 'Pixio',
    brand_factor: 0.33
  },
  {
    brand: 'I-Mate',
    brand_factor: 0.32
  },
  {
    brand: 'Metz',
    brand_factor: 0.32
  },
  {
    brand: 'QiGi',
    brand_factor: 0.32
  },
  {
    brand: 'THL',
    brand_factor: 0.32
  },
  {
    brand: 'Insignia',
    brand_factor: 0.29
  },
  {
    brand: 'Oukitel',
    brand_factor: 0.29
  },
  {
    brand: 'Sugar',
    brand_factor: 0.29
  },
  {
    brand: 'Verizon',
    brand_factor: 0.29
  },
  {
    brand: 'Highscreen',
    brand_factor: 0.28
  },
  {
    brand: 'LeEco',
    brand_factor: 0.27
  },
  {
    brand: 'PiPO',
    brand_factor: 0.27
  },
  {
    brand: 'Cardex',
    brand_factor: 0.26
  },
  {
    brand: 'Amazon',
    brand_factor: 0.25
  },
  {
    brand: 'RoverPC',
    brand_factor: 0.25
  },
  {
    brand: 'HKC',
    brand_factor: 0.23
  },
  {
    brand: 'KDDI',
    brand_factor: 0.23
  },
  {
    brand: 'LEAGOO',
    brand_factor: 0.23
  },
  {
    brand: 'Qtek',
    brand_factor: 0.23
  },
  {
    brand: 'Sprint',
    brand_factor: 0.22
  },
  {
    brand: 'Telefunken',
    brand_factor: 0.22
  },
  {
    brand: 'i-mobile',
    brand_factor: 0.22
  },
  {
    brand: 'Konka',
    brand_factor: 0.20
  },
  {
    brand: 'Nevir',
    brand_factor: 0.20
  },
  {
    brand: 'Telstra',
    brand_factor: 0.20
  },
  {
    brand: 'Zalman',
    brand_factor: 0.19
  },
  {
    brand: 'BQ',
    brand_factor: 0.18
  },
  {
    brand: 'Freetel',
    brand_factor: 0.18
  },
  {
    brand: 'Palm',
    brand_factor: 0.18
  },
  {
    brand: 'iBall',
    brand_factor: 0.18
  },
  {
    brand: 'Caterpillar',
    brand_factor: 0.17
  },
  {
    brand: 'Cube',
    brand_factor: 0.17
  },
  {
    brand: 'MyPhone',
    brand_factor: 0.17
  },
  {
    brand: 'Terra',
    brand_factor: 0.17
  },
  {
    brand: 'VideoSeven',
    brand_factor: 0.17
  },
  {
    brand: 'Bluebird',
    brand_factor: 0.16
  },
  {
    brand: 'Noa',
    brand_factor: 0.16
  },
  {
    brand: 'Teclast',
    brand_factor: 0.16
  },
  {
    brand: 'Bluboo',
    brand_factor: 0.15
  },
  {
    brand: 'Fossil',
    brand_factor: 0.15
  },
  {
    brand: 'Jiayu',
    brand_factor: 0.15
  },
  {
    brand: 'Nixeus',
    brand_factor: 0.15
  },
  {
    brand: 'Eufy',
    brand_factor: 0.17
  },
  {
    brand: 'Smartisan',
    brand_factor: 0.15
  },
  {
    brand: 'Hyundai',
    brand_factor: 0.14
  },
  {
    brand: 'LYF',
    brand_factor: 0.14
  },
  {
    brand: 'TP-Link',
    brand_factor: 0.14
  },
  {
    brand: 'verykool',
    brand_factor: 0.14
  },
  {
    brand: 'Ainol',
    brand_factor: 0.13
  },
  {
    brand: 'Amoi',
    brand_factor: 0.13
  },
  {
    brand: 'Eken',
    brand_factor: 0.13
  },
  {
    brand: 'Meitu',
    brand_factor: 0.13
  },
  {
    brand: 'Uniscope',
    brand_factor: 0.13
  },
  {
    brand: 'Koobee',
    brand_factor: 0.12
  },
  {
    brand: 'Q-Mobile',
    brand_factor: 0.12
  },
  {
    brand: 'VKWorld',
    brand_factor: 0.12
  },
  {
    brand: 'AllCall',
    brand_factor: 0.11
  },
  {
    brand: 'Cooler Master',
    brand_factor: 0.11
  },
  {
    brand: 'Evolveo',
    brand_factor: 0.11
  },
  {
    brand: 'Mio',
    brand_factor: 0.11
  },
  {
    brand: 'RCA',
    brand_factor: 0.11
  },
  {
    brand: 'Spice',
    brand_factor: 0.11
  },
  {
    brand: 'Vertu',
    brand_factor: 0.11
  },
  {
    brand: 'Videocon',
    brand_factor: 0.11
  },
  {
    brand: 'Yarvik',
    brand_factor: 0.11
  },
  {
    brand: 'General Mobile',
    brand_factor: 0.10
  },
  {
    brand: 'Pioneer',
    brand_factor: 0.10
  },
  {
    brand: 'Starmobile',
    brand_factor: 0.10
  },
  {
    brand: 'Casio',
    brand_factor: 0.9
  },
  {
    brand: 'Edenwood',
    brand_factor: 0.9
  },
  {
    brand: 'Fly',
    brand_factor: 0.9
  },
  {
    brand: 'Gigaset',
    brand_factor: 0.9
  },
  {
    brand: 'NUU',
    brand_factor: 0.9
  },
  {
    brand: 'QNIX',
    brand_factor: 0.9
  },
  {
    brand: 'Siemens',
    brand_factor: 0.9
  },
  {
    brand: 'Yamada Denki',
    brand_factor: 0.9
  },
  {
    brand: 'AnyDATA',
    brand_factor: 0.8
  },
  {
    brand: 'China Mobile',
    brand_factor: 0.8
  },
  {
    brand: 'Gresso',
    brand_factor: 0.8
  },
  {
    brand: 'InnJoo',
    brand_factor: 0.8
  },
  {
    brand: 'KAZAM',
    brand_factor: 0.8
  },
  {
    brand: 'LeTV',
    brand_factor: 0.8
  },
  {
    brand: 'Media-Droid',
    brand_factor: 0.8
  },
  {
    brand: 'QiKU',
    brand_factor: 0.8
  },
  {
    brand: 'Vernee',
    brand_factor: 0.8
  },
  {
    brand: 'iNew',
    brand_factor: 0.8
  },
  {
    brand: 'Audiovox',
    brand_factor: 0.7
  },
  {
    brand: 'Datalogic Mobile',
    brand_factor: 0.7
  },
  {
    brand: 'Explay',
    brand_factor: 0.7
  },
  {
    brand: 'FirstOne',
    brand_factor: 0.7
  },
  {
    brand: 'Kogan',
    brand_factor: 0.7
  },
  {
    brand: 'Mobile Compia',
    brand_factor: 0.7
  },
  {
    brand: 'NGM',
    brand_factor: 0.7
  },
  {
    brand: 'Navon',
    brand_factor: 0.7
  },
  {
    brand: 'OK.',
    brand_factor: 0.7
  },
  {
    brand: 'Ozone',
    brand_factor: 0.7
  },
  {
    brand: 'Polaroid',
    brand_factor: 0.7
  },
  {
    brand: 'Psion Teklogix',
    brand_factor: 0.7
  },
  {
    brand: 'Quantum',
    brand_factor: 0.7
  },
  {
    brand: 'Tesla',
    brand_factor: 0.7
  },
  {
    brand: 'Walton',
    brand_factor: 0.7
  },
  {
    brand: 'WellcoM',
    brand_factor: 0.7
  },
  {
    brand: 'Axioo',
    brand_factor: 0.6
  },
  {
    brand: 'Creative Labs',
    brand_factor: 0.6
  },
  {
    brand: 'Energizer',
    brand_factor: 0.6
  },
  {
    brand: 'Fairphone',
    brand_factor: 0.6
  },
  {
    brand: 'JXD',
    brand_factor: 0.6
  },
  {
    brand: 'KTC',
    brand_factor: 0.6
  },
  {
    brand: 'M3Mobile',
    brand_factor: 0.6
  },
  {
    brand: 'Nomu',
    brand_factor: 0.6
  },
  {
    brand: 'O+',
    brand_factor: 0.6
  },
  {
    brand: 'Okwap',
    brand_factor: 0.6
  },
  {
    brand: 'Pebble',
    brand_factor: 0.6
  },
  {
    brand: 'Point of View / TGT',
    brand_factor: 0.6
  },
  {
    brand: 'Razer',
    brand_factor: 0.6
  },
  {
    brand: 'Reliance',
    brand_factor: 0.6
  },
  {
    brand: 'Smartfren',
    brand_factor: 0.6
  },
  {
    brand: 'Wasabi Mango',
    brand_factor: 0.6
  },
  {
    brand: 'ZUK',
    brand_factor: 0.6
  },
  {
    brand: 'Airis',
    brand_factor: 0.5
  },
  {
    brand: 'Bang & Olufsen',
    brand_factor: 0.5
  },
  {
    brand: 'Cingular',
    brand_factor: 0.5
  },
  {
    brand: 'Corsair',
    brand_factor: 0.5
  },
  {
    brand: 'Denver',
    brand_factor: 0.5
  },
  {
    brand: 'Doov',
    brand_factor: 0.5
  },
  {
    brand: 'Doro',
    brand_factor: 0.5
  },
  {
    brand: 'Emobile',
    brand_factor: 0.5
  },
  {
    brand: 'FIH',
    brand_factor: 0.5
  },
  {
    brand: 'Freelander',
    brand_factor: 0.5
  },
  {
    brand: 'GPLUS',
    brand_factor: 0.5
  },
  {
    brand: 'Garmin',
    brand_factor: 0.5
  },
  {
    brand: 'Goclever',
    brand_factor: 0.5
  },
  {
    brand: 'Gome',
    brand_factor: 0.5
  },
  {
    brand: 'HP Palm',
    brand_factor: 0.5
  },
  {
    brand: 'Honeywell',
    brand_factor: 0.5
  },
  {
    brand: 'LANIX',
    brand_factor: 0.5
  },
  {
    brand: 'Monoprice',
    brand_factor: 0.5
  },
  {
    brand: 'Multilaser',
    brand_factor: 0.5
  },
  {
    brand: 'Omate',
    brand_factor: 0.5
  },
  {
    brand: 'Qihoo 360',
    brand_factor: 0.5
  },
  {
    brand: 'Siswoo',
    brand_factor: 0.5
  },
  {
    brand: 'Stuart Hughes',
    brand_factor: 0.5
  },
  {
    brand: 'TMN',
    brand_factor: 0.5
  },
  {
    brand: 'TORQ',
    brand_factor: 0.5
  },
  {
    brand: 'WayteQ',
    brand_factor: 0.5
  },
  {
    brand: 'Zeblaze',
    brand_factor: 0.5
  },
  {
    brand: 'Zebra',
    brand_factor: 0.5
  },
  {
    brand: 'Ziss',
    brand_factor: 0.5
  },
  {
    brand: 'iOcean',
    brand_factor: 0.5
  },
  {
    brand: 'Advan',
    brand_factor: 0.4
  },
  {
    brand: 'Athesi',
    brand_factor: 0.4
  },
  {
    brand: 'BN',
    brand_factor: 0.4
  },
  {
    brand: 'BungBungame',
    brand_factor: 0.4
  },
  {
    brand: 'Casper',
    brand_factor: 0.4
  },
  {
    brand: 'Centric',
    brand_factor: 0.4
  },
  {
    brand: 'Cincinnati Bell',
    brand_factor: 0.4
  },
  {
    brand: 'ConCorde',
    brand_factor: 0.4
  },
  {
    brand: 'CyberBank',
    brand_factor: 0.4
  },
  {
    brand: 'Everex',
    brand_factor: 0.4
  },
  {
    brand: 'Four Mobile',
    brand_factor: 0.4
  },
  {
    brand: 'Funkertech',
    brand_factor: 0.4
  },
  {
    brand: 'GFive',
    brand_factor: 0.4
  },
  {
    brand: 'GeCube',
    brand_factor: 0.4
  },
  {
    brand: 'Infomark',
    brand_factor: 0.4
  },
  {
    brand: 'Itel',
    brand_factor: 0.4
  },
  {
    brand: 'Ivoomi',
    brand_factor: 0.4
  },
  {
    brand: 'Jolla',
    brand_factor: 0.4
  },
  {
    brand: 'Koolnee',
    brand_factor: 0.4
  },
  {
    brand: 'Krome',
    brand_factor: 0.4
  },
  {
    brand: 'M-Horse',
    brand_factor: 0.4
  },
  {
    brand: 'Maze',
    brand_factor: 0.4
  },
  {
    brand: 'MiTAC',
    brand_factor: 0.4
  },
  {
    brand: 'Michael Kors',
    brand_factor: 0.4
  },
  {
    brand: 'Mobvoi',
    brand_factor: 0.4
  },
  {
    brand: 'NVIDIA / ST',
    brand_factor: 0.4
  },
  {
    brand: 'NZXT',
    brand_factor: 0.4
  },
  {
    brand: 'Obi Worldphone',
    brand_factor: 0.4
  },
  {
    brand: 'Opticon',
    brand_factor: 0.4
  },
  {
    brand: 'QMobile',
    brand_factor: 0.4
  },
  {
    brand: 'Qualcomm',
    brand_factor: 0.4
  },
  {
    brand: 'Rogers',
    brand_factor: 0.4
  },
  {
    brand: 'Sico',
    brand_factor: 0.4
  },
  {
    brand: 'SmartQ',
    brand_factor: 0.4
  },
  {
    brand: 'Swipe',
    brand_factor: 0.4
  },
  {
    brand: 'TechFaith',
    brand_factor: 0.4
  },
  {
    brand: 'UBiQUiO',
    brand_factor: 0.4
  },
  {
    brand: 'Unihertz',
    brand_factor: 0.4
  },
  {
    brand: 'Vido',
    brand_factor: 0.4
  },
  {
    brand: 'iDO',
    brand_factor: 0.4
  },
  {
    brand: 'lephone',
    brand_factor: 0.4
  },
  {
    brand: 'AXLE',
    brand_factor: 0.3
  },
  {
    brand: 'Akortek',
    brand_factor: 0.3
  },
  {
    brand: 'Akua Mobile',
    brand_factor: 0.3
  },
  {
    brand: 'Alcor',
    brand_factor: 0.3
  },
  {
    brand: 'AnexTEK',
    brand_factor: 0.3
  },
  {
    brand: 'Arima',
    brand_factor: 0.3
  },
  {
    brand: 'Colors Mobile',
    brand_factor: 0.3
  },
  {
    brand: 'Coship',
    brand_factor: 0.3
  },
  {
    brand: 'Covia',
    brand_factor: 0.3
  },
  {
    brand: 'Daxian',
    brand_factor: 0.3
  },
  {
    brand: 'FIC',
    brand_factor: 0.3
  },
  {
    brand: 'Faea',
    brand_factor: 0.3
  },
  {
    brand: 'FarEasTone',
    brand_factor: 0.3
  },
  {
    brand: 'Fourier',
    brand_factor: 0.3
  },
  {
    brand: 'Hercules',
    brand_factor: 0.3
  },
  {
    brand: 'ICD',
    brand_factor: 0.3
  },
  {
    brand: 'Intermec',
    brand_factor: 0.3
  },
  {
    brand: 'Jivi',
    brand_factor: 0.3
  },
  {
    brand: 'Lumigon',
    brand_factor: 0.3
  },
  {
    brand: 'Luna',
    brand_factor: 0.3
  },
  {
    brand: 'Macoox',
    brand_factor: 0.3
  },
  {
    brand: 'Mouse Computer',
    brand_factor: 0.3
  },
  {
    brand: 'Newman',
    brand_factor: 0.3
  },
  {
    brand: 'ORSiO',
    brand_factor: 0.3
  },
  {
    brand: 'Onda',
    brand_factor: 0.3
  },
  {
    brand: 'One Five',
    brand_factor: 0.3
  },
  {
    brand: 'Onkyo',
    brand_factor: 0.3
  },
  {
    brand: 'Optimus',
    brand_factor: 0.3
  },
  {
    brand: 'Overmax',
    brand_factor: 0.3
  },
  {
    brand: 'Planet Computers',
    brand_factor: 0.3
  },
  {
    brand: 'Plum Mobile',
    brand_factor: 0.3
  },
  {
    brand: 'Polytron',
    brand_factor: 0.3
  },
  {
    brand: 'Positivo',
    brand_factor: 0.3
  },
  {
    brand: 'Qool',
    brand_factor: 0.3
  },
  {
    brand: 'Ramos',
    brand_factor: 0.3
  },
  {
    brand: 'Ringing Bells',
    brand_factor: 0.3
  },
  {
    brand: 'STB',
    brand_factor: 0.3
  },
  {
    brand: 'Safako',
    brand_factor: 0.3
  },
  {
    brand: 'Sencor',
    brand_factor: 0.3
  },
  {
    brand: 'Sonim',
    brand_factor: 0.3
  },
  {
    brand: 'TAG Heuer',
    brand_factor: 0.3
  },
  {
    brand: 'Tonino Lamborghini',
    brand_factor: 0.3
  },
  {
    brand: 'Typhoon',
    brand_factor: 0.3
  },
  {
    brand: 'Umeox',
    brand_factor: 0.3
  },
  {
    brand: 'Unitech',
    brand_factor: 0.3
  },
  {
    brand: 'VAIO',
    brand_factor: 0.3
  },
  {
    brand: 'Yezz',
    brand_factor: 0.3
  },
  {
    brand: 'Yota',
    brand_factor: 0.3
  },
  {
    brand: 'Ziox',
    brand_factor: 0.3
  },
  {
    brand: 'i-teq',
    brand_factor: 0.3
  },
  {
    brand: 'ARP Mobile',
    brand_factor: 0.2
  },
  {
    brand: 'Abocom',
    brand_factor: 0.2
  },
  {
    brand: 'Axia',
    brand_factor: 0.2
  },
  {
    brand: 'Bkav',
    brand_factor: 0.2
  },
  {
    brand: 'Bush Mobile',
    brand_factor: 0.2
  },
  {
    brand: 'CipherLab',
    brand_factor: 0.2
  },
  {
    brand: 'Colorovo',
    brand_factor: 0.2
  },
  {
    brand: 'Connect3D',
    brand_factor: 0.2
  },
  {
    brand: 'Creative',
    brand_factor: 0.2
  },
  {
    brand: 'Dallab',
    brand_factor: 0.2
  },
  {
    brand: 'DataWind',
    brand_factor: 0.2
  },
  {
    brand: 'Diesel',
    brand_factor: 0.2
  },
  {
    brand: 'Disney Mobile',
    brand_factor: 0.2
  },
  {
    brand: 'E-TEN',
    brand_factor: 0.2
  },
  {
    brand: 'Ericsson',
    brand_factor: 0.2
  },
  {
    brand: 'Eve',
    brand_factor: 0.2
  },
  {
    brand: 'Evolve',
    brand_factor: 0.2
  },
  {
    brand: 'FPT',
    brand_factor: 0.2
  },
  {
    brand: 'Firefly Mobile',
    brand_factor: 0.2
  },
  {
    brand: 'Gamemax',
    brand_factor: 0.2
  },
  {
    brand: 'Gaoxinqi',
    brand_factor: 0.2
  },
  {
    brand: 'Garmin-Asus',
    brand_factor: 0.2
  },
  {
    brand: 'Geeksphone',
    brand_factor: 0.2
  },
  {
    brand: 'GlocalMe',
    brand_factor: 0.2
  },
  {
    brand: 'Goophone',
    brand_factor: 0.2
  },
  {
    brand: 'Handspring',
    brand_factor: 0.2
  },
  {
    brand: 'Hanmac',
    brand_factor: 0.2
  },
  {
    brand: 'Iconbit',
    brand_factor: 0.2
  },
  {
    brand: 'Ikimobile',
    brand_factor: 0.2
  },
  {
    brand: 'Jinga',
    brand_factor: 0.2
  },
  {
    brand: 'K-Touch',
    brand_factor: 0.2
  },
  {
    brand: 'KT',
    brand_factor: 0.2
  },
  {
    brand: 'Kaan',
    brand_factor: 0.2
  },
  {
    brand: 'Kobo',
    brand_factor: 0.2
  },
  {
    brand: 'Kodak',
    brand_factor: 0.2
  },
  {
    brand: 'Konrow',
    brand_factor: 0.2
  },
  {
    brand: 'Linshof',
    brand_factor: 0.2
  },
  {
    brand: 'MAG',
    brand_factor: 0.2
  },
  {
    brand: 'MWg',
    brand_factor: 0.2
  },
  {
    brand: 'Maxwest',
    brand_factor: 0.2
  },
  {
    brand: 'Mercury',
    brand_factor: 0.2
  },
  {
    brand: 'Mobiistar',
    brand_factor: 0.2
  },
  {
    brand: 'Montblanc',
    brand_factor: 0.2
  },
  {
    brand: 'NDrive',
    brand_factor: 0.2
  },
  {
    brand: 'Neo',
    brand_factor: 0.2
  },
  {
    brand: 'Neonode',
    brand_factor: 0.2
  },
  {
    brand: 'Nextway',
    brand_factor: 0.2
  },
  {
    brand: 'Nothing',
    brand_factor: 0.2
  },
  {
    brand: 'Notion Ink',
    brand_factor: 0.2
  },
  {
    brand: 'Nubia',
    brand_factor: 0.2
  },
  {
    brand: 'Olivetti',
    brand_factor: 0.2
  },
  {
    brand: 'PPTV',
    brand_factor: 0.2
  },
  {
    brand: 'PalmOne',
    brand_factor: 0.2
  },
  {
    brand: 'Pepsi',
    brand_factor: 0.2
  },
  {
    brand: 'Pharos',
    brand_factor: 0.2
  },
  {
    brand: 'Pixelphone',
    brand_factor: 0.2
  },
  {
    brand: 'Poptel',
    brand_factor: 0.2
  },
  {
    brand: 'Realme',
    brand_factor: 0.2
  },
  {
    brand: 'Red Bull Mobile',
    brand_factor: 0.2
  },
  {
    brand: 'SFR',
    brand_factor: 0.2
  },
  {
    brand: 'STK',
    brand_factor: 0.2
  },
  {
    brand: 'Sagem',
    brand_factor: 0.2
  },
  {
    brand: 'Sendo',
    brand_factor: 0.2
  },
  {
    brand: 'Silent Circle',
    brand_factor: 0.2
  },
  {
    brand: 'Snail',
    brand_factor: 0.2
  },
  {
    brand: 'Sunno',
    brand_factor: 0.2
  },
  {
    brand: 'Symbol',
    brand_factor: 0.2
  },
  {
    brand: 'Tatung',
    brand_factor: 0.2
  },
  {
    brand: 'TrueSmart',
    brand_factor: 0.2
  },
  {
    brand: 'UTStarcom',
    brand_factor: 0.2
  },
  {
    brand: 'Uhans',
    brand_factor: 0.2
  },
  {
    brand: 'Vector',
    brand_factor: 0.2
  },
  {
    brand: 'Viliv',
    brand_factor: 0.2
  },
  {
    brand: 'VinSmart',
    brand_factor: 0.2
  },
  {
    brand: 'Willcom',
    brand_factor: 0.2
  },
  {
    brand: 'Xplore',
    brand_factor: 0.2
  },
  {
    brand: 'Yatay',
    brand_factor: 0.2
  },
  {
    brand: 'iMI',
    brand_factor: 0.2
  },
  {
    brand: 'iNO Mobile',
    brand_factor: 0.2
  },
  {
    brand: 'izenMobile',
    brand_factor: 0.2
  },
  {
    brand: '3D Power',
    brand_factor: 0.1
  },
  {
    brand: 'Abit',
    brand_factor: 0.1
  },
  {
    brand: 'Acorn',
    brand_factor: 0.1
  },
  {
    brand: 'AdvanceTC',
    brand_factor: 0.1
  },
  {
    brand: 'Airo',
    brand_factor: 0.1
  },
  {
    brand: 'Akai',
    brand_factor: 0.1
  },
  {
    brand: 'Altek',
    brand_factor: 0.1
  },
  {
    brand: 'Appian',
    brand_factor: 0.1
  },
  {
    brand: 'Ascent',
    brand_factor: 0.1
  },
  {
    brand: 'Azumi Mobile',
    brand_factor: 0.1
  },
  {
    brand: 'BFG',
    brand_factor: 0.1
  },
  {
    brand: 'BOE',
    brand_factor: 0.1
  },
  {
    brand: 'Babiken',
    brand_factor: 0.1
  },
  {
    brand: 'BenQ-Siemens',
    brand_factor: 0.1
  },
  {
    brand: 'Billion',
    brand_factor: 0.1
  },
  {
    brand: 'Blaupunkt',
    brand_factor: 0.1
  },
  {
    brand: 'Boeing',
    brand_factor: 0.1
  },
  {
    brand: 'Boss',
    brand_factor: 0.1
  },
  {
    brand: 'Bsquare',
    brand_factor: 0.1
  },
  {
    brand: 'Camangi',
    brand_factor: 0.1
  },
  {
    brand: 'Celkon',
    brand_factor: 0.1
  },
  {
    brand: 'Changjiang',
    brand_factor: 0.1
  },
  {
    brand: 'Commodore',
    brand_factor: 0.1
  },
  {
    brand: 'Commtiva',
    brand_factor: 0.1
  },
  {
    brand: 'Compaq OEM',
    brand_factor: 0.1
  },
  {
    brand: 'CompuLab',
    brand_factor: 0.1
  },
  {
    brand: 'Condor',
    brand_factor: 0.1
  },
  {
    brand: 'Coxion',
    brand_factor: 0.1
  },
  {
    brand: 'Creo',
    brand_factor: 0.1
  },
  {
    brand: 'DAP',
    brand_factor: 0.1
  },
  {
    brand: 'Datang',
    brand_factor: 0.1
  },
  {
    brand: 'Dell OEM',
    brand_factor: 0.1
  },
  {
    brand: 'Diginnos Mobile',
    brand_factor: 0.1
  },
  {
    brand: 'Dough',
    brand_factor: 0.1
  },
  {
    brand: 'EinsUndEins',
    brand_factor: 0.1
  },
  {
    brand: 'Emporio Armani',
    brand_factor: 0.1
  },
  {
    brand: 'Essential',
    brand_factor: 0.1
  },
  {
    brand: 'Exper',
    brand_factor: 0.1
  },
  {
    brand: 'Figgers',
    brand_factor: 0.1
  },
  {
    brand: 'Forsa',
    brand_factor: 0.1
  },
  {
    brand: 'Fujitsu-Siemens',
    brand_factor: 0.1
  },
  {
    brand: 'Fxtec',
    brand_factor: 0.1
  },
  {
    brand: 'GrunMobile',
    brand_factor: 0.1
  },
  {
    brand: 'HAUS',
    brand_factor: 0.1
  },
  {
    brand: 'HOTT',
    brand_factor: 0.1
  },
  {
    brand: 'HP / Compaq',
    brand_factor: 0.1
  },
  {
    brand: 'Hivision',
    brand_factor: 0.1
  },
  {
    brand: 'Honor',
    brand_factor: 0.1
  },
  {
    brand: 'INQ',
    brand_factor: 0.1
  },
  {
    brand: 'Innos',
    brand_factor: 0.1
  },
  {
    brand: 'Interpad',
    brand_factor: 0.1
  },
  {
    brand: 'Inventec',
    brand_factor: 0.1
  },
  {
    brand: 'JoinTech',
    brand_factor: 0.1
  },
  {
    brand: 'Joinhand',
    brand_factor: 0.1
  },
  {
    brand: 'KNC',
    brand_factor: 0.1
  },
  {
    brand: 'Kate Spade',
    brand_factor: 0.1
  },
  {
    brand: 'Keecoo',
    brand_factor: 0.1
  },
  {
    brand: 'Kult',
    brand_factor: 0.1
  },
  {
    brand: 'Land Rover',
    brand_factor: 0.1
  },
  {
    brand: 'Leway',
    brand_factor: 0.1
  },
  {
    brand: 'Lobster',
    brand_factor: 0.1
  },
  {
    brand: 'Louis Vuitton',
    brand_factor: 0.1
  },
  {
    brand: 'Marshall',
    brand_factor: 0.1
  },
  {
    brand: 'Misfit',
    brand_factor: 0.1
  },
  {
    brand: 'Mobinnova',
    brand_factor: 0.1
  },
  {
    brand: 'Mogu',
    brand_factor: 0.1
  },
  {
    brand: 'Movado',
    brand_factor: 0.1
  },
  {
    brand: 'Neptune',
    brand_factor: 0.1
  },
  {
    brand: 'New Balance',
    brand_factor: 0.1
  },
  {
    brand: 'OKWU',
    brand_factor: 0.1
  },
  {
    brand: 'Optima',
    brand_factor: 0.1
  },
  {
    brand: 'Oregon Scientific',
    brand_factor: 0.1
  },
  {
    brand: 'Owen',
    brand_factor: 0.1
  },
  {
    brand: 'Pine',
    brand_factor: 0.1
  },
  {
    brand: 'Polar',
    brand_factor: 0.1
  },
  {
    brand: 'PowerMagic',
    brand_factor: 0.1
  },
  {
    brand: 'Protruly',
    brand_factor: 0.1
  },
  {
    brand: 'RED',
    brand_factor: 0.1
  },
  {
    brand: 'Redmi',
    brand_factor: 0.1
  },
  {
    brand: 'Royole',
    brand_factor: 0.1
  },
  {
    brand: 'Sanyo',
    brand_factor: 0.1
  },
  {
    brand: 'Saygus',
    brand_factor: 0.1
  },
  {
    brand: 'Sharper Image',
    brand_factor: 0.1
  },
  {
    brand: 'Sierra Wireless',
    brand_factor: 0.1
  },
  {
    brand: 'Silicon-i',
    brand_factor: 0.1
  },
  {
    brand: 'Simvalley Mobile',
    brand_factor: 0.1
  },
  {
    brand: 'Sitronics',
    brand_factor: 0.1
  },
  {
    brand: 'Soulycin',
    brand_factor: 0.1
  },
  {
    brand: 'Swisscom',
    brand_factor: 0.1
  },
  {
    brand: 'Telekom',
    brand_factor: 0.1
  },
  {
    brand: 'Tencent',
    brand_factor: 0.1
  },
  {
    brand: 'Tesco',
    brand_factor: 0.1
  },
  {
    brand: 'The Medical Phone',
    brand_factor: 0.1
  },
  {
    brand: 'Thuraya',
    brand_factor: 0.1
  },
  {
    brand: 'Trinity',
    brand_factor: 0.1
  },
  {
    brand: 'Trium',
    brand_factor: 0.1
  },
  {
    brand: 'Turing',
    brand_factor: 0.1
  },
  {
    brand: 'UPQ',
    brand_factor: 0.1
  },
  {
    brand: 'Ubik',
    brand_factor: 0.1
  },
  {
    brand: 'VCHOK',
    brand_factor: 0.1
  },
  {
    brand: 'Verzio',
    brand_factor: 0.1
  },
  {
    brand: 'Vitsmo',
    brand_factor: 0.1
  },
  {
    brand: 'Wanxin',
    brand_factor: 0.1
  },
  {
    brand: 'Wileyfox',
    brand_factor: 0.1
  },
  {
    brand: 'Yangtze',
    brand_factor: 0.1
  },
  {
    brand: 'Zenum',
    brand_factor: 0.1
  },
  {
    brand: 'ZyXel',
    brand_factor: 0.1
  },
  {
    brand: 'enTourage',
    brand_factor: 0.1
  },
]

const OTHER_BRAND = {
  brand: 'Other',
  brand_factor: 0.7431
}

const DEVICES = [
  {
    product: {
      id: '63e960cf28a94f6e179fb297',
      brand: 'Sony',
      model: 'Sony SmartWatch 2',
      version: 'SW2',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb296',
      brand: 'Samsung',
      model: 'Samsung Gear Fit',
      version: 'SM-R350',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb295',
      brand: 'Samsung',
      model: 'Samsung Gear 2 Neo',
      version: 'SM-R381',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb294',
      brand: 'Samsung',
      model: 'Samsung Gear 2',
      version: 'SM-R380',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb293',
      brand: 'LG',
      model: 'LG G Watch',
      version: 'W100',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb292',
      brand: 'Samsung',
      model: 'Samsung Gear Live',
      version: 'SM-R382',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb291',
      brand: 'Omate',
      model: 'Omate X',
      version: null,
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb290',
      brand: 'Motorola',
      model: 'Motorola Moto 360',
      version: null,
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb28f',
      brand: 'Sony',
      model: 'Sony SmartWatch 3',
      version: 'SWR50',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb28e',
      brand: 'Asus',
      model: 'Asus ZenWatch',
      version: 'WI500Q',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb28d',
      brand: 'LG',
      model: 'LG G Watch R',
      version: 'W110',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb28c',
      brand: 'Pebble',
      model: 'Pebble Watch Steel',
      version: '401S / 401SS',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb28b',
      brand: 'Pebble',
      model: 'Pebble Watch',
      version: '301',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb28a',
      brand: 'LG',
      model: 'LG Audi G Watch',
      version: 'W120L',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb289',
      brand: 'Alcatel',
      model: 'Alcatel OneTouch Watch',
      version: null,
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb287',
      brand: 'Pebble',
      model: 'Pebble Time 501',
      version: null,
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb286',
      brand: 'LG',
      model: 'LG Watch Urbane LTE',
      version: 'W120L',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb285',
      brand: 'Pebble',
      model: 'Pebble Time Steel',
      version: null,
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb284',
      brand: 'Huawei',
      model: 'Huawei Watch W1 42mm',
      version: null,
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb283',
      brand: 'Apple',
      model: 'Apple Watch 42mm',
      version: 'A1554',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb282',
      brand: 'LG',
      model: 'LG Watch Urbane',
      version: 'W150',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb281',
      brand: 'Apple',
      model: 'Apple Watch Sport 42mm',
      version: 'A1554',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb280',
      brand: 'Apple',
      model: 'Apple Watch Edition 38mm',
      version: 'A1553',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '63e960cf28a94f6e179fb27f',
      brand: 'Apple',
      model: 'Apple Watch Sport 38mm',
      version: 'A1553',
      category: 'Smartwatches'
    }
  },
  {
    product: {
      id: '654cbc234396cdca0cdc090a',
      brand: 'Meizu',
      model: 'Meizu 20 Pro 5G Premium Edition',
      version: 'M391Q',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '654cbc234396cdca0cdc0908',
      brand: 'Meizu',
      model: 'Meizu 20 Pro 5G',
      version: 'M391Q',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '654cbc234396cdca0cdc0905',
      brand: 'Meizu',
      model: 'Meizu 20 Infinity 5G',
      version: 'M392Q',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '654cbc234396cdca0cdc0903',
      brand: 'Meizu',
      model: 'Meizu 20 Infinity 5G Premium Edition',
      version: 'M392Q',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '654cbc234396cdca0cdc0902',
      brand: 'Oppo',
      model: 'Oppo Realme 10T 5G (2023)',
      version: 'RMX3612',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '654cbc234396cdca0cdc0901',
      brand: 'Oppo',
      model: 'Oppo Realme 10T 5G (2023) Premium Edition',
      version: 'RMX3612',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '654cbc234396cdca0cdc0900',
      brand: 'Xiaomi',
      model: 'Xiaomi Mi 13 Ultra 5G Premium Edition',
      version: '2304FPN6DC',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '654cbc234396cdca0cdc08fd',
      brand: 'Meizu',
      model: 'Meizu 20 5G Classic',
      version: 'M381Q',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '654cbc234396cdca0cdc08fb',
      brand: 'Meizu',
      model: 'Meizu 20 5G',
      version: 'M381Q',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '6538e7aa070854d4789c24dd',
      brand: 'Asus',
      model: 'Asus ZenFone Go TV',
      version: 'ZB551KL',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '65380c1ad239362007452244',
      brand: 'Google',
      model: 'Google Pixel 8 Pro',
      version: 'GC3VE',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '65380aa9d239362007452242',
      brand: 'Google',
      model: 'Google Pixel 8',
      version: 'GKWS6',
      category: 'Smartphones'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec825',
      brand: 'HOTT',
      model: 'HOTT MD700',
      version: 'MD700',
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec824',
      brand: 'FirstOne',
      model: 'FirstOne P5w',
      version: null,
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec823',
      brand: 'Forsa',
      model: 'Forsa Posh.Pad',
      version: null,
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec821',
      brand: 'FirstOne',
      model: 'FirstOne P7b',
      version: null,
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec820',
      brand: 'FirstOne',
      model: 'FirstOne P7g',
      version: null,
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec81f',
      brand: 'FirstOne',
      model: 'FirstOne P7w',
      version: null,
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec81e',
      brand: 'Toshiba',
      model: 'Toshiba FOLIO 100',
      version: 'FOLIO 100',
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec81d',
      brand: 'Archos',
      model: 'Archos 101 G8 Internet Tablet',
      version: null,
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec81c',
      brand: 'Archos',
      model: 'Archos 70 Internet Tablet',
      version: null,
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec819',
      brand: 'Interpad',
      model: 'Interpad 10 Home Edition',
      version: null,
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec818',
      brand: 'Sharp',
      model: 'Sharp Galapagos 10.8-inch Media Tablet',
      version: 'EB-WX1GJ-B',
      category: 'Tablets'
    }
  },
  {
    product: {
      id: '63e961ac53a85104648ec817',
      brand: 'RIM',
      model: 'RIM BlackBerry PlayBook',
      version: null,
      category: 'Tablets'
    }
  }
]

const OTHER_DEVICE = {
  product: {
    id: '654e101c3bdd772014bcfb19'
  }
};

const BRANDS = [
  ...BRAND_FACTORS.map((item) => item.brand),
  'Other'
];
const MODELS = [
  ...(DEVICES.map((item) => item.product.model)), 
  'Other'
];
