import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    Icon,
    Button,
    useColorModeValue,
    Image,
    Flex,
    Badge,
    Skeleton,
    SkeletonText,
} from '@chakra-ui/react';
import { FaPray, FaMusic, FaUsers } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GroupsPage = () => {
    const cardBorder = useColorModeValue('gray.200', 'gray.600');
    const accentColor = '#bfa16c';
    const pageBg = '#fcfbf9';
    const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // 이미지 프리로드
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = groups.map((group) => {
                return new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new window.Image();
                    img.src = group.image;
                    img.onload = () => {
                        setImagesLoaded(prev => ({
                            ...prev,
                            [group.title]: true
                        }));
                        resolve(img);
                    };
                    img.onerror = reject;
                });
            });

            try {
                await Promise.all(imagePromises);
            } catch (error) {
                console.error('이미지 로딩 실패:', error);
            } finally {
                setIsInitialLoad(false);
            }
        };

        preloadImages();
    }, []);

    const handleImageLoad = (title: string) => {
        if (!imagesLoaded[title]) {
            setImagesLoaded((prev) => ({
                ...prev,
                [title]: true,
            }));
        }
    };

    const groups = [
        {
            title: '전례단',
            icon: FaPray,
            description: '하느님 백성의 공적인 예배행위를 담당하는 단체로, 미사 전반의 전례를 책임집니다.',
            link: '/groups/liturgy',
            image: '/groups/liturgy.webp',
            details: ['해설 / 독서 / 복사 / 신자들의 기도 담당', '전례 교육을 통한 전문성 향상', '미사 전례 봉사'],
            badge: '전례단',
        },
        {
            title: '성가대',
            icon: FaMusic,
            description: '거룩한 음악을 통해 하느님을 찬미하는 단체입니다.',
            link: '/groups/choir',
            image: '/groups/choir.webp',
            details: ['매주 일요일 오후 4시 30분 연습', '청년성가 및 미사전례곡 연주', '누구나 참여 가능'],
            badge: '성가대',
        },
        {
            title: '레지오',
            icon: FaUsers,
            description: '성모님의 지휘아래 설립된 청년 사도직 단체입니다.',
            link: '/groups/legio',
            image: '/groups/legio.webp',
            details: ['기도, 나눔, 봉사 활동', '일상 속 힐링과 성장', '삶의 동반자 공동체'],
            badge: '레지오',
        },
    ];

    return (
        <Box bg={pageBg} minH="100vh" py={16}>
            <Container maxW="container.xl">
                <VStack spacing={4} mb={16} textAlign="center">
                    <Heading
                        as="h1"
                        size="2xl"
                        bgGradient="linear(to-r, #6b4f27, #bfa16c)"
                        bgClip="text"
                        fontWeight="bold"
                        letterSpacing="tight"
                    >
                        청년 단체 소개
                    </Heading>
                    <Text fontSize="xl" color="gray.600" maxW="2xl" lineHeight="tall">
                        우리 성당 청년들은 다양한 단체 활동을 통해 신앙을 나누고 성장합니다.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                    {groups.map((group) => (
                        <Box
                            key={group.title}
                            as={RouterLink}
                            to={group.link}
                            bg="white"
                            borderRadius="2xl"
                            borderWidth="1px"
                            borderColor={cardBorder}
                            overflow="hidden"
                            _hover={{
                                transform: 'translateY(-8px)',
                                shadow: '2xl',
                                borderColor: accentColor,
                            }}
                            transition="all 0.3s ease"
                            cursor="pointer"
                            textDecoration="none"
                            position="relative"
                            boxShadow="md"
                            display="flex"
                            flexDirection="column"
                            height="100%"
                        >
                            {/* 단체 이미지 */}
                            <Box h="240px" position="relative" flexShrink={0}>
                                {(!imagesLoaded[group.title] || isInitialLoad) && (
                                    <Skeleton
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        w="100%"
                                        h="100%"
                                        startColor="gray.100"
                                        endColor="gray.200"
                                    />
                                )}
                                <Image
                                    src={group.image}
                                    alt={group.title}
                                    w="100%"
                                    h="100%"
                                    objectFit="cover"
                                    fallbackSrc="https://via.placeholder.com/400x200?text=단체+이미지"
                                    transition="opacity 0.3s ease"
                                    _groupHover={{ transform: 'scale(1.05)' }}
                                    onLoad={() => handleImageLoad(group.title)}
                                    opacity={imagesLoaded[group.title] ? 1 : 0}
                                    position="relative"
                                    zIndex={1}
                                />
                                <Badge
                                    position="absolute"
                                    top="4"
                                    right="4"
                                    colorScheme="gray"
                                    bg="white"
                                    color={accentColor}
                                    px={3}
                                    py={1}
                                    borderRadius="full"
                                    fontSize="sm"
                                    fontWeight="medium"
                                    boxShadow="sm"
                                    zIndex={2}
                                >
                                    {group.badge}
                                </Badge>
                            </Box>

                            <VStack
                                align="stretch"
                                spacing={6}
                                p={8}
                                bg="rgba(191, 161, 108, 0.08)"
                                flex="1"
                                display="flex"
                                flexDirection="column"
                            >
                                {(!imagesLoaded[group.title] || isInitialLoad) ? (
                                    <>
                                        <Skeleton height="40px" mb={4} />
                                        <SkeletonText noOfLines={3} spacing={4} />
                                        <Box mt={4}>
                                            <Skeleton height="20px" mb={2} />
                                            <Skeleton height="20px" mb={2} />
                                            <Skeleton height="20px" />
                                        </Box>
                                        <Skeleton height="48px" mt="auto" />
                                    </>
                                ) : (
                                    <>
                                        <Flex align="center" gap={3}>
                                            <Box p={2} borderRadius="lg" bg={`${accentColor}15`} color={accentColor}>
                                                <Icon as={group.icon} w={6} h={6} />
                                            </Box>
                                            <Heading as="h2" size="lg" color="gray.800" fontWeight="bold">
                                                {group.title}
                                            </Heading>
                                        </Flex>

                                        <Text color="gray.600" fontSize="md" lineHeight="tall">
                                            {group.description}
                                        </Text>

                                        <Box as="ul" pl={4} mt={2} listStyleType="none">
                                            {group.details.map((detail, index) => (
                                                <Box
                                                    as="li"
                                                    key={index}
                                                    color="gray.600"
                                                    fontSize="md"
                                                    mb={3}
                                                    position="relative"
                                                    pl={4}
                                                    _before={{
                                                        content: '""',
                                                        position: 'absolute',
                                                        left: 0,
                                                        top: '0.5em',
                                                        width: '6px',
                                                        height: '6px',
                                                        borderRadius: '50%',
                                                        bg: accentColor,
                                                    }}
                                                >
                                                    {detail}
                                                </Box>
                                            ))}
                                        </Box>

                                        <Button
                                            colorScheme="gray"
                                            variant="outline"
                                            size="lg"
                                            mt="auto"
                                            borderColor={accentColor}
                                            color={accentColor}
                                            _hover={{
                                                bg: accentColor,
                                                color: 'white',
                                                transform: 'translateY(-2px)',
                                                shadow: 'md',
                                            }}
                                            transition="all 0.2s"
                                        >
                                            자세히 보기
                                        </Button>
                                    </>
                                )}
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default GroupsPage;
