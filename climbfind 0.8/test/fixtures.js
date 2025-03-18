export const serviceUrl = "http://localhost:3000";

// User test Fixtures
export const maggie = {
  firstName: "Maggie",
  lastName: "Simpson",
  email: "maggie@simpson.com",
  password: "secret"
};

export const testUsers = [
  {
    firstName: "Homer",
    lastName: "Simpson",
    email: "homer@simpson.com",
    password: "secret"
  },
  {
    firstName: "Marge",
    lastName: "Simpson",
    email: "marge@simpson.com",
    password: "secret"
  },
  {
    firstName: "Bart",
    lastName: "Simpson",
    email: "bart@simpson.com",
    password: "secret"
  }
];

// Location test Fixtures
export const awesome = {
  title: "Awesome Walls",
  description: "Awesome Walls Dublin is a premier indoor climbing facility that stands as a beacon for climbing enthusiasts in Ireland.",
  category: "Indoor Climbing",
  latitude: 53.40181469611018,
  longitude: -6.316292754371287
};

export const testLocations = [
  {
    title: "Fairhead",
    description: "Steep, 640 ft.-tall rocky headland & noted climbing destination also offering panoramic walks.",
    category: "Outdoor Trad",
    latitude:  55.222322594547904,
    longitude: -6.153658034264712
  }, 
  {
    title: "Gravity Climbing Centre",
    description: "Bouldering climbing centre",
    category: "Indoor Climbing",
    latitude:  53.335869315996625,
    longitude: -6.323307236784318
  },
  {
    title: "Glendalough",
    description: "Boulder in one of Ireland's most iconic sites",
    category: "Outdoor Boulder",
    latitude: 53.01251677948933,
    longitude: -6.325917844517138
  }
];

// Fixtures for images
export const awesomeView = {
  title: "Awesome View",
  imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c2/11/28/awesome-walls-dublin.jpg?w=1000&h=600&s=1",
  description: "Awesome Walls Dublin is one of the largest and most modern indoor climbing centres in Europe catering for individuals, groups and birthday parties."
};

export const testImages = [
  {
    title: "Fair way to go",
    imageUrl: "https://hikeandclimb.ie/wp-content/uploads/2016/05/11051838_10207043027103380_2780624506810136303_o.jpg",
    description: "Plenty of equipment needed for this climber."
  },
  {
    title: "Bouldering against gravity",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/2f/33/a1/gravity-climbing-center.jpg?w=1000&h=600&s=1",
    description: "Full house in gravity gym"
  },
  {
    title: "Glendalough routes",
    imageUrl: "https://lh4.googleusercontent.com/proxy/-c6aiSpkdqZul38tuuHEHl3aVbcTzDwwT8Tcc1QOMndGyLoEyCmO2iGtb6CFhYD8f47e_HCEYyEreg6pGiQWXxF2mPdoYxhCO7Ihs2D8TigbJ4hk6eASWSl3wFwhUjOy0kQEKuq5TNukqtB3m0DsPVQ3TaDdwUq-",
    description: "Acorn Buttress nestles at the foot of the East Wing of Twin Buttress. Less than 20m high, it has a clutch of single pitch routes mainly in the lower grades."
  }
];