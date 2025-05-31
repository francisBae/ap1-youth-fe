import { Box, Container, Heading, SimpleGrid, Image, VStack, Text } from '@chakra-ui/react';

const galleryImages = [
    { src: '/gallery/church1.jpg', alt: '성당 외관', desc: '성당 외관' },
    { src: '/gallery/church2.jpg', alt: '성당 내부', desc: '성당 내부' },
    { src: '/gallery/event1.jpg', alt: '행사 사진1', desc: '행사 사진1' },
    { src: '/gallery/event2.jpg', alt: '행사 사진2', desc: '행사 사진2' },
    { src: '/gallery/group1.jpg', alt: '단체 활동', desc: '단체 활동' },
    { src: '/gallery/stainedglass.jpg', alt: '스테인드글라스', desc: '스테인드글라스' },
];

const GalleryPage = () => {
    return (
        <Container maxW="container.xl" py={12}>
            <Heading as="h1" size="xl" mb={8} textAlign="center">
                갤러리
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
                {galleryImages.map((img, idx) => (
                    <VStack key={idx} spacing={3} align="center">
                        <Box w="100%" h="220px" overflow="hidden" borderRadius="xl" boxShadow="md">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                w="100%"
                                h="220px"
                                objectFit="cover"
                                fallbackSrc="https://via.placeholder.com/400x220?text=Gallery"
                            />
                        </Box>
                        <Text color="gray.700" fontWeight="medium">
                            {img.desc}
                        </Text>
                    </VStack>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default GalleryPage;
