import {
    Button,
    Box,
    Heading,
    Text,
    Stack,
    Img,
  } from "@chakra-ui/react";
  
  import {
    Navigation,
    Pagination,
    Autoplay,
    
  } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/react";
 
  import "./Style.css";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
  import "swiper/css/autoplay";
  
  export default function Student() {
  
    const data = [
                {   id:1,
                    color:"#EEFEF7",
                    name: "Aayushi Shah",
                    image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Aayushi_527cd1c2a3.jpg",
                    description:"I got placed within 2 days after graduation! I’m happy I am part of the Masai family, not because they helped me but because of their mission to help other lost"
                },
                {   id:1,
                    color:"#F7F7FF",
                    name: "Kritika Tripathi",
                    image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Kritika_Tripathi_716c47cbbd.jpg",
                    description:"Masai brought discipline to my life, helped me develop a coder’s mindset and increase my concentration as well as time management skills. It took me"
                },
                {   id:1,
                    color:"#F6EDE7",
                    name: "Lokesh Nimje",
                    image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Lokesh_Nimje_90cfa775e3.jpg",
                    description:"Projects are a part of journey at Masai. It gives the opportunity to work in a team, which gives a real experience of the corporate world. This helps students to"
                },
                {   id:1,
                    color:"#F2F7FF",
                    name: "Lalitha Perumalla",
                    image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Lalitha_9c1e4f1cab.jpg",
                    description:"I left a job at Infosys to learn coding. Masai helped me get 3X more salary in a product-based company."
                }
    ]
  
  
    const CertificateHeading = () => {
      return (
        <Box textAlign="center" py={10} mb={"50px"} px={6}>
             <Button
                mt="30px"
                mb="20px"
                colorScheme={"red"}
                bg={"red"}
                rounded={"md"}
                px={6}
                _hover={{
                  bg: "red.400",
                }}
              >
                SEE MORE
              </Button>
          <Heading lineHeight="tall">
          
          Thousands Trust Masai To
           
            <br></br>
          
            To Launch Career.
            
          </Heading>
        </Box>
      );
    };
  
    return (
      <div >
        <CertificateHeading />
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          breakpoints={{
            // when window width is >= 640px
            600: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            425: {
              slidesPerView: 1,
            },
          }}
          loop={true}
          centeredSlides={true}
          autoplay={true}
          className="main_div"
          // slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={1}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          // navigation={true}
        >
          {data.map((e) => (
            <SwiperSlide key={e._id} className="slider_contain">
              <Box h="md" maxW={"320px"} boxShadow={"xl"}>
                <Box
                  display={"flex"}
                  overflow="hidden"
                  justifyContent="start"
                  alignItems="center"
                  rounded={"20px 30px 00px 00px"}
                  h={"200px"}
                >
                  <Img  objectFit='cover'
                      width="100%" src={e.image} />
                </Box>
                <Box
                  zIndex={1}
                  h="240px"
                  rounded="2xl"
                  position="relative"
                  top="-15px"
                  bg={e.color}
                  boxShadow={"xl"}
                >
                  <Stack align={"center"}>
                    <Stack>
                      <Text m={"20px"}>
                        <i className="fa fa-quote-left"></i>
                        {`${e.description}`.substring(0, 180) + "..."}
                        {/* description */}
                      </Text>
                      <Heading
                        position={"relative"}
                        left="20px"
                        color={"green"}
                        fontSize={"md"}
                        fontFamily={"body"}
                        textTransform={"uppercase"}
                        fontWeight={400}
                      >
                        {e.name}
                      </Heading>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
  