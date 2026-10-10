// Unsplash photos (free to use under the Unsplash License).
const photo = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

// Our own work photos live in /public/images.
export const IMAGES = {
  hero: photo("1603400521630-9f2de124b33b", 1400),
  stitching: photo("1772351720165-d9218e428cf0", 1000),
  branding: photo("1661510160310-96b442aea9c0", 1000),
  delivery: photo("1620455800201-7f00aeef12ed", 1000),
  banner: photo("1606501126768-b78d4569d3f9", 2000),
  polo: photo("1625698311031-f0dd15be5144", 1000),
  outerwear: photo("1604882767135-b41fac508fff", 1000),
  umbrellas: "/images/umbrellas-branded.jpg",
  sportsBack: "/images/sports-kit-back.jpg",
  sportsDetail: "/images/sports-kit-detail.jpg",
};

export const SITE = {
  name: "Loika Enterprise Ltd",
  brandMain: "Loika",
  brandSub: "Enterprise Ltd",
  tagline: "Stitching, Branding and Custom Print",
  email: "onditipatoo@gmail.com",
  phoneDisplay: "+254 741 200 213",
  phoneTel: "+254741200213",
  description:
    "Loika Enterprise Ltd provides professional stitching, embroidery, branding and custom print on apparel, with delivery to your door.",
};

export const SERVICES = [
  {
    key: "stitching",
    title: "Stitching and Embroidery",
    text: "Tailored stitching and logo embroidery for uniforms, workwear and corporate apparel, finished to a consistent standard on every piece.",
    image: IMAGES.stitching,
    alt: "Embroidery machine stitching a design onto fabric",
  },
  {
    key: "branding",
    title: "Brand Apparel",
    text: "Coordinated clothing that carries your identity: corporate wear, staff uniforms and event teams that look the same on every person.",
    image: IMAGES.branding,
    alt: "Professionals in matching business attire",
  },
  {
    key: "print",
    title: "Custom Cloth Printing",
    text: "Screen and direct-to-garment printing on T-shirts, caps, bags and fabric runs, with clean detail and colour that holds through washing.",
    image: IMAGES.sportsBack,
    alt: "Blue sports shirt with black printed club lettering on the back",
  },
  {
    key: "delivery",
    title: "Delivery",
    text: "Finished orders are packed, checked and delivered to your office, site or home, ready to wear.",
    image: IMAGES.delivery,
    alt: "Boxes being loaded into a delivery van",
  },
];

export const PRODUCTS = [
  {
    title: "Branded Umbrellas",
    text: "Printed-logo umbrellas for promotions, events and corporate giveaways.",
    image: IMAGES.umbrellas,
    alt: "Navy branded umbrellas with a white printed logo, laid out in rows",
  },
  {
    title: "Sports and Club Kit",
    text: "Custom printed kits for schools, clubs and teams, with names, crests and club lettering.",
    image: IMAGES.sportsDetail,
    alt: "Blue sports shirt with black printed club lettering",
  },
  {
    title: "Corporate and Polo Shirts",
    text: "Embroidered and printed polos and shirts for offices, schools and service teams.",
    image: IMAGES.polo,
    alt: "White polo shirt on a rack",
  },
  {
    title: "Outerwear and Jackets",
    text: "Branded jackets and coats for field teams, events and seasonal orders.",
    image: IMAGES.outerwear,
    alt: "Coat hanging on a rack",
  },
];

export const PROCESS = [
  {
    title: "Consult",
    text: "Tell us the garment, quantity, colours and branding you need. We confirm the details and send a clear quote.",
  },
  {
    title: "Design",
    text: "We prepare the artwork, embroidery file or print layout and send it for your approval before production starts.",
  },
  {
    title: "Produce",
    text: "Stitching, embroidery and printing are carried out in-house, with quality checks at each stage.",
  },
  {
    title: "Deliver",
    text: "Your order is packed, checked and delivered to the address you choose.",
  },
];
