const textData = {
  content:
    "Taiwan called motorcycle, motor bike [1] or a motorcycle," +
    " the motorcycle referred to in the mainland, Hong Kong and Southeast" +
    " Asia known as motorcycles.",
  title: "Motorcycle",
};
let dataArray = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5gjmBzpYGStVtt6FIkua0MwkhfebY6AfMQ&usqp=CAU",
  },
  { image: "http://leusdiv.ru/wp-content/uploads/2012/08/yubti.jpg" },
  { image: "https://data.whicdn.com/images/225888478/original.gif" },
  {
    image: "https://ak.picdn.net/shutterstock/videos/7343305/thumb/6.jpg",
  },
  {
    image:
      "https://st03.kakprosto.ru//images/article/2011/4/6/1_525512a50289b525512a5028d8.jpg",
  },
  {
    image:
      "https://st.depositphotos.com/2590737/2930/i/600/depositphotos_29305907-stock-photo-young-attractive-man-face-looking.jpg",
  },
  {
    image:
      "https://sun-technology.ru/wp-content/uploads/2015/05/pochemu_my1.jpg",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfbv0pVJ6dFfXQh5HT_ySK5MKu0nwcJNK4dQ&usqp=CAU",
  },
  {
    image:
      "https://image.freepik.com/fotos-gratis/feche-o-homem-olhando-para-cima_13339-159123.jpg",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqKE1jlxRRZgnkhEeFSiBEKDEfOrmFJSxqg&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYjiFLRPKuEp1SGlwUsKdP2ifdSTWWCsiBg&usqp=CAU",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B5-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%B3-%D0%B0%D0%B7%D0%B0-80907949.jpg",
  },
];
export const motionGaleryContent = dataArray.map((item) => ({
  ...item,
  ...textData,
}));
