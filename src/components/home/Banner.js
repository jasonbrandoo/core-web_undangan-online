import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const Banner = () => {
  const dataReview = [
    {
      image_url:
        "https://images.unsplash.com/photo-1556918108-baaafd6a2010?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Allison",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Kattie",
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1460538512106-37e555b43281?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      name: "Letty",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <div className="mt-5">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        autoPlay={true}
        showDots={false}
        infinite={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
      >
        {dataReview.map((item, key) => (
          <div className="mx-3">
            <img src={item.image_url} alt="" className="img-banner rounded" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
