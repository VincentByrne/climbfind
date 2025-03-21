export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret"
    },
    admin: {
      firstName: "admin",
      lastName: "test",
      email: "admin@test.ie",
      password: "admin123"
    }
  },
  
  locations: {
    _model: "Location",
    awesome: {
      title: "Awesome Walls",
      description: "Awesome Walls Dublin is a premier indoor climbing facility that stands as a beacon for climbing enthusiasts in Ireland.",
      category: "Indoor Climbing",
      latitude: 53.40181469611018,
      longitude: -6.316292754371287,
      userid: "->users.admin"
    },
    fairhead: {
      title: "Fairhead",
      description: "Steep, 640 ft.-tall rocky headland & noted climbing destination also offering panoramic walks.",
      category: "Outdoor Trad",
      latitude: 55.222322594547904,
      longitude: -6.153658034264712,
      userid: "->users.admin"
    },
    gravity: {
      title: "Gravity Climbing Centre",
      description: "Bouldering climbing centre",
      category: "Indoor Climbing",
      latitude: 53.335869315996625,
      longitude: -6.323307236784318,
      userid: "->users.admin"
    }
  },
  
  images: {
    _model: "Image",
    image_1: {
      title: "Awesome View",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c2/11/28/awesome-walls-dublin.jpg?w=1000&h=600&s=1",
      description: "Awesome Walls Dublin is one of the largest and most modern indoor climbing centres in Europe catering for individuals, groups and birthday parties.",
      locationid: "->locations.awesome"
    },
    image_2: {
      title: "Fair way to go",
      imageUrl: "https://hikeandclimb.ie/wp-content/uploads/2016/05/11051838_10207043027103380_2780624506810136303_o.jpg",
      description: "Plenty of equipment needed for this climber.",
      locationid: "->locations.fairhead"
    },
    image_3: {
      title: "Bouldering against gravity",
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/2f/33/a1/gravity-climbing-center.jpg?w=1000&h=600&s=1",
      description: "Full house in gravity gym",
      locationid: "->locations.gravity"
    }
  }
};