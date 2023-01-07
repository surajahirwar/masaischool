import {
  
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
    Wrap,
    WrapItem,
    AspectRatio,
    chakra,
    Highlight,
    Button
    
  } from "@chakra-ui/react";
  
  import { Navigation, Pagination,Autoplay } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/react";
  
  import "./Style.css";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/autoplay";
  
  export default function Instructors() {
    const img =
      "https://images.unsplash.com/photo-1660696035271-9ebc619c6207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
       

   
    const InstructorHeading = () => {
      return (
        <Box textAlign="center" py={10} px={6}>
            <Button
                mt="-30px"
                colorScheme={"red"}
                bg={"red"}
                rounded={"md"}
                px={6}
                _hover={{
                  bg: "red.400",
                }}
              >
                START LEARNING
              </Button>
          <Heading lineHeight="tall">
           
              Meet Your Instructors.
           
          </Heading>
          <Text color="gray.600" fontSize="sm">With extensive industry experience, the Masai Curriculum Team is a group of expert instructors.</Text>
        </Box>
      );
    };
    const data = [
        {
          id:1,
          image: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/Nrupul_d3fe3b289a.jpg',
          name: "Nrupul Dev",
          role:"Co-Founder & CTO",
          ex:"https://masai-website-images.s3.ap-south-1.amazonaws.com/ex_da_557255e025.jpeg"
        },
        {
            id:2,
            image: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/Yogesh_52e31f5560.jpg',
            name: "Yogesh Bhat",
            role:"Co- Founder & SVP - Holistic Development",
            ex:"https://masai-website-images.s3.ap-south-1.amazonaws.com/ex_mercuri_129d690457.svg"
          },
          {
            id:3,
            image: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/aman_fbbc8625a4.jpg',
            name: "Aman Vats",
            role:"Director - Curriculum",
            ex:"https://masai-website-images.s3.ap-south-1.amazonaws.com/ex_exl_ab21e9bfe0.png"
          },
          {
            id:4,
            image: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/Albert_28b73517f6.jpg',
            name: "Albert Sebastian",
            role:"Director - Curriculum",
            ex:"https://masai-website-images.s3.ap-south-1.amazonaws.com/ex_realized_5d3fee2677.jpeg"
          },
          {
            id:5,
            image: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/lohit_dp_98abd5839c.jpeg',
            name: "Lohit Marodia",
            role:"Director - Curriculum",
            ex:"https://masai-website-images.s3.ap-south-1.amazonaws.com/ex_microsoft_80272817c6.png"
          },
          {
            id:5,
            image: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/Ritesh_Firodiya_4_8a667ac9c8.jpg',
            name: "Ritesh Firodiya",
            role:"Senior Curriculum Engineer",
            ex:"https://masai-website-images.s3.ap-south-1.amazonaws.com/ex_swiggy_9ca86a3f78.svg"
          },
          {
            id:5,
            image: 'https://masai-website-images.s3.ap-south-1.amazonaws.com/swanand_d399feddf5.jpeg',
            name: "Swanand Kadam",
            role:"Senior Curriculum Engineer",
            ex:"https://masai-website-images.s3.ap-south-1.amazonaws.com/kalaam_f2ea778a36.png"
          },
    ]
  
    return (
      <div>
        <InstructorHeading />
  
        <Swiper
           modules={[Pagination, Navigation, Autoplay]}
           breakpoints={{
             // when window width is >= 640px
             600: {
               slidesPerView: 3,
             },
             1200: {
               slidesPerView: 4,
             },
             425: {
               slidesPerView: 1,
             },
           }}
           loop={true}
           centeredSlides={true}
           autoplay={true}
        //    slidesPerView={4}
           spaceBetween={1}
      
           slidesPerGroup={1}
           loopFillGroupWithBlank={true}
           pagination={{
             clickable: true,
             dynamicBullets: true,
           }}
        >
          {data.map((e) => (
            <SwiperSlide key={e.id} className="slider_contain">
             
             <WrapItem  align={"center"}>
              <Center >
                <Box
                 width='300px'
                 height='450px'
                 borderRadius={2}
                  borderWidth="1px"
                  overflow="hidden"
                //   border="2px solid red"
                  rounded={"2xl"}
                  boxShadow={"xl"}
                >
                   <Image
                      
                      objectFit='cover'
                      width="100%"
                      
                      src={e.image}
                      alt='Dan Abramov'
                    />
                  <Box p="6">
                    <Box
                      mt="1"
                      fontSize={"2xl"}
                      fontWeight="600"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                     
                    >
                      {e.name}
                     
                    </Box>
                    <Box
                      mt="1"
                      fontWeight="normal"
                    
                      lineHeight="tight"
                   
                      borderBottom={`0.5px solid #B2BABB`}
                    >
                    {e.role}
                     
                    </Box>
                    <Box >
                     
                      <Image w="200px" src={e.ex} />
                    </Box>
                  </Box>
                </Box>
              </Center>
            </WrapItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  