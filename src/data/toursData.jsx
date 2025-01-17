import kalamvalley from "../../public/PackagesImages/beautifulhills.jpg";
import malamjabbacover from "../../public/PackagesImages/malamjabbacover.jpg";
import kalam from "../../public/PackagesImages/kalamprofile.jpg";
import MalamJabba from "../../public/PackagesImages/malamjabbaprofile.jpg";
import HoneyMoonone from "../../public/PackagesImages/honeymoonprofile.jpg";
import HoneyMoontwo from "../../public/PackagesImages/honeymoonprofiletwo.jpg";
import HoneyMoonthree from "../../public/PackagesImages/honeymoonthree.jpg";
import honeymooncover from "../../public/PackagesImages/HoneyMoonCover.jpg";
import honeymoonfive from "../../public/PackagesImages/honeymoonfive.jpg";
import honeymoonsix from "../../public/PackagesImages/honeymoonsix.jpg";
import honeymoonseven from "../../public/PackagesImages/honeymoonseven.jpg";
export const toursPackage = [
  {
    id: 1,
    packageName: "Luxury Honeymoon/Couple Tour Package",
    coverImage: kalamvalley,
    Image: HoneyMoonone,
    duration: {
      days: 4,
      nights: 3,
    },
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
    packageName: "Deluxe Private Luxury Honeymoon/Couple Tour Package",
    coverImage: malamjabbacover,
    Image: HoneyMoontwo,
    duration: {
      days: 3,
      nights: 2,
    },
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
  },
  {
    id: 3,
    packageName: "Private Luxury Honeymoon/Couple Tour Package",
    coverImage: MalamJabba,
    Image: HoneyMoonthree,
    duration: "7 days 4 Nights (Karachi to Karachi)",

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
    packageName: "Deluxe Private Luxury Honeymoon/Couple Tour Package",
    coverImage: MalamJabba,
    Image: honeymooncover,
    duration: "4 days 3 Nights (karachi to karachi)",
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
    packageName: "Private Luxury Honeymoon/Couple Tour Package",
    coverImage: MalamJabba,
    Image: HoneyMoonone,
    duration: "4 Days, 3 Nights",
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
  },
  {
    id: 6,
    packageName: "Deluxe Private Luxury Honeymoon/Couple Tour Package",
    coverImage: malamjabbacover,
    Image: honeymoonfive,

    duration: "3 Days, 2 Nights",
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
  },
  {
    id: 7,
    packageName: "Luxury 3-Day Swat Tour Package",
    coverImage: MalamJabba,
    Image: honeymoonseven,
    duration: "3 Days, 2 Nights",
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
    packageName: "Luxury 2-Day Swat Tour Package",
    coverImage: MalamJabba,
    Image: honeymoonsix,
    duration: "2 Days, 1 Night",
    destinations: ["Swat", "Kalam"],
    totalCost: "₨ 20,000/-",
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
//services
export const service = [
  {
    serviceName: "Malam Jabba Day Tour",
    coverImage: MalamJabba,
    Image: MalamJabba,
    duration: "1 Day",
    destination: "Malam Jabba",
    price: "₨ 10,000/-",
    features: [
      "Round-trip transportation",
      "Guided tour",
      "Adventure activities (optional)",
    ],
  },
  {
    serviceName: "Malam Jabba Pick/Drop Service",

    destination: "Malam Jabba",
    price: "₨ 6,000/-",

    features: ["One-way transportation to/from Malam Jabba"],
  },
];
//day packages
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
      website: "[insert website]",
    },
  },
];

//foregier Packages
export const foreignerPackages = [
  {
    tourPackage: {
      title: "Luxury Swat Valley Tour Package for Foreigners",
      duration: "7-Day Itinerary",
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
          "1Person": 600,
          "2to3Persons": 1000,
          "4to5Persons": 1500,
        },
      },
      inclusions: [
        "Private transportation (luxury car + pradu 4by4 or SUV)",
        "Accommodation in luxury hotels",
        "Breakfast and dinner at hotels",
        "Guided tours of Swat Valley",
        "Entrance fees for museums and historical sites",
      ],
      notes:
        "The package price may vary depending on the season, accommodation options, and other factors.",
      callToAction: "Book Your Luxury Tour Today!",
    },
  },
  {
    tourPackage: {
      title: "Luxury Swat Valley and Kumrat Valley Tour Package",
      duration: "7-Day Itinerary",
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
      callToAction: "Book Your Luxury Tour Today!",
    },
  },
];
