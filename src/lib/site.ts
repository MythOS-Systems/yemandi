// Central business data for Yemandi Yemeni Cuisine — research-sourced.

type Hour = { day: string; time: string; closed?: boolean; late?: boolean };

export const site = {
  name: "Yemandi",
  fullName: "Yemandi Yemeni Cuisine",
  tagline: "The first authentic Yemeni restaurant in DFW",
  cuisine: "Authentic Yemeni",
  address: {
    line1: "888 S Greenville Ave, Unit 210",
    line2: "Richardson, TX 75081",
    full: "888 S Greenville Ave Unit 210, Richardson, TX 75081",
    mapsQuery: "Yemandi+Yemeni+Cuisine+888+S+Greenville+Ave+Richardson+TX+75081",
  },
  phone: "(214) 377-7999",
  phoneHref: "tel:+12143777999",
  rating: "4.6",
  social: {
    facebook: "https://www.facebook.com/p/Yemandi-Yemeni-Cuisine-61574103542146/",
    facebookLabel: "Facebook",
  },
  order: "https://order.online/store/32405615",
  hours: [
    { day: "Monday", time: "11:00 AM – 10:00 PM" },
    { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
    { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
    { day: "Thursday", time: "11:00 AM – 10:00 PM" },
    { day: "Friday", time: "11:00 AM – 11:00 PM", late: true },
    { day: "Saturday", time: "11:00 AM – 11:00 PM", late: true },
    { day: "Sunday", time: "11:00 AM – 11:00 PM", late: true },
  ] as Hour[],
} as const;
