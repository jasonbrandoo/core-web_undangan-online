import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const PeopleReview = (props) => {
  const bgColor = ["#FAE6F4", "#D8ECFF", "#EBFEF9", "#FEF6EB", "#FFFDCE"];

  const dataReview = [
    {
      image_url: "/assets/people1.png",
      name: "Allison",
      text:
        "“Alhamdulillah, terima kasih kepada Nikahnya.com, dengan adanya layanan ini sangat membantu kami untuk menyebarkan undangan”",
    },
    {
      image_url: "/assets/people2.png",
      name: "Kattie",
      text:
        "“Alhamdulillah, terima kasih kepada Nikahnya.com, dengan adanya layanan ini sangat membantu kami untuk menyebarkan undangan”",
    },
    {
      image_url: "/assets/people3.png",
      name: "Letty",
      text:
        "“Alhamdulillah, terima kasih kepada Nikahnya.com, dengan adanya layanan ini sangat membantu kami untuk menyebarkan undangan”",
    },
    {
      image_url: "/assets/people3.png",
      name: "Letty",
      text:
        "“Alhamdulillah, terima kasih kepada Nikahnya.com, dengan adanya layanan ini sangat membantu kami untuk menyebarkan undangan”",
    },
    {
      image_url: "/assets/people3.png",
      name: "Letty",
      text:
        "“Alhamdulillah, terima kasih kepada Nikahnya.com, dengan adanya layanan ini sangat membantu kami untuk menyebarkan undangan”",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 500 },
      items: 1,
    },
  };

  return (
    <div className="mt-5 ml-3 mr-3">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        autoPlay={false}
        arrows={false}
        showDots={true}
        infinite={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="pr-3"
      >
        {dataReview.map((item, key) => (
          <div
            className="p-4 card-testimoni"
            style={{ backgroundColor: bgColor[Math.floor(Math.random() * bgColor.length)] }}
          >
            <div className="card-testimoni--header">
              <h4>{item.name}</h4>
            </div>
            <p className="mt-3">{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
