export const descriptionsList = [
  {
    content:
      "The MCG aim is to create human experience that empower global organisations using the latest software, Web motion, Design and LXP technologies",
    title: "A witty guy",
  },
  {
    content:
      "Chief Executive Officer \nOur values determine who we are as individuals, and as a team.",
    title: "Nicky Hoyand",
  },
  {
    content:
      "Executive Chairman \nTogether we work hard, we laugh a lot, we innovate constantly and we never stop learning.",
    title: "Gareth Mobley",
  },

  {
    content:
      "If these values sound like you, and describe the people you want to work with, then DBLX is the place for you.",
    title: "A beautiful girl",
  },

  {
    content:
      "Exciting challenges lie ahead… new regions, technologies, and businesses. Guided by our core values, we’ll meet these challenges creatively and with a smile on our face.",
    title: "A cute girl",
  },
  {
    content:
      "Chief Operating Officer \nWe are empowering millions of people around the world to grow, learn and better themselves using human engagement software.",
    title: "Chris Charman",
  },
  {
    content:
      "WE play a major role in one of the UK's fastest growing tech companies. The perks of being part of DBLX don’t stop at collaborating with great people on exciting and innovative projects for clients based all around the world.",
    title: "A smart girl",
  },
  {
    content:
      "With over a million users utilising our systems, we are on an audacious and incredibly rewarding mission to expand our increasingly diverse team.",
    title: "One more clever girl",
  },
  {
    content: "Finance Director \nAre you a Superstar? Team DBLX needs you",
    title: "James Walker",
  },
  {
    content:
      "Chief Brand Officer\nImpact involves getting results, infkuence is about spreading the passion you have",
    title: "Rich Urwin",
  },
  {
    content: "Chief Technology Officer \nBorn to lead, destined to inspire",
    title: "Dan Macklin",
  },
  {
    content: "Leadership is not about a title or a destination.",
    title: "A pretty girl",
  },
];

const teamAvatarList = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5gjmBzpYGStVtt6FIkua0MwkhfebY6AfMQ&usqp=CAU",
  "http://leusdiv.ru/wp-content/uploads/2012/08/yubti.jpg",
  "https://data.whicdn.com/images/225888478/original.gif",
  "https://ak.picdn.net/shutterstock/videos/7343305/thumb/6.jpg",
  "https://st03.kakprosto.ru//images/article/2011/4/6/1_525512a50289b525512a5028d8.jpg",
  "https://st.depositphotos.com/2590737/2930/i/600/depositphotos_29305907-stock-photo-young-attractive-man-face-looking.jpg",
  "https://sun-technology.ru/wp-content/uploads/2015/05/pochemu_my1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbv0pVJ6dFfXQh5HT_ySK5MKu0nwcJNK4dQ&usqp=CAU",
  "https://image.freepik.com/fotos-gratis/feche-o-homem-olhando-para-cima_13339-159123.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqKE1jlxRRZgnkhEeFSiBEKDEfOrmFJSxqg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYjiFLRPKuEp1SGlwUsKdP2ifdSTWWCsiBg&usqp=CAU",
  "https://thumbs.dreamstime.com/b/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B5-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%B3-%D0%B0%D0%B7%D0%B0-80907949.jpg",
];

export const motionGaleryContent = teamAvatarList.map((image, index) => {
  const { content, title } = descriptionsList[index];
  return {
    image,
    title,
    content,
  };
});
