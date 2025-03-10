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
import BRVimage from "../assets/PackagesImages/newtourimageone.jpeg";
import privatetourimage from "../assets/PackagesImages/newtourimagetwo.jpeg";
import honeymoonimage from "../assets/PackagesImages/newtourimagethree.jpg";
import familyprivate from "../assets/PackagesImages/newtourimagefour.jpeg";

export const toursPackage = [
  {
    id: 1,
    packageName: "Luxury Honeymoon/Couple Tour ",
    description:
      "Enjoy a luxurious honeymoon or couple tour in Swat Valley with our executive package. Explore the stunning landscapes of Swat, Kalam, and Malam Jabba with your loved one.",
    coverImage: kalamvalley,
    Image: HoneyMoonone,
    duration: "4 days 3 nights",
    tourPoints: "Lahore to Lahore",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packageType: "Executive Package",
    packagePrices: {
      for1Couple: "₨ 80,000",
      for2Couples: "₨ 130,000",
    },
    accommodation: {
      type: "Executive Hotels",
      hotels: [
        "Malam Jabba Palace",
        "Burj Al Swat",
        "Swat Hilton",
        "Rock City Resort",
        "Honeymoon Hotel",
      ],
    },
    transportation: {
      options: ["Private Car (Prius/Corolla)", "Mini Jeep"],
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
    packageName: "Honeymoon Couple / Family Tour ",
    description:
      "Experience a memorable honeymoon or family tour in Swat Valley with our deluxe package, Pick & drop you from Lahore to Explore the beautiful landscapes of Swat, Kalam, and Malam Jabba.",
    coverImage: malamjabbacover,
    Image: HoneyMoontwo,
    duration: "days 3 nights 2",
    tourPoints: "Lahore to Lahore",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packagePrices: {
      for1Couple: "Rs. 45,000/-",
      for2Couples: "Rs. 75,000/-",
    },
    accommodation: {
      type: "Deluxe Accommodations",
      hotels: [
        "Malam Jabba Palace",
        "Hotel Liberty Bhrain",
        "Swat Palace",
        "Swastu Resorts",
        "Holiday Inn Kalam",
      ],
    },
    transportation: {
      options: ["Prius/Corolla Car", "Fielder Car"],
      details:
        "Privately booked in Swat with all fuel and toll expenses covered",
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
    packageName: "Private Luxury Honeymoon/Couple Tour ",
    description:
      "Enjoy a private luxury honeymoon or couple tour in Swat Valley, we are ready to pick you from Karachi to Swat.",
    coverImage: MalamJabba,
    Image: HoneyMoonthree,
    duration: "7 days (Karachi)",
    tourPoints: "Karachi to Karachi",

    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packagePrices: {
      for1Couple: "₨ 95,000/-",
      for2Couples: "₨ 150,000/-",
    },
    accommodation: {
      type: "Executive Accommodations",
      hotels: [
        "Malam Jabba Palace",
        "Burj Al Swat",
        "Swat Hilton",
        "Rock City Resort",
        "Honeymoon Hotel",
      ],
    },
    transportation: {
      options: ["Prius/Corolla Car", "Prado Jeep"],
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
    packageName: "Deluxe Private Luxury Honeymoon/Couple Tour ",
    description:
      "Experience a six days luxurious honeymoon or couple tour in Swat Valley, visit from your starting point Karachi.",
    coverImage: MalamJabba,
    Image: honeymoonfour,
    duration: "6 days (karachi)",
    tourPoints: "karachi to karachi",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packagePrices: {
      for1Couple: "₨ 60,000/-",
      for2Couples: "₨ 100,000/-",
    },
    accommodation: {
      type: "Deluxe Accommodations",
      hotels: [
        "Malam Jabba Palace",
        "Hotel Liberty Bhrain",
        "Swat Palace",
        "Swastu Resorts",
        "Holiday Inn Kalam",
      ],
    },
    transportation: {
      options: ["Prius/Corolla Car", "Fielder Car"],
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
    packageName: "Private Luxury Honeymoon/Couple Tour ",
    description:
      "enjoy a luxurious honeymoon or couple tour in Swat Valley, visit the beautiful famous places of Swat, Kalam, and Malam Jabba with your loved one, we are ready to pick you from Islamabad.",
    coverImage: MalamJabba,
    Image: honeymoonfive,
    duration: "4 Days, 3 Nights",
    tourPoints: "Islamabad to Islamabad",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    startingAndEndingPoint: "Islamabad",

    packagePrices: {
      for1Couple: "₨ 65,000/-",
      for2Couples: "₨ 98,000/-",
    },
    accommodation: {
      type: "Executive Accommodations",
      hotels: [
        "Malamjabba Palace",
        "Burj Al Swat",
        "Swat Hilton",
        "Rock City Resort",
        "Honeymoon Hotel",
      ],
    },
    transportation: {
      options: ["Prius/Corolla Car", "Mini Jeep"],
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
    packageName: "Deluxe Private Luxury Honeymoon/Couple Tour ",
    description:
      "Experience a Deluxe HoneyMoon Tour in swat valley, visit the mesmerizing places of Swat, Kalam, and Malam Jabba with your loved one, we are ready to pick & drop you from Islamabad.",
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
      type: "Deluxe Accommodations",
      hotels: [
        "Malam Jabba Palace",
        "Hotel Liberty Bhrain",
        "Swat Palace",
        "Swastu Resorts",
        "Holiday Inn Kalam",
      ],
    },
    transportation: {
      options: ["Prius/Corolla Car", "Fielder Car"],
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
    packageName: "Luxury 3-Day Swat Tour ",
    description:
      "Explore the Beauty of Swat Valley with our Luxury Tour Package of 3 days and 2 nights, make the moments memorable with your family.",
    coverImage: MalamJabba,
    Image: familytour,
    duration: "3 Days, 2 Nights",
    tourPoints: "Mingora swat to Mingora Swat",
    destinations: ["Swat", "Kalam", "Malam Jabba"],
    packagePrices: "₨ 35,000/-",

    itinerary: [
      {
        day: 1,
        title: "Explore Mingora",
        activities: [
          "Departure from Mingora",
          "Visit Swat Museum",
          "Explore White Palace",
          "Local shopping and food in Mingora",
          "Overnight stay in Swat (Fizagat)",
        ],
      },
      {
        day: 2,
        title: "Discover Kalam",
        activities: [
          "Departure for Kalam",
          "Breakfast",
          "Visit Madyan, Bahrain, Ushu Forest, and Chota Mahodand Lake",
          "Enjoy time at Ushu Forest",
          "Overnight stay in Kalam Valley",
        ],
      },
      {
        day: 3,
        title: "Adventure in Malam Jabba",
        activities: [
          "Breakfast",
          "Explore Malam Jabba",
          "Activities: Zipline, Chairlift, Green Valley Adventure Park",
          "Return to Mingora",
        ],
      },
    ],
    packageIncludes: [
      "Private car with fuel, tolls, and parking fees",
      "Driver or guide",
      "Hotel accommodation",
      "Breakfast",
    ],
  },
  {
    id: 8,
    packageName: "Luxury 2-Day Swat Tour ",
    description:
      "experience the beauty of swat valley with the luxury tour package of 2 days and 1 night, picking you from mingora and drop you back to mingora.",
    coverImage: MalamJabba,
    Image: swattour,
    duration: "2 Days, 1 Night",
    tourPoints: "Mingora Swat to Mingora Swat",
    destinations: ["Swat", "Kalam"],
    packagePrices: "₨ 20,000/-",
    itinerary: [
      {
        day: 1,
        title: "Explore Mingora and Kalam",
        activities: [
          "Departure from Mingora",
          "Visit Swat Museum",
          "Explore White Palace",
          "Local shopping and food in Mingora",
          "Departure for Kalam",
          "Visit Madyan and Bahrain",
          "Overnight stay in Kalam Bazar",
        ],
      },
      {
        day: 2,
        title: "Discover Ushu Forest",
        activities: [
          "Departure from Kalam Bazar",
          "Visit Ushu Forest and Chota Mahodand Lake",
          "Enjoy time at Shahi Ground",
          "Return to Mingora",
        ],
      },
    ],
    packageIncludes: [
      "Private car with fuel, tolls, and parking fees",
      "Driver or guide",
      "Hotel accommodation",
      "Breakfast",
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
  {
    familytourpackages: [
      {
        category: "Family Trip (2 to 4 persons)",
        accommodation: "1 Room per night",
        packages: [
          { duration: "3 Days 2 Nights", price: 35000 },
          { duration: "4 Days 3 Nights", price: 45000 },
          { duration: "5 Days 4 Nights", price: 55000 },
        ],
      },
      {
        category: "Family Trip (4 to 7 persons)",
        accommodation: "2 Rooms per night",
        packages: [
          { duration: "3 Days 2 Nights", price: 50000 },
          { duration: "4 Days 3 Nights", price: 65000 },
          { duration: "5 Days 4 Nights", price: 75000 },
        ],
      },
      {
        category: "Large Family Trip",
        accommodation: "More than 7 persons",
        contact: "Click on WhatsApp for details",
      },
    ],
    destinations: [
      "Swat River Fezagat",
      "Township",
      "White Palace",
      "Swat Museum",
      "Madyan Valley",
      "Trout Fishing Farm",
      "Bahrain Valley",
      "Kalam Bazar",
      "Usho Forest",
      "Chota Mahodand Lake",
      "Malam Jabba Ski Resort",
      "Green Valley Adventure Park",
      "and many others...",
    ],
    transportation: [
      { vehicle: "Prius/Corolla", capacity: "2-4 persons" },
      { vehicle: "BRV/APV", capacity: "4-7 persons" },
      {
        info: "Privately booked in Swat with all fuel, driver, and toll expenses covered",
      },
    ],
    packageIncludes: [
      "Accommodation in standard hotels",
      "Private transportation with fuel and toll expenses",
      "Driver or guide with all expenses",
    ],
    extraCharges: [
      { from: "Islamabad", price: 1200 },
      { from: "Lahore", price: 2300 },
      { from: "Karachi", price: 5600 },
    ],
    contactInfo: {
      phone: "+92 348 9857193",
      email: "fawadkhan1930@gmail.com",
      website: "www.theswattours.com",
    },
  },
];

export const newtourpackages = [
  {
    category: "Family Customize or Private Tours",
    image: privatetourimage,
    groupSize: "2 to 4 persons",
    accommodation: "1 Room per night",
    packages: [
      { duration: "3 Days 2 Nights", price: 35000 },
      { duration: "4 Days 3 Nights", price: 45000 },
      { duration: "5 Days 4 Nights", price: 55000 },
    ],
  },
  {
    category: "Family Customize or Private Tours",
    image: familyprivate,
    groupSize: "4 to 7 persons",
    accommodation: "2 Rooms per night",
    packages: [
      { duration: "3 Days 2 Nights", price: 50000 },
      { duration: "4 Days 3 Nights", price: 65000 },
      { duration: "5 Days 4 Nights", price: 75000 },
    ],
  },
  {
    category: "Private Car or BRV Tour Packages",
    image: BRVimage,
    groupSize: "2 to 4 persons",
    accommodation: "1 Room per night",
    packages: [
      { duration: "3 Days 2 Nights", price: 65000 },
      { duration: "4 Days 3 Nights", price: 75000 },
      { duration: "5 Days 4 Nights", price: 85000 },
    ],
  },
  {
    category: "Private Car or BRV Tour Packages",
    image: BRVimage,
    groupSize: "4 to 7 persons",
    accommodation: "2 Rooms per night",
    packages: [
      { duration: "3 Days 2 Nights", price: 80000 },
      { duration: "4 Days 3 Nights", price: 95000 },
      { duration: "5 Days 4 Nights", price: 105000 },
    ],
  },
  {
    category: "5-Star Royal Couple or Honeymoon Packages",
    image: honeymoonimage,
    groupSize: "Couple",
    accommodation: "Luxury Hotels",
    packages: [
      { name: "Dx Plus Package", duration: "5 Days 4 Nights", price: 180000 },
      { name: "Executive Package", duration: "4 Days 3 Nights", price: 120000 },
    ],
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
