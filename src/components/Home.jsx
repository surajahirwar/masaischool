import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import Instructors from "./Instructors";
import News from "./News.jsx";
import Student from "./Student";

export default function Home() {
  const Arrow = createIcon({
    displayName: "Arrow",
    viewBox: "0 0 72 24",
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
        fill="currentColor"
      />
    ),
  });
  return (
    <>
      <Box
        w="100%"
        position="absolute"
        top="100px"
        // bg="red"
      >
        <Container maxW={"10xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Heading
              fontWeight={900}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Driven by Outcomes,
              <br />
              Fuelled by Ambitions.
            </Heading>
            <Text
              display="flex"
              flexDir="column"
              alignItems="center"
              fontSize={30}
              color={"black.500"}
            >
              Launch your dream career with cns
              <br />
              <b> at 0 upfront fee.</b>
              <Image
                mt="-20px"
                w="200px"
                src="https://www.masaischool.com/img/homepage/scribble.png"
              />
            </Text>
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
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
                APPLY NOW FOR FREE
              </Button>

              <Box></Box>
            </Stack>
          </Stack>
        </Container>
        <Image src="https://masai-website-images.s3.ap-south-1.amazonaws.com/stud_image_desktop_upload_793ed2b430.png" />

        <Instructors />

        <News />

        <Box
          borderRadius={20}
          position={"relative"}
          display="flex"
          mt="200px"
          padding="20px"
          bg="#FEF9E5"
          alignItems="center"
          justifyContent="center"
          flexDir={"column"}
          width="100%"
        >
          <Image src="https://www.masaischool.com/img/masai-prepleaf/masai-prepleaf-logo.svg" />
          <Heading>Scholar programs by Prepleaf</Heading>
          <Text mt="20px">
            Masai acquired Prepleaf in 2021 to expand their placement
            preparation portal as a go-to no cost resource for college students.
            Since, the 2 companies have offered a Data Analytics course with a
            Pay After Placement model. The Scholar Program comes as India’s
            first subscription based foundational learning course
          </Text>
          <br />
          <Text fontWeight={600} color="#7385D4">
            for 1st, 2nd & pre-final year students.
          </Text>
          <Button
            mt="20px"
            display={{ base: "none", md: "inline-flex" }}
            border="1px"
            fontSize={"md"}
            fontWeight={400}
            _hover={{ bg: "red.200" }}
            borderColor="red.500"
            color={useColorModeValue("red.400")}
            variant="outline"
          >
            LOGIN
          </Button>
          <Text color="#737574" mt="20px">
            You can avail scholarship upto 75%.
          </Text>
        </Box>


        <Box
          mt="100px"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"left"}
            width={"100%"}
            flexDirection="column"
            position="relative"
            left={20}
            // border="1px solid black"
            
            
          >
            <Heading mb="40px">
              Masai & N.S.D.C.
              <br /> Announce Strategic <br /> Partnership.
            </Heading>
            <Text mt="20px">
              The partnership with National Skill Development Corporation has<br/>
              the potential to create equal employment opportunity for India’s<br/>
              youth, narrowing the gap between the demand and supply of skilled<br/>
              manpower for the private-sector job market. This collaboration<br/>
              will change the way skill-based education is delivered in India.<br/>
            </Text>
          </Box>
          <Box borderRadius={20} position="relative" width="100%" height="100%">
            <AspectRatio maxW="600px" borderRadius="20px" height="350px" ratio={1}>
              <iframe
               
                src="https://www.youtube.com/embed/6vOmBOvIyPE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </AspectRatio>
          </Box>
        </Box>

        <Student />
      </Box>
    </>
  );
}
