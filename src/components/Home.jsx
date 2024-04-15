import Navbar from "./Navbar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import Slider1 from "../swiper/Slider1";
import Slider2 from "../swiper/Slider2";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

const Home = () => {
  const [showfly, setShowfly] = useState(false);

  const handleshow = () => {
    setShowfly(true);
  };

  const handlehide = () => {
    setShowfly(false);
  };

  return (
    <>
    <Navbar />
    <Box overflowX="hidden" p={0} m={0}>
    
      <Box w="100vw" h="800px"  p={0} m={0} bg="#f1f2f4" mt="74px" overflowX="hidden">
        <Box width="98%" mx="auto"> 
        <Flex width="98%"  justify="center"  bg="white" mx="20px" mb="27px" pos="relative" top="10px" right={20}>
            <ProductDiv imgSrc="https://rukminim2.flixcart.com/flap/70/70/image/29327f40e9c4d26b.png?q=100" name="Grocery" />
            <ProductDiv imgSrc="https://rukminim2.flixcart.com/flap/70/70/image/22fddf3c7da4c4f4.png?q=100" name="Mobiles" />
            <ProductDivWithArrow imgSrc="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/0d75b34f7d8fbcb3.png?q=100" name="Fashion" />
            <ProductDivWithArrow imgSrc="https://rukminim2.flixcart.com/flap/70/70/image/69c6589653afdb9a.png?q=100" name="Electronics" />
            <ProductDivWithFly imgSrc="https://rukminim2.flixcart.com/flap/70/70/image/ab7e2b022a4587dd.jpg?q=100" name="Home & Furniture" onMouseOver={handleshow} onMouseLeave={handlehide} />
            <ProductDiv imgSrc="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/0139228b2f7eb413.jpg?q=100" name="Appliances" />
            <ProductDiv imgSrc="https://rukminim2.flixcart.com/flap/70/70/image/71050627a56b4693.png?q=100" name="Travel" />
            <ProductDivWithArrow imgSrc="https://rukminim2.flixcart.com/flap/70/70/image/dff3f7adcf3a90c6.png?q=100" name="Beauty & Toys" />
            <ProductDivWithArrow imgSrc="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/05d708653beff580.png?q=100" name="Two Wheelers" />
        </Flex>
        </Box>

        <Slider1 />

        <Box w="82%" bg="white" mt="17px" ml="16px">
          <Text fontSize="22px" fontWeight="600" fontFamily="sans-serif" pt="20px" m="30px">Best Deals on Smartphones</Text>
          <Slider2 />
          <Box w="195px" h="356px" bg="white" pos="absolute" right="14px" top="510px" cursor="pointer">
            <Image w="100%" h="100%" src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/9845b97107ced583.png?q=20" alt="" />
          </Box>
        </Box>
      </Box>

      {showfly && (
        <Box pos="absolute" w="280px" bg="white" top="225px" left="377px"  fontFamily="sans-serif" zIndex={20} boxShadow="md" onMouseOver={handleshow} onMouseLeave={handlehide}>
          <FlyoutMenu title="Home Furnishings">
            <MenuItem text="Furniture Studio" />
            <MenuItem text="Living Room Furniture" />
            <MenuItem text="Kitchen & Dining" />
            <MenuItem text="Bedroom Furniture" />
            <MenuItem text="Space Saving Furniture" />
            <MenuItem text="Home Decor" />
            <MenuItem text="Tools & Utility" />
            <MenuItem text="Work Space Furniture" />
            <MenuItem text="Kids Furniture" />
            <MenuItem text="Lightings & Electricals" />
            <MenuItem text="Cleaning & Bath" />
            <MenuItem text="Pet & Gardening" />
          </FlyoutMenu>
        </Box>
      )}

      {showfly && (
        <Box pos="absolute" w="280px" bg="white" top="225px" left="656px" fontFamily="sans-serif" zIndex={20} boxShadow="md" onMouseOver={handleshow} onMouseLeave={handlehide}>
          <FlyoutMenu title="More in Home Furnishings">
            <MenuItem text="All" />
            <MenuItem text="Bed Linens" />
            <MenuItem text="Bedsheets" />
            <MenuItem text="Blankets" />
            <MenuItem text="Curtains & Accessories" />
            <MenuItem text="Bath Linen" />
            <MenuItem text="Floor coverings" />
            <MenuItem text="Covers & protectors" />
            <MenuItem text="Cushions & Pillows" />
            <MenuItem text="Kitchen Linen Sets" />
            <MenuItem text="Table Linen Sets" />
            <MenuItem text="Sofa & curtain fabrics" />
          </FlyoutMenu>
        </Box>
      )}
    </Box>
    </>
  );
};

const ProductDiv = ({ imgSrc, name }) => (
  <Flex direction="column" align="center" justify="center" w="10%" h="155px" cursor="pointer">
    <Image src={imgSrc} alt="" w="70px" />
    <Text mt="12px" fontWeight="500" fontSize="15px">{name}</Text>
  </Flex>
);

const ProductDivWithArrow = ({ imgSrc, name }) => (
  <Flex direction="column" align="center" justify="center" w="12%" h="155px" cursor="pointer">
    <Image src={imgSrc} alt="" w="70px" />
    <Flex align="center" mt="12px" cursor="pointer">
      <Text fontWeight="500" fontSize="15px">{name}</Text>
      <FaAngleDown ml="6px" fontSize="18px" />
    </Flex>
  </Flex>
);

const ProductDivWithFly = ({ imgSrc, name, onMouseOver, onMouseLeave }) => (
  <Flex direction="column" align="center" justify="center" w="12%" h="155px" cursor="pointer" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
    <Image src={imgSrc} alt="" w="70px" />
    <Flex align="center" mt="12px" cursor="pointer">
      <Text fontWeight="500" fontSize="15px">{name}</Text>
      <FaAngleDown ml="6px" fontSize="18px" />
    </Flex>
  </Flex>
);

const FlyoutMenu = ({ title, children }) => (
  <Box>
    <Flex justify="space-between" align="center" bg="#f0f5ff" p="14px" fontWeight="500" fontSize="13px" cursor="pointer">
      <Text>{title}</Text>
      <MdKeyboardArrowRight fontSize="20px" />
    </Flex>
    {children}
  </Box>
);

const MenuItem = ({ text }) => (
  <Box bg="white" p="14px" fontSize="13px" fontWeight="400" cursor="pointer" _hover={{ bg: "#f0f5ff", fontWeight: "500" }}>{text}</Box>
);

export default Home;
