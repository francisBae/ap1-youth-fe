import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Divider, Skeleton } from '@chakra-ui/react';
import { FaChurch, FaNewspaper, FaClock, FaUsers } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const features = [
        {
            icon: FaChurch,
            title: '본당 소개',
            description: '압구정1동 성당의 역사와 비전, 그리고 사목 방향을 소개합니다.',
            link: '/about',
        },
        {
            icon: FaNewspaper,
            title: '주보',
            description: '주간 소식과 공지사항, 행사 일정을 주보로 확인하세요.',
            link: '/newsletter',
        },
        {
            icon: FaClock,
            title: '미사 안내',
            description: '평일 및 주말 미사 시간표와 안내를 확인할 수 있습니다.',
            link: '/mass',
        },
        {
            icon: FaUsers,
            title: '단체 소개',
            description: '연합회, 전례단, 성가대, 레지오 등 본당의 다양한 단체를 안내합니다.',
            link: '/groups',
        },
    ];

    return (
        <Box bg="#f8f6f2">
            {/* 시즌 배너 */}
            <Box
                w="100%"
                bgGradient="linear(to-r, #fffbe6, #ffe4e1)"
                py={2}
                textAlign="center"
                position="relative"
                zIndex={2}
            >
                <Text fontWeight="bold" color="#bfa16c" fontSize="lg" letterSpacing="0.02em">
                    {/* <span role="img" aria-label="star">⭐</span> 성탄 축복이 함께 하시길 기원합니다! <span role="img" aria-label="star">⭐</span> */}
                    <span role="img" aria-label="star">
                        ⭐
                    </span>{' '}
                    압구정1동 청년부에 오신 것을 환영합니다!{' '}
                    <span role="img" aria-label="star">
                        ⭐
                    </span>
                </Text>
            </Box>

            {/* 히어로 섹션 */}
            <Box
                position="relative"
                minH={{ base: '40vh', md: '55vh' }}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {!isImageLoaded && (
                    <Skeleton
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        startColor="gray.100"
                        endColor="gray.300"
                    />
                )}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    overflow="hidden"
                >
                    <img
                        src="https://res.cloudinary.com/dtwnsrsz5/image/upload/w_600/v1733134060/ap1youth/images/main/uuuu1yuforc0ovdptt2u.jpg"
                        alt="압구정1동 성당 청년부 히어로 이미지"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: isImageLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                        onLoad={() => setIsImageLoaded(true)}
                    />
                </Box>
                <Container maxW="container.lg" position="relative" zIndex={2}>
                    <VStack
                        spacing={6}
                        align="center"
                        textAlign="center"
                        bg="rgba(0, 0, 0, 0.4)"
                        p={{ base: 5, md: 7 }}
                        borderRadius="xl"
                        maxW="800px"
                        mx="auto"
                    >
                        <Heading size="lg" color="white" fontWeight="bold" letterSpacing="tight" lineHeight={1.4}>
                            압구정1동 성당 청년부
                        </Heading>
                        <Text fontSize="md" color="white" maxW="2xl" fontWeight="medium" lineHeight={1.8}>
                            함께 모여 기도하고, 나누고, 성장하는 청년 공동체입니다. 우리와 함께 신앙의 여정을
                            시작해보세요.
                        </Text>
                    </VStack>
                </Container>
            </Box>

            <Divider borderColor="#e2ded9" />

            {/* 특징 섹션 */}
            <Container maxW="container.xl" py={16}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {features.map((feature, index) => {
                        // 주보만 외부 링크로 새 창 열기
                        if (feature.title === '주보') {
                            return (
                                <VStack
                                    key={index}
                                    p={8}
                                    bg="white"
                                    rounded="2xl"
                                    boxShadow="lg"
                                    spacing={6}
                                    align="center"
                                    as="a"
                                    href="https://www.ap1.or.kr/bbs/board.php?bo_table=newsletter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    _hover={{ transform: 'translateY(-6px)', shadow: '2xl', bg: '#f8f6f2' }}
                                    transition="all 0.2s"
                                >
                                    <Icon as={feature.icon} w={12} h={12} color="#bfa16c" />
                                    <Heading size="md" color="gray.800" fontWeight="bold">
                                        {feature.title}
                                    </Heading>
                                    <Text color="gray.600" fontSize="md" textAlign="center">
                                        {feature.description}
                                    </Text>
                                </VStack>
                            );
                        }
                        // 나머지는 내부 라우팅
                        return (
                            <VStack
                                key={index}
                                p={8}
                                bg="white"
                                rounded="2xl"
                                boxShadow="lg"
                                spacing={6}
                                align="center"
                                as={RouterLink}
                                to={feature.link}
                                _hover={{ transform: 'translateY(-6px)', shadow: '2xl', bg: '#f8f6f2' }}
                                transition="all 0.2s"
                            >
                                <Icon as={feature.icon} w={12} h={12} color="#bfa16c" />
                                <Heading size="md" color="gray.800" fontWeight="bold">
                                    {feature.title}
                                </Heading>
                                <Text color="gray.600" fontSize="md" textAlign="center">
                                    {feature.description}
                                </Text>
                            </VStack>
                        );
                    })}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default HomePage;
