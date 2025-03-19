import kalamvalley from "./../assets/PackagesImages/beautifulhills.jpg";
import malamjabbacover from "./../assets/PackagesImages/malamjabbacover.jpg";
import MalamJabba from "./../assets/PackagesImages/malamjabbaprofile.jpg";
import HoneyMoonone from "./../assets/PackagesImages/honeymoonprofile.jpg";
import HoneyMoontwo from "./../assets/PackagesImages/honeymoonprofiletwo.jpg";
import HoneyMoonthree from "./../assets/PackagesImages/honeymoonthree.jpg";
import honeymoonfour from "./../assets/PackagesImages/honeymoonfour.jpg";
import honeymoonfive from "./../assets/PackagesImages/honeymoonfive.jpg";
import honeymoonsix from "./../assets/PackagesImages/honeymoonsix.jpg";
import familytour from "./../assets/PackagesImages/familytour.jpg";
import swattour from "./../assets/PackagesImages/swattour.jpg";
import foreignone from "../assets/PackagesImages/foreignersImageone.jpg";
import foreigntwo from "../assets/PackagesImages/foreignersImagetwo.jpg";
import foreignthree from "../assets/PackagesImages/foreignersImagethree.jpg";
import foreignfour from "../assets/PackagesImages/foreignersImagefour.jpg";

export const toursPackage = [
  {
    id: 1,
    packageName:
      "Luxury Honeymoon Tour – Lahore to Lahore | 5-Star Executive Package 2025",
    description:
      "Experience a Luxurious honeymoon tour from lahore to lahore with our 5-star executive couple package. Explore Swat, Kalam & Malamjabba with premium stays, private transport and exclusive experiences. Limited slots - Book Now!",
    coverImage: kalamvalley,
    Image: HoneyMoonone,
    duration: "4 days 3 nights",
    tourPoints: "Lahore to Lahore",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packageType: "Executive Luxury Package",
    packagePrices: {
      for1Couple: "₨ 80,000",
      for2Couples: "₨ 130,000",
    },
    accommodation: {
      type: "Luxury 5-star hotels",
      hotels: [
        "Malam Jabba Palace",
        "Burj Al Swat",
        "Swat Hilton",
        "Rock City Resort",
        "HoneMoon Hotel",
      ],
    },
    transportation: {
      options: [
        "Private Car (Prius/Corolla)",
        "from Islamabad to Swat & Kalam",
        "Luxury Bus (lahore to Islamabad)",
        "Mini Jeep for Off-road adventures",
      ],
      details: "Fuel and toll expenses covered",
      busTickets: {
        companies: ["Faisal Movers", "Shahid Coach"],
        route: "Lahore to Swat (Return)",
      },
    },
    packageIncludes: [
      "3 nights' accommodation in executive hotels",
      "Private transportation with fuel and toll expenses",
      "Return bus tickets from Lahore to Swat",
      "Breakfast at the hotel",
    ],
  },

  {
    id: 2,
    packageName:
      "Honeymoon & Family Tour – Swat, Kalam & Malam Jabba | 3 Days from Lahore",
    description:
      "Experience a 3-day honeymoon or family tour from Lahore to Swat, Kalam & Malam Jabba. Stay in deluxe hotels, enjoy private transport, and explore scenic landscapes. Affordable rates – book now!",
    coverImage: malamjabbacover,
    Image: HoneyMoontwo,
    duration: "3 days  nights 2",
    tourPoints: "Lahore to Lahore",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packagePrices: {
      for1Couple: "Rs. 45,000/-",
      for2Couples: "Rs. 75,000/-",
    },
    accommodation: {
      type: "Deluxe Hotels",
      hotels: [
        "Malam Jabba Palace",
        "Hotel Liberty Bhrain",
        "Swat Palace",
        "Swastu Resorts",
        "Holiday Inn Kalam",
      ],
    },
    transportation: {
      options: [
        "Toyota Prius",
        "Corolla",
        "Fielder Car",
        "Luxury Bus (Lahore to swat Round trip)",
      ],
      details:
        "Privately booked in Swat with all fuel and toll expenses covered & Lahore to swat Round Trip",
    },
    travelStyle: {
      busTickets: {
        companies: ["Faisal Movers", "Shahid Coach"],
        route: "Lahore to Swat (Return)",
      },
    },
    packageIncludes: [
      "2 nights accommodation in Deluxe hotels",
      "Private transportation with fuel and toll expenses",
      "Return bus tickets from Islamabad to Swat",
      "Breakfast at the hotel",
    ],
  },

  {
    id: 3,
    packageName:
      "Private Luxury Honeymoon Tour – Karachi to Swat (7 Days Executive Package 2025)",
    description:
      "Experience a private luxury honeymoon tour from Karachi to Swat with executive accommodations, private transport,and premium experiences. Enjoy a 7-day romantic trip with 4-star hotels & adventure activities – Book Now!",
    coverImage: MalamJabba,
    Image: HoneyMoonthree,
    duration: "7 days (Karachi to karachi)",
    tourPoints: "Karachi to Karachi",
    packageType: "Private Executive Package",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packagePrices: {
      for1Couple: "₨ 95,000/-",
      for2Couples: "₨ 150,000/-",
    },
    accommodation: {
      type: "Luxury Executive Hotels",
      hotels: [
        "Malam Jabba Palace",
        "Burj Al Swat",
        "Swat Hilton",
        "Rock City Resort",
        "Honeymoon Hotel",
      ],
    },
    transportation: {
      options: [
        "Private Car (Toyota Prius / Corolla) from Islamabad to Swat & Kalam",
        "Luxury Bus (Karachi to Islamabad & Back)",
        "Prado Jeep for Off-Road Adventures",
      ],
      details:
        "Privately booked in Swat with all fuel and toll expenses covered",
    },
    travelStyle: {
      busTickets: {
        companies: ["Swat Express", "Shahid Coach"],
        route: "Karachi to Swat (Return)",
      },
    },
    packageIncludes: [
      "4 nights' accommodation in executive hotels",
      "Private transportation with fuel and toll expenses",
      "Return bus tickets from Karachi to Swat",
      "Breakfast and dinner at the hotel",
    ],
  },

  {
    id: 4,
    packageName:
      "Deluxe Private Honeymoon Tour – Karachi to Swat (6 Days Affordable Luxury 2025)",
    description:
      "Enjoy a 6-day deluxe private honeymoon tour from Karachi to Swat with romantic getaways, scenic landscapes, and deluxe stays.Explore Malam Jabba, Kalam & Swat with private transport & premium inclusions. Limited slots – Book Now!",
    coverImage: MalamJabba,
    Image: honeymoonfour,
    packageType: "Deluxe Private Tour",
    duration: "6 days (karachi to karachi)",
    tourPoints: "karachi to karachi",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packagePrices: {
      for1Couple: "₨ 60,000/-",
      for2Couples: "₨ 100,000/-",
    },
    accommodation: {
      type: "Deluxe Hotels",
      hotels: [
        "Malam Jabba Palace",
        "Hotel Liberty Bhrain",
        "Swat Palace",
        "Swastu Resorts",
        "Holiday Inn Kalam",
      ],
    },
    transportation: {
      options: [
        "Private Car (Toyota Prius / Corolla / Fielder) from Islamabad to Swat & Kalam",
        "Luxury Bus (Karachi to Islamabad & Back)",
      ],
      details:
        "Privately booked in Swat with all fuel and toll expenses covered",
    },
    travelStyle: {
      busTickets: {
        companies: ["Swat Express", "Shahid Coach"],
        route: "Karachi to Swat (Return)",
      },
    },
    packageIncludes: [
      "3 nights' accommodation in deluxe hotels",
      "Private transportation with fuel and toll expenses",
      "Return bus tickets from Karachi to Swat",
      "Breakfast and dinner at the hotel",
    ],
  },

  {
    id: 5,
    packageName:
      "Private Luxury Honeymoon Tour – Islamabad to Swat | 4 Days Romantic Escape 2025",
    description:
      "Embark on a 4-day luxury honeymoon tour from Islamabad to Swat, Kalam & Malam Jabba. Stay in executive hotels, enjoy private transportation, and experience breathtaking romantic getaways. Limited slots – Book Now!",
    coverImage: MalamJabba,
    Image: honeymoonfive,
    duration: "4 Days, 3 Nights",
    tourPoints: "Islamabad to Islamabad",
    packageType: "Private Executive Tour",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    startingAndEndingPoint: "Islamabad",

    packagePrices: {
      for1Couple: "₨ 65,000/-",
      for2Couples: "₨ 98,000/-",
    },
    accommodation: {
      type: "Executive Hotels & Resorts",
      hotels: [
        "Malamjabba Palace",
        "Burj Al Swat",
        "Swat Hilton",
        "Rock City Resort",
        "Honeymoon Hotel",
      ],
    },
    transportation: {
      options: [
        "Private Car (Toyota Prius / Corolla) from Islamabad to Swat & Kalam",
        "Mini Jeep for Off-Road Adventures",
      ],
      details:
        "Privately booked in Swat with all fuel and toll expenses covered",
    },
    travelStyle: {
      busTickets: {
        companies: ["Faisal Movers", "Daewoo"],
        route: "Islamabad to Swat (Return)",
      },
    },
    packageIncludes: [
      "accommodation in deluxe hotels",
      "Car  & Driver",
      "Breakfast and dinner at the hotel",
    ],
  },

  {
    id: 6,
    packageName:
      "Deluxe Private Honeymoon Tour – Islamabad to Swat | 3 Days Romantic Escape 2025",
    description:
      "Enjoy a 3-day deluxe honeymoon tour from Islamabad to Swat, Kalam & Malam Jabba with luxurious stays, private transportation & breathtaking romantic experiences. Limited slots – Book Now!",
    coverImage: malamjabbacover,
    Image: honeymoonsix,

    duration: "3 Days, 2 Nights",
    tourPoints: "Islamabad to Islamabad",
    destinations: ["Swat", "Kalam", "Malam Jabba"],

    packagePrices: {
      for1Couple: "₨ 38,000/-",
      for2Couples: "₨ 60,000/-",
    },
    accommodation: {
      type: "Deluxe Hotels",
      hotels: [
        "Malam Jabba Palace",
        "Hotel Liberty Bhrain",
        "Swat Palace",
        "Swastu Resorts",
        "Holiday Inn Kalam",
      ],
    },
    transportation: {
      options: [
        "Private Car (Toyota Prius / Corolla / Fielder) from Islamabad to Swat & Kalam",
        "",
      ],
      details:
        "Privately booked in Swat with all fuel and toll expenses covered",
    },
    travelStyle: {
      busTickets: {
        companies: ["Faisal Movers", "Daewoo"],
        route: "Islamabad to Swat (Return)",
      },
    },
    packageIncludes: [
      "accommodation in deluxe hotels",
      "Car  & Driver",
      "Breakfast and dinner at the hotel",
    ],
  },

  {
    id: 7,
    packageName:
      "Luxury 3-Day Swat Tour | Explore Mingora, Kalam & Malam Jabba 2025",
    description:
      "Enjoy a 3-day luxury tour from Mingora to Swat, Kalam & Malam Jabba with private transport, executive stays & thrilling adventures.Visit Swat Museum, White Palace & Malam Jabba Zipline – Book Now!",
    coverImage: MalamJabba,
    Image: familytour,
    duration: "3 Days, 2 Nights",
    tourPoints: "Mingora swat to Mingora Swat",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packagePrices: "₨ 35,000/-",
    packageType: "Luxury Private Tour",

    itinerary: [
      {
        day: 1,
        title: "Day 1: Explore Mingora – The Heart of Swat",
        activities: [
          "Departure from Mingora",
          "Visit Swat Museum – Explore the History of Swat",
          "Visit White Palace – A Royal Retreat",
          "Enjoy Local Shopping & Traditional Cuisine",
          "Overnight Stay in Swat (Fizagat)",
        ],
      },
      {
        day: 2,
        title: "Day 2: Discover Kalam – A Natural Wonderland",
        activities: [
          "Departure for Kalam",
          "Breakfast at the Hotel",
          "Drive to Madyan & Bahrain Valleys",
          "Visit Ushu Forest & Chota Mahodand Lake",
          "Enjoy Leisure Time in Ushu Forest",
          "Overnight Stay in Kalam Valley",
        ],
      },
      {
        day: 3,
        title: "Day 3: Adventure in Malam Jabba – Thrills & Fun",
        activities: [
          "Breakfast & Hotel Checkou",
          "Visit Malam Jabba – Pakistan’s Premier Ski Resort ",
          "Enjoy Zipline, Chairlift & Green Valley Adventure Park",
          " Return to Mingora – Tour Ends with Beautiful Memories",
        ],
      },
    ],
    packageIncludes: [
      "Private Car with Fuel, Toll & Parking Fees",
      "Dedicated Driver / Guide",
      "Hotel Accommodation in Executive Hotels",
      "Daily Breakfast at the Hotel",
      "Sightseeing of Swat Museum, White Palace & Malam Jabba",
      "Adventure Activities in Malam Jabba 🎿",
    ],
  },
  {
    id: 8,
    packageName: "Luxury 2-Day Swat Tour | Mingora & Kalam Private Trip 2025",
    description:
      "Experience a 2-day luxury tour in Swat & Kalam with private transport, executive stays & guided sightseeing. Explore Swat Museum, White Palace, Ushu Forest & Chota Mahodand Lake – Book Now!",
    coverImage: MalamJabba,
    Image: swattour,
    duration: "2 Days, 1 Night",
    tourPoints: "Mingora Swat to Mingora Swat",
    destinations: ["Swat", "Kalam"],
    packagePrices: "₨ 20,000/-",
    packageType: "Luxury Private Tour",
    itinerary: [
      {
        day: 1,
        title: "Day 1: Explore Mingora & Travel to Kalam",
        activities: [
          "Departure from Mingora",
          "Visit Swat Museum – Discover the Rich History of Swat 🏛️",
          "Visit White Palace – Experience Royal Heritage",
          "Enjoy Local Shopping & Traditional Food",
          "Drive to Kalam via Madyan & Bahrain Valleys",
          "Overnight Stay in Kalam Bazaar",
        ],
      },
      {
        day: 2,
        title: "Day 2: Explore Ushu Forest & Chota Mahodand Lake",
        activities: [
          "Breakfast at Hotel",
          "Departure from Kalam Bazar",
          "Visit Ushu Forest – A Natural Wonderland ",
          "Explore Chota Mahodand Lake – A Hidden Paradise",
          "Enjoy Scenic Views at Shahi Ground",
          "Return to Mingora – End of Tour",
        ],
      },
    ],
    packageIncludes: [
      "Private Car with Fuel, Toll & Parking Fees",
      "Dedicated Driver / Guide",
      " Hotel Accommodation in Premium Hotels",
      "Daily Breakfast at the Hotel",
      "Sightseeing of Swat Museum, White Palace & Ushu Forest",
    ],
  },
];

export const services = [
  {
    title: "Rent A Car or Taxi Service",
    description: "Convenient transportation options for your travels.",
  },
  {
    title: "Hotel Accommodation",
    description: "Comfortable stays at various hotels.",
  },
  {
    title: "Tourist Information Center",
    description: "Get all the information you need for your visit.",
  },
  {
    title: "Tours Guide",
    description: "Guided tours in English, Urdu, and Pashto.",
  },
  {
    title: "Pick and Drop Services",
    description: "Reliable pick-up and drop-off services.",
  },
  {
    title: "Event Planning",
    description: "Professional planning for your events.",
  },
  {
    title: "Tours Packages",
    description: "Exciting tour packages tailored for you.",
  },
];

export const Swatdaytourpackage = [
  {
    swatTourPackages: {
      introduction:
        "We offer customized tour packages for couples, families, and friends. Our transport options include private Corolla cars.",
      dayTours: [
        {
          tourName: "Malam Jabba Day Tour",
          description: "Explore Malam Jabba and its surroundings",
          price: "₨ 10,000/-",
        },
        {
          tourName: "Kalam Valley Day Tour",
          description: "Discover the beauty of Kalam Valley",
          price: "₨ 15,000/-",
        },
        {
          tourName: "Gaben Jabba Day Tour",
          description: "Visit Gaben Jabba and enjoy its scenic views",
          price: "₨ 13,000/-",
        },
        {
          tourName: "Marghuzar and White Palace Tour",
          description: "Explore Marghuzar and White Palace",
          price: "₨ 6,000/-",
        },
        {
          tourName: "Shangla Top and Yakhtingai Day Tour",
          description: "Visit Shangla Top and Yakhtingai",
          price: "₨ 14,000/-",
        },
      ],
      pickDropServices: [
        {
          serviceName: "Malam Jabba Pick/Drop",
          price: "₨ 5,500/-",
          type: "One-way",
        },
        {
          serviceName: "Kalam Pick/Drop",
          price: "₨ 7,000/-",
          type: "One-way",
        },
        {
          serviceName: "Gaben Jabba Pick/Drop",
          price: "₨ 6,000/-",
          type: "One-way",
        },
        {
          serviceName: "Marghuzar/White Palace Pick/Drop",
          price: "₨ 3,000/-",
          type: "One-way",
        },
        {
          serviceName: "Shangla Top/Yakhtingai Pick/Drop",
          price: "₨ 5,500/-",
          type: "One-way",
        },
        {
          serviceName: "Islamabad to Mingora",
          price: "₨ 10,000/-",
          type: "One-way",
        },
        {
          serviceName: "Islamabad to Malam Jabba",
          price: "₨ 15,000/-",
          type: "One-way",
        },
        {
          serviceName: "Islamabad to Kalam",
          price: "₨ 17,000/-",
          type: "One-way",
        },
        {
          serviceName: "Peshawar to Swat",
          price: "₨ 8,000/-",
          type: "One-way",
        },
        {
          serviceName: "Peshawar to Malam Jabba",
          price: "₨ 13,500/-",
          type: "One-way",
        },
        {
          serviceName: "Peshawar to Kalam",
          price: "₨ 15,000/-",
          type: "One-way",
        },
      ],
    },

    contactInformation: {
      phone: "+92 348 9857193",
      email: "fawadkhan1930@gmail.com",
    },
  },
];

export const foreignerPackages = [
  {
    tourPackage: {
      title: "Luxury Swat Valley Tour Package for Foreigners",
      duration:
        "It is a 7-Day Itinerary for foreigners to visit swat valley & hunza valley with the best services offered.",
      image: foreignone,
      itinerary: {
        day1: {
          title: "Arrival in Islamabad",
          activities: [
            "Arrival in Islamabad",
            "Transfer to hotel for overnight stay",
            "Explore Islamabad city (optional)",
          ],
        },
        day2: {
          title: "Islamabad to Swat",
          activities: [
            "Departure for Swat",
            "Visit Taxila Museum and ancient ruins (optional)",
            "Overnight stay in Swat",
          ],
        },
        day3: {
          title: "Swat Valley Tour",
          activities: [
            "Visit Malam Jabba for skiing or trekking",
            "Explore Mingora city and its bazaars",
            "Overnight stay in Swat",
          ],
        },
        day4: {
          title: "Swat Valley Tour",
          activities: [
            "Visit Kalam Valley and its scenic views",
            "Explore Ushu Forest and Mahodand Lake",
            "Overnight stay in Swat",
          ],
        },
        day5: {
          title: "Swat Valley Tour",
          activities: [
            "Visit Miandam Valley and its scenic views",
            "Explore Bahrain and its bazaars",
            "Overnight stay in Swat",
          ],
        },
        day6: {
          title: "Swat Valley Tour",
          activities: [
            "Visit Madyan and its scenic views",
            "Explore Behrain and its bazaars",
            "Overnight stay in Swat",
          ],
        },
        day7: {
          title: "Departure from Islamabad",
          activities: [
            "Departure for Islamabad",
            "Drop-off at Islamabad airport for onward journey",
          ],
        },
      },
      pricing: {
        luxuryPackage: {
          "1Person": "$600",
          "2to3Persons": "$1000",
          "4to5Persons": "$1500",
        },
      },
      inclusions: [
        "Private transportation (luxury car + pradu 4x4 or SUV)",
        "Accommodation in luxury hotels",
        "Breakfast and dinner at hotels",
        "Guided tours of Swat Valley",
        "Entrance fees for museums and historical sites",
      ],
      notes:
        "The package price may vary depending on the season, accommodation options, and other factors.",
      callToAction: "Book Tour",
    },
  },
  {
    tourPackage: {
      title: "Luxury Swat Valley and Kumrat Valley Tour Package",
      duration:
        "it is a 7-Day Itinerary package for foreigners to explore the beauty of swat and kumrat valley",
      image: foreigntwo,
      itinerary: {
        day1: {
          title: "Arrival in Islamabad",
          activities: [
            "Arrival in Islamabad",
            "Transfer to hotel for overnight stay",
            "Explore Islamabad city (optional)",
          ],
        },
        day2: {
          title: "Islamabad to Swat",
          activities: [
            "Departure for Swat",
            "Visit Taxila Museum and ancient ruins (optional)",
            "Overnight stay in Swat",
          ],
        },
        day3: {
          title: "MalamJabba Tour",
          activities: [
            "Visit Malam Jabba for skiing or trekking",
            "Explore Mingora city and its bazaars",
            "Overnight stay in Swat",
          ],
        },
        day4: {
          title: "Kalam Valley Tour",
          activities: [
            "Visit Kalam Valley and its scenic views",
            "Explore Ushu Forest and Mahodand Lake",
            "Overnight stay in Swat",
          ],
        },
        day5: {
          title: "Swat to Kumrat Valley",
          activities: [
            "Departure for Kumrat Valley",
            "Visit Thalai Top and its scenic views",
            "Explore Kumrat Valley and its scenic views",
            "Overnight stay in Kumrat Valley",
          ],
        },
        day6: {
          title: "Kumrat Valley Tour",
          activities: [
            "Visit Dojanga and its scenic views",
            "Explore Badagoi Lake and its scenic views",
            "Overnight stay in Kumrat Valley",
          ],
        },
        day7: {
          title: "Departure from Islamabad",
          activities: [
            "Departure for Islamabad",
            "Drop-off at Islamabad airport for onward journey",
          ],
        },
      },
      pricing: {
        luxuryPackage: {
          singleOrCouple: "Up to $700",
          smallGroup: "Up to $1,200",
          mediumGroup: "$2,200",
          largeGroup: "$4,000 and so on...",
        },
      },
      inclusions: [
        "Private transportation (luxury car or SUV)",
        "Accommodation in luxury hotels",
        "Breakfast and dinner at hotels",
        "Guided tours of Swat Valley and Kumrat Valley",
        "Entrance fees for museums and historical sites",
      ],
      notes:
        "The package price may vary depending on the season, accommodation options, and other factors.",
      callToAction: "Book Tour",
    },
  },
  {
    tourPackage: {
      title:
        "Luxury 7-Day Swat and Hunza Tour Package for International Tourists",
      duration:
        "it is a 7-Day Itinerary tour package for international tourists coming from all over the world to explore the beauty of swat and hunza valley",
      image: foreignthree,
      pricing: {
        luxuryPackage: {
          singleOrCouple: "$550",
          twoCouples: "$1000",
          Family: "$1800",
        },
      },
      inclusions: [
        "Private transportation (luxury car or SUV)",
        "Accommodation in luxury hotels",
        "Breakfast and dinner at hotels",
        "Guided tours of Swat and Hunza  Valleys",
        "Entrance fees for museums and historical sites",
      ],
      notes:
        "The package price may vary depending on the season, accommodation options, and other factors.",
      callToAction: "Book Tour",
    },
  },
  {
    tourPackage: {
      title: "Luxury 7-Day Swat and Hunza Tour Package for Pakistani Citizens",
      image: foreignfour,
      duration:
        "It is a 7-Day Itinerary tour package for pakistani citizens from all over the country (pakistan) to explore the beauty of swat and hunza valley",
      itinerary: {
        day1: {
          title: "Arrival in Islamabad",
          activities: [
            "Arrival in Islamabad",
            "Transfer to hotel for overnight stay",
            "Explore Islamabad city (optional)",
          ],
        },
        day2: {
          title: "Islamabad to Swat",
          activities: [
            "Departure for Swat",
            "Visit Taxila Museum and ancient ruins (optional)",
            "Overnight stay in Swat",
          ],
        },
        day3: {
          title: "Swat Valley Tour",
          activities: [
            "Visit Malam Jabba for skiing or trekking",
            "Explore Mingora city and its bazaars",
            "Overnight stay in Swat",
          ],
        },
        day4: {
          title: "Kalam to Hunza",
          activities: [
            "Departure for Hunza",
            "Stop over to Naran and Babusar Top (optional)",
            "Overnight stay in Hunza",
          ],
        },
        day5: {
          title: "Hunza Valley Tour",
          activities: [
            "Visit Altit and Baltit Forts",
            "Explore Karimabad and its Bazaars",
            "Overnight stay in Hunza Valley",
          ],
        },
        day6: {
          title: "Hunza Valley Tour",
          activities: [
            "Visit Attabad Lake and Nagar Valley (optional)",
            "Explore Duikar viewpoint for sunset",
            "Overnight stay in Hunza",
          ],
        },
        day7: {
          title: "Departure from Islamabad",
          activities: [
            "Departure for Islamabad",
            "Drop-off at Islamabad airport for onward journey",
          ],
        },
      },
      pricing: {
        luxuryPackage: {
          singleOrCouple: "1,05,000 pkr/-",
          twoCouples: "1,80,000 pkr/-",
          Family: "2,50,000 pkr/-",
        },
      },
      inclusions: [
        "Private transportation (luxury car or SUV)",
        "Accommodation in luxury hotels",
        "Breakfast and dinner at hotels",
        "Guided tours of Swat and Hunza  Valleys",
        "Entrance fees for museums and historical sites",
      ],
      notes:
        "The package price may vary depending on the season, accommodation options, and other factors.",
      callToAction: "Book Tour",
    },
  },
];
