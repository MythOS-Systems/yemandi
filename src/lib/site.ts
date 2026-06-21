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
    instagram: "https://www.instagram.com/yemandi_usa/",
    facebook: "https://www.facebook.com/p/Yemandi-Yemeni-Cuisine-61574103542146/",
  },
  // Toast-powered ordering / reservations (their actual links)
  order: "https://order.toasttab.com/online/yemandi-888-s-greenville-ave-ste-210",
  reserve: "https://tables.toasttab.com/restaurants/398b8661-4ce8-4afa-9ddd-4e15965117f2/reserve?deeplink=true",
  waitlist: "https://tables.toasttab.com/restaurants/398b8661-4ce8-4afa-9ddd-4e15965117f2/joinWaitlist?deeplink=true",
  loyalty: "https://www.toasttab.com/yemandi-888-s-greenville-ave-ste-210/rewardsLookup",
  cateringLead: "https://www.toasttab.com/invoice/lead?rx=398b8661-4ce8-4afa-9ddd-4e15965117f2",
  hours: [
    { day: "Monday", time: "11:00 AM – 10:00 PM" },
    { day: "Tuesday", time: "11:00 AM – 10:00 PM" },
    { day: "Wednesday", time: "11:00 AM – 10:00 PM" },
    { day: "Thursday", time: "11:00 AM – 10:00 PM" },
    { day: "Friday", time: "11:00 AM – 11:00 PM", late: true },
    { day: "Saturday", time: "11:00 AM – 11:00 PM", late: true },
    { day: "Sunday", time: "11:00 AM – 11:00 PM", late: true },
  ] as Hour[],
  // Real press coverage
  press: [
    { outlet: "D Magazine", quote: "The hottest seat in town is the floor at Yemandi.", href: "https://www.dmagazine.com/publications/d-magazine/2025/october/yemandi-yemeni-cuisine-richardson/" },
    { outlet: "Community Impact", quote: "Yemeni cuisine arrives in Richardson — chicken mandi, beef kabsah, and more.", href: "https://communityimpact.com/dallas-fort-worth/richardson/dining/2025/05/23/yemandi-yemeni-cuisine-offers-lamb-chicken-dishes-in-richardson/" },
    { outlet: "TikTok", quote: "Nearly 6 million views a month after opening.", href: "https://www.instagram.com/yemandi_usa/" },
  ],
} as const;
