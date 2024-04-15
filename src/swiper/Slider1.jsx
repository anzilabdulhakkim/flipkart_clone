import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

const Slider1 = () => {
    return (
    <Box width="97%" mx="10px">
      <Swiper 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide>
        <Box h="230px" w="100%">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/fd78c56eb85bafd5.jpg?q=20"
            alt=""
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box h="230px" w="100%">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/74a1461287a69078.jpg?q=20"
            alt=""
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box h="230px" w="100%">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ed4591126ff69acb.png?q=20"
            alt=""
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box h="230px" w="100%">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4d279cfffa536c76.png?q=20"
            alt=""
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box h="230px" w="100%">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/07e1b1bafa69088c.jpg?q=20"
            alt=""
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box h="230px" w="100%">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9277c7d894d50bef.jpg?q=20"
            alt=""
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box h="230px" w="100%">
          <Image
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1686434dbad73524.jpg?q=20"
            alt=""
            h="100%"
            w="100%"
            objectFit="cover"
          />
        </Box>
      </SwiperSlide>
    </Swiper>
    </Box>
  );
};

export default Slider1;
