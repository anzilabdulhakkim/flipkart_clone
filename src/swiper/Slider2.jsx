import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Navigation, A11y, } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Slider2 = () => {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide >
        <Box textAlign="center">
          <Image
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/u/h/7/edge-40-neo-payj0004in-motorola-original-imagtkezzam4qxfq.jpeg?q=70"
            alt=""
            width="150px"
            ml={6}
          />
          <Text fontSize="md" fontWeight="bold" mt="2">
            moto edge 40 neo
          </Text>
          <Text fontSize="sm" color="gray.500">
            incl of offers
          </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box textAlign="center">
          <Image
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70"
            alt=""
            width="170px"
          />
          <Text fontSize="md" fontWeight="bold" mt="2">
            vivo t2 pro 5g
          </Text>
          <Text fontSize="sm" color="gray.500">
            incl of offers
          </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box textAlign="center">
          <Image
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/s/9/i/m6-pro-5g-mzb0eqjin-poco-original-imags3e7dazavyje.jpeg?q=70"
            alt=""
            width="130px"
            ml={8}
          />
          <Text fontSize="md" fontWeight="bold" mt="2">
            poco m6 pro
          </Text>
          <Text fontSize="sm" color="gray.500">
            incl of offers
          </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box textAlign="center">
          <Image
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=70"
            alt=""
            width="90px"
            ml={14}
          />
          <Text fontSize="md" fontWeight="bold" mt="2">
            realme 12 5G
          </Text>
          <Text fontSize="sm" color="gray.500">
            incl of offers
          </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box textAlign="center">
          <Image
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/n/z/4/-original-imagz5g9gyhmgusp.jpeg?q=70"
            alt=""
            width="120px"
            ml={10}
          />
          <Text fontSize="md" fontWeight="bold" mt="2">
            POCO X6 Neo 5G
          </Text>
          <Text fontSize="sm" color="gray.500">
            incl of offers
          </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box textAlign="center">
          <Image
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=70"
            alt=""
            width="140px"
            ml={6}
          />
          <Text fontSize="md" fontWeight="bold" mt="2">
            poco m6 5g
          </Text>
          <Text fontSize="sm" color="gray.500">
            incl of offers
          </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box textAlign="center">
          <Image
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/w/i/d/-original-imagwzrguaee4pz6.jpeg?q=70"
            alt=""
            width="96px"
            ml={12}
          />
          <Text fontSize="md" fontWeight="bold" mt="2">
            poco x6 pro
          </Text>
          <Text fontSize="sm" color="gray.500">
            incl of offers
          </Text>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box textAlign="center">
          <Image
            src="https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/9/x/f/-original-imagxtnehfg5pcwt.jpeg?q=70"
            alt=""
            width="160px"
            ml={6}
          />
          <Text fontSize="md" fontWeight="bold" mt="2">
            iPhone 15
          </Text>
          <Text fontSize="sm" color="gray.500">
            incl of offers
          </Text>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider2;
