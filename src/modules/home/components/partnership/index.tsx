import { HStack, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Slider from "react-slick";
import Icon from "../../../../components/icon";
import PartnerCard from "../../../../components/partner-card";
import Section from "../../../../components/section";
import { partners } from "../../../../lib/utils/component.utils";

const btnProps = {
  rounded: "full",
  size: "sm",
  bg: "white",
  color: "brand.darkGreen",
  shadow: "base",
  zIndex: "3",
  _hover: {
    bg: "white",
  },
  filter: "drop-shadow(0px 16px 48px rgba(0, 51, 45, 0.16))",
};

const PrevArrow: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Prev arrow"
      onClick={onClick}
      left={5}
      {...btnProps}
    >
      <Icon iconComp={ChevronLeft} />
    </IconButton>
  );
};

const NextArrow: React.FC<React.HTMLProps<HTMLButtonElement>> = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Next arrow"
      onClick={onClick}
      right={5}
      {...btnProps}
    >
      <Icon iconComp={ChevronRight} />
    </IconButton>
  );
};

const settings = {
  dots: false,
  infinite: true,
  // autoplay: true,
  speed: 1000,
  autoplaySpeed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 788,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function Partnership() {
  return (
    <Stack pos="relative" py={{ base: 12, sm: 24 }} bg="brand.fade">
      <Stack id="partnership" pos="absolute" top="-82px" zIndex="-2" />
      <Section spacing={12}>
        <Stack spacing={4} color="brand.darkGreen" maxW="800px">
          <Heading fontSize="28px">Partnerships</Heading>
          <Text lineHeight={6}>
            Merge2Own collaborates with trusted partners ranging from real
            estate agencies and financial institutions to background check
            providers and educational bodies, providing a secure, comprehensive,
            and educative platform for seamless property co-ownership.
          </Text>
        </Stack>
        <Stack spacing={5}>
          <HStack as={Slider} gap={0} {...settings}>
            {[...partners, ...partners].map((partner, index) => (
              <PartnerCard key={partner.text + index} {...partner} />
            ))}
          </HStack>
        </Stack>
      </Section>
    </Stack>
  );
}

export default Partnership;
