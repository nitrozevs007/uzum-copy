let products = [
  {
    id: 1,
    name: "Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f C07/3, 500 varaq",
    price: 35990,
    discount: 55000,
    image: "https://images.uzum.uz/ctg2kjdpb7faledbod7g/t_product_540_high.jpg#1737277810955",
    kredit_form: 2549, //for month
    rating: 4.9,
    comments: 22738
  },

  {
    id: 2,
    name: "Erkaklar shimlari, klassik, tekkis chinoslar F17",
    price: 149000,
    discount: 259000,
    image: "https://images.uzum.uz/cqsva5msbq7g1s98q0ng/t_product_540_high.jpg#1737277810955",
    kredit_form: 10554, //for month
    rating: 4.8,
    comments: 346,
  },
  {
    id: 3,
    name: "Ayollar sumkasi",
    price: 75000,
    discount: 261000,
    image: "https://images.uzum.uz/ckn5tqcvutv6ra7dkfo0/t_product_540_high.jpg#1737277810955",
    kredit_form: 5312, //for month
    rating: 4.6,
    comments: 775,
  },
  {
    id: 4,
    name: "Nivea dush uchun krem-gel, krem va atirgul, 250 ml",
    price: 23990,
    discount: 30000,
    image: "https://images.uzum.uz/cc7e3heha88ep89ko8rg/t_product_540_high.jpg#1737278429809",
    kredit_form: 1699, //for month
    rating: 4.9,
    comments: 353,
  },
  {
    id: 5,
    name: "Atlantikaning tozaligi Domestos, 750ml",
    price: 28490,
    discount: 41000,
    image: "https://images.uzum.uz/cdouf88l08kcldtnnn4g/t_product_540_high.jpg#1737278534350",
    kredit_form: 2018, //for month
    rating: 4.9,
    comments: 39,
  },
  {
    id: 6,
    name: "Tozalovchi vositasi Cillit Bang, Antinalet + Blesk, 450 ml",
    price: 34990,
    discount: 51000,
    image: "https://images.uzum.uz/clnh3sfn7c6gg9idrcdg/original.jpg",
    kredit_form: 2478, //for month
    rating: 4.6,
    comments: 68,
  },
  {
    id: 7,
    name: "Elektr tish cho'tkasi Colgate Pro Clinical 150",
    price: 217990,
    discount: 384030,
    image: "https://images.uzum.uz/cdft2q35a95unf13crig/original.jpg",
    kredit_form: 15440, //for month
    rating: 4.7,
    comments: 10,
  },
  {
    id: 8,
    name: "Tish Pastasi Colgate Total Clean Mint, 125 ml",
    price: 39450,
    discount: 59180,
    image: "https://images.uzum.uz/cdft1cr5a95unf13crd0/original.jpg",
    kredit_form: 2794, //for month
    rating: 4.9,
    comments: 134,
  },
  {
    id: 9,
    name: "Dekorativ salfetkalar Decor Papia, 20 dona",
    price: 9990,
    discount: 15000,
    image: "https://images.uzum.uz/cp25frfj2e4ghqnrbpng/original.jpg  ",
    kredit_form: 707, //for month
    rating: 4.8,
    comments: 16,
  },
  {
    id: 10,
    name: "Smartfon Samsung Galaxy A06, 6+128GB, 6.7 katta displey, asosiy kamera 50 MP, Dual Sim",
    price: 1279000,
    discount: 3383000,
    image: "https://images.uzum.uz/crcqoeu0t1lqb8aq9vhg/original.jpg",
    kredit_form: 90595, //for month
    rating: 4.8,
    comments: 305,
  }
];


const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    description: "A thief who enters the dreams of others to steal their secrets.",
    poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
    background: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    background: "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description: "Batman battles the Joker, who seeks to create chaos in Gotham City.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    background: "https://image.tmdb.org/t/p/w1280/hN2wjA4PBHSu1ZXzAtncRbbpaxR.jpg",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: 5,
    title: "Avatar",
    year: 2009,
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 7.9,
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    description: "A paraplegic Marine is dispatched to the moon Pandora on a unique mission.",
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    background: "https://image.tmdb.org/t/p/w1280/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
  },
  {
    id: 6,
    title: "Titanic",
    year: 1997,
    genre: ["Drama", "Romance"],
    rating: 7.8,
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist.",
    poster: "https://m.media-amazon.com/images/I/7199jtmPkrL._AC_SY879_.jpg",
    background: "https://image.tmdb.org/t/p/w1280/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg",
    trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
  },
  {
    id: 7,
    title: "Joker",
    year: 2019,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    description: "A mentally troubled stand-up comedian embarks on a downward spiral to insanity.",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    background: "https://image.tmdb.org/t/p/w1280/hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg",
    trailer: "https://www.youtube.com/watch?v=t433PEQGErc"
  },
  {
    id: 8,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    rating: 8.8,
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    description: "The story of a simple man who finds himself in pivotal moments in history.",
    poster: "https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",
    background: "https://image.tmdb.org/t/p/w1280/2fHWMnXdOJXdbZxKjXA6eDNuSxS.jpg",
    trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg"
  },
  {
    id: 9,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: 8.8,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    description: "A thief who enters the dreams of others to steal their secrets.",
    poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH",
    background: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    id: 10,
    title: "Interstellar",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    background: "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    id: 11,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    rating: 9.0,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    description: "Batman battles the Joker, who seeks to create chaos in Gotham City.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    background: "https://image.tmdb.org/t/p/w1280/hN2wjA4PBHSu1ZXzAtncRbbpaxR.jpg",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    id: 13,
    title: "Avatar",
    year: 2009,
    genre: ["Action", "Adventure", "Fantasy"],
    rating: 7.9,
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    description: "A paraplegic Marine is dispatched to the moon Pandora on a unique mission.",
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    background: "https://image.tmdb.org/t/p/w1280/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY"
  },
  {
    id: 14,
    title: "Titanic",
    year: 1997,
    genre: ["Drama", "Romance"],
    rating: 7.8,
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
    description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist.",
    poster: "https://m.media-amazon.com/images/I/7199jtmPkrL._AC_SY879_.jpg",
    background: "https://image.tmdb.org/t/p/w1280/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg",
    trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ"
  },
  {
    id: 15,
    title: "Joker",
    year: 2019,
    genre: ["Crime", "Drama", "Thriller"],
    rating: 8.4,
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
    description: "A mentally troubled stand-up comedian embarks on a downward spiral to insanity.",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    background: "https://image.tmdb.org/t/p/w1280/hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg",
    trailer: "https://www.youtube.com/watch?v=t433PEQGErc"
  }
]