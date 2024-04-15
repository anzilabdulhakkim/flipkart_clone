import { useState } from "react";
import { IoSearch, IoPersonCircle, IoCartOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { Image, Flex, Input, Box, Text, Stack, Icon} from "@chakra-ui/react";

const Navbar = () => {
  const [showfly, setShowfly] = useState(false);

  const handleshow = () => {
    setShowfly(true);
  };

  const handlehide = () => {
    setShowfly(false);
  };

  return (
    <Flex align="center" justify="space-between" boxShadow="md" position="fixed" top={0} w="100%" bg="white" h="auto" zIndex={50} m={0} p={0} >
      <Box w="15%" h="75px" textAlign="center"  cursor="pointer">
        <Image
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt=""
          mt={20}
          style={{ width: "175px" }}
        />
      </Box>
      <Flex align="center" w="45%" h="70px" textAlign="center" position="relative">
        <IoSearch style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", fontSize: "26px", color: "#666666" }} />
        <Input
          type="text"
          placeholder="Search for Products, Brands and More"
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            height: "44px",
            backgroundColor: "#f0f5ff",
            borderRadius: "8px",
            fontFamily: "Roboto, sans-serif",
            fontWeight: "400",
            fontSize: "19px",
            color: "#666666",
            letterSpacing: "0.5px",
            paddingLeft: "40px"
          }}
        />
      </Flex>

      <Flex w="35%" h="75px" justify="space-around" align="center">
        <Stack direction="row" align="center" spacing={2}  style={{ width: "110px", height: "46px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 8px", borderRadius: "8px", cursor: "pointer", transition: "all 0.1s ease-in" }}>
          <Icon as={IoPersonCircle} boxSize={25} color="gray.600" />
          <Text
            fontSize="lg"
            fontWeight="medium"
            color="gray.600"
            style={{ fontFamily: "Roboto, sans-serif", fontWeight: "500", fontSize: "17px" }}
          >
            Login
          </Text>
          <Icon as={FaAngleDown} boxSize={10} color="gray.600" />
        </Stack>
        <Stack direction="row" align="center" spacing={2} style={{ width: "80px", height: "46px", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "4px 8px", borderRadius: "8px", cursor: "pointer", transition: "all 0.1s ease-in" }}>
          <Icon as={IoCartOutline} boxSize={25} color="gray.600" />
          <Text fontSize="lg" fontWeight="medium" color="gray.600">
            Cart
          </Text>
        </Stack>
        <Stack direction="row" align="center" spacing={2} style={{ width: "140px", height: "46px", display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "8px", cursor: "pointer", transition: "all 0.1s ease-in" }}>
          <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" boxSize={25} />
          <Text fontSize="lg" fontWeight="medium" color="gray.600">
            Become a Seller
          </Text>
        </Stack>
        <Stack direction="row" align="center" spacing={2} onMouseOver={handleshow} onMouseLeave={handlehide} style={{ width: "45px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", padding: "4px 8px", borderRadius: "8px", cursor: "pointer" }}>
          <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" boxSize={25} />
        </Stack>
      </Flex>

      {showfly && (
        <Box w="229px" pos="fixed" top="60px" right="23px" boxShadow="md" bg="white" zIndex={20} onMouseOver={handleshow} onMouseLeave={handlehide} style={{ width: "229px", position: "fixed", top: "60px", right: "23px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "white", zIndex: 20 }}>
          <Stack spacing={1}>
            <MenuItem iconUrl="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" text="Notification Preferences" />
            <MenuItem iconUrl="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg" text="24x7 Customer Care" />
            <MenuItem iconUrl="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg" text="Advertise" />
            <MenuItem iconUrl="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg" text="Download App" />
          </Stack>
        </Box>
      )}
    </Flex>
  );
};

const MenuItem = ({ iconUrl, text }) => (
  <Flex align="center" py={2} px={4} _hover={{ bg: "gray.100" }} style={{ width: "100%", cursor: "pointer", display: "flex", alignItems: "center", fontFamily: "Roboto, sans-serif", fontWeight: "400", fontSize: "15px" }}>
    <Image src={iconUrl} alt="" boxSize={20} mr={10} />
    <Text fontSize="md" fontWeight="medium" color="gray.600">
      {text}
    </Text>
  </Flex>
);

export default Navbar;
