const d = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 3.9, count: 120 }
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    rating: { rate: 2.1, count: 430 }
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 4.6, count: 400 }
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 3.9, count: 70 }
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 3, count: 400 }
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    rating: { rate: 1.9, count: 100 }
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    rating: { rate: 3.3, count: 203 }
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    rating: { rate: 2.9, count: 470 }
  },
  {
    id: 11,
    title:
      'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description:
      '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    rating: { rate: 4.8, count: 319 }
  },
  {
    id: 12,
    title:
      'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    rating: { rate: 4.8, count: 400 }
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    description:
      '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    rating: { rate: 2.9, count: 250 }
  },
  {
    id: 14,
    title:
      'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
    price: 999.99,
    description:
      '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    rating: { rate: 2.2, count: 140 }
  },

  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
    rating: { rate: 2.9, count: 340 }
  },
  {
    id: 17,
    title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
    rating: { rate: 3.8, count: 679 }
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    rating: { rate: 4.7, count: 130 }
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    rating: { rate: 4.5, count: 146 }
  },
  {
    id: 20,
    title: 'DANVOUY Womens T Shirt Casual Cotton Short',
    price: 12.99,
    description:
      '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
    category: "women's clothing",
    image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    rating: { rate: 3.6, count: 145 }
  },
  {
    id: 21,
    title: 'Peach Crop Top',
    price: 19.99,
    category: "women's clothing",
    description:
      'This amazing top is made from recycled material and designed with the perfect cropped fit. The functional fabric is sweat-wicking, quick-drying, and has a super soft, brushed surface. It comes with a comfy inner bra designed with removable cups. The classic racerback design optimizes your mobility and gives you total freedom to move.',
    image:
      'https://imgproxy.strongerlabel.com/preset:sharp/rs:fit:1250/g:nowe/q:70/aHR0cHM6Ly9zdHJvbmdlci5jZW50cmFjZG4ubmV0L2NsaWVudC9keW5hbWljL2ltYWdlcy84NzVfNTJhMGI3ZjMwNC0xMDQxXzk5OTktNS1vcmlnaW5hbC5qcGc=',
    rating: { rate: 4.5, count: 100 }
  },
  {
    id: 22,
    title: 'High-Rise Skinny Jeans',
    price: 59.99,
    category: "women's clothing",
    description: 'A flattering and comfortable pair of high-rise skinny jeans',
    image:
      'https://media.boohoo.com/i/boohoo/dzz06284_mid%20blue_xl/womens-mid%20blue-super-high-waist-power-stretch-skinny-jeans/?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit',
    rating: { rate: 4.2, count: 50 }
  },
  {
    id: 23,
    title: 'Printed Midi Dress',
    price: 79.99,
    category: "women's clothing",
    description: 'A stylish and feminine printed midi dress',
    image:
      'https://www.forevernew.co.in/media/catalog/product/cache/0f1e57fb43dd9eae693800499a6afb18/o/l/oldimlall_onbody_27218903_f_ladjuqbl8u3dqhhy.jpg',
    rating: { rate: 4.8, count: 200 }
  },
  {
    id: 24,
    title: 'Cozy Knit Sweater',
    price: 39.99,
    category: "women's clothing",
    description: 'A warm and cozy knit sweater for cooler weather',
    image:
      'https://media1.popsugar-assets.com/files/thumbor/FkcjN6Pa4WgPbOCeI6i8QAitHkE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/04/05/650/n/1922564/8a1aa15e5ac634992391f5.19153333_0096_08260083_0005_a062/i/Express-Cozy-Knit-Sweater.jpeg',
    rating: { rate: 4.1, count: 40 }
  },
  {
    id: 25,
    title: 'Flowy Maxi Skirt',
    price: 49.99,
    category: "women's clothing",
    description: 'A comfortable and flowy maxi skirt for summer',
    image:
      'https://i.etsystatic.com/9392709/r/il/63c352/3103026614/il_fullxfull.3103026614_1oy4.jpg',
    rating: { rate: 4.3, count: 90 }
  },
  {
    id: 26,
    title: 'Sleeveless Shift Dress',
    price: 69.99,
    category: "women's clothing",
    description: 'A chic and comfortable sleeveless shift dress',
    image: 'https://cdn.pomelofashion.com/img/p/4/4/9/7/7/0/449770.jpg',
    rating: { rate: 4.7, count: 120 }
  },
  {
    id: 27,
    title: 'Cropped Sweater',
    price: 29.99,
    category: "women's clothing",
    description: 'A cute and stylish cropped sweater for layering',
    image:
      'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwb59e7494/2_side_750/00450375-04.jpg?sw=1000&sh=1500',
    rating: { rate: 4.2, count: 60 }
  },
  {
    id: 28,
    title: 'Floral Print Blouse',
    price: 49.99,
    category: "women's clothing",
    description: 'A feminine and colorful floral print blouse',
    image:
      'https://cdn11.bigcommerce.com/s-vspt61dziw/images/stencil/1280x1280/products/389/4180/TheFold_Rosaville_Blouse_Bright_Green_And_Rose_Pink_Ikat_Floral_Print_Silk_Satin_DB253_2209_1_v2__28177.1667347304.jpg?c=1',
    rating: { rate: 4.5, count: 90 }
  },
  {
    id: 29,
    title: 'Midi Skater Skirt',
    price: 39.99,
    category: "women's clothing",
    description: 'A fun and flirty midi skater skirt',
    image:
      'https://fiver.media/images/mu/2016/12/15/mesh-midi-skater-skirt-47371-4.jpg',
    rating: { rate: 4.4, count: 80 }
  },
  {
    id: 30,
    title: 'Wide Leg Pants',
    price: 59.99,
    category: "women's clothing",
    description: 'A comfortable and stylish pair of wide leg pants',
    image:
      'https://cdn.outfitbook.fr/27843-thickbox_default/wide-leg-pants-in-beige.jpg',
    rating: { rate: 4.3, count: 70 }
  },
  {
    id: 31,
    title: 'Knit Cardigan',
    price: 44.99,
    category: "women's clothing",
    description: 'A cozy and versatile knit cardigan for layering',
    image:
      'https://cdn.shopify.com/s/files/1/0054/7284/5888/products/d_740x.jpg?v=1665064029',
    rating: { rate: 4.1, count: 50 }
  },
  {
    id: 32,
    title: 'V-Neck Maxi Dress',
    price: 89.99,
    category: "women's clothing",
    description: 'A comfortable and elegant V-neck maxi dress',
    image: 'https://is4.revolveassets.com/images/p4/n/z/INDA-WD471_V1.jpg',
    rating: { rate: 4.8, count: 150 }
  },
  {
    id: 33,
    title: 'Halter Neck Jumpsuit',
    price: 79.99,
    category: "women's clothing",
    description: 'A stylish and flattering halter neck jumpsuit',
    image:
      'https://mauricesprodatg.scene7.com/is/image/mauricesProdATG/115345_C106?fmt=jpeg&qlt=95,0&resMode=sharp2&op_usm=0.8,1.0,8,0&op_sharpen=1&fit=constrain,1&wid=956&hei=1380',
    rating: { rate: 4.6, count: 100 }
  },
  {
    id: 35,
    title: 'Ruffled Waistline Wrap Dress',
    price: 59.99,
    category: "women's clothing",
    description: 'A playful and flirty ruffled wrap dress',
    image:
      'https://fiver.media//cdn-thumb/800x1200/e5p/images/mu/2021/07/23/ruffle-waistline-wrap-blouse-162412-1.jpg',
    rating: { rate: 4.4, count: 70 }
  },
  {
    id: 36,
    title: 'Tie-Front Blouse',
    price: 49.99,
    category: "women's clothing",
    description: 'A trendy and stylish tie-front blouse',
    image:
      'https://cdn.shopify.com/s/files/1/0070/8853/7651/products/06204-0793_1_38487de7-0fa7-42eb-9b0c-2f8b374fcae6_633x715_crop_center.jpg?v=1677892970',
    rating: { rate: 4.3, count: 60 }
  },
  {
    id: 37,
    title: 'High-Waisted Jeans',
    price: 69.99,
    category: "women's clothing",
    description: 'A flattering and comfortable pair of high-waisted jeans',
    image:
      'https://pyxis.nymag.com/v1/imgs/c68/c33/c38ae8241c09ae91d0dd5a8d264d15768c-ribcage-skinny.rsquare.w600.png',
    rating: { rate: 4.5, count: 80 }
  },
  {
    id: 38,
    title: 'Off-the-Shoulder Top',
    price: 39.99,
    category: "women's clothing",
    description: 'A cute and feminine off-the-shoulder top',
    image:
      'https://cdn.shopify.com/s/files/1/0422/4481/products/KK2694_Lola_Off_Shoulder_Top_White_01_600x.jpg?v=1643608841',
    rating: { rate: 4.2, count: 50 }
  },
  {
    id: 41,
    title:
      'ScreenOn - Ryzen 5 5600G - 1TB M.2 SSD - Onboard Radeon Vega 7 - Gaming PC A40113 - WiFi',
    price: 732.31,
    category: 'electronics',
    description:
      'ScreenOn Gaming PC A40113 with Ryzen 5 5600G Processor, 1TB M.2 SSD Storage, Onboard Radeon Vega 7 graphics, and WiFi connectivity.',
    image:
      'https://m.media-amazon.com/images/I/61BdzeCHLnL._AC_UL960_QL65_.jpg',
    rating: { rate: 4.5, count: 130 }
  },
  {
    id: 42,
    title: 'Apple iPhone 13 Pro Max, 512GB, Gold - Fully Unlocked (GSM + CDMA)',
    price: 1599,
    category: 'electronics',
    description:
      'The Apple iPhone 13 Pro Max with 512GB of storage, in Gold color, fully unlocked for both GSM and CDMA networks.',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51tFyA6q6eL.jpg',
    rating: { rate: 4.8, count: 50 }
  },
  {
    id: 43,
    title:
      'Samsung Galaxy Watch 4 Classic (46mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking , and Long lasting Battery - Black',
    price: 379.99,
    category: 'electronics',
    description:
      'Samsung Galaxy Watch 4 Classic (46mm) with GPS and Bluetooth connectivity, advanced health monitoring features, fitness tracking, and long lasting battery in Black color.',
    image:
      'https://files.refurbed.com/ii/samsung-galaxy-watch-4-classic-1653656978.jpg?t=resize&h=600&w=800',
    rating: { rate: 4.5, count: 100 }
  },
  {
    id: 44,
    title:
      'Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black',
    price: 348,
    category: 'electronics',
    description:
      'Sony WH-1000XM4 Wireless Noise Canceling Headphones with mic for phone-calls and Alexa voice control, in Black color.',
    image:
      'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UL960_QL65_.jpg',
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 45,
    title: 'Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)',
    price: 299.99,
    category: 'electronics',
    description:
      'Nintendo Switch with Neon Blue and Neon Red Joy‑Con, model HAC-001(-01).',
    image:
      'https://m.media-amazon.com/images/I/61JnrafZ7zL._AC_UL960_QL65_.jpg',
    rating: { rate: 4.8, count: 1000 }
  },
  {
    id: 47,
    title: 'LG OLED77CXPUA Alexa Built-In CX 77" 4K Smart OLED TV',
    price: 3196.99,
    category: 'electronics',
    description:
      'LG OLED77CXPUA Alexa Built-In CX 77" 4K Smart OLED TV with AI ThinQ (2020) brings amazing picture and sound quality to your home entertainment. With Alexa built-in, you can control your TV and smart home devices with your voice.',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/A1rzsiqAUUL.jpg',
    rating: { rate: 4.7, count: 468 }
  },
  {
    id: 48,
    title:
      'Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray (Latest Model)',
    price: 1499,
    category: 'electronics',
    description:
      'The Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) is a powerful and efficient laptop that is perfect for both personal and professional use. With the latest M1 chip, you get blazing-fast performance, and the long battery life means you can work for hours on end without needing to charge.',
    image:
      'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_UY327_FMwebp_QL65_.jpg',
    rating: { rate: 4.8, count: 3196 }
  },
  {
    id: 49,
    title:
      'Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black',
    price: 348,
    category: 'electronics',
    description:
      'The Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones are perfect for music lovers who want to enjoy their music without any outside noise. With advanced noise-canceling technology, these headphones block out ambient sound, so you can focus on the music. Plus, with Alexa built-in, you can control your music and smart home devices with your voice.',
    image:
      'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY327_FMwebp_QL65_.jpg',
    rating: { rate: 4.6, count: 32039 }
  },
  {
    id: 50,
    title:
      'Samsung Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 256GB US Version Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Black',
    price: 1199.99,
    category: 'electronics',
    description:
      'Samsung Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone with 256GB storage. Pro-Grade Camera with 108MP high resolution and 8K video recording capability. Phantom Black color.',
    image:
      'https://image-us.samsung.com/us/smartphones/galaxy-s21/gallery-images-palette-exclusive/P3-Exclusive-Phantom-Brown/PDP-P3-Phantom-Brown-lockup-01-1600x1200.jpg?$product-details-jpg',
    rating: { rate: 4.5, count: 1449 }
  },
  {
    id: 54,
    title:
      'OnePlus 9 Pro 5G LE2110, 256GB 12GB RAM, Morning Mist - International Version - GSM Only, NO CDMA - NO Warranty in The USA',
    price: 1239,
    category: 'electronics',
    description:
      'OnePlus 9 Pro 5G LE2110, 256GB storage and 12GB RAM, Morning Mist color. International version, GSM Only, NO CDMA. NO Warranty in The USA.',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71d6AU0CF4L.jpg',
    rating: { rate: 4.5, count: 145 }
  },
  {
    id: 55,
    title:
      'Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)',
    price: 1099,
    category: 'electronics',
    description:
      'Apple iPad Pro with 12.9-inch display, Wi-Fi connectivity, and 256GB storage in Space Gray color. 4th Generation model.',
    image:
      'https://m.media-amazon.com/images/I/811aBwuSuIL._AC_UL960_QL65_.jpg',
    rating: { rate: 4.9, count: 195 }
  },
  {
    id: 56,
    title: 'Samsung Galaxy Tab S7 Wi-Fi, Mystic Black - 256 GB',
    price: 729.99,
    category: 'electronics',
    description:
      'Samsung Galaxy Tab S7 with Wi-Fi connectivity and 256GB storage in Mystic Black color.',
    image:
      'https://image-us.samsung.com/SamsungUS/home/mobile/tablets/galaxy-tab-s7/SM-T870_Combo_001_MysticBlack_1600x1200.jpg?$product-details-jpg$',
    rating: { rate: 4.7, count: 596 }
  },
  {
    id: 57,
    title:
      'Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa Voice Control - Black',
    price: 299,
    category: 'electronics',
    description:
      'Bose QuietComfort 35 II Wireless Bluetooth Headphones with noise-cancelling feature and Alexa Voice Control. Black color.',
    image:
      'https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_UL960_QL65_.jpg',
    rating: { rate: 4.7, count: 59021 }
  },
  {
    id: 58,
    title:
      'HP OfficeJet Pro 6978 All-in-One Wireless Printer, HP Instant Ink or Amazon Dash replenishment ready (T0F29A)',
    price: 219.89,
    category: 'electronics',
    description:
      'The HP OfficeJet Pro 6978 All-in-One Wireless Printer lets you print, scan, copy and fax documents up to 8.5x11 inch. With automatic two-sided printing, you can save paper, and with HP Instant Ink or Amazon Dash Replenishment, you never run out of ink.',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pY30-84-L.jpg',
    rating: { rate: 4.3, count: 4632 }
  },
  {
    id: 59,
    title:
      'Logitech C920x HD Pro Webcam, Full HD 1080p/60fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black',
    price: 99.99,
    category: 'electronics',
    description:
      'The Logitech C920x HD Pro Webcam offers full HD 1080p video calling and clear stereo audio. It has HD light correction to adjust to any lighting condition, and it works with Skype, Zoom, FaceTime, Hangouts, and more on PC, Mac, laptop, MacBook, and tablet.',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71iNwni9TsL._AC_UF894,1000_QL80_.jpg',
    rating: { rate: 4.7, count: 31920 }
  },
  {
    id: 60,
    title:
      'LG 27UK850-W 27" 4K UHD IPS Monitor with HDR10 with USB Type-C Connectivity and FreeSync, White',
    price: 449.99,
    category: 'electronics',
    description:
      'The LG 27UK850-W 27" 4K UHD IPS Monitor delivers stunning images with HDR10 and covers 99% of the sRGB spectrum. It has USB Type-C connectivity and supports FreeSync technology to eliminate screen tearing and stuttering.',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/718ICn8vZTL._AC_UF894,1000_QL80_.jpg',
    rating: { rate: 4.6, count: 1773 }
  },
  {
    id: 61,
    title:
      'Samsung 970 EVO Plus SSD 2TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology (MZ-V7S2T0B/AM)',
    price: 399.99,
    category: 'electronics',
    description:
      'The Samsung 970 EVO Plus SSD 2TB is a fast and reliable storage solution with a M.2 NVMe interface and V-NAND technology. It offers read/write speeds of up to 3500/3300 MB/s and a 5-year limited warranty.',
    image:
      'https://image-us.samsung.com/SamsungUS/home/computing/memory-and-monitors/9-27-21/mz-v7s2t0b-am-gallery/MZ-V7S2T0BW_001.jpg?$product-details-jpg$',
    rating: { rate: 4.9, count: 3734 }
  },
  {
    id: 62,
    title: 'Samsung Galaxy Tab A7 Lite 8.7 inch 32GB - Wi-Fi - Gray',
    price: 149.99,
    category: 'electronics',
    description:
      'Compact 8.7-inch tablet from Samsung featuring a 32GB internal storage, Wi-Fi connectivity, and a gray finish.',
    image:
      'https://image-us.samsung.com/SamsungUS/home/mobile/tablets/galaxy-tab-a7-lite/GalaxyTabA7Lite_Combo_001_Gray_1600x1200.png?$product-details-jpg$',
    rating: { rate: 4.6, count: 188 }
  },
  {
    id: 63,
    title:
      'Echo Show 5 (1st Gen, 2019 release) -- Smart display with Alexa – stay connected with video calling - Charcoal',
    price: 79.99,
    category: 'electronics',
    description:
      'Echo Show 5 smart display with Alexa, a 5.5-inch screen, video calling feature, and a charcoal finish.',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/512sVYLsYHL._AC_UF1000,1000_QL80_.jpg',
    rating: { rate: 4.6, count: 5155 }
  },
  {
    id: 64,
    title: 'Logitech C920x Pro HD Webcam',
    price: 99.99,
    category: 'electronics',
    description:
      'High-definition webcam from Logitech that can capture 1080p video and has a built-in microphone.',
    image:
      'https://m.media-amazon.com/images/I/71iNwni9TsL._AC_UL960_QL65_.jpg',
    rating: { rate: 4.5, count: 2234 }
  },
  {
    id: 65,
    title: 'Apple AirPods Pro',
    price: 197,
    category: 'electronics',
    description:
      'Wireless earbuds from Apple with active noise cancellation and transparency mode.',
    image:
      'https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UL960_QL65_.jpg',
    rating: { rate: 4.8, count: 280276 }
  },
  {
    id: 66,
    title:
      'Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Rosewood/Rosewood, One Size (S &L Bands Included)',
    price: 139.95,
    category: 'electronics',
    description:
      'Fitness tracker from Fitbit with built-in GPS, heart rate monitor, sleep and swim tracking, and interchangeable bands.',
    image:
      'https://i5.walmartimages.com/asr/1aa41e9b-8777-4676-b8eb-9cca29b17338.713eeb9be028d3b9e6cff6516eb64efa.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    rating: { rate: 4.5, count: 10013 }
  },
  {
    id: '9900185957',
    category: 'jewelery',
    title: 'Pandora Classic Elegance Ring',
    description:
      'Luxurious and dramatic, this statement-making cocktail ring from the PANDORA Autumn 2017 collection in sterling silver will bring panache to the simplest of outfits. Its bold, brilliant cubic zirconia stones are perfect for evening wear too. Additional sizes may be available through special order at your nearest Jared location. Style # 196250CZ-54.',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTJKXWQI-tcQCy28tr_HtlZrvRJ_RINGQ3RbxT7oH74U40OJgkrY-KZrVLlUu8DQJCGhRQ-DYIr8XeK-bJzQYqHoTNe4cju&usqp=CAE',
    rating: { rate: 4.3, count: 188 },
    price: 290
  },

  {
    id: '5133332119230952850',
    category: 'jewelery',
    title: 'Pandora Clear Tilted Heart Solitaire Ring',
    description:
      'Make your loved one feel special with the Red or Clear Tilted Heart Solitaire Ring. Hand-finished in sterling silver, this design is inspired by the story of Romeo & Juliet. Featuring a thin polished band, the ring includes a titled heart-shaped stone. This style can be stacked with other solitaire rings to create an asymmetric pattern, making it the ideal gift for Valentine’s Day.',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxvw-3ddGk5goOHFMk9xg_KynOXVIceH_5eNxU9WngDNKfRp4Lyvli2QrE1vABpKvET3Fa1IB--HzqVdU3ULNnmhOT2GrLGA&usqp=CAE',
    attributes: {
      Material: 'Rose Gold, Silver, Cubic Zirconia, Sterling Silver',
      Size: '7'
    },
    rating: { rate: 4.9, count: 782 },
    page_url:
      'https://google.com/shopping/product/5133332119230952850?gl=us&hl=en&prds=pid%3A919875171648537941',
    offers_page_url:
      'https://google.com/shopping/product/5133332119230952850/offers?gl=us&hl=en&prds=pid%3A919875171648537941',
    specs_page_url:
      'https://google.com/shopping/product/5133332119230952850/specs?gl=us&hl=en&prds=pid%3A919875171648537941',
    reviews_page_url:
      'https://google.com/shopping/product/5133332119230952850/reviews?gl=us&hl=en&prds=pid%3A919875171648537941',
    num_reviews: 51,
    typical_price_range: ['$45.00', '$45.00'],
    offer: {
      store_name: 'Smyth Jewelers',
      store_rating: null,
      offer_page_url:
        'https://www.smythjewelers.com/products/copy-of-pandodra-red-tilted-heart-solitaire-ring?variant=37858141601963&currency=USD&utm_source=google&utm_medium=cpc&utm_campaign=Shopping+-+Smyth+Jewelers',
      store_review_count: 0,
      store_reviews_page_url: null,
      shipping: 'Delivery by Sat, Mar 25',
      tax: '+$2.00 est. tax',
      on_sale: false,
      original_price: null,
      condition: 'NEW'
    },
    price: 22.5
  },
  {
    id: '7419390386507927679',
    category: 'jewelery',
    id_v2: '7419390386507927679:11674943332644783191',
    title: 'Swarovski Attract Necklace - White - Rhodium Plated - 5510696',
    description:
      "Extravagant, lustrous and emotive, Swarovski crystal is on another level. Choose from supremely-cut crystal, genuine gemstones and created stones - from the purest and clearest to a spectrum of full, spectacular colour - Swarovski crystal is widely renowned as some of the most scintillating in the world, and since 1892 it's been lauded for its style and glamour. Keep it chic and simple with the Attract necklace. Timeless and elegant, the rhodium-plated design features a dazzling square-cut stone. It's delicate and entrancing. Lead a glamorous Swarovski life. Attract Rhodium-Plated Square Cut Crystal Necklace features Designed in Austria. Crafted from rhodium-plated metal and crystal. Features a dazzling square cut crystal stone. Delicate simplicity. Versatile to wear casual or well dressed. Beautifully presented in a Swarovski gift box. Length 38cm.",
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQgpOjki-Ns8BKcPhNQmPs-lWg3N1Jatdybcw2Iex-tb0YbyuPZRmKfw_E7-s-QH33BdepyQLINWfZ3N8u8ljyk5w3ruFNkmg&usqp=CAE',
    attributes: {
      Silhouette: 'Pendant',
      Material: 'Stainless Steel, Cubic Zirconia',
      Color: 'Rhodium Plated White'
    },
    rating: { rate: 3.8, count: 231 },
    page_url:
      'https://google.com/shopping/product/7419390386507927679?gl=us&hl=en&prds=pid%3A11674943332644783191',
    offers_page_url:
      'https://google.com/shopping/product/7419390386507927679/offers?gl=us&hl=en&prds=pid%3A11674943332644783191',
    specs_page_url:
      'https://google.com/shopping/product/7419390386507927679/specs?gl=us&hl=en&prds=pid%3A11674943332644783191',
    reviews_page_url:
      'https://google.com/shopping/product/7419390386507927679/reviews?gl=us&hl=en&prds=pid%3A11674943332644783191',
    num_reviews: 41,
    typical_price_range: ['$58.89', '$85.00'],
    offer: {
      store_name: 'Swarovski USA',
      store_rating: 4.7,
      offer_page_url:
        'https://www.swarovski.com/en-US/p-M5510696/Attract-necklace-Square-cut-White-Rhodium-plated/?variantID=5510696',
      store_review_count: 0,
      store_reviews_page_url: 'swarovski.com',
      shipping: 'Free delivery by Mon, Mar 27',
      tax: '+$7.54 est. tax',
      on_sale: false,
      original_price: null,
      condition: 'NEW'
    },
    price: 85
  },
  {
    id: '1:2321278660113948820',
    category: 'jewelery',
    id_v2: '1:2321278660113948820',
    title: 'Choose From These 12 Assorted Jewelery $10.00 Each',
    description:
      '12 ASSORTED JEWELERY $10.00 EACH YOU CAN CHOOSE ANY ONE BUY ONE GET ONE FREE',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSL9s0SAip-8tedWDsZNPae1SF1iZcJD007HMo85zAWfdL2RiNdrwST1IqkNKEtrjIPVHbDnx9pk2zhlOs0EG6f78Izivjx&usqp=CAE',
    attributes: null,
    rating: { count: 634, rate: 4.6 },
    page_url:
      'https://google.com/shopping/product/1?gl=us&hl=en&prds=pid%3A2321278660113948820',
    offers_page_url:
      'https://google.com/shopping/product/1/offers?gl=us&hl=en&prds=pid%3A2321278660113948820',
    specs_page_url:
      'https://google.com/shopping/product/1/specs?gl=us&hl=en&prds=pid%3A2321278660113948820',
    reviews_page_url:
      'https://google.com/shopping/product/1/reviews?gl=us&hl=en&prds=pid%3A2321278660113948820',
    num_reviews: 0,
    typical_price_range: null,
    offer: {
      store_name: 'eBay',
      store_rating: null,
      offer_page_url:
        'https://www.ebay.com/itm/223891063834?chn=ps&mkevt=1&mkcid=28&srsltid=Ad5pg_H7QPoNEopYp-ZLuaTVJSQYHgrOyt2Z9fi-AuOSK9RIfmN3EsZ2H3Q',
      store_review_count: 0,
      store_reviews_page_url: null,
      shipping: 'Free delivery by Fri, Mar 24',
      tax: '+$0.89 est. tax',
      on_sale: false,
      original_price: null,
      condition: 'USED'
    },
    price: 10
  },

  {
    id: 5472056,
    title: 'Pandora Jewelry Celestial Stars Bracelet',
    description:
      'Let yourself be inspired by a magical, dreamy world based on the mystery of the night sky and the brilliance of starlight. This star bracelet features a collection of irregularly-shaped sterling silver star shapes embellished with round cubic zirconia bound together by pav bars to evoke a life beyond your wildest dreams, with each star symbolizing a past milestone or a future achievement. Let the sterling silver bracelet remind you of all of the proud moments that make you, you.',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlasvYtfjGsaX-5XCZ1lVdhD7-csaQTDI_8PHpxjGdf5iQtR4ZXaKFw-Cnb72ZvmFql0ag833edDp9I2KYXDqYDyExiS3A&usqp=CAE',
    rating: { rate: 4.3, count: 129 },
    specs_page_url:
      'https://google.com/shopping/product/7276997554738882056/specs?gl=us&hl=en&prds=pid%3A4148910077129708222',
    reviews_page_url:
      'https://google.com/shopping/product/7276997554738882056/reviews?gl=us&hl=en&prds=pid%3A4148910077129708222',
    num_reviews: 116,
    typical_price_range: ['$95.00', '$95.00'],
    offer: {
      store_name: 'Elisa Ilana Jewelry',
      store_rating: 4.7,
      offer_page_url:
        'https://pancharmbracelets.com/products/pandora-celestial-stars-bracelet?variant=40562930811064&currency=USD&utm_medium=sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic',
      store_review_count: 0,
      store_reviews_page_url: 'pancharmbracelets.com',
      price: '$95.00',
      shipping: 'Free delivery by Tue, Mar 28',
      tax: '+$8.43 est. tax',
      on_sale: false,
      original_price: null,
      condition: 'NEW'
    },
    price: 597,
    category: 'jewelery'
  },

  {
    id: 1536401,
    id_v2: '15311824714079836401:7569027702511170509',
    title: 'Pandora Knotted Heart Ring 6 / Sterling Silver',
    description:
      "Wear the timeless beauty of the love knot on your finger with this polished sterling silver ring from the Pandora 2019 Mother's Day collection. The looped, knotted heart combines shimmering pavé-set cubic zirconia with polished metal to arresting effect, redefining the ultimate symbol of love. Additional sizes may be available through special order at your nearest Jared location. Style # 198086Cz-54. Due to the nature of Sterling Silver, it's normal for an item to darken over time. Cleaning with a silver cleaning cloth will restore your charm or your local store is happy to help.",
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLXjoqaieTzgZQ4rFueHSWJK-OFn3d5fSQ_RcqxlavVOVs2lF7mRqqckfg_1vVHGkn0jQ6ciGjIVAH7Q1v7RTZLZm5cK3_&usqp=CAE',
    attributes: {
      Material: 'Silver, Cubic Zirconia, Sterling Silver',
      Size: '6'
    },
    rating: { rate: 4.2, count: 98 },
    category: 'jewelery',
    price: 284
  },
  {
    id: 138085,
    id_v2: '1:8894996000274138085',
    title:
      'Chargances Silver Crystal Rhinestone Finger Ring Bracelet Boho Slave Chain Bracelet Hand Harness Finger Ring Bracelet Charm Jewelry for Women Girls',
    description:
      "Exquisite alloy accessories bangle,classy,simple and trendy,and not easy to fade and break. Harness bangle bracelets is adjustable and fits most people's size, you don't need to worry about the size. A minimalist ring bracelet hand chain so comfortable you will forget it’s on. This bracelet with ring attached won't tangle and knot and is an elegant yet playful new piece to spice up your jewelry collection Beautiful gifts packaging on christmas, birthday, anniversary, valentine's day, mother's day, send to your best friend, lover, friend, wife, mother and daughter, grandma's delicate and surprise gift, or just give yourself a small gift, feeling serotonin positive energy 100% satisfaction and money back guarantee. If you have any questions, contact us at any time. Amazing shining bracelet of crystals for your very special day. It is made of clear crystals, pearls and silver, All our handmade jewelery was made using the best materials for you. A magnificent bracelet for an extremely elegant woman on a wedding day, I'm sure you will get a lot of praise. br br Thank you for visiting my shop and I'm looking forward to receiving your order ( ‿ )",
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvz60nYLCFc8oFYI8at_Cie2NKy2IJJiDmXkbY1UbeP8aCvlmOlbgVYit8Ua52axSYjlm8twUHZjKezHauMRb7Lu282449&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 4.8, count: 515 },
    price: 204
  },
  {
    id: 415,
    id_v2: 83063462,
    title: 'Pandora Clear Heart Solitaire Ring CZ Sterling Silver',
    description:
      "This solitaire ring features the symbol of a promise: a single heart-shaped clear cubic zirconia. Perfect as a gift to your loved one, this sterling silver ring offers up the emblem of a solitary heart-your heart-for the wearer to love and cherish. Look at the heart solitaire ring closely and you'll see the claw setting has freehand heart outlines. This ring stacks well with others from this collection to add a little sparkle to your everyday style. Due to the nature of Sterling Silver, it's normal for an item to darken over time. Cleaning with a silver cleaning cloth will restore your charm or your local store is happy to help.",
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXbD38daQVxE8rs7vcJLj97F60CtMEo5XkIdZD4xkg1bMy1rd5JSJyRak8LwkUpoukWZeVTM466DEfBpR_LVN_-Cop5l2buw&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 4.9, count: 127 },
    price: 646
  },
  {
    id: 557806,
    id_v2: '5578069241051136220:4252180576499994988',
    title:
      'Sparkle Cut Eagle Head Pendant Necklace in Solid Gold (Yellow/Rose/White) Yellow Gold | Factory Direct Jewelry',
    description:
      'Our unique designs are one of a kind proudly designed and manufactured in the USA. Necklace/Pendant Measurements Chain size 0.5 mm Pendant Height with Bail: 0.85" (21.59 mm) Pendant Height without Bail:0.65" (16.51 mm) Pendant Width: 0.50" (12.7 mm) Pendant Depth(average): 0.05" (1.27 mm) Bail Measurements Bail Fits up to a 3.5 mm chain. Bail Height:0.28" (7.112 mm) Bail Width: 0.14" (3.556 mm) Bail Depth:0.21" (5.334 mm) Weight: 14k: 1.50 grams 10K: 1.25 grams Necklace/Pendant Specifications Finish: High polished Available in 16", 18", 20" and 22" rolo chain sizes Bail Fits up to a 3.5 mm chain. Chain size 0.5 mm Metal: Solid Genuine Gold (in your choice of 10k or 14k) Made in USA | Men\'s Collection , Men\'s Pendants/Necklaces , Animal Collection , Eagle',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT59ut47tRkyyB8qELq_OhOHxO5SMeKYYgBPn3PtkmWxb66RYfZtvCjljlOBoROMaRTo71QcBuP0K0YTZUR9jDmGrcXLDWmMQ&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 2.2, count: 684 },
    price: 640
  },
  {
    id: 1576598,
    id_v2: '1:5765906152414136087',
    title:
      'Hand Made Rope Diamond -cut Screw Top 1/10AE Bezel 14k Gold BA70D/10AE',
    description:
      '14k Gold Hand Made Rope Diamond -cut Screw Top 1/10AE Bezel, MPN: BA70D/10AE, Diamond-cut, Polished, 14k Yellow gold, Bezel, Round, Screw top, Handmade., Material: Primary - Purity: 14K, Material: Primary: Gold, Product Type: Jewelry, Jewelry Type: Pendants & Charms, Material: Primary - Color: Yellow, Coin ',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3KoJCi7E5rqbEx9v5BdStdn-s4PjS7LiGmF3Gmposk3oEI8i2YilhjPL1WoV77elXT6jpk8NieyLz4Hv8KvF-keNeCVF8Mg&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 2.7, count: 354 },
    price: 405
  },
  {
    id: 16473982868,
    title:
      'Custom Name Necklace Personalized Birthday Gifts Handmade Jewelry, Birth Flower Name Necklace Personalized Christmas Gifts Custom Jewelery',
    description:
      "Gold Name Necklace personalized gifts, Birthday Gifts Handmade Jewelry birth flower name necklace personalized Christmas gift custom jewelry Personalized Handmade Gift Ideas for Your Favorite Person, Few things feel as special as opening a monogrammed gift/Jewelry. Cross everyone you love off your list with these unique, bespoke presents. Not only do these types of gifts say, \"Hey, I put a lot of thought into this because I love you,\" but they also prove just how well you know a person and what they're into, which is always a nice feeling for whoever's on the receiving end. PersonalizedGiftsMall Personalized Birthflower Nameplate Necklace, for one, is perfect if your partner loves statement necklaces with a sentimental twist. teens who love accessorizing, PersonalizedGiftsMall Personalized Birth Flower and Birthstone Necklace is a beautiful option that's a sweet and subtle departure from traditional birthstone necklaces. D E T A I L S ---This piece is made by Hand. ---Dimensions: Depending on your name, Height sizes range from 4cm to 6cm. ---Come with Individual Gift Box. READY TO GIFT. ---All items are handmade with love, Custom items do take a little extra time to create. How to order? T A K E G O O D C A R E Please follow these tips to keep it longer time. --Keep it in a dry place. Enjoy your shopping :)",
    category: 'jewelery',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQC5w_FlfeioV0aLD9Cf4uiyHRnmWOYm0vBs9YciDdGfRMalzBkYeH0L32492gQ5lnIHY6UXAVcBBjXxdQl-se05K26BG7j&usqp=CAE',
    rating: { rate: 4.7, count: 398 },
    price: 408
  },
  {
    id: 18381,
    title: 'Lulus | Unforgettable Gold Rhinestone Drop Necklace',
    description:
      'A dainty gold-plated sterling silver chain holds a shimmering clear rhinestone, in a gold circle setting, and 1.5" drop chain accented...',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEChLNO7dN8FvTtVwiFrPy31RTy0S92NnKYNySBBdiPwHbkwi1xC7YjezkcXxy_kapzTyZh-KjG1Gu0EUciGxKleqrYXrZ&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 2.5, count: 535 },
    price: 484
  },
  {
    id: 12358,
    title: 'Pandora Open Heart Padlock & Key Bracelet Gift Set',
    description:
      "For the one who holds the key to your heart. Unlock the next chapter of your love story with this lovingly crafted gift set. Hand-finished in sterling silver and featuring our iconic padlock and key charm on an adjustable snake chain bracelet, what's not to love?",
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR9b3B2gdDYPYInaq0hNC1Yv9B5yTe8WtYksS2CkFVfolPiiQlmGPmPGcQmhS8F41Er6meh5FmEuKlPJxDUHYPIsW_xCpYy&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 4, count: 614 },
    price: 251
  },
  {
    id: 94595,
    title: 'Hallmark Diamonds Paw Necklace 1/10 ct tw Sterling Silver 18"',
    description:
      'This adorable necklace shows the true love you have for your furry friend and keeps them close to your heart. The necklace is crafted in sterling silver with the toes of the paw detailed in sparkling round diamonds. With a total diamond weight of 1/10 carat, the pendant rests on an 18-inch cable chain that secures with a lobster clasp. HMK. LIC.',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQTR_YYvNapv1q2jBLfEbYF0ICkCDIwDoAWRIHEe3Sv7J5IqWJCLnHi5ttw_1oGPPATrDaa7nbY57B0OpDwnTzzKJGDy2n8Cg&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 4.1, count: 152 },
    price: 284
  },
  {
    id: 104143590,
    id_v2: '11677909492704143590:3053359825931605713',
    title: 'Pandora Elevated Heart Necklace',
    description:
      'Let love guide your look with this sterling silver heart necklace which can be worn in two different lengths thanks to its adjustable clasp. The sparkling healing heart cut of the cubic zirconia marks the first time this stone shape is being used in the Timeless Elegance collection and is a modern take on a love token which is ideal as a gift for someone special. The contemporary design and elevated stone setting make it an easy to wear piece theyll love for years to come. All customs and duties will be charged to our account. There will be no extra charges.',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjQo7fsWlf-uTBdPjULGVkatrKoyPGtkSmtu8xiEdRnJVlN3Yn1gxZ7DA7k3DUDYqim1Jbn25QB-9F8vLwJpjwwCntA5Di&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 4.7, count: 50 },
    price: 577
  },
  {
    id: 1133,
    id_v2: '1:13717260525543006103',
    title:
      "Full Diamond Exaggerated Fashion Necklace Earrings, Women's, Size: One size, Grey Type",
    description:
      'Product information: Style: Europe and America Material: copper Set combination: earrings+necklace Inlaid material: gold-plated inlaid artificial gems/semi precious stones Pattern: love/water drop/bell Color: red, green, blue, white, ear clip Packing list: Necklace * 1 +pair of earrings * 1 Size: One Size. Color: Metal Type. Gender: female. Age Group: adult.',
    category: 'jewelery',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRJLoUuEJyUyTAisEj3qlHigpvPvPxh-98KnFfeYFWZWY2iGvAUG8TUj6HxTHqkkFIRzgru9qOVgHXOoXOI-oWg7KL6N4ietA&usqp=CAE',
    rating: { rate: 4.3, count: 705 },
    price: 311
  },
  {
    id: 13333,
    id_v2: '13360759464816489493:8935976761232966914',
    title: "Pandora Women's Shooting Stars Sparkling Ring | Size 4.5",
    description:
      'Two shining stars meet on this new Shooting Stars Sparkling Ring design, which symbolises the power of togetherness and the magic of starry night skies filled with wonder. Crafted from sterling silver, this stackable ring is set with pavé cubic zirconia around the band, as if the stars are leaving a twinkling trail behind them. Gift this special piece as a symbol of special connections, or style it yourself as a reminder of how wonderful you are.',
    category: 'jewelery',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTn_UehbQsj6Wu57ldBLRvSPhX9jNCwE93QFBcV9ILIvA5R147IhWDkSi3YG88toUJLbPDrG_BPaEK2iI2oqvxDJlb5WAHP&usqp=CAE',
    rating: { rate: 2.3, count: 889 },
    price: 243
  },
  {
    id: 33823,
    id_v2: '3306508456605980823:759976872793163807',
    title: 'Pandora Silver Bracelet, Heart Clasp',
    description:
      "Set your heart a-flutter with this romantic version of Pandora's bestselling charm bracelet. Hand-finished with a heart-shaped clasp, this sterling silver snake chain bracelet looks stunning on its own but even better adorned with your favourite Pandora charms and clips. Layer it with contrasting Pandora chain bracelets for a chic, multi-layered look. Bracelets Size GuideThe average size for a ladies bracelet is 20cm. Children’s bracelets are usually 16cm. If the plan is to add charms then the bracelet should probably be one size up on your normal.The general guidance for finding your bracelet size is to add 2cm – 3cm (0.8in) to your wrist size measurement. To ensure the most accurate bracelet size, always use the size chart for your selected bracelet type. If you prefer a looser fit, you may wish to size up.",
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS69upY4kjt0CoGFVxuw8fDs3Z5VlHGMiTsx0eRJih2TCI0j8Qn-9LktHccvz94dbuWUfm4cNeoWEe4MrVMD_xqieknY9_Z&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 4.9, count: 637 },
    price: 475
  },
  {
    id: 77999,
    id_v2: '17126918117677177999:12722693888010124632',
    title: 'Panacea Initial Pendant Necklace Gold D',
    description:
      'A small, dangling initial pendant on a crystal-accented chain brings a personalized touch to your look-it also makes a great gift for a loved one. Style Name:Panacea Initial Pendant Necklace. Style Number: 5938875.',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOsdNvzEIFXigqExHKrPvv0kTKV-BWLF4adrqVZII1CtxSxa4&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 3.5, count: 955 },
    price: 661
  },
  {
    id: 3443,
    id_v2: '16343310222749158107:6507458768392271627',
    title:
      "nihaojewelry Wedding Dress Bride Hollow Full Diamond Women's Copper Necklace and Earrings Two-Piece Set",
    description:
      'Insert Material:Artificial Gemstones Occasion:Wedding Occasion:Travel Material:Rhinestone Style:Simple Style Gender:WomenS Pattern:Heart Classification:Earrings Classification:Necklace Classification:Jewelry Set',
    image:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTCtnNT2GzQaerauAHc9ikjAYJAoIqURImpfbBLCzHmK2Ntp8lSxRt1-v_3eXV1SPqyrZnf0b8rGEY6s_NFhp0ntHP567fe&usqp=CAE',
    attributes: { Department: "Women's" },
    category: 'jewelery',
    rating: { rate: 4.7, count: 127 },
    price: 677
  },
  {
    id: 233424,
    id_v2: '14759486421644583754:3553289443836413642',
    title:
      'Alice Dainty Letter Name Necklace | Caitlyn Minimalist 18K Gold / 18 Inches',
    description:
      'The Alice Letter Name Necklace is crafted with dainty, upper case block letters, on a fine, thread like chain - to create an effortlessly chic, sophisticated, and elegant amulet that beautifully expresses your identity.',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSIvvUVdSyLSVBcOna9avxSXF1MtNU5E_RfOjag-Wj6NASMSv9_eWaCmdq_1FgJpPxgaJ9WIZUaEFj_Fn61cOLAHGldzPCt&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 3.9, count: 748 },
    price: 453
  },
  {
    id: 8384,
    id_v2: '13843792312199638737:3794088729539230537',
    title:
      'Zales 5.0mm Heart-shaped Gemstone and Initial Y Necklace (1 Initial and Stone)',
    description:
      'This delightful color stone necklace features the initial of your choice in a block font and the colored heart stone of your choice. The diamond-cut cable chain is adjustable from 16 to 18 inches and secures with a lobster clasp.',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVGKfzpKs8dj-Vzv0Tt0QKAJ_Cx-0dfOnhU9rSLKRhNLEd8jymEIgCuHkYNgi0ILu1QZL4PzHrFaohamqGvBziTUo40VSqMQ&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 4, count: 902 },
    price: 654
  },
  {
    id: 324234,
    id_v2: '15866144260891343326:15410398667664753667',
    title: 'Pandora Marvel The Avengers Infinity Stones Ring',
    description:
      "Harness the power of the Infinity Stones with our Marvel The Avengers Infinity Stones Ring. Perfectly balanced, as all things should be, our 14k gold-plated ring features six colorful man-made crystals, representing the most coveted objects in the universe. The inside of the band is engraved with each stone's corresponding power: space, reality, power, soul, mind and time. Pair this ring with other battle-ready pieces from our Marvel x Pandora collection.",
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSD7ZssXUL0FKf10UtX9he3PYwspzkrgoaxNH4w6uWlOvLR-iojLIK6_HoPJ5BV3md0sJyxRpkPie7vH3UPGfD-tJii_TRm&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 2.3, count: 390 },
    price: 635
  },
  {
    id: 324234,
    id_v2: '15694561836749809405:3580768746084284218',
    title: "LC Lauren Conrad Layered Heart Necklace, Women's, Silver",
    description:
      'Expect compliments when you don this lovely layered necklace from LC Lauren Conrad. - NECKLACE DETAILSChain length: 16 in. with 3-in. extender - Pendant length: 0.34 in. (each)Chain type: curb chain - Clasp: lobster-claw - Metal: iron, zinc Plating: silver tone - Additional details: nickel free - Not appropriate for children 14 years old and younger.',
    image:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScZJkycIO0glldF2n6tqhQUeJDXiITKwd15Ls1r3rQjVhm5blfzFtbPbl1T6jmnHNx3OpyTI8bt00qWekIoHbaXIaHQ88f&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 3.4, count: 97 },
    price: 220
  },

  {
    id: '19046606695408523750',
    id_v2: '1:9046606695408523750',
    title:
      '18K Gold HOJ Subscription Box - 6 Month Subscription, Mixed Necklace Length (14 + 16 + 18 Inches) / Ring Size 6 / Bracelet Size 6.5 Inches | ',
    description:
      'Receive 3 trendy and luxury pieces of jewelry every month such as necklaces, bracelets, earrings, rings, and more, all of which have an average retail value of $100+ combined. All of the jewelry in this box is made of top quality material and are tarnish resistant, water resistant and hypoallergenic! Build up your gold jewelry collection with this luxe subscription box! Make a one-time purchase for $64.99 or save 60% by subscribing for a minimum of 6 months! (Monthly price of $39.99) HOW IT WORKS 1. SUBSCRIBE: Enter Sizes and any Custom Requests in the menu items below 2. LENGTH OF TERM: Choose for term length and proceed to checkout 3. SUBMIT PAYMENT AND WAIT FOR YOUR JEWELRY BOX TO ARRIVE! CANCELATION/REFUND POLICY Depending on the length of your term, you will be charged on the same day you placed your order every month for the duration of your term. If you purchased 1 month, there is no term so you will only be charged once (the same day you place your order). If you choose 3 month or 6 month term, and you place an order today (for example if today is September 5th), you will be charged on the 5th of every month for 3 or 6 months. Once the 3 or 6 months has ended, you will no longer be charged. If you wish to enroll again, please place a new order or reach out to info@houseofjewelsmiami.com to extend your subscription term. In addition, if you sign up for our 3 month or 6 month term, we cannot provide a refund if you wish to cancel sooner. No Exceptions. In addition, there will be no refunds or exchanges given for the items included in this box unless an item is damaged. We cannot cater requests for specific items from our site due to limited inventory. This box will also include exclusive items that may not be featured on our site yet. By using this website you agree to all of the above terms mentioned regarding the HOJM Monthly Subscription Box.',
    image:
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1gDhxJ1tkdyQ3Qo1xCCqmaBlTvTY5Mh1Q2DYlDCUCoCkPvpQ&usqp=CAE',
    category: 'jewelery',
    rating: { rate: 3.5, count: 985 },
    price: 288
  },
  {
    id: '113969597283057943698',
    id_v2: '1:13969597283057943698',
    title: "Big Womens Luxury Fashion Jewelry Best Gift 7, Women's, Grey Type",
    description:
      'Description: Material: metal, Gold plating and inlaid long oval cut Simple and classical, Vintage style, suit to wear everyday Perfect gift for mom, daughter, girlfriend, sister, YOU. Available size:6/7/8/9 Package Includes: 1 Piece Gem ',
    image:
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQniTRhs9jKD6Bhj8HxeHVGSGjAvesLIRW8-xyX3jMumw-kofXhZoDkFJoNYCQ4DETb_z48wdeEGHpzKTwV9utE0ajXElaV3w&usqp=CAE',
    attributes: { Features: 'Gifts for Mothers' },
    category: 'jewelery',
    rating: { rate: 4.4, count: 876 },
    price: 570
  },
  {
    title:
      'Männer Workout Kleidung Outfit Fitness Bekleidung Fitnessstudio Outdoor Laufen Kompressionshose Shirt Top Langarm Jacke 4PCS oder 5pcs',
    image:
      'https://m.media-amazon.com/images/I/71yx2p3EnJL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 48.1,
    category: "men's clothing",
    description:
      'Männer Workout Kleidung Outfit Fitness Bekleidung Fitnessstudio Outdoor Laufen Kompressionshose Shirt Top Langarm Jacke 4PCS oder 5pcs'
  },
  {
    title:
      'Bambus - Viskose Boxershorts Herren sanft 6er Pack Anti Loch S - 4XL',
    image:
      'https://m.media-amazon.com/images/I/611OqQhPJzL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 35,
    category: "men's clothing",
    description:
      'Bambus - Viskose Boxershorts Herren sanft 6er Pack Anti Loch S - 4XL'
  },
  {
    title:
      'Men MotionSense Deo Spray Invisible on Black + White Clothes Anti-Transpirant mit 48 Stunden Schutz gegen Körpergeruch und Achselnässe 150 ml 6 Stück',
    image:
      'https://m.media-amazon.com/images/I/81CfrLTyiWL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.6', count: 0 },
    price: 11.58,
    category: "men's clothing",
    description:
      'Men MotionSense Deo Spray Invisible on Black + White Clothes Anti-Transpirant mit 48 Stunden Schutz gegen Körpergeruch und Achselnässe 150 ml 6 Stück'
  },
  {
    title:
      'Anime Frau Strickpullover Herren Oversized Sweatshirts Rundhalsausschnitt Langarm Gedruckt Pullover Unisex',
    image:
      'https://m.media-amazon.com/images/I/71hIrYVk52L._AC_UL960_QL65_.jpg',
    rating: { rate: '4.8', count: 0 },
    price: 49.99,
    category: "men's clothing",
    description:
      'Anime Frau Strickpullover Herren Oversized Sweatshirts Rundhalsausschnitt Langarm Gedruckt Pullover Unisex'
  },
  {
    title:
      'Viking Thors Hammer Sweatshirt, Nordische Mythologie Wolf Streetwear Casual Hoody Hoodie, 3D Allover Bedrucktes Unisex Langarm Pullover Sweatshirt',
    image:
      'https://m.media-amazon.com/images/I/61fi8bqxmzL._AC_UL960_QL65_.jpg',
    rating: { rate: '3.6', count: 0 },
    price: 32.99,
    category: "men's clothing",
    description:
      'Viking Thors Hammer Sweatshirt, Nordische Mythologie Wolf Streetwear Casual Hoody Hoodie, 3D Allover Bedrucktes Unisex Langarm Pullover Sweatshirt'
  },
  {
    title:
      'Tank Top Pullove Herren Sommer Sport Fitness Stringer Gym Trägershirts T-shirt Jogging Ärmellos Hoodie Muskelshirt Slim Fit Tanktops Männer Tankshirt Unterhemd Achselshirt Laufshirt',
    image:
      'https://m.media-amazon.com/images/I/611X4iX3UaS._AC_UL960_QL65_.jpg',
    rating: { rate: '3.9', count: 0 },
    price: 17.99,
    category: "men's clothing",
    description:
      'Tank Top Pullove Herren Sommer Sport Fitness Stringer Gym Trägershirts T-shirt Jogging Ärmellos Hoodie Muskelshirt Slim Fit Tanktops Männer Tankshirt Unterhemd Achselshirt Laufshirt'
  },
  {
    title:
      'Herren Hip Hop Jeans Baggy Jeans Straight Leg Gewaschen Jeanshose Casual Denim Hosen Vintage Bedruckte Jeans Teenager Jungen Skateboard Hose Streetwear',
    image:
      'https://m.media-amazon.com/images/I/418N1fVv8DL._AC_UL960_QL65_.jpg',
    rating: { rate: '3.9', count: 0 },
    price: 22.53,
    category: "men's clothing",
    description:
      'Herren Hip Hop Jeans Baggy Jeans Straight Leg Gewaschen Jeanshose Casual Denim Hosen Vintage Bedruckte Jeans Teenager Jungen Skateboard Hose Streetwear'
  },
  {
    title:
      'Kuriertasche aus Leinenstoff mit viel Fassungsvermögen, Hobotasche mit mehreren Innenfächern, Freizeittasche, Damen- und Herrenumhängetasche',
    image:
      'https://m.media-amazon.com/images/I/41oPZzioW1L._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 23.99,
    category: "men's clothing",
    description:
      'Kuriertasche aus Leinenstoff mit viel Fassungsvermögen, Hobotasche mit mehreren Innenfächern, Freizeittasche, Damen- und Herrenumhängetasche'
  },
  {
    title:
      'Herren Damen Y2K Gothic Cross Sweatshirt Grunge Emo Alt Harajuku Fake Zweiteiliger Hoodie Top Dark Academia Punk Ästhetisch',
    image:
      'https://m.media-amazon.com/images/I/61rG4YEPFIL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 16.99,
    category: "men's clothing",
    description:
      'Herren Damen Y2K Gothic Cross Sweatshirt Grunge Emo Alt Harajuku Fake Zweiteiliger Hoodie Top Dark Academia Punk Ästhetisch'
  },
  {
    title: 'Herren T-shirt, Schwarz,',
    image:
      'https://m.media-amazon.com/images/I/61pFCgnjopL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 13,
    category: "men's clothing",
    description: 'Herren T-shirt, Schwarz,'
  },
  {
    title:
      'Thermounterwäsche Herren, Funktionsunterwäsche Skiunterwäsche Winter Thermowäsche Set Warm Weich Funktionswäsche atmungsaktiv Thermo Unterwäsche Thermounterhemd Thermounterhose für Männer',
    image:
      'https://m.media-amazon.com/images/I/71S9+fv3NmL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 29.98,
    category: "men's clothing",
    description:
      'Thermounterwäsche Herren, Funktionsunterwäsche Skiunterwäsche Winter Thermowäsche Set Warm Weich Funktionswäsche atmungsaktiv Thermo Unterwäsche Thermounterhemd Thermounterhose für Männer'
  },
  {
    title: 'Herren Ent22 Hoody Hooded Sweat (1er Pack)',
    image:
      'https://m.media-amazon.com/images/I/51kYE9-giML._AC_UL960_QL65_.jpg',
    rating: { rate: '4.4', count: 0 },
    price: 22.91,
    category: "men's clothing",
    description: 'Herren Ent22 Hoody Hooded Sweat (1er Pack)'
  },
  {
    title:
      'Sportshirt Herren, Funktionsshirt Langarm Laufshirt Männer Fitnessshirt Atmungsaktiv T Shirts für Running Gym Jogging',
    image:
      'https://m.media-amazon.com/images/I/61qe2qqPBSL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 15.99,
    category: "men's clothing",
    description:
      'Sportshirt Herren, Funktionsshirt Langarm Laufshirt Männer Fitnessshirt Atmungsaktiv T Shirts für Running Gym Jogging'
  },
  {
    title:
      '3 or 5er Pack Sport Tshirts Herren Funktionsshirt Sport Shirt Men Schnelltrocknend Trainingsshirt Fitness Sportshirt Laufshirt Kurzarm Männer Atmungsaktive T-Shirt',
    image:
      'https://m.media-amazon.com/images/I/61daMcvzJhL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 32.99,
    category: "men's clothing",
    description:
      '3 or 5er Pack Sport Tshirts Herren Funktionsshirt Sport Shirt Men Schnelltrocknend Trainingsshirt Fitness Sportshirt Laufshirt Kurzarm Männer Atmungsaktive T-Shirt'
  },
  {
    title: 'Herren Squad 21 JSY Ss T-Shirt',
    image:
      'https://m.media-amazon.com/images/I/41UM1OdlUBL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.4', count: 0 },
    price: 11.63,
    category: "men's clothing",
    description: 'Herren Squad 21 JSY Ss T-Shirt'
  },
  {
    title:
      'Jogginghose Herren Baumwolle Sporthose Joggers Trainingshose Fitness Slim Fit Hose',
    image:
      'https://m.media-amazon.com/images/I/61lBH+vQ2BL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 32.29,
    category: "men's clothing",
    description:
      'Jogginghose Herren Baumwolle Sporthose Joggers Trainingshose Fitness Slim Fit Hose'
  },
  {
    title:
      'BHDan Herren Strickpullover Feinstrick Pullover mit Rundhalsausschnitt',
    image:
      'https://m.media-amazon.com/images/I/91NpzQQqjUL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.1', count: 0 },
    price: 39.95,
    category: "men's clothing",
    description:
      'BHDan Herren Strickpullover Feinstrick Pullover mit Rundhalsausschnitt'
  },
  {
    title: 'Herren Cap Classic BB Cap mit Logo',
    image:
      'https://m.media-amazon.com/images/I/713b9JcOW9L._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 25.59,
    category: "men's clothing",
    description: 'Herren Cap Classic BB Cap mit Logo'
  },
  {
    title: 'Herren 90‘s Jeans',
    image:
      'https://m.media-amazon.com/images/I/810Ksthlt9L._AC_UL960_QL65_.jpg',
    rating: { rate: '3.3', count: 0 },
    price: 39.9,
    category: "men's clothing",
    description: 'Herren 90‘s Jeans'
  },
  {
    title:
      'Kompressionsshirt Herren, Leggings Sport Laufhose Funktionsshirt Männer Kompressionshose Funktionswäsche für Running Gym Fitness',
    image:
      'https://m.media-amazon.com/images/I/71g8n-Ah7qL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 50.98,
    category: "men's clothing",
    description:
      'Kompressionsshirt Herren, Leggings Sport Laufhose Funktionsshirt Männer Kompressionshose Funktionswäsche für Running Gym Fitness'
  },
  {
    title:
      'Herren Hose Lang Regular Fit Hose Skinny Jeans Strand Pumphose Stretch Straight Lange Sport Hose Jogger Cargo Pants Destroyed Hose Hose mit Taschen Schmale Passform',
    image:
      'https://m.media-amazon.com/images/I/515rp+92ZLL._AC_UL960_QL65_.jpg',
    rating: { rate: '2.9', count: 0 },
    price: 19.99,
    category: "men's clothing",
    description:
      'Herren Hose Lang Regular Fit Hose Skinny Jeans Strand Pumphose Stretch Straight Lange Sport Hose Jogger Cargo Pants Destroyed Hose Hose mit Taschen Schmale Passform'
  },
  {
    title: 'Herren Fußballshorts Park II',
    image:
      'https://m.media-amazon.com/images/I/813uNkigNML._AC_UL960_QL65_.jpg',
    rating: { rate: '4.4', count: 0 },
    price: 12.9,
    category: "men's clothing",
    description: 'Herren Fußballshorts Park II'
  },
  {
    title: 'Unisex Leatherpatch Long Beanie Strickmütze',
    image:
      'https://m.media-amazon.com/images/I/51zbj15D3cL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.4', count: 0 },
    price: 9.25,
    category: "men's clothing",
    description: 'Unisex Leatherpatch Long Beanie Strickmütze'
  },
  {
    title: 'Herren Park 20 Shirt, Black/White, L EU',
    image:
      'https://m.media-amazon.com/images/I/61G1DusY+9L._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 37,
    category: "men's clothing",
    description: 'Herren Park 20 Shirt, Black/White, L EU'
  },
  {
    title: 'Herren Core 18 Pullover (1er Pack)',
    image:
      'https://m.media-amazon.com/images/I/81sdFNTnPbS._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 21.95,
    category: "men's clothing",
    description: 'Herren Core 18 Pullover (1er Pack)'
  },
  {
    title:
      'Herren Techwear Japanischer Harajuku Kapuzenpullover Hip Hop Streetwear Urban Hoodie',
    image:
      'https://m.media-amazon.com/images/I/610okXIW0oL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.4', count: 0 },
    price: 38.99,
    category: "men's clothing",
    description:
      'Herren Techwear Japanischer Harajuku Kapuzenpullover Hip Hop Streetwear Urban Hoodie'
  },
  {
    title:
      'Poloshirt Herren Kurzarm Polohemd Giraffe Stickerei Einfarbig T-Shirt S-XXL',
    image:
      'https://m.media-amazon.com/images/I/612-Rta75KL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.2', count: 0 },
    price: 25.98,
    category: "men's clothing",
    description:
      'Poloshirt Herren Kurzarm Polohemd Giraffe Stickerei Einfarbig T-Shirt S-XXL'
  },
  {
    title: 'Herren Pullover, ,',
    image:
      'https://m.media-amazon.com/images/I/61GyPMtVE4L._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 21.9,
    category: "men's clothing",
    description: 'Herren Pullover, ,'
  },
  {
    title:
      'Herren Armour HeatGear Compression Short Sleeve T-Shirt Kurze Ärmel',
    image:
      'https://m.media-amazon.com/images/I/41YMiNqUH4S._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 19.95,
    category: "men's clothing",
    description:
      'Herren Armour HeatGear Compression Short Sleeve T-Shirt Kurze Ärmel'
  },
  {
    title:
      'Oversize Pullover Baumwolle mit Rundhalskragen schwarzer Männer Pulli Sweatshirt Langarmshirt',
    image:
      'https://m.media-amazon.com/images/I/7150JXOcqcL._AC_UL960_QL65_.jpg',
    rating: { rate: '5.0', count: 0 },
    price: 34.99,
    category: "men's clothing",
    description:
      'Oversize Pullover Baumwolle mit Rundhalskragen schwarzer Männer Pulli Sweatshirt Langarmshirt'
  },
  {
    title:
      'Herren Hoodie Pullover mit Kapuze Kapuzenpullover für Männer Herren L Los Angel Männer Brief Grafik Kapuzendruck Rundhals Langarm Sweatshirt Tops',
    image:
      'https://m.media-amazon.com/images/I/61GhsZTPziL._AC_UL960_QL65_.jpg',
    rating: { rate: '3.1', count: 0 },
    price: 20.99,
    category: "men's clothing",
    description:
      'Herren Hoodie Pullover mit Kapuze Kapuzenpullover für Männer Herren L Los Angel Männer Brief Grafik Kapuzendruck Rundhals Langarm Sweatshirt Tops'
  },
  {
    title: 'Herren Männliches Basisches Bike-Kragen Übergroß Kurzarm T-Shirt',
    image:
      'https://m.media-amazon.com/images/I/61yl8BdPnpL._AC_UL960_QL65_.jpg',
    rating: { rate: '3.0', count: 0 },
    price: 5.48,
    category: "men's clothing",
    description:
      'Herren Männliches Basisches Bike-Kragen Übergroß Kurzarm T-Shirt'
  },
  {
    title:
      'Bundhose Arbeitshose Arbeitskleidung Hose Handwerker Gärtner 320g/m2, grau/blau Professional, Gr. 46-64',
    image:
      'https://m.media-amazon.com/images/I/61BKpte7JxL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.1', count: 0 },
    price: 21.49,
    category: "men's clothing",
    description:
      'Bundhose Arbeitshose Arbeitskleidung Hose Handwerker Gärtner 320g/m2, grau/blau Professional, Gr. 46-64'
  },
  {
    title:
      '6 Stück Punk Armband Nieten für Herren Damen Goth Breit Lederarmband Schwarz Set Rock Biker Armband Manschette Spikes Halloween Gothic Schmuck',
    image:
      'https://m.media-amazon.com/images/I/81f-yHfNZRL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 22.99,
    category: "men's clothing",
    description:
      '6 Stück Punk Armband Nieten für Herren Damen Goth Breit Lederarmband Schwarz Set Rock Biker Armband Manschette Spikes Halloween Gothic Schmuck'
  },
  {
    title: 'Herren Tommy Logo Hoody Kapuzenpullover',
    image:
      'https://m.media-amazon.com/images/I/81Z4Jj+ndwL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 80.14,
    category: "men's clothing",
    description: 'Herren Tommy Logo Hoody Kapuzenpullover'
  },
  {
    title:
      '2er Pack Herren Kompressionsshirt Funktionsshirt Langarm Sportshirt Fitnessshirt Männer Atmungsaktiv Laufshirt für Running Jogging Gym',
    image:
      'https://m.media-amazon.com/images/I/71YpFUct9oL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 26.99,
    category: "men's clothing",
    description:
      '2er Pack Herren Kompressionsshirt Funktionsshirt Langarm Sportshirt Fitnessshirt Männer Atmungsaktiv Laufshirt für Running Jogging Gym'
  },
  {
    title:
      'Herren Baggy Jeans Y2K Streetwear Skateboard Jeanshosen Stickerei Vintage Jungen Jeans Hip Hop Style Breite Hosen',
    image:
      'https://m.media-amazon.com/images/I/51QChQvB-cL._AC_UL960_QL65_.jpg',
    rating: { rate: '5.0', count: 0 },
    price: 24.99,
    category: "men's clothing",
    description:
      'Herren Baggy Jeans Y2K Streetwear Skateboard Jeanshosen Stickerei Vintage Jungen Jeans Hip Hop Style Breite Hosen'
  },
  {
    title:
      'Jeanshosen Herren Hose mit Weitem Bein Patchwork Jeans Casual Relaxed Fit Jeanshose Denim Hosen Baggy Hip Hop Jeans Vintage Y2K Straight Leg Streetwear',
    image:
      'https://m.media-amazon.com/images/I/41C9RFyv0GL._AC_UL960_QL65_.jpg',
    rating: { rate: '3.0', count: 0 },
    price: 25.99,
    category: "men's clothing",
    description:
      'Jeanshosen Herren Hose mit Weitem Bein Patchwork Jeans Casual Relaxed Fit Jeanshose Denim Hosen Baggy Hip Hop Jeans Vintage Y2K Straight Leg Streetwear'
  },
  {
    title:
      'Herren Cargo Hose Viele Taschen Baumwolle Freizeithose Loose Fit Arbeitshose (Ohne Gürtel)',
    image:
      'https://m.media-amazon.com/images/I/61P5PRyG-0L._AC_UL960_QL65_.jpg',
    rating: { rate: '3.7', count: 0 },
    price: 38.99,
    category: "men's clothing",
    description:
      'Herren Cargo Hose Viele Taschen Baumwolle Freizeithose Loose Fit Arbeitshose (Ohne Gürtel)'
  },
  {
    title:
      'Herren Jeans Sterne Drucken Jeanshosen Patchwork Jeanshose Denim Hosen Baggy Hip Hop Jeans Vintage Y2K Straight Leg Streetwear',
    image:
      'https://m.media-amazon.com/images/I/51OhBOk-TsL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.0', count: 0 },
    price: 22.96,
    category: "men's clothing",
    description:
      'Herren Jeans Sterne Drucken Jeanshosen Patchwork Jeanshose Denim Hosen Baggy Hip Hop Jeans Vintage Y2K Straight Leg Streetwear'
  },
  {
    title:
      'Crossdressers Silikon Brüste - runde Kragen-Entwurfs-Silikon Falsche Brüste - Naturgetreue Fake Breasts für Cross-Dressing Transvestite Cosplay, G Cup,A',
    image:
      'https://m.media-amazon.com/images/I/31wDf6eR1JL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.0', count: 0 },
    price: 58.79,
    category: "men's clothing",
    description:
      'Crossdressers Silikon Brüste - runde Kragen-Entwurfs-Silikon Falsche Brüste - Naturgetreue Fake Breasts für Cross-Dressing Transvestite Cosplay, G Cup,A'
  },
  {
    title: 'Herren Dri-fit Academy Shorts',
    image:
      'https://m.media-amazon.com/images/I/71kMxn+g25L._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 12.92,
    category: "men's clothing",
    description: 'Herren Dri-fit Academy Shorts'
  },
  {
    title:
      'Herren 3er Pack Langarmshirt T-Shirts, UPF 50+ UV Schutz Schnelltrocknend Funktionsshirt Laufshirts, Atmungsaktiv Langarm Sportshirt Gym Running Top Outdoor Workout Fitness Oberteil für Männer',
    image:
      'https://m.media-amazon.com/images/I/61qlIrF0RyL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 34.99,
    category: "men's clothing",
    description:
      'Herren 3er Pack Langarmshirt T-Shirts, UPF 50+ UV Schutz Schnelltrocknend Funktionsshirt Laufshirts, Atmungsaktiv Langarm Sportshirt Gym Running Top Outdoor Workout Fitness Oberteil für Männer'
  },
  {
    title: 'Herren Trunks, 3er Pack',
    image:
      'https://m.media-amazon.com/images/I/71Sx+kCKfGL._AC_UL960_QL65_.jpg',
    rating: { rate: '3.7', count: 0 },
    price: 42.95,
    category: "men's clothing",
    description: 'Herren Trunks, 3er Pack'
  },
  {
    title:
      'Thermounterwäsche Herren, Funktionsunterwäsche Winter Skiunterwäsche Männer Lange Unterwäsche Funktionswäsche Atmungsaktiv Thermo Unterwasche für Ski Running Fußball',
    image:
      'https://m.media-amazon.com/images/I/81En4Pdmx0L._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 33.99,
    category: "men's clothing",
    description:
      'Thermounterwäsche Herren, Funktionsunterwäsche Winter Skiunterwäsche Männer Lange Unterwäsche Funktionswäsche Atmungsaktiv Thermo Unterwasche für Ski Running Fußball'
  },
  {
    title:
      'Herren Netz Unterhemd Transparent Muskel Tank Sexy T Shirt Unterhemd Athletic Netzhemd - Schwarz',
    image:
      'https://m.media-amazon.com/images/I/61GBOTuQ0nL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.3', count: 0 },
    price: 18.99,
    category: "men's clothing",
    description:
      'Herren Netz Unterhemd Transparent Muskel Tank Sexy T Shirt Unterhemd Athletic Netzhemd - Schwarz'
  },
  {
    title:
      'Herren Tech 2.0 Ss Tee atmungsaktives Sportshirt, kurzärmliges und schnelltrocknendes Trainingsshirt mit Loser Passform',
    image:
      'https://m.media-amazon.com/images/I/71Nh+43jEOL._AC_UL960_QL65_.jpg',
    rating: { rate: '4.5', count: 0 },
    price: 20.12,
    category: "men's clothing",
    description:
      'Herren Tech 2.0 Ss Tee atmungsaktives Sportshirt, kurzärmliges und schnelltrocknendes Trainingsshirt mit Loser Passform'
  },
  {
    title:
      'Trainingsanzug für Herren Sommer Sportanzug 2 Teiliges Outfit Sport Set Kurzarm T-Shirts + Kurze Hose Sets Freizeitanzug Männer Business Polo Hemd mit Revers Sporthose',
    image:
      'https://m.media-amazon.com/images/I/61dPizRbh8L._AC_UL960_QL65_.jpg',
    rating: { rate: '3.2', count: 0 },
    price: 19.99,
    category: "men's clothing",
    description:
      'Trainingsanzug für Herren Sommer Sportanzug 2 Teiliges Outfit Sport Set Kurzarm T-Shirts + Kurze Hose Sets Freizeitanzug Männer Business Polo Hemd mit Revers Sporthose'
  },
  {
    title:
      'Backbone One iOS Gaming Controller for iPhone - PlayStation Edition - White',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_4a9ee46d-e7c0-4dd8-8682-2a6a621963dd',
    rating: { rate: 4.33, count: 54 },
    price: 99.99,
    category: 'electronics',
    description:
      'Play any controller supported games: Responsive analog triggers, tactile buttons, and clickable thumbsticks for the ultimate mobile gaming experience.'
  },
  {
    title:
      'Insten 3.5mm Wired Gaming In-Ear Headset with Microphone - Earbuds & Earphones for Phone Games, PS4, PS5, PC, Xbox Controller & Nintendo Switch',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_b4c2abd2-c043-4adc-b5d6-02b1c82da048',
    rating: { rate: 4.18, count: 11 },
    price: 13.99,
    category: 'electronics',
    description:
      'DUAL MIC: A removable mic is provided for gaming convenience. Communicate with your party clearly by having a microphone closer to your mouth. Flexible design allows you to adjust the angle to best pickup sound. Additional inline microphone is fitted with button controls. Adjust the volume, skip tracks and answer calls with the control hub'
  },
  {
    title:
      'HP HyperX Cloud Stinger S - Gaming Headset (Black) - Stereo - Mini-phone (3.5mm), USB 2.0 - Wired - 32 Ohm - 10 Hz - 22 kHz - Over-the-ear - Binaural',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_5d2e3370-2198-413c-8f14-de9deafdee9d',
    rating: { rate: 4.32, count: 19 },
    price: 69.99,
    category: 'electronics',
    description: 'Connectivity Technology: Wired'
  },
  {
    title: 'Backbone One Mobile Gaming Controller for iPhone - Black',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_a959e18b-268b-4af5-8f99-58a85d026571',
    rating: { rate: 4.56, count: 32 },
    price: 99.99,
    category: 'electronics',
    description:
      'Play Any Controller supported Games: Responsive analog triggers, tactile buttons, and clickable thumbsticks for the ultimate mobile gaming experience'
  },
  {
    title:
      'PopSockets PopGrip Cell Phone Grip &#38; Stand - Maze Game aMAZEing',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_bd4f68e0-82ee-4136-a448-ffd08a64ab92',
    rating: { rate: 4, count: 8 },
    price: 21.99,
    category: 'electronics',
    description: 'New PopGrip and PopTop designs allow for easy swapability'
  },
  {
    title: 'Apple iPhone 11 Pro Max Pre-Owned Unlocked (256GB) - Green',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_51070d6f-d697-41c6-9f9d-dc5ef9160a88',
    rating: {},
    price: 649.99,
    category: 'electronics',
    description:
      'Display: 6.5 inches Super Retina XDR OLED capacitive touchscreen w/ Scratch-resistant glass, oleophobic coating'
  },
  {
    title: 'Samsung Galaxy S10+ Pre-Owned (128GB) GSM/CDMA Smartphone - White',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_9145ad54-0092-41de-853e-97b76546707f',
    rating: { rate: 0, count: 0 },
    price: 279.99,
    category: 'electronics',
    description:
      '6.3 inch Super AMOLED Capacitive Touchscreen, 1440 x 3040 pixels with Corning Gorilla Glass 6'
  },
  {
    title: 'Samsung Galaxy Z Flip3 5G Unlocked (128GB) Smartphone - Cream',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_d7438c15-aec5-4598-ae53-ad1ca7c6eb11',
    rating: { rate: 4.47, count: 2476 },
    price: 999.99,
    category: 'electronics',
    description: 'Ultra compact design with a 6.7&quot; flexible display'
  },
  {
    title: 'Apple iPhone 8 Plus Pre-Owned Unlocked (256GB) GSM - Silver',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_9cfda4a5-062d-475d-b429-9601238ba69c',
    rating: {},
    price: 279.99,
    category: 'electronics',
    description:
      '5.5-inch widescreen LCD Multi-Touch Retina HD Display with IPS Technology, 1080 x 1920 pixel resolution with IP67 Certification and Oleophobic Coating'
  },
  {
    title: 'Motorola Moto G Stylus 2021 Unlocked (128GB) - Black',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_71eaf690-4b76-45aa-8b1b-667bcefdf9d5',
    rating: { rate: 3.23, count: 26 },
    price: 299.99,
    category: 'electronics',
    description:
      'Unlocked for the freedom to choose your carrier. Compatible with AT&T, Sprint, T-Mobile, and Verizon networks. SIM card not included. Customers may need to contact Sprint for activation on Sprint’s network.'
  },
  {
    title: 'Motorola Moto G Fast Unlocked (32GB) - White',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_8cce86af-c45f-498e-97c8-731d4ce747e9',
    rating: { rate: 3.81, count: 26 },
    price: 199.99,
    category: 'electronics',
    description:
      'Unlocked for the freedom to choose your carrier. Compatible with AT&T, Sprint, T-Mobile, and Verizon networks. Sim card not included. Customers may need to contact Sprint for activation on Sprint’s network.'
  },
  {
    title: 'Samsung Galaxy S10E Pre-Owned (128GB) GSM/CDMA Smartphone - Blue',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_0c833415-5e71-419c-ac8c-792e888b0d15',
    rating: { rate: 0, count: 0 },
    price: 199.99,
    category: 'electronics',
    description:
      'Display: 5.8 inches Dynamic AMOLED capacitive touchscreen w/ Corning Gorilla Glass 5 - Resolution: 1080 x 2280 pixels'
  },
  {
    title: 'Motorola Moto G Power 2021 Unlocked (64GB) - Gray',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_c3c8e48b-adcf-4d18-96e8-14e07a38f7cc',
    rating: { rate: 4.36, count: 42 },
    price: 249.99,
    category: 'electronics',
    description:
      'Unlocked for the freedom to choose your carrier. Compatible with AT&T, Sprint, T-Mobile, and Verizon networks. SIM card not included. Customers may need to contact Sprint for activation on Sprint’s network.'
  },
  {
    title: 'Apple iPhone XR Unlocked Pre-Owned (256GB) GSM/CDMA - White',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_8d702345-53f2-48bb-a5a3-453054d16626',
    rating: { rate: 3, count: 3 },
    price: 369.99,
    category: 'electronics',
    description: '6.1-inch IPS LCD Capacitive Touchscreen, 828 x 1792 pixels'
  },
  {
    title: 'Apple iPhone XR Pre-Owned Unlocked (64GB) GSM/CDMA - Coral',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_dcd0a5d0-f0a8-4cc5-9670-ee2bd49093e2',
    rating: {},
    price: 289.99,
    category: 'electronics',
    description: '6.1-inch IPS LCD Capacitive Touchscreen, 828 x 1792 pixels'
  },
  {
    title: 'Apple iPhone XR Unlocked Pre-Owned (256GB) GSM/CDMA - (PRODUCT)RED',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_cfaf6c5f-f1e3-47d2-ac08-bbae97df13ae',
    rating: { rate: 4, count: 2 },
    price: 369.99,
    category: 'electronics',
    description: '6.1-inch IPS LCD Capacitive Touchscreen, 828 x 1792 pixels'
  },
  {
    title:
      'Samsung Galaxy Note 20 5G 128GB ROM 8GB RAM N981 Unlocked Smartphone - Manufacturer Refurbished - Mystic Bronze',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_1b3cd2da-38a0-49c9-a81d-5ed915a74f68',
    rating: {},
    price: 279.99,
    category: 'electronics',
    description: '2.73 GHz, Dual Core + 2.5 GHz, Dual core + 2 GHz, Quad core'
  },
  {
    title:
      'Apple iPhone Unlocked XS Max Pre-Owned (64GB) GSM/CDMA Phone - Gray',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_0f4f8ea7-981e-4288-9863-e18ad956746a',
    rating: { rate: 2.67, count: 3 },
    price: 379.99,
    category: 'electronics',
    description:
      '6.5-inch Super AMOLED Capacitive Touchscreen, 1242 x 2688 pixels'
  },
  {
    title:
      'Samsung Galaxy S21 5G 128GB ROM 8GB RAM G991 Unlocked Smartphone - Manufacturer Refurbished - Phantom Gray',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_fab5aefc-9779-41fa-a658-049ed7da2330',
    rating: {},
    price: 289.99,
    category: 'electronics',
    description:
      'Dynamic AMOLED 2X offers vibrant color and amazing clarity for an unparalleled viewing experience.'
  },
  {
    title:
      'Samsung Galaxy Note10 Pre-Owned (256GB) GSM/CDMA Smartphone - Black',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_adb54718-501b-4148-af35-1d1bac279dba',
    rating: { rate: 5, count: 1 },
    price: 299.99,
    category: 'electronics',
    description:
      '6.3 inch Dynamic AMOLED Capacititive Touchscreen, with Corning Gorilla Glass, 1080 x 2280 pixel display'
  },
  {
    title: 'Apple iPhone X Pre-Owned (GSM-Unlocked) 256GB - Silver',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_f8546085-d4ee-4846-8cf1-105e140a81e0',
    rating: {},
    price: 319.99,
    category: 'electronics',
    description:
      '5.8-inch (Diagonal) All-Screen OLDE Mul-touch Super Retina HD Display, 1125 x 2436 pixel resolution with IP67 Certification, Oleophobic Coating'
  },
  {
    title:
      'Samsung Galaxy S20 5G 128gb Rom 8gb Ram G981 Unlocked Smartphone - Manufacturer Refurbished - Cosmic Gray',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_ec7d0cfe-fe37-435b-a78a-cc67c05ab178',
    rating: {},
    price: 209.99,
    category: 'electronics',
    description:
      'Defense-Grade Security - Samsung Knox, defense-grade security platform that’s built in from the chip up'
  },
  {
    title:
      'Samsung Galaxy S20 Ultra 5G 128GB ROM 12GB RAM G988 6.9" Unlocked Smartphone - Manufacturer Refurbished - Cosmic Black',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_bb50bd53-a2b6-45dd-8022-e32f3d2e1eff',
    rating: {},
    price: 284.99,
    category: 'electronics',
    description: 'Qualcomm SM8250 Snapdragon'
  },
  {
    title: 'Samsung Galaxy S20+ Pre-Owned (128GB) GSM/CDMA Smartphone - Blue',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_42e27605-6860-4861-98eb-c81fa9cbe80a',
    rating: { rate: 0, count: 0 },
    price: 399.99,
    category: 'electronics',
    description:
      'Display: 6.7 inches Dynamic AMOLED 2X, 120Hz, HDR10+ w/ Corning Gorilla Glass 6'
  }
]

const { randomBytes } = require('crypto')
const newd = d.map((da) => {
  if (!da.id) da.id = randomBytes(4).toString('hex')
  if (da.rating.count < 1) da.rating.count = Math.floor(Math.random() * 500)
  return da
})

require('dotenv').config()
const connectDB = require('./db/connect')
const Product = require('./models/Product')

const start = async () => {
  try {
    await connectDB(
      'mongodb+srv://saroj:B7ifRWEF97EdXThI@cluster0.zbn9w.mongodb.net/Ecommerce?retryWrites=true&w=majority'
    )
    await Product.deleteMany()
    await Product.create(newd)
    console.log('Success !!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()

//  {
//     "id": "15311824714079836401",
//     "id_v2": "15311824714079836401:7569027702511170509",
//     "title": "Pandora Knotted Heart Ring 6 / Sterling Silver",
//     "description": "Wear the timeless beauty of the love knot on your finger with this polished sterling silver ring from the Pandora 2019 Mother's Day collection. The looped, knotted heart combines shimmering pavé-set cubic zirconia with polished metal to arresting effect, redefining the ultimate symbol of love. Additional sizes may be available through special order at your nearest Jared location. Style # 198086Cz-54. Due to the nature of Sterling Silver, it's normal for an item to darken over time. Cleaning with a silver cleaning cloth will restore your charm or your local store is happy to help.",
//     "photos": [
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5cpj-LKcX05-r0mOys9NXs_toymYuy1wLGccVLR0yOBXT2BijNDUMCJ2CMVxK2fy0iRyaktYsO7NmFCkD8uvS7lSFGTB5&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR1puI-8Gi7uNUzx-r1aojh7VhL4N3_LQZHX8QxqVxUwNkuiMYKjISIU8YYy4P8kVfeoK6-q3Ja9aX5AjIyexfTZSC0Z9ai&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRa81gchnQqilCZ4Q39izbTf7Vvw1NbZcHRZmpL8i-e9Wd9dJEZzjb0AknaNG1AUrSRKETLTRyArDMQLA9SY1hU-6KOrkC7dg&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS-f-30xe3ZhahAghxDwCm_oaUmRVUqThNEAXrbmEBOSCH471MsJcG10ukiyT570JAmUZLP4tR2PX8kdf3YeAgwa-6uohsW&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhCJRfTnMdeKT5wvje6zHSdtJb85j_QlisjpPE4RrskcJMSPPsm-8ynl2ZDE6W7qK81KScoQCNo2GiAOReDj8kYhv9IfC9&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYLLDbbee4Ctng65oM3TOQ0btUq7X4LipkSyguyp0TIzJ63GZAPZozc-omhBOThnNPl1CTzkjaJHGr2NI5MUnx8Bu0oC7t&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdr_OqQgahAVYkpGXN5ZaNqYvSZJ74tXQEzzgkHs8qZ4OfSSJINgNOdHovq_FPBk23hnnSzXztFO07fxJeHitypJxf2vpSeg&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeARbtNaZMlqneePJJzBv7KqnjMZvc2JA2KJFUOCwCNM-wxFO6NoYMki-k-A53DC5aI0B85De-vnEr6izhi726MYoxbD0gMA&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQTieiiF3p6nM1cZRtoozN8xrEINu5AKCFoRglybR8lq1c1r3PE5sGlXzL3jBVdno7XaX-D7QKKTyrAtMt2SWdCE1RnFeY6&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLXjoqaieTzgZQ4rFueHSWJK-OFn3d5fSQ_RcqxlavVOVs2lF7mRqqckfg_1vVHGkn0jQ6ciGjIVAH7Q1v7RTZLZm5cK3_&usqp=CAE"
//     ],
//     "attributes": {
//       "Material": "Silver, Cubic Zirconia, Sterling Silver",
//       "Size": "6"
//     },
//     "rating": 4.2,
//     "page_url": "https://google.com/shopping/product/15311824714079836401?gl=us&hl=en&prds=pid%3A7569027702511170509",
//     "offers_page_url": "https://google.com/shopping/product/15311824714079836401/offers?gl=us&hl=en&prds=pid%3A7569027702511170509",
//     "specs_page_url": "https://google.com/shopping/product/15311824714079836401/specs?gl=us&hl=en&prds=pid%3A7569027702511170509",
//     "reviews_page_url": "https://google.com/shopping/product/15311824714079836401/reviews?gl=us&hl=en&prds=pid%3A7569027702511170509",
//     "num_reviews": 98,
//     "typical_price_range": ["$73.89", "$75.00"],
//     "offer": {
//       "store_name": "Pandora Mall of America",
//       "store_rating": 4.8,
//       "offer_page_url": "https://www.becharming.com/knotted-heart-ring.html",
//       "store_review_count": 706,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=becharming.com&c=US&v=19&hl=en",
//       "price": "$75.00",
//       "shipping": "Free delivery",
//       "tax": "+$0.00 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "16745239339785337628",
//     "id_v2": "16745239339785337628:4906680951504403646",
//     "title": "Amlbb Women Rings Men's Women's Betrothal Engagemen Rings Jewelery Geometric Type Diamond Ring Jewelry Gift on Clearance, Adult Unisex, Size: 6, Size:",
//     "description": "Men's Women's Betrothal Engagemen Rings Jewelery Geometric Type Diamond Ring Feature: Type: Ring Style: Women Style:Trendy Quantity:1PC Style: Fashion Material: alloy Catch this beautiful accessories for you. Match with suitable apparel for different occasion. Special design and unique structure, a popular item. Suitable gifts occasions: Travel ;Wedding;Others. Package Content: 1PC Rings",
//     "photos": [
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSTzLwumGk_U3FSdQpeydVzHLhTeNuOtDCHjptTqsi_pisoYlt_HaMqkQDZplGir0th1ucsMxb8O6TlnHFZ4KcIqJIUsM-O&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRqQ7M1sBJ_4mX0t4QXQkTFkPbHeJss5hWX0TSGo50_n7Iz2BfAQtl5gtoSfYkkn8_ndPThkJwl4jJJmzAkvoGvPZdbmJV&usqp=CAE"
//     ],
//     "attributes": {
//       "Material": "Silver, Diamond, Sterling Silver",
//       "Features": "Birthstone",
//       "Birth Month": "July",
//       "Size": "6",
//       "Color": "Size:7"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/16745239339785337628?gl=us&hl=en&prds=pid%3A4906680951504403646",
//     "offers_page_url": "https://google.com/shopping/product/16745239339785337628/offers?gl=us&hl=en&prds=pid%3A4906680951504403646",
//     "specs_page_url": "https://google.com/shopping/product/16745239339785337628/specs?gl=us&hl=en&prds=pid%3A4906680951504403646",
//     "reviews_page_url": "https://google.com/shopping/product/16745239339785337628/reviews?gl=us&hl=en&prds=pid%3A4906680951504403646",
//     "num_reviews": 0,
//     "typical_price_range": ["$4.03", "$4.03"],
//     "offer": {
//       "store_name": "Walmart - qionghaishiyoujieyadianzishangwuyouxiangongsi",
//       "store_rating": null,
//       "offer_page_url": "https://www.walmart.com/ip/Up-to-65-off-amlbb-Women-Rings-Men-s-Women-s-Betrothal-Engagemen-Rings-Jewelery-Geometric-Type-Diamond-Ring-Jewelry-Gift-on-Clearance/1147854305?wmlspartner=wlpa&selectedSellerId=101282336",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$4.03",
//       "shipping": "$3.96 delivery",
//       "tax": "+$0.71 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "1:8894996000274138085",
//     "id_v2": "1:8894996000274138085",
//     "title": "Chargances Silver Crystal Rhinestone Finger Ring Bracelet Boho Slave Chain Bracelet Hand Harness Finger Ring Bracelet Charm Jewelry for Women Girls",
//     "description": "Exquisite alloy accessories bangle,classy,simple and trendy,and not easy to fade and break. Harness bangle bracelets is adjustable and fits most people's size, you don't need to worry about the size. A minimalist ring bracelet hand chain so comfortable you will forget it’s on. This bracelet with ring attached won't tangle and knot and is an elegant yet playful new piece to spice up your jewelry collection Beautiful gifts packaging on christmas, birthday, anniversary, valentine's day, mother's day, send to your best friend, lover, friend, wife, mother and daughter, grandma's delicate and surprise gift, or just give yourself a small gift, feeling serotonin positive energy 100% satisfaction and money back guarantee. If you have any questions, contact us at any time. Amazing shining bracelet of crystals for your very special day. It is made of clear crystals, pearls and silver, All our handmade jewelery was made using the best materials for you. A magnificent bracelet for an extremely elegant woman on a wedding day, I'm sure you will get a lot of praise. br br Thank you for visiting my shop and I'm looking forward to receiving your order ( ‿ )",
//     "photos": [
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSvz60nYLCFc8oFYI8at_Cie2NKy2IJJiDmXkbY1UbeP8aCvlmOlbgVYit8Ua52axSYjlm8twUHZjKezHauMRb7Lu282449&usqp=CAE"
//     ],
//     "attributes": {
//       "Features": "Charm",
//       "Department": "Kids', Girls'",
//       "Material": "Silver, Rhinestone"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/1?gl=us&hl=en&prds=pid%3A8894996000274138085",
//     "offers_page_url": "https://google.com/shopping/product/1/offers?gl=us&hl=en&prds=pid%3A8894996000274138085",
//     "specs_page_url": "https://google.com/shopping/product/1/specs?gl=us&hl=en&prds=pid%3A8894996000274138085",
//     "reviews_page_url": "https://google.com/shopping/product/1/reviews?gl=us&hl=en&prds=pid%3A8894996000274138085",
//     "num_reviews": 0,
//     "typical_price_range": null,
//     "offer": {
//       "store_name": "Amazon.com - Seller",
//       "store_rating": null,
//       "offer_page_url": "https://www.amazon.com/Chargances-Crystal-Rhinestone-Bracelet-Harness/dp/B09TKRBRNB?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A3SYMNXJH5RFSI",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$8.98",
//       "shipping": "$5.99 delivery",
//       "tax": "+$1.33 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "830634646111760415",
//     "id_v2": "830634646111760415:3346385862656492592",
//     "title": "Pandora Clear Heart Solitaire Ring CZ Sterling Silver",
//     "description": "This solitaire ring features the symbol of a promise: a single heart-shaped clear cubic zirconia. Perfect as a gift to your loved one, this sterling silver ring offers up the emblem of a solitary heart-your heart-for the wearer to love and cherish. Look at the heart solitaire ring closely and you'll see the claw setting has freehand heart outlines. This ring stacks well with others from this collection to add a little sparkle to your everyday style. Due to the nature of Sterling Silver, it's normal for an item to darken over time. Cleaning with a silver cleaning cloth will restore your charm or your local store is happy to help.",
//     "photos": [
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRM0JZGPB1Ji0b_AjQWu77PvCBO1m2MWS2DNqtiqFw_-TR_xyxuyFrBiu-DhNNBJMWV3xb1bPI-nRG7bCCmi5DIjpygZVFRDQ&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8wrHp6P7kCoHjcKhP2xGx0ktvub9gXSBvsRs0sRppWlMPolCiTTBdXr5N6_6B2jFP1p1XJXz2qZLzo1dCP_NBguUdoFTzOw&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQOsY5X67vEXWIhSqUsTxzeVv6yApf41c460ElzHey864Tu3eU5rA0_EloRKhQ709CTdqbvALpSypgm25gLAxV4KW7-sFX5Sg&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXbD38daQVxE8rs7vcJLj97F60CtMEo5XkIdZD4xkg1bMy1rd5JSJyRak8LwkUpoukWZeVTM466DEfBpR_LVN_-Cop5l2buw&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRH2or_-FEBO4U299DZoAc_iNdkb3ciPrdQ2I-OZnbgE1cCDA8tmKv60xmwv2LpjICM_aibijmMc_NkuV2h8Zp3wRxcsz-G&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQUc0ar7Jh_uPL9sMJcw2mF9Ybt5nCr7fdDU4GSL4btbtS1ZrZwRoXRpTGIRPr1yDKrISvekng0kn3uASmncMlzi9cDr6CqUQ&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQAqPgaDh-A_cjI9Dqn-2UGoN497_m1XeWVQKWThfhsyQRAtQ-n7L3OVuGoTP3SzzxSsOe6x57EaGfTrXOFe-6yrN5gB6NS&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRWUOeYs4qjl20JCa-ndjL_P_dNERw0PXOK_usW6TRHq9Das6U-fTgBGdCEgms9HH5nN0NiIle1-ZUIofou6qAPVkAeQyB8tQ&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGqFb-PcXQb2w6ho2e5ZIMNZfMj9sHtP-IbYGlh2ErAkSWoH36J8rAP--zGgd1fa8GIicQEZPTQYxkS0ssOo39LoKGY8T6NQ&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZsuFlGfZLV9w3oqa8CcG6jiesXHBjpojnD32aIFWWIWNOXs7bRn_w9Lx2kxmj_kZSkD3_r_jZDfVg46_0LE72gj3Biu6S&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtUbpGh2DwJnZFJlEP-kqNg7NDuXn39Xnjak-zZgBzkIExhOijM1c-an0EPvNND2XK9BtUd2LSg4f5X68qYanjiy0LG0up&usqp=CAE"
//     ],
//     "attributes": {
//       "Material": "Silver, Cubic Zirconia, Sterling Silver",
//       "Size": "6"
//     },
//     "rating": 4.3,
//     "page_url": "https://google.com/shopping/product/830634646111760415?gl=us&hl=en&prds=pid%3A3346385862656492592",
//     "offers_page_url": "https://google.com/shopping/product/830634646111760415/offers?gl=us&hl=en&prds=pid%3A3346385862656492592",
//     "specs_page_url": "https://google.com/shopping/product/830634646111760415/specs?gl=us&hl=en&prds=pid%3A3346385862656492592",
//     "reviews_page_url": "https://google.com/shopping/product/830634646111760415/reviews?gl=us&hl=en&prds=pid%3A3346385862656492592",
//     "num_reviews": 38,
//     "typical_price_range": ["$50.00", "$50.00"],
//     "offer": {
//       "store_name": "Reeds Jewelers",
//       "store_rating": 4.6,
//       "offer_page_url": "https://www.reeds.com/pandora-clear-heart-solitaire-ring-plu198691c01.html?CAWELAID=120073160000225017",
//       "store_review_count": 2947,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=reeds.com&c=US&v=19&hl=en",
//       "price": "$50.00",
//       "shipping": "Free delivery by Thu, Mar 30",
//       "tax": "+$4.44 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "5578069241051136220",
//     "id_v2": "5578069241051136220:4252180576499994988",
//     "title": "Sparkle Cut Eagle Head Pendant Necklace in Solid Gold (Yellow/Rose/White) Yellow Gold | Factory Direct Jewelry",
//     "description": "Our unique designs are one of a kind proudly designed and manufactured in the USA. Necklace/Pendant Measurements Chain size 0.5 mm Pendant Height with Bail: 0.85\" (21.59 mm) Pendant Height without Bail:0.65\" (16.51 mm) Pendant Width: 0.50\" (12.7 mm) Pendant Depth(average): 0.05\" (1.27 mm) Bail Measurements Bail Fits up to a 3.5 mm chain. Bail Height:0.28\" (7.112 mm) Bail Width: 0.14\" (3.556 mm) Bail Depth:0.21\" (5.334 mm) Weight: 14k: 1.50 grams 10K: 1.25 grams Necklace/Pendant Specifications Finish: High polished Available in 16\", 18\", 20\" and 22\" rolo chain sizes Bail Fits up to a 3.5 mm chain. Chain size 0.5 mm Metal: Solid Genuine Gold (in your choice of 10k or 14k) Made in USA | Men's Collection , Men's Pendants/Necklaces , Animal Collection , Eagle",
//     "photos": [
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT59ut47tRkyyB8qELq_OhOHxO5SMeKYYgBPn3PtkmWxb66RYfZtvCjljlOBoROMaRTo71QcBuP0K0YTZUR9jDmGrcXLDWmMQ&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJUoLdPINEfOP6YTi3d8Kk7sdN-X-pPynueOYO-duoj1vNPgBqMueL_rTYrdyV2YMAacKh1uzVhZtz1Y9Cet1J2WFv7D7VuA&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Pendant",
//       "Material": "Gold",
//       "Color": "Yellow Gold"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/5578069241051136220?gl=us&hl=en&prds=pid%3A4252180576499994988",
//     "offers_page_url": "https://google.com/shopping/product/5578069241051136220/offers?gl=us&hl=en&prds=pid%3A4252180576499994988",
//     "specs_page_url": "https://google.com/shopping/product/5578069241051136220/specs?gl=us&hl=en&prds=pid%3A4252180576499994988",
//     "reviews_page_url": "https://google.com/shopping/product/5578069241051136220/reviews?gl=us&hl=en&prds=pid%3A4252180576499994988",
//     "num_reviews": 0,
//     "typical_price_range": ["$89.99", "$89.99"],
//     "offer": {
//       "store_name": "Factory Direct Jewelry",
//       "store_rating": 4.5,
//       "offer_page_url": "https://www.factorydirectjewelry.com/mens-collection/sparkle-cut-eagle-head-pendant-necklace-in-solid-gold-yellow-rose-white/?sku=CMF450-10K%20-YG-PENDANT",
//       "store_review_count": 473,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=factorydirectjewelry.com&c=US&v=19&hl=en",
//       "price": "$89.99",
//       "shipping": "Free delivery by Mon, Mar 27",
//       "tax": "+$0.00 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "1:5765906152414136087",
//     "id_v2": "1:5765906152414136087",
//     "title": "Hand Made Rope Diamond -cut Screw Top 1/10AE Bezel 14k Gold BA70D/10AE",
//     "description": "14k Gold Hand Made Rope Diamond -cut Screw Top 1/10AE Bezel, MPN: BA70D/10AE, Diamond-cut, Polished, 14k Yellow gold, Bezel, Round, Screw top, Handmade., Material: Primary - Purity: 14K, Material: Primary: Gold, Product Type: Jewelry, Jewelry Type: Pendants & Charms, Material: Primary - Color: Yellow, Coin Note: Product does not include coin, Coin Held: Holds 1/10oz American Eagle coin",
//     "photos": [
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3KoJCi7E5rqbEx9v5BdStdn-s4PjS7LiGmF3Gmposk3oEI8i2YilhjPL1WoV77elXT6jpk8NieyLz4Hv8KvF-keNeCVF8Mg&usqp=CAE"
//     ],
//     "attributes": null,
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/1?gl=us&hl=en&prds=pid%3A5765906152414136087",
//     "offers_page_url": "https://google.com/shopping/product/1/offers?gl=us&hl=en&prds=pid%3A5765906152414136087",
//     "specs_page_url": "https://google.com/shopping/product/1/specs?gl=us&hl=en&prds=pid%3A5765906152414136087",
//     "reviews_page_url": "https://google.com/shopping/product/1/reviews?gl=us&hl=en&prds=pid%3A5765906152414136087",
//     "num_reviews": 0,
//     "typical_price_range": null,
//     "offer": {
//       "store_name": "HomeBello",
//       "store_rating": null,
//       "offer_page_url": "http://www.homebello.com/hand-made-rope-diamond-cut-screw-top-1-10ae-bezel-14k-gold-ba70d-10ae/",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$309.95",
//       "shipping": "Free delivery",
//       "tax": "+$0.00 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "16473982354912899868",
//     "id_v2": "16473982354912899868:5452351911773044512",
//     "title": "Custom Name Necklace Personalized Birthday Gifts Handmade Jewelry, Birth Flower Name Necklace Personalized Christmas Gifts Custom Jewelery",
//     "description": "Gold Name Necklace personalized gifts, Birthday Gifts Handmade Jewelry birth flower name necklace personalized Christmas gift custom jewelry Personalized Handmade Gift Ideas for Your Favorite Person, Few things feel as special as opening a monogrammed gift/Jewelry. Cross everyone you love off your list with these unique, bespoke presents. Not only do these types of gifts say, \"Hey, I put a lot of thought into this because I love you,\" but they also prove just how well you know a person and what they're into, which is always a nice feeling for whoever's on the receiving end. PersonalizedGiftsMall Personalized Birthflower Nameplate Necklace, for one, is perfect if your partner loves statement necklaces with a sentimental twist. teens who love accessorizing, PersonalizedGiftsMall Personalized Birth Flower and Birthstone Necklace is a beautiful option that's a sweet and subtle departure from traditional birthstone necklaces. D E T A I L S ---This piece is made by Hand. ---Dimensions: Depending on your name, Height sizes range from 4cm to 6cm. ---Come with Individual Gift Box. READY TO GIFT. ---All items are handmade with love, Custom items do take a little extra time to create. How to order? T A K E G O O D C A R E Please follow these tips to keep it longer time. --Keep it in a dry place. Enjoy your shopping :)",
//     "photos": [
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQAZ3Jd_wsQSw6_Tjle3Wel_c-5kw61M7KKjfnsBuoPvZMabDDMOomMFPvaOx6B3EFsJQdx2hNzBC0S8KRC6MgrcYPxOAyA-Q&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxxXpssjKblKQML1CrH9hVf-Zei02NUd1fDVN0FxTHSpBwhGQVc_2yJPskshaFJz-Tm4OTTz4ed63PdyOsQ8ClN3OF7eu4&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-XF31zZQiItMrskSX4aQ3jgVhTuEBYAvIkvuaY7y4pUyrMQxIUAVG2NDqVjsa5c8DIt89X3GBFNKC8ei0KGYP4-Mdixv92A&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVSUF2KcQm5hSFi9oWL1hbZcnXb9hZDKbBD2hhkx__SntFLpf_hQpWf889JrrkThYjc1cURbn4OlVmCwLryjUA01Br9uNlUg&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQC5w_FlfeioV0aLD9Cf4uiyHRnmWOYm0vBs9YciDdGfRMalzBkYeH0L32492gQ5lnIHY6UXAVcBBjXxdQl-se05K26BG7j&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQcN9Jp7mnmMUfeKE-tVO_GSrcsvFQlllwBgKLu0JyI4FgNKnMlRMdSMaY0xtNabULlZ9bGSac0FKYr3YYxj28yGAI9n8PVfQ&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRK7f8yKPNNWckbqycnDaTbdbeumJUqCiM2x_v4LmBProzLCNQnuzAtw-aRVf3W7PjdVfnJVNjhonEJEp3CfUym8fEk-VZYCw&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRC3RUpATCxxV1Xm2Q3X4YAsd3xAHsSTkR5lxB-YJLWcxgg7L8eD_Ejviie5_sA6Rk_WUV6NExkmkTnEtEWBCpFjLNqwBaTKA&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSutf7p5P_RS-I5Bru8dM4Nul3JvqWaPlP1aTE-qMjqZYi3msxewaaP2xtUsz12kJIxcJ1GNDjNL2fat7CeRY9Jdf4fdwf_&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT07UJhtHxEdRTDO6HGQ0DfcTYv9m27e6yOV6tnT5jAYwer58CItfuMqFq3Vj43mlS6u0Y9byuxBsOTg3cToio3kehiZh_y&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Pendant",
//       "Features": "Birthstone"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/16473982354912899868?gl=us&hl=en&prds=pid%3A5452351911773044512",
//     "offers_page_url": "https://google.com/shopping/product/16473982354912899868/offers?gl=us&hl=en&prds=pid%3A5452351911773044512",
//     "specs_page_url": "https://google.com/shopping/product/16473982354912899868/specs?gl=us&hl=en&prds=pid%3A5452351911773044512",
//     "reviews_page_url": "https://google.com/shopping/product/16473982354912899868/reviews?gl=us&hl=en&prds=pid%3A5452351911773044512",
//     "num_reviews": 0,
//     "typical_price_range": ["$26.55", "$26.55"],
//     "offer": {
//       "store_name": "Etsy",
//       "store_rating": null,
//       "offer_page_url": "https://www.etsy.com/listing/1343990531/custom-name-necklace-personalized?gpla=1&gao=1&",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$26.55",
//       "shipping": "Free delivery",
//       "tax": "+$0.00 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "12071397483936078381",
//     "id_v2": "12071397483936078381:12906471054812865008",
//     "title": "Lulus | Unforgettable Gold Rhinestone Drop Necklace",
//     "description": "A dainty gold-plated sterling silver chain holds a shimmering clear rhinestone, in a gold circle setting, and 1.5\" drop chain accented...",
//     "photos": [
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEChLNO7dN8FvTtVwiFrPy31RTy0S92NnKYNySBBdiPwHbkwi1xC7YjezkcXxy_kapzTyZh-KjG1Gu0EUciGxKleqrYXrZ&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Pendant",
//       "Material": "Gold, Silver, Rhinestone"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/12071397483936078381?gl=us&hl=en&prds=pid%3A12906471054812865008",
//     "offers_page_url": "https://google.com/shopping/product/12071397483936078381/offers?gl=us&hl=en&prds=pid%3A12906471054812865008",
//     "specs_page_url": "https://google.com/shopping/product/12071397483936078381/specs?gl=us&hl=en&prds=pid%3A12906471054812865008",
//     "reviews_page_url": "https://google.com/shopping/product/12071397483936078381/reviews?gl=us&hl=en&prds=pid%3A12906471054812865008",
//     "num_reviews": 0,
//     "typical_price_range": ["$15.20", "$15.20"],
//     "offer": {
//       "store_name": "Lulus",
//       "store_rating": 4.8,
//       "offer_page_url": "https://www.lulus.com/products/unforgettable-gold-rhinestone-drop-necklace/791992.html?pla=1",
//       "store_review_count": 8274,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=lulus.com&c=US&v=19&hl=en",
//       "price": "$15.20",
//       "shipping": "Delivery by Tue, Mar 28",
//       "tax": "+$1.35 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "12310867910980198158",
//     "id_v2": "12310867910980198158:15903986110470393247",
//     "title": "Pandora Open Heart Padlock & Key Bracelet Gift Set",
//     "description": "For the one who holds the key to your heart. Unlock the next chapter of your love story with this lovingly crafted gift set. Hand-finished in sterling silver and featuring our iconic padlock and key charm on an adjustable snake chain bracelet, what's not to love?",
//     "photos": [
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR9b3B2gdDYPYInaq0hNC1Yv9B5yTe8WtYksS2CkFVfolPiiQlmGPmPGcQmhS8F41Er6meh5FmEuKlPJxDUHYPIsW_xCpYy&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTG9pBh2rv0maBC79-9UK_f7-n5d5huYoJWmvl8BMoTWbHrpxzbS-ZwF4HaCa1KGgIve_ymnEdAkMPEjLgHMN68cc86JTI3&usqp=CAE"
//     ],
//     "attributes": {
//       "Features": "Charm",
//       "Material": "Silver"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/12310867910980198158?gl=us&hl=en&prds=pid%3A15903986110470393247",
//     "offers_page_url": "https://google.com/shopping/product/12310867910980198158/offers?gl=us&hl=en&prds=pid%3A15903986110470393247",
//     "specs_page_url": "https://google.com/shopping/product/12310867910980198158/specs?gl=us&hl=en&prds=pid%3A15903986110470393247",
//     "reviews_page_url": "https://google.com/shopping/product/12310867910980198158/reviews?gl=us&hl=en&prds=pid%3A15903986110470393247",
//     "num_reviews": 0,
//     "typical_price_range": ["$89.00", "$99.00"],
//     "offer": {
//       "store_name": "Precious Accents",
//       "store_rating": 4.4,
//       "offer_page_url": "https://www.preciousaccents.com/p-PND-B802038.html",
//       "store_review_count": 290,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=preciousaccents.com&c=US&v=19&hl=en",
//       "price": "$99.00",
//       "shipping": "Free delivery by Thu, Mar 23",
//       "tax": "+$0.00 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "9011459685991344595",
//     "id_v2": "9011459685991344595:17653107294927273217",
//     "title": "Hallmark Diamonds Paw Necklace 1/10 ct tw Sterling Silver 18\"",
//     "description": "This adorable necklace shows the true love you have for your furry friend and keeps them close to your heart. The necklace is crafted in sterling silver with the toes of the paw detailed in sparkling round diamonds. With a total diamond weight of 1/10 carat, the pendant rests on an 18-inch cable chain that secures with a lobster clasp. HMK. LIC.",
//     "photos": [
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQTR_YYvNapv1q2jBLfEbYF0ICkCDIwDoAWRIHEe3Sv7J5IqWJCLnHi5ttw_1oGPPATrDaa7nbY57B0OpDwnTzzKJGDy2n8Cg&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Pendant",
//       "Material": "Silver, Diamond"
//     },
//     "rating": 4.7,
//     "page_url": "https://google.com/shopping/product/9011459685991344595?gl=us&hl=en&prds=pid%3A17653107294927273217",
//     "offers_page_url": "https://google.com/shopping/product/9011459685991344595/offers?gl=us&hl=en&prds=pid%3A17653107294927273217",
//     "specs_page_url": "https://google.com/shopping/product/9011459685991344595/specs?gl=us&hl=en&prds=pid%3A17653107294927273217",
//     "reviews_page_url": "https://google.com/shopping/product/9011459685991344595/reviews?gl=us&hl=en&prds=pid%3A17653107294927273217",
//     "num_reviews": 15,
//     "typical_price_range": ["$199.99", "$199.99"],
//     "offer": {
//       "store_name": "Kay Jewelers",
//       "store_rating": null,
//       "offer_page_url": "https://www.kay.com/hallmark-diamonds-paw-necklace-110-ct-tw-sterling-silver-18/p/V-580716809?&cid=SEO-PL&utm_source=google_freelistings&utm_medium=organic",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$199.99",
//       "shipping": "Free delivery by Fri, Mar 24",
//       "tax": "+$17.75 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "11677909492704143590",
//     "id_v2": "11677909492704143590:3053359825931605713",
//     "title": "Pandora Elevated Heart Necklace",
//     "description": "Let love guide your look with this sterling silver heart necklace which can be worn in two different lengths thanks to its adjustable clasp. The sparkling healing heart cut of the cubic zirconia marks the first time this stone shape is being used in the Timeless Elegance collection and is a modern take on a love token which is ideal as a gift for someone special. The contemporary design and elevated stone setting make it an easy to wear piece theyll love for years to come. All customs and duties will be charged to our account. There will be no extra charges.",
//     "photos": [
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQjQo7fsWlf-uTBdPjULGVkatrKoyPGtkSmtu8xiEdRnJVlN3Yn1gxZ7DA7k3DUDYqim1Jbn25QB-9F8vLwJpjwwCntA5Di&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_BE8Thfp4QWDpl_XFA_A9RAnCKa9uAnWwN9sj_Jo0D-DYkzh51cteSrgTq_vbHeMeM5tkfF2n5LoLVlSAR5MfCZKcC2Lq&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVuD2cCX-bsNTLNiSeKo_xUYIf7hg0deXZPoZfoLsnZTiYo9OJJkKLFmuW0OQ1Xr_EV3kRqjv6W-j2jossY5ZuhH22i11XMg&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXmSwRPgPx6gaZGIejMLZ67gCYBnXZq4bMV1CU2MSjyeRyriZIk3nsFgB9aPIPOkxptW_kDWYfoc6uWkzC-kIOd04K_A1Y&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeai06P9yvbiSdL9-0nmOqQtXb6MNwflSahPLEXfxSem7M922kM_n34NKCTnS57WWaW1G4HNtxg2kWB2L_eTwu47t30AAs&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSqc3-QVYvZrNKWdFBwzRmWGD2SFMVqHtBROOVl5zlJwTO8_E8-DVeV_g9LgSnsdx1onGPvyYlWOH_ByG3XbyYCpkfldTk2Kg&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxbOkj5V6o2Hsvs4l6TVTquwG_bXVzfrSGBGWg_7sVyx56tdMlLmANKrMRR077Q21RI9zUl80hVgRYU8_AYsSFUgV2KvWtNA&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Pendant",
//       "Pendant Type": "Heart",
//       "Material": "Silver, Cubic Zirconia, Sapphire"
//     },
//     "rating": 4.4,
//     "page_url": "https://google.com/shopping/product/11677909492704143590?gl=us&hl=en&prds=pid%3A3053359825931605713",
//     "offers_page_url": "https://google.com/shopping/product/11677909492704143590/offers?gl=us&hl=en&prds=pid%3A3053359825931605713",
//     "specs_page_url": "https://google.com/shopping/product/11677909492704143590/specs?gl=us&hl=en&prds=pid%3A3053359825931605713",
//     "reviews_page_url": "https://google.com/shopping/product/11677909492704143590/reviews?gl=us&hl=en&prds=pid%3A3053359825931605713",
//     "num_reviews": 63,
//     "typical_price_range": ["$79.05", "$95.00"],
//     "offer": {
//       "store_name": "Ben Bridge",
//       "store_rating": null,
//       "offer_page_url": "https://www.benbridge.com/jewelry/pandora-elevated-heart-cz-necklace-11942315.html",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$95.00",
//       "shipping": "Free delivery by Wed, Apr 12",
//       "tax": "+$8.43 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "1:13717260525543006103",
//     "id_v2": "1:13717260525543006103",
//     "title": "Full Diamond Exaggerated Fashion Necklace Earrings, Women's, Size: One size, Grey Type",
//     "description": "Product information: Style: Europe and America Material: copper Set combination: earrings+necklace Inlaid material: gold-plated inlaid artificial gems/semi precious stones Pattern: love/water drop/bell Color: red, green, blue, white, ear clip Packing list: Necklace * 1 +pair of earrings * 1 Size: One Size. Color: Metal Type. Gender: female. Age Group: adult.",
//     "photos": [
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRJLoUuEJyUyTAisEj3qlHigpvPvPxh-98KnFfeYFWZWY2iGvAUG8TUj6HxTHqkkFIRzgru9qOVgHXOoXOI-oWg7KL6N4ietA&usqp=CAE"
//     ],
//     "attributes": null,
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/1?gl=us&hl=en&prds=pid%3A13717260525543006103",
//     "offers_page_url": "https://google.com/shopping/product/1/offers?gl=us&hl=en&prds=pid%3A13717260525543006103",
//     "specs_page_url": "https://google.com/shopping/product/1/specs?gl=us&hl=en&prds=pid%3A13717260525543006103",
//     "reviews_page_url": "https://google.com/shopping/product/1/reviews?gl=us&hl=en&prds=pid%3A13717260525543006103",
//     "num_reviews": 0,
//     "typical_price_range": null,
//     "offer": {
//       "store_name": "Walmart - xianshandaxingdianzikejiyouxiangongsi",
//       "store_rating": null,
//       "offer_page_url": "https://www.walmart.com/ip/Full-Diamond-Exaggerated-Fashion-Necklace-Earrings/2129754308?wmlspartner=wlpa&selectedSellerId=101257181",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$54.52",
//       "shipping": "Free delivery",
//       "tax": "+$4.84 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "13360759464816489493",
//     "id_v2": "13360759464816489493:8935976761232966914",
//     "title": "Pandora Women's Shooting Stars Sparkling Ring | Size 4.5",
//     "description": "Two shining stars meet on this new Shooting Stars Sparkling Ring design, which symbolises the power of togetherness and the magic of starry night skies filled with wonder. Crafted from sterling silver, this stackable ring is set with pavé cubic zirconia around the band, as if the stars are leaving a twinkling trail behind them. Gift this special piece as a symbol of special connections, or style it yourself as a reminder of how wonderful you are.",
//     "photos": [
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ1e5uThNEehK6Bid4tSPDL6ch4zarEjEKYtvQkzE2044NeLYySQwbPJG1S1Q1UJeiev9lEKBtGgMS2tFiq-U99XzMQgaB_&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTfSOvHi2SqpiIg6pqqTLuQGvBL22-BvZp7GeQHjQSxedYVi0JrGXpkRvTF_tWV95E3AhHmyNlfJ4UWTZ0Lq61s039Gvqka5A&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTn_UehbQsj6Wu57ldBLRvSPhX9jNCwE93QFBcV9ILIvA5R147IhWDkSi3YG88toUJLbPDrG_BPaEK2iI2oqvxDJlb5WAHP&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTUtd2k_g-Q91eWqm4ySJ91ieny1Yu6k70yXsaZvFh4jH1b-BLIbsN8hqWhXrlK34s_j54SjMhsEIoqK-3My9HAU6MNlsOtg&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSr8yYaj6P406xJWuSnaFBHelApkpMw5qMtQYBDJVWTNlPU1GOtIWswAae2wAB-K_NQ63AAELVMsNK7Rtyo-JaYT-av92F1Nw&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRcVJxJkjL9a2Es7FUjtw11Xd5xLwluQ3G0AgV9u4BUI7hO84gM4V3BXGjF3a0Wg9ZX_rtVVKZIykOccE1l_RHeDuG5O0V5g&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Stackable",
//       "Material": "Silver, Cubic Zirconia, Sterling Silver",
//       "Size": "4½"
//     },
//     "rating": 4.7,
//     "page_url": "https://google.com/shopping/product/13360759464816489493?gl=us&hl=en&prds=pid%3A8935976761232966914",
//     "offers_page_url": "https://google.com/shopping/product/13360759464816489493/offers?gl=us&hl=en&prds=pid%3A8935976761232966914",
//     "specs_page_url": "https://google.com/shopping/product/13360759464816489493/specs?gl=us&hl=en&prds=pid%3A8935976761232966914",
//     "reviews_page_url": "https://google.com/shopping/product/13360759464816489493/reviews?gl=us&hl=en&prds=pid%3A8935976761232966914",
//     "num_reviews": 9,
//     "typical_price_range": ["$50.00", "$50.00"],
//     "offer": {
//       "store_name": "Pandora Jewelry",
//       "store_rating": 4.7,
//       "offer_page_url": "https://us.pandora.net/en/rings/rings/stackable-rings/shooting-stars-sparkling-ring/192365C01-48.html?srsltid=Ad5pg_HqC4GQYP6lPOXH0B1gwOSpQdz0JgmChcDT2i3hAvfY6wqi-ahZROY",
//       "store_review_count": 115,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=pandora.net&c=US&v=19&hl=en",
//       "price": "$50.00",
//       "shipping": "$7.95 delivery by Tue, Mar 28",
//       "tax": "+$5.14 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "3306508456605980823",
//     "id_v2": "3306508456605980823:759976872793163807",
//     "title": "Pandora Silver Bracelet, Heart Clasp",
//     "description": "Set your heart a-flutter with this romantic version of Pandora's bestselling charm bracelet. Hand-finished with a heart-shaped clasp, this sterling silver snake chain bracelet looks stunning on its own but even better adorned with your favourite Pandora charms and clips. Layer it with contrasting Pandora chain bracelets for a chic, multi-layered look. Bracelets Size GuideThe average size for a ladies bracelet is 20cm. Children’s bracelets are usually 16cm. If the plan is to add charms then the bracelet should probably be one size up on your normal.The general guidance for finding your bracelet size is to add 2cm – 3cm (0.8in) to your wrist size measurement. To ensure the most accurate bracelet size, always use the size chart for your selected bracelet type. If you prefer a looser fit, you may wish to size up.",
//     "photos": [
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBVqYl9RHPRvIL1M2eJwkZi8R_cuXMle42NSodqVmhFj3nhW1GxEmmSWMah9EO_whYFJfp8UZTKoyH5GdsO6Fvu-KOMSO8&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS69upY4kjt0CoGFVxuw8fDs3Z5VlHGMiTsx0eRJih2TCI0j8Qn-9LktHccvz94dbuWUfm4cNeoWEe4MrVMD_xqieknY9_Z&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQyAuXVHfDO5iceeobptTlX2JTwUAX1MSFBP7BadVm9h3_2DqvGlmQTpowmus6twICmUu3bKzEdjo5lJTD-S1khIjkwBl_r&usqp=CAE"
//     ],
//     "attributes": {
//       "Features": "Charm",
//       "Department": "Kids', Girls'",
//       "Material": "Silver",
//       "Color": "Silver"
//     },
//     "rating": 4.6,
//     "page_url": "https://google.com/shopping/product/3306508456605980823?gl=us&hl=en&prds=pid%3A759976872793163807",
//     "offers_page_url": "https://google.com/shopping/product/3306508456605980823/offers?gl=us&hl=en&prds=pid%3A759976872793163807",
//     "specs_page_url": "https://google.com/shopping/product/3306508456605980823/specs?gl=us&hl=en&prds=pid%3A759976872793163807",
//     "reviews_page_url": "https://google.com/shopping/product/3306508456605980823/reviews?gl=us&hl=en&prds=pid%3A759976872793163807",
//     "num_reviews": 4670,
//     "typical_price_range": ["$59.91", "$65.00"],
//     "offer": {
//       "store_name": "Lyst.com",
//       "store_rating": 4.1,
//       "offer_page_url": "https://www.lyst.com/jewelry/pandora-moments-silver-bracelet-with-heart-clasp-in-sterling-2/?product=YUVDVPU&_country=US&size=One+Size&atc_medium=cpc&atc_campaign=USA-PLA-FL",
//       "store_review_count": 128,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=lyst.com&c=US&v=19&hl=en",
//       "price": "$64.66",
//       "shipping": "$22.00 delivery",
//       "tax": "+$8.15 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "17126918117677177999",
//     "id_v2": "17126918117677177999:12722693888010124632",
//     "title": "Panacea Initial Pendant Necklace Gold D",
//     "description": "A small, dangling initial pendant on a crystal-accented chain brings a personalized touch to your look-it also makes a great gift for a loved one. Style Name:Panacea Initial Pendant Necklace. Style Number: 5938875.",
//     "photos": [
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOsdNvzEIFXigqExHKrPvv0kTKV-BWLF4adrqVZII1CtxSxa4&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Pendant",
//       "Pendant Type": "Monogram",
//       "Material": "Gold",
//       "Color": "Gold D"
//     },
//     "rating": 3.9,
//     "page_url": "https://google.com/shopping/product/17126918117677177999?gl=us&hl=en&prds=pid%3A12722693888010124632",
//     "offers_page_url": "https://google.com/shopping/product/17126918117677177999/offers?gl=us&hl=en&prds=pid%3A12722693888010124632",
//     "specs_page_url": "https://google.com/shopping/product/17126918117677177999/specs?gl=us&hl=en&prds=pid%3A12722693888010124632",
//     "reviews_page_url": "https://google.com/shopping/product/17126918117677177999/reviews?gl=us&hl=en&prds=pid%3A12722693888010124632",
//     "num_reviews": 13,
//     "typical_price_range": ["$40.00", "$40.00"],
//     "offer": {
//       "store_name": "Nordstrom",
//       "store_rating": 4.8,
//       "offer_page_url": "https://www.nordstrom.com/s/5423192?color=GOLD+D&country=US&currency=USD&utm_source=google&utm_medium=organic&utm_campaign=seo_shopping&utm_channel=low_nd_seo_shopping&srsltid=Ad5pg_HwIuAKYsmK_sjD_BosYxl3KYp9a-b5Vh_XhRrdCm5eB6ARz6JzBUI",
//       "store_review_count": 272,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=nordstrom.com&c=US&v=19&hl=en",
//       "price": "$40.00",
//       "shipping": "Free delivery est. by Mar 31",
//       "tax": "+$3.55 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "16343310222749158107",
//     "id_v2": "16343310222749158107:6507458768392271627",
//     "title": "nihaojewelry Wedding Dress Bride Hollow Full Diamond Women's Copper Necklace and Earrings Two-Piece Set",
//     "description": "Insert Material:Artificial Gemstones Occasion:Wedding Occasion:Travel Material:Rhinestone Style:Simple Style Gender:WomenS Pattern:Heart Classification:Earrings Classification:Necklace Classification:Jewelry Set",
//     "photos": [
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTCtnNT2GzQaerauAHc9ikjAYJAoIqURImpfbBLCzHmK2Ntp8lSxRt1-v_3eXV1SPqyrZnf0b8rGEY6s_NFhp0ntHP567fe&usqp=CAE"
//     ],
//     "attributes": {
//       "Department": "Women's"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/16343310222749158107?gl=us&hl=en&prds=pid%3A6507458768392271627",
//     "offers_page_url": "https://google.com/shopping/product/16343310222749158107/offers?gl=us&hl=en&prds=pid%3A6507458768392271627",
//     "specs_page_url": "https://google.com/shopping/product/16343310222749158107/specs?gl=us&hl=en&prds=pid%3A6507458768392271627",
//     "reviews_page_url": "https://google.com/shopping/product/16343310222749158107/reviews?gl=us&hl=en&prds=pid%3A6507458768392271627",
//     "num_reviews": 0,
//     "typical_price_range": ["$2.73", "$2.73"],
//     "offer": {
//       "store_name": "Nihaojewelry.com",
//       "store_rating": 4.2,
//       "offer_page_url": "https://m.nihaojewelry.com/wedding-dress-bride-hollow-full-diamond-women-s-copper-necklace-and-earrings-two-piece-set.html",
//       "store_review_count": 568,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=nihaojewelry.com&c=US&v=19&hl=en",
//       "price": "$2.73",
//       "shipping": "$4.31 delivery by Tue, Mar 28",
//       "tax": "+$0.00 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "14759486421644583754",
//     "id_v2": "14759486421644583754:3553289443836413642",
//     "title": "Alice Dainty Letter Name Necklace | Caitlyn Minimalist 18K Gold / 18 Inches",
//     "description": "The Alice Letter Name Necklace is crafted with dainty, upper case block letters, on a fine, thread like chain - to create an effortlessly chic, sophisticated, and elegant amulet that beautifully expresses your identity.",
//     "photos": [
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSKcAmJR1EpgVJcNiQl3FFiHdD9KoGJt2L9EhxrxYBWf-xTc3k_d8v4udn31IvwgCJ8ZZO0qjxW_lAXrOcLkiJPvnCpnmrTZQ&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmJqYwTroKDktVIF7k6hen3m9psW2idO-tpzuPEGZwGvaxXa5XWvMBd3vlqNeYx2QFRvsRzVjzMadYIq6hL1sv45ILkqIcEQ&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSp8J8Xm8-0U_hH8Wkf4_eIRjiYsDQYR3i463TH8qIxx9CVv9wx9FnvVblU_tk3tcPw-pH7-L_024BDW-bfV9hl87Hs2Agp&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyFLX_yA8Gf9xW4bwiTR5BSeyDNjU7UNLS3N99Ncnr5CdlqRJO&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQJvegR-6L8ed44KOj5wbRg_6-aW7cd_nqnaCogUirydXOZh-MgLMEu5cWZQwOIfHnTZFDffg47Hzfx7jO9fcAU8tO0MW97KA&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSIvvUVdSyLSVBcOna9avxSXF1MtNU5E_RfOjag-Wj6NASMSv9_eWaCmdq_1FgJpPxgaJ9WIZUaEFj_Fn61cOLAHGldzPCt&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Pendant",
//       "Material": "Silver"
//     },
//     "rating": 5,
//     "page_url": "https://google.com/shopping/product/14759486421644583754?gl=us&hl=en&prds=pid%3A3553289443836413642",
//     "offers_page_url": "https://google.com/shopping/product/14759486421644583754/offers?gl=us&hl=en&prds=pid%3A3553289443836413642",
//     "specs_page_url": "https://google.com/shopping/product/14759486421644583754/specs?gl=us&hl=en&prds=pid%3A3553289443836413642",
//     "reviews_page_url": "https://google.com/shopping/product/14759486421644583754/reviews?gl=us&hl=en&prds=pid%3A3553289443836413642",
//     "num_reviews": 159,
//     "typical_price_range": ["$27.75", "$27.75"],
//     "offer": {
//       "store_name": "Caitlyn Minimalist",
//       "store_rating": null,
//       "offer_page_url": "https://caitlynminimalist.com/products/alice-letter-name-necklace?variant=39322493812871&currency=USD&utm_medium=sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&com_cvv=4d761e8e36d2c5242cc3a92b4ebe848adc5e4fd00263603543e306c781ca29da",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$27.75",
//       "shipping": "Free delivery by Fri, Mar 24",
//       "tax": "+$2.46 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "13843792312199638737",
//     "id_v2": "13843792312199638737:3794088729539230537",
//     "title": "Zales 5.0mm Heart-shaped Gemstone and Initial Y Necklace (1 Initial and Stone)",
//     "description": "This delightful color stone necklace features the initial of your choice in a block font and the colored heart stone of your choice. The diamond-cut cable chain is adjustable from 16 to 18 inches and secures with a lobster clasp.",
//     "photos": [
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTVGKfzpKs8dj-Vzv0Tt0QKAJ_Cx-0dfOnhU9rSLKRhNLEd8jymEIgCuHkYNgi0ILu1QZL4PzHrFaohamqGvBziTUo40VSqMQ&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Lariat",
//       "Pendant Type": "Heart, Monogram"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/13843792312199638737?gl=us&hl=en&prds=pid%3A3794088729539230537",
//     "offers_page_url": "https://google.com/shopping/product/13843792312199638737/offers?gl=us&hl=en&prds=pid%3A3794088729539230537",
//     "specs_page_url": "https://google.com/shopping/product/13843792312199638737/specs?gl=us&hl=en&prds=pid%3A3794088729539230537",
//     "reviews_page_url": "https://google.com/shopping/product/13843792312199638737/reviews?gl=us&hl=en&prds=pid%3A3794088729539230537",
//     "num_reviews": 0,
//     "typical_price_range": ["$129.34", "$129.34"],
//     "offer": {
//       "store_name": "Zales",
//       "store_rating": 3.8,
//       "offer_page_url": "https://www.zales.com/50mm-heartshaped-gemstone-initial-y-necklace-1-initial-stone/p/V-20539318",
//       "store_review_count": 32,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=zales.com&c=US&v=19&hl=en",
//       "price": "$129.34",
//       "shipping": "Free delivery by Tue, Apr 4",
//       "tax": "+$11.48 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "15866144260891343326",
//     "id_v2": "15866144260891343326:15410398667664753667",
//     "title": "Pandora Marvel The Avengers Infinity Stones Ring",
//     "description": "Harness the power of the Infinity Stones with our Marvel The Avengers Infinity Stones Ring. Perfectly balanced, as all things should be, our 14k gold-plated ring features six colorful man-made crystals, representing the most coveted objects in the universe. The inside of the band is engraved with each stone's corresponding power: space, reality, power, soul, mind and time. Pair this ring with other battle-ready pieces from our Marvel x Pandora collection.",
//     "photos": [
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSD7ZssXUL0FKf10UtX9he3PYwspzkrgoaxNH4w6uWlOvLR-iojLIK6_HoPJ5BV3md0sJyxRpkPie7vH3UPGfD-tJii_TRm&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfqPqu1fjh2dsnjd6bEqZfrzyj7MKIejM4gGtz_wyG5OjTD5AHzplHSxv5AO-8UjWE5CGaLXB15qKGymJ0p_42Z8blAsptAA&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSgUVYfRYtZa-iIbXHTDoszTfGiSh59Q22UjasnWnEFzflzem4TJQaix5IKYywjd5e7Gw9IH66sAv8pffirGDvxs06g7egR5Q&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcwkBLUTTG9n3zbTlQtW3t0Z1pgVO2UUXWlDTNDBqZQAGAvZP3LByPChTOzaTw0H2LRHe8lXCvhlNMACo3z-yHyjQQk54piA&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPAwzGa3OgPpexbvWW3WMrQC5_-OW1Tcn5aisWj6_cqkkWwpZSKUJP13s7LJOFw5Smg8z6CePhATIjcDCmt6ldmia7-QdLQw&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQtClw5B2SquB81f1CsuubQ5VxUw8CSIXATFjU04CJrl_0270oG5NybczcEAKKwysQn4ixBG7uk2vaGtFkPAAaSWWu2-Vgf&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmbkGDkA6MYWATLeBCHTjH0rVZn3wCavNnDTRxAorU6y8_Egl5Fw5wgw7WNQXWOLqIGhQvOZaoA4fNdTUdjyge_9enL8pi&usqp=CAE"
//     ],
//     "attributes": {
//       "Material": "Gold, Cubic Zirconia",
//       "Size": "9"
//     },
//     "rating": 3.6,
//     "page_url": "https://google.com/shopping/product/15866144260891343326?gl=us&hl=en&prds=pid%3A15410398667664753667",
//     "offers_page_url": "https://google.com/shopping/product/15866144260891343326/offers?gl=us&hl=en&prds=pid%3A15410398667664753667",
//     "specs_page_url": "https://google.com/shopping/product/15866144260891343326/specs?gl=us&hl=en&prds=pid%3A15410398667664753667",
//     "reviews_page_url": "https://google.com/shopping/product/15866144260891343326/reviews?gl=us&hl=en&prds=pid%3A15410398667664753667",
//     "num_reviews": 19,
//     "typical_price_range": ["$100.00", "$100.00"],
//     "offer": {
//       "store_name": "Pandora Mall of America",
//       "store_rating": 4.8,
//       "offer_page_url": "https://www.becharming.com/marvel-the-avengers-infinity-stones-ring-pandora-shine.html",
//       "store_review_count": 706,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=becharming.com&c=US&v=19&hl=en",
//       "price": "$100.00",
//       "shipping": "Free delivery",
//       "tax": "+$0.00 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "15694561836749809405",
//     "id_v2": "15694561836749809405:3580768746084284218",
//     "title": "LC Lauren Conrad Layered Heart Necklace, Women's, Silver",
//     "description": "Expect compliments when you don this lovely layered necklace from LC Lauren Conrad. - NECKLACE DETAILSChain length: 16 in. with 3-in. extender - Pendant length: 0.34 in. (each)Chain type: curb chain - Clasp: lobster-claw - Metal: iron, zinc Plating: silver tone - Additional details: nickel free - Not appropriate for children 14 years old and younger.",
//     "photos": [
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlgTdvvE5NO_Xh8rj1UoQqP_MVNCmUMtX83o_W5pRbCTpjKbtGzaBhuSeRGkL3Q09TW9gbq36Kr6R-cVFwKmiFQtIcPoPM&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScZJkycIO0glldF2n6tqhQUeJDXiITKwd15Ls1r3rQjVhm5blfzFtbPbl1T6jmnHNx3OpyTI8bt00qWekIoHbaXIaHQ88f&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTa6H4vnIlXa6dQuN5LxqY30hs1GNARK3t0yMguGuo8EEoy-9nYaAkQ4w6ZLnGpeYTNO_Itj_BDFDVYVwxj9XqmPnJW9gQpsQ&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT1OX-zyO_plNkQhW9cTFqpoW2hcrxMEuLFzclnfgwyqIo-XqL3Go7_5nDYMOAuthtZToqIfglpgEgQ2SOu08Hgju2-cpJr9w&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqCu1iz9dz2KQqSIrKyoGsu8UwixaWxWDH7ABv45Ho2a70TbK51OQ4B-k1m07OQQyZcfJ0Md04Dl946p2dDoZ9fBTBDhkA1Q&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTgI7q12oTr1qJvvc_EGehqhBc7GWVRVS30nhmd1btD9_ouXoqOj7NG8Z6PHb_AIZp7tjQC4CJLV-RL_y67PNv7Pv0pjA5G&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Pendant",
//       "Pendant Type": "Heart",
//       "Material": "Silver"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/15694561836749809405?gl=us&hl=en&prds=pid%3A3580768746084284218",
//     "offers_page_url": "https://google.com/shopping/product/15694561836749809405/offers?gl=us&hl=en&prds=pid%3A3580768746084284218",
//     "specs_page_url": "https://google.com/shopping/product/15694561836749809405/specs?gl=us&hl=en&prds=pid%3A3580768746084284218",
//     "reviews_page_url": "https://google.com/shopping/product/15694561836749809405/reviews?gl=us&hl=en&prds=pid%3A3580768746084284218",
//     "num_reviews": 0,
//     "typical_price_range": ["$10.00", "$12.60"],
//     "offer": {
//       "store_name": "Kohl's",
//       "store_rating": 4.6,
//       "offer_page_url": "https://m.kohls.com/product/prd-3113663/lc-lauren-conrad-layered-heart-necklace.jsp?skuid=33524280&CID=seo_offers&utm_campaign=SAG&utm_medium=organic&utm_source=google&utm_product=33524280",
//       "store_review_count": 289,
//       "store_reviews_page_url": "https://www.google.com/shopping/ratings/account/metrics?q=kohls.com&c=US&v=19&hl=en",
//       "price": "$10.80",
//       "shipping": "$8.95 delivery",
//       "tax": "+$1.75 est. tax",
//       "on_sale": true,
//       "original_price": "$18.00",
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "12292214928622606621",
//     "id_v2": "12292214928622606621:5161763287153836711",
//     "title": "New New Arrival 14K Real Gold Bear Pendant&necklaces for Women Elegant 14K Real Gold Plated Chain",
//     "description": null,
//     "photos": [
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQWmFV1Bsba3P6L7cMU1B6oZHYSGwMJZo3Pueo28pgyJ0inGfDYkVLGffLOKI1ZTfRaT1Gb6h8QRd1ekfvs8OSAsZ_kudzolA&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0yO168EGmwlbPbTKvqZf2m2l6SbUxDg8ri3sALZC7H3y3o2Rirh4cprhgxn7JubMRsxjozJEABXa1Osc0j2f8KCcd8NNZ3A&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmIsjkUtYL93PUdxziIaYdcsbnjwTy3CbMVIb5w5Q0h1Xscv_TQkE4g74w48GXg1vFJSoN2140AVdnFx92ncM_OO1KQcvS&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRp0JbrCEuJJerWYi4tH6_g341cPDqD-HKKPAQL_ol8N8wtb24sbzwyQnv7stEVNq1SSbNDZnE_eCRTb8QLMmH0WL79ggde&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLHoDbxLANVAoqylr5iXXL6FiKwWpO-3BIdcXVzWYgK4OlpdmZ0pIfJNzpMT2-q_wRpiehZ9mtqwmhOU9o7WioKa-tSYOf&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8Eg9ZOfJisIj682JMXjO1ysfALlRWg8e5A_Wm86TeBoy-eLJ2oSp-Kwy91VmEC4ZuZGGrx86QfhnfDlzIpaMRh0N9n4ZPGA&usqp=CAE"
//     ],
//     "attributes": {
//       "Silhouette": "Pendant",
//       "Material": "Gold, Copper"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/12292214928622606621?gl=us&hl=en&prds=pid%3A5161763287153836711",
//     "offers_page_url": "https://google.com/shopping/product/12292214928622606621/offers?gl=us&hl=en&prds=pid%3A5161763287153836711",
//     "specs_page_url": "https://google.com/shopping/product/12292214928622606621/specs?gl=us&hl=en&prds=pid%3A5161763287153836711",
//     "reviews_page_url": "https://google.com/shopping/product/12292214928622606621/reviews?gl=us&hl=en&prds=pid%3A5161763287153836711",
//     "num_reviews": 0,
//     "typical_price_range": ["$3.50", "$3.50"],
//     "offer": {
//       "store_name": "AliExpress.com",
//       "store_rating": null,
//       "offer_page_url": "https://s.click.aliexpress.com/deep_link.htm?aff_short_key=UneMJZVf&dl_target_url=https%3A%2F%2Fm.aliexpress.com%2Fitem%2F3256804081679792.html%3F_randl_currency%3DUSD%26_randl_shipto%3DUS%26src%3Dgoogle",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$3.50",
//       "shipping": "Free delivery",
//       "tax": "+$0.00 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "1:9046606695408523750",
//     "id_v2": "1:9046606695408523750",
//     "title": "18K Gold HOJ Subscription Box - 6 Month Subscription, Mixed Necklace Length (14 + 16 + 18 Inches) / Ring Size 6 / Bracelet Size 6.5 Inches | ",
//     "description": "Receive 3 trendy and luxury pieces of jewelry every month such as necklaces, bracelets, earrings, rings, and more, all of which have an average retail value of $100+ combined. All of the jewelry in this box is made of top quality material and are tarnish resistant, water resistant and hypoallergenic! Build up your gold jewelry collection with this luxe subscription box! Make a one-time purchase for $64.99 or save 60% by subscribing for a minimum of 6 months! (Monthly price of $39.99) HOW IT WORKS 1. SUBSCRIBE: Enter Sizes and any Custom Requests in the menu items below 2. LENGTH OF TERM: Choose for term length and proceed to checkout 3. SUBMIT PAYMENT AND WAIT FOR YOUR JEWELRY BOX TO ARRIVE! CANCELATION/REFUND POLICY Depending on the length of your term, you will be charged on the same day you placed your order every month for the duration of your term. If you purchased 1 month, there is no term so you will only be charged once (the same day you place your order). If you choose 3 month or 6 month term, and you place an order today (for example if today is September 5th), you will be charged on the 5th of every month for 3 or 6 months. Once the 3 or 6 months has ended, you will no longer be charged. If you wish to enroll again, please place a new order or reach out to info@houseofjewelsmiami.com to extend your subscription term. In addition, if you sign up for our 3 month or 6 month term, we cannot provide a refund if you wish to cancel sooner. No Exceptions. In addition, there will be no refunds or exchanges given for the items included in this box unless an item is damaged. We cannot cater requests for specific items from our site due to limited inventory. This box will also include exclusive items that may not be featured on our site yet. By using this website you agree to all of the above terms mentioned regarding the HOJM Monthly Subscription Box.",
//     "photos": [
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1gDhxJ1tkdyQ3Qo1xCCqmaBlTvTY5Mh1Q2DYlDCUCoCkPvpQ&usqp=CAE"
//     ],
//     "attributes": null,
//     "rating": 4.4,
//     "page_url": "https://google.com/shopping/product/1?gl=us&hl=en&prds=pid%3A9046606695408523750",
//     "offers_page_url": "https://google.com/shopping/product/1/offers?gl=us&hl=en&prds=pid%3A9046606695408523750",
//     "specs_page_url": "https://google.com/shopping/product/1/specs?gl=us&hl=en&prds=pid%3A9046606695408523750",
//     "reviews_page_url": "https://google.com/shopping/product/1/reviews?gl=us&hl=en&prds=pid%3A9046606695408523750",
//     "num_reviews": 35,
//     "typical_price_range": null,
//     "offer": {
//       "store_name": "House of Jewels Miami",
//       "store_rating": null,
//       "offer_page_url": "https://houseofjewelsmiami.com/products/luxe-jewelry-box-6-month-subscription?currency=USD&variant=40566704177301&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&srsltid=Ad5pg_Eg_BHNsNsQ_9W58JNXtmmLUU2-iqMrHOgQ2qzaa6cZMQCkFzrRBrc",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$39.99",
//       "shipping": "Delivery by Fri, Mar 31",
//       "tax": "+$3.55 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "1:5069026851596810997",
//     "id_v2": "1:5069026851596810997",
//     "title": "Authentic Original Vintage Style High End Designer Jewerly Lot - Vintage & collectibles | Color: Gold",
//     "description": "Absolutely beautiful pieces of jewelry in this lot many signed pieces",
//     "photos": [
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSK0msxQGU9NRBngqMVtWSZ1mn8yFgbTP_TI7BEVTwfePBhO7oUBFqBvwYh6JN7JaB2esoePqiVzFDwldIIITESycIHn9OF9A&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXSPG6_b4F42szeJB0npySLdOOtB_U8HmXopN1SfQDV6c-5hyIBIbFjQT7lunY95qTCdi0XuMXsiHJmxd09NWH6_KGOrYl&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCIuFt8aK1j5OSOkenvfefrkd8zauxT6GXTu73_ZX3g83_arRC9Ga69Shatd3jmrlUl6UjKdE7AG4iPCzRsM55qzDJEX8fCA&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_BocSlTGpGPvpkFw1UtYNQP-iHWsaSDUKWLMcGQHgIj4ZpFoqBfoi1KExrxZBieiFKZ_-_tBaCpU0ZbUF6bYXHuSKT38Kkg&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbGEhaVDlmXxmFmhfkJ1VnbyVGJEcNoWDlSxNGEHvbJOlgcvOOP9HWYcABlLgKd4PR_fQMejzh6PtZvnWxiB3P2e1P5C_a4A&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1MeZcte3nTONbfOL2y9ryge7HzTGFlxi3ziOENDW9CV5uwf51cp-Y2TpaOvI4gRHpvpj3vk---Kct4v2p8Oo54mNyAk9q&usqp=CAE",
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQYxT_UvYl8pyJK3GdpdGlppF2eP2ZoYgZ5xU9YXx2t8wjFV91NOELzbLdpANPLkiN3K2PEj_BlQ409Petpu-GKN_oB1vmQ&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSFaHq8REICcDItH0W8C2mGX1cB9faiMPPsUrMJmHs7B_5wCA3AkSIp71EPa6T6UXsglwt3SE9rJ9Rwqcrn1PKAgwW1xUzR_Q&usqp=CAE",
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzWzIZHnTb48s8FHY7R4-GHnCG1KwiqNxmSmui7jmqrvmDDLtOCMjPtkeTQGfZXU_QZy-mYqF4lwKz6nP1RZUlzzZFf4UEPA&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpO5Xp10bFTNFM3AK_N9aPr_tBLAnYCh9aYGCshNMivT7ImKjF3ETsMHqMUODdpYb2rHiI-HIMDiMncgpClW1sd-WfYISi3w&usqp=CAE"
//     ],
//     "attributes": null,
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/1?gl=us&hl=en&prds=pid%3A5069026851596810997",
//     "offers_page_url": "https://google.com/shopping/product/1/offers?gl=us&hl=en&prds=pid%3A5069026851596810997",
//     "specs_page_url": "https://google.com/shopping/product/1/specs?gl=us&hl=en&prds=pid%3A5069026851596810997",
//     "reviews_page_url": "https://google.com/shopping/product/1/reviews?gl=us&hl=en&prds=pid%3A5069026851596810997",
//     "num_reviews": 0,
//     "typical_price_range": null,
//     "offer": {
//       "store_name": "Mercari",
//       "store_rating": null,
//       "offer_page_url": "https://www.mercari.com/us/item/m44452996122/",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$67.00",
//       "shipping": "$12.30 delivery",
//       "tax": "+$7.04 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "USED"
//     }
//   },
//   {
//     "id": "1:13969597283057943698",
//     "id_v2": "1:13969597283057943698",
//     "title": "Big Womens Luxury Fashion Jewelry Best Gift 7, Women's, Grey Type",
//     "description": "Description: Material: metal, Gold plating and inlaid long oval cut Simple and classical, Vintage style, suit to wear everyday Perfect gift for mom, daughter, girlfriend, sister, YOU. Available size:6/7/8/9 Package Includes: 1 Piece Gem Note: Product color may vary slightly from what appears online due to monitor differences. Color: Metal Type. Gender: female. Age Group: adult.",
//     "photos": [
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQniTRhs9jKD6Bhj8HxeHVGSGjAvesLIRW8-xyX3jMumw-kofXhZoDkFJoNYCQ4DETb_z48wdeEGHpzKTwV9utE0ajXElaV3w&usqp=CAE"
//     ],
//     "attributes": {
//       "Features": "Gifts for Mothers"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/1?gl=us&hl=en&prds=pid%3A13969597283057943698",
//     "offers_page_url": "https://google.com/shopping/product/1/offers?gl=us&hl=en&prds=pid%3A13969597283057943698",
//     "specs_page_url": "https://google.com/shopping/product/1/specs?gl=us&hl=en&prds=pid%3A13969597283057943698",
//     "reviews_page_url": "https://google.com/shopping/product/1/reviews?gl=us&hl=en&prds=pid%3A13969597283057943698",
//     "num_reviews": 0,
//     "typical_price_range": null,
//     "offer": {
//       "store_name": "Walmart - Menolana",
//       "store_rating": null,
//       "offer_page_url": "https://www.walmart.com/ip/Big-Womens-Luxury-Fashion-Jewelry-Best-Gift-7/268010091?wmlspartner=wlpa&selectedSellerId=101125294",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$9.83",
//       "shipping": "Free delivery",
//       "tax": "+$0.87 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   },
//   {
//     "id": "17782794407945429172",
//     "id_v2": "17782794407945429172:12643403823329673798",
//     "title": "Vintage Designer Jewelry | Vintage Jewelery Set Bracelet and Necklace | Color: Gold/Silver | Size: Os | Callstar0903's Closet",
//     "description": null,
//     "photos": [
//       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1gONGptmQYWcGMnt8KZ4tTBWwazDqqpcNuHNN86GAVPujpRMoJKFlP2KxscwsTpltNhqAIno-zZ-gKhq1JzED7HJald-D&usqp=CAE",
//       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9_KyteEF1F125_4p39268f7Mioz1NFqi-QPp5Ylcae3zZztWRNZYs5jXfjnWQ23uWNaLbqfopFzAL0SjzfE5S65Cj0zJH&usqp=CAE",
//       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2qoSDcOqxJOOwKaYxAyHKOwQi_e1bF9tdBjanmgg-v2UWJGAJ1pHrBPktGL-PPAwjYCvYRjfQRgkP06wA75ZV21wkAEPM&usqp=CAE"
//     ],
//     "attributes": {
//       "Features": "Gifts for Mothers"
//     },
//     "rating": null,
//     "page_url": "https://google.com/shopping/product/17782794407945429172?gl=us&hl=en&prds=pid%3A12643403823329673798",
//     "offers_page_url": "https://google.com/shopping/product/17782794407945429172/offers?gl=us&hl=en&prds=pid%3A12643403823329673798",
//     "specs_page_url": "https://google.com/shopping/product/17782794407945429172/specs?gl=us&hl=en&prds=pid%3A12643403823329673798",
//     "reviews_page_url": "https://google.com/shopping/product/17782794407945429172/reviews?gl=us&hl=en&prds=pid%3A12643403823329673798",
//     "num_reviews": 0,
//     "typical_price_range": ["$30.00", "$30.00"],
//     "offer": {
//       "store_name": "Poshmark",
//       "store_rating": null,
//       "offer_page_url": "https://poshmark.com/listing/Vintage-jewelery-set-bracelet-and-necklace-63f6674b614973629c4b3435?srsltid=Ad5pg_GiAVg1hA4c-k84-edlzNIIDionAatOizOJQh2PvlJiy_zLiuPRh1g#utm_source=gdm_unpaid",
//       "store_review_count": 0,
//       "store_reviews_page_url": null,
//       "price": "$30.00",
//       "shipping": "$5.95 delivery",
//       "tax": "+$3.22 est. tax",
//       "on_sale": false,
//       "original_price": null,
//       "condition": "NEW"
//     }
//   }
// ]

// const fs = require('fs')

// const newData = mockData.map((dat) => {
//   if (!dat.category) {
//     dat.category = 'jewelery'
//   }
//   if (!dat.description) {
//     console.log(dat)
//   }
//   return dat
// })

// const jsonData = JSON.stringify(newData)

// fs.writeFile('data.json', jsonData, (err) => {
//   if (err) throw err
//   console.log('The file has been saved!')
// })
