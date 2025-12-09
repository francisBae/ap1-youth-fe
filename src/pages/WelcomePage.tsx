import {
    Box,
    Container,
    VStack,
    Heading,
    Text,
    Card,
    CardBody,
    HStack,
    Icon,
    Divider,
    useColorModeValue,
    Flex,
    Center,
    Button,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaMapMarkerAlt, FaSnowflake } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 크리스마스 트리 SVG 컴포넌트 (더 사실적으로)
const ChristmasTree = ({ size = 120 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            {/* 그라데이션 정의 */}
            <linearGradient id="treeGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d5016" />
                <stop offset="50%" stopColor="#228B22" />
                <stop offset="100%" stopColor="#1a5f1a" />
            </linearGradient>
            <linearGradient id="treeGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d7a1f" />
                <stop offset="50%" stopColor="#32CD32" />
                <stop offset="100%" stopColor="#2a8a2a" />
            </linearGradient>
            <linearGradient id="treeGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d5016" />
                <stop offset="50%" stopColor="#228B22" />
                <stop offset="100%" stopColor="#1a5f1a" />
            </linearGradient>
            <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B4513" />
                <stop offset="100%" stopColor="#654321" />
            </linearGradient>
            {/* 그림자 필터 */}
            <filter id="shadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                <feOffset dx="1" dy="2" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* 트리 몸통 (그림자 포함) */}
        <rect x="54" y="110" width="12" height="30" fill="url(#trunkGradient)" rx="2" filter="url(#shadow)" />
        
        {/* 트리 층 4 (가장 아래) */}
        <path
            d="M60 70 L25 110 L60 95 L95 110 Z"
            fill="url(#treeGradient3)"
            filter="url(#shadow)"
        />
        <path
            d="M60 70 L30 105 L60 92 L90 105 Z"
            fill="#1a5f1a"
            opacity="0.6"
        />

        {/* 트리 층 3 */}
        <path
            d="M60 55 L30 90 L60 78 L90 90 Z"
            fill="url(#treeGradient2)"
            filter="url(#shadow)"
        />
        <path
            d="M60 55 L35 85 L60 75 L85 85 Z"
            fill="#2a8a2a"
            opacity="0.5"
        />

        {/* 트리 층 2 */}
        <path
            d="M60 40 L35 70 L60 60 L85 70 Z"
            fill="url(#treeGradient1)"
            filter="url(#shadow)"
        />
        <path
            d="M60 40 L40 65 L60 57 L80 65 Z"
            fill="#1a5f1a"
            opacity="0.5"
        />

        {/* 트리 층 1 (가장 위) */}
        <path
            d="M60 20 L45 50 L60 42 L75 50 Z"
            fill="url(#treeGradient2)"
            filter="url(#shadow)"
        />

        {/* 별 장식 (더 화려하게) */}
        <g filter="url(#shadow)">
            <path
                d="M60 8 L62 16 L70 16 L63 20 L65 28 L60 23 L55 28 L57 20 L50 16 L58 16 Z"
                fill="#FFD700"
            />
            <circle cx="60" cy="12" r="2" fill="#FFF" opacity="0.8" />
        </g>

        {/* 장식 구슬 (더 많이, 다양한 색상) */}
        <circle cx="42" cy="55" r="4" fill="#FF0000" filter="url(#shadow)" />
        <circle cx="78" cy="60" r="4" fill="#FFD700" filter="url(#shadow)" />
        <circle cx="48" cy="75" r="3.5" fill="#0000FF" filter="url(#shadow)" />
        <circle cx="72" cy="78" r="3.5" fill="#FF1493" filter="url(#shadow)" />
        <circle cx="45" cy="92" r="4" fill="#FFD700" filter="url(#shadow)" />
        <circle cx="75" cy="95" r="4" fill="#FF0000" filter="url(#shadow)" />
        <circle cx="52" cy="105" r="3.5" fill="#0000FF" filter="url(#shadow)" />
        <circle cx="68" cy="108" r="3.5" fill="#FF1493" filter="url(#shadow)" />

        {/* 구슬 하이라이트 */}
        <circle cx="42" cy="55" r="1.5" fill="#FFF" opacity="0.7" />
        <circle cx="78" cy="60" r="1.5" fill="#FFF" opacity="0.7" />
        <circle cx="48" cy="75" r="1.2" fill="#FFF" opacity="0.7" />
        <circle cx="72" cy="78" r="1.2" fill="#FFF" opacity="0.7" />

        {/* 작은 장식 (별 모양) */}
        <path
            d="M55 45 L56 47 L58 47 L56.5 48.5 L57 50.5 L55 49.5 L53 50.5 L53.5 48.5 L52 47 L54 47 Z"
            fill="#FFD700"
            opacity="0.8"
        />
        <path
            d="M65 48 L66 50 L68 50 L66.5 51.5 L67 53.5 L65 52.5 L63 53.5 L63.5 51.5 L62 50 L64 50 Z"
            fill="#FFD700"
            opacity="0.8"
        />
    </svg>
);

const WelcomePage = () => {
    const cardBg = useColorModeValue('white', 'gray.800');
    const gradientBg = useColorModeValue(
        'linear(to-br, #fff8f0, #ffe8e8, #f0fff0)',
        'linear(to-br, #1a202c, #2d3748)'
    );

    const eventInfo = [
        {
            icon: FaCalendarAlt,
            label: '일시',
            value: '2025년 12월 28일(일)\n저녁 6시 청년미사 후',
            color: '#DC143C', // 크리스마스 빨강
        },
        {
            icon: FaMapMarkerAlt,
            label: '장소',
            value: '압구정1동 성당 2층 파티마홀',
            color: '#228B22', // 크리스마스 초록
        },
    ];

    return (
        <Box
            minH="100vh"
            bgGradient={gradientBg}
            py={{ base: 8, md: 12 }}
            px={{ base: 4, md: 6 }}
            position="relative"
            overflow="hidden"
        >
            {/* 배경 장식 요소 */}
            <Box
                position="absolute"
                top="-50px"
                right="-50px"
                w="200px"
                h="200px"
                borderRadius="50%"
                bg="rgba(220, 20, 60, 0.15)"
                filter="blur(40px)"
            />
            <Box
                position="absolute"
                bottom="-50px"
                left="-50px"
                w="200px"
                h="200px"
                borderRadius="50%"
                bg="rgba(34, 139, 34, 0.15)"
                filter="blur(40px)"
            />

            {/* 눈송이 애니메이션 */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        fontSize: `${Math.random() * 20 + 15}px`,
                        color: 'rgba(220, 20, 60, 0.4)',
                        pointerEvents: 'none',
                        zIndex: 0,
                    }}
                    animate={{
                        y: [0, 100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        rotate: [0, 360],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'linear',
                    }}
                >
                    ❄
                </motion.div>
            ))}

            <Container maxW="container.md" position="relative" zIndex={1}>
                <Center>
                    {/* 엽서 형태의 카드 */}
                    <motion.div
                        style={{
                            perspective: '1000px',
                            width: '100%',
                            maxWidth: '600px',
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <motion.div
                            style={{
                                transformStyle: 'preserve-3d',
                                position: 'relative',
                            }}
                            initial={{
                                rotateY: 90,
                                opacity: 0,
                            }}
                            animate={{
                                rotateY: 0,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1.5,
                                type: 'spring',
                                stiffness: 80,
                                damping: 15,
                            }}
                        >
                            <Card
                                bg={cardBg}
                                borderRadius="2xl"
                                boxShadow="2xl"
                                overflow="hidden"
                                border="2px solid"
                                borderColor="rgba(220, 20, 60, 0.3)"
                                position="relative"
                            >
                                {/* 엽서 앞면 - 크리스마스 트리와 타이틀 */}
                                <Box
                                    bgGradient="linear(to-br, #DC143C, #C41E3A, #228B22)"
                                    py={{ base: 8, md: 12 }}
                                    px={{ base: 6, md: 8 }}
                                    textAlign="center"
                                    position="relative"
                                    minH={{ base: '300px', md: '400px' }}
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    {/* 배경 장식 - 애니메이션 눈송이 */}
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            top: '20px',
                                            right: '20px',
                                        }}
                                        animate={{
                                            rotate: [0, 360],
                                            scale: [1, 1.2, 1],
                                            opacity: [0.2, 0.4, 0.2],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    >
                                        <Icon as={FaSnowflake} w={8} h={8} color="white" />
                                    </motion.div>
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            bottom: '20px',
                                            left: '20px',
                                        }}
                                        animate={{
                                            rotate: [360, 0],
                                            scale: [1, 1.15, 1],
                                            opacity: [0.2, 0.35, 0.2],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: 0.5,
                                        }}
                                    >
                                        <Icon as={FaSnowflake} w={6} h={6} color="white" />
                                    </motion.div>
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            top: '40px',
                                            left: '30px',
                                        }}
                                        animate={{
                                            rotate: [0, -360],
                                            y: [0, 10, 0],
                                            opacity: [0.15, 0.3, 0.15],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: 1,
                                        }}
                                    >
                                        <Icon as={FaSnowflake} w={5} h={5} color="white" />
                                    </motion.div>

                                    {/* 트리 주변 빛나는 효과 */}
                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '200px',
                                            height: '200px',
                                            borderRadius: '50%',
                                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                                            pointerEvents: 'none',
                                        }}
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            opacity: [0.3, 0.6, 0.3],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    />

                                    {/* 크리스마스 트리 - 흔들림 효과 */}
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{
                                            scale: 1,
                                            rotate: 0,
                                            y: [0, -5, 0],
                                        }}
                                        transition={{
                                            scale: {
                                                duration: 1,
                                                delay: 1.5,
                                                type: 'spring',
                                                stiffness: 150,
                                            },
                                            rotate: {
                                                duration: 1,
                                                delay: 1.5,
                                                type: 'spring',
                                                stiffness: 150,
                                            },
                                            y: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                                delay: 2.5,
                                            },
                                        }}
                                    >
                                        <ChristmasTree size={140} />
                                    </motion.div>

                                    {/* 타이틀 */}
                                    <VStack spacing={4} mt={6}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 2,
                                            }}
                                        >
                                            <HStack justify="center" spacing={3} align="center">
                                                <motion.div
                                                    style={{ display: 'flex', alignItems: 'center' }}
                                                    animate={{
                                                        rotate: [0, 360],
                                                        scale: [1, 1.2, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                        delay: 2.5,
                                                    }}
                                                >
                                                    <Icon as={FaSnowflake} w={5} h={5} color="white" />
                                                </motion.div>
                                                <Heading
                                                    size={{ base: 'xl', md: '2xl' }}
                                                    color="white"
                                                    fontWeight="bold"
                                                    letterSpacing="wide"
                                                    lineHeight="1.2"
                                                >
                                                    청년 성탄 송년 행사
                                                </Heading>
                                                <motion.div
                                                    style={{ display: 'flex', alignItems: 'center' }}
                                                    animate={{
                                                        rotate: [360, 0],
                                                        scale: [1, 1.2, 1],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                        delay: 2.7,
                                                    }}
                                                >
                                                    <Icon as={FaSnowflake} w={5} h={5} color="white" />
                                                </motion.div>
                                            </HStack>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 2.3,
                                            }}
                                        >
                                            <Text
                                                color="whiteAlpha.900"
                                                fontSize={{ base: 'sm', md: 'md' }}
                                                fontWeight="medium"
                                            >
                                                함께 모여 축하하고 나누는 시간
                                            </Text>
                                        </motion.div>
                                    </VStack>
                                </Box>

                                {/* 엽서 뒷면 - 행사 정보 */}
                                <CardBody p={{ base: 6, md: 8 }}>
                                    <VStack spacing={6} align="stretch">
                                        {eventInfo.map((info, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{
                                                    opacity: 0,
                                                    x: -50,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 2.5 + index * 0.2,
                                                    ease: 'easeOut',
                                                }}
                                            >
                                                <Box>
                                                    <HStack spacing={4} align="center">
                                                        <motion.div
                                                            initial={{ scale: 0, rotate: -180 }}
                                                            animate={{ scale: 1, rotate: 0 }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay: 2.7 + index * 0.2,
                                                                type: 'spring',
                                                                stiffness: 200,
                                                            }}
                                                            style={{ display: 'flex', alignItems: 'center' }}
                                                        >
                                                            <Flex
                                                                align="center"
                                                                justify="center"
                                                                w={{ base: 10, md: 12 }}
                                                                h={{ base: 10, md: 12 }}
                                                                borderRadius="lg"
                                                                bg={`${info.color}15`}
                                                                flexShrink={0}
                                                            >
                                                                <Icon
                                                                    as={info.icon}
                                                                    w={{ base: 5, md: 6 }}
                                                                    h={{ base: 5, md: 6 }}
                                                                    color={info.color}
                                                                />
                                                            </Flex>
                                                        </motion.div>
                                                        <VStack align="flex-start" spacing={1} flex={1} justify="center">
                                                            <Text
                                                                fontSize={{ base: 'xs', md: 'sm' }}
                                                                color="gray.500"
                                                                fontWeight="semibold"
                                                                letterSpacing="wide"
                                                                textTransform="uppercase"
                                                                lineHeight="1.2"
                                                            >
                                                                {info.label}
                                                            </Text>
                                                            <Text
                                                                fontSize={{ base: 'md', md: 'lg' }}
                                                                color="gray.800"
                                                                fontWeight="bold"
                                                                whiteSpace="pre-line"
                                                                lineHeight="1.4"
                                                            >
                                                                {info.value}
                                                            </Text>
                                                        </VStack>
                                                    </HStack>
                                                    {index < eventInfo.length - 1 && (
                                                        <Divider mt={6} borderColor="gray.200" />
                                                    )}
                                                </Box>
                                            </motion.div>
                                        ))}
                                        
                                        {/* QR 코드 및 참여하기 버튼 영역 */}
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                scale: 0.8,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 3.2,
                                                ease: 'easeOut',
                                            }}
                                        >
                                            <Divider mt={4} mb={4} borderColor="gray.200" />
                                            <VStack spacing={4} align="center" py={2}>
                                                <Text
                                                    fontSize={{ base: 'sm', md: 'md' }}
                                                    color="gray.600"
                                                    fontWeight="medium"
                                                    textAlign="center"
                                                >
                                                    QR 코드를 스캔하여
                                                    <br />
                                                    더 자세한 정보를 확인하세요
                                                </Text>
                                                
                                                {/* QR 코드와 버튼을 나란히 배치 (반응형) */}
                                                <HStack
                                                    spacing={{ base: 4, md: 6 }}
                                                    align="center"
                                                    justify="center"
                                                    w="100%"
                                                    flexWrap={{ base: 'wrap', md: 'nowrap' }}
                                                >
                                                    {/* QR 코드 */}
                                                    <Box
                                                        w={{ base: '140px', md: '180px' }}
                                                        h={{ base: '140px', md: '180px' }}
                                                        bg="gray.100"
                                                        borderRadius="lg"
                                                        border="2px dashed"
                                                        borderColor="gray.300"
                                                        display="flex"
                                                        alignItems="center"
                                                        justifyContent="center"
                                                        flexShrink={0}
                                                    >
                                                        <Text
                                                            fontSize="xs"
                                                            color="gray.400"
                                                            textAlign="center"
                                                            px={2}
                                                        >
                                                            QR 코드 이미지를
                                                            <br />
                                                            여기에 넣어주세요
                                                        </Text>
                                                    </Box>

                                                    {/* 참여하기 버튼 */}
                                                    <Button
                                                        as="a"
                                                        href="#" // 추후 구글 폼 링크로 변경
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        bgGradient="linear(to-r, #DC143C, #C41E3A)"
                                                        color="white"
                                                        size={{ base: 'md', md: 'lg' }}
                                                        fontSize={{ base: 'md', md: 'lg' }}
                                                        fontWeight="bold"
                                                        px={{ base: 6, md: 8 }}
                                                        py={{ base: 6, md: 7 }}
                                                        borderRadius="xl"
                                                        boxShadow="md"
                                                        _hover={{
                                                            bgGradient: 'linear(to-r, #C41E3A, #DC143C)',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: 'lg',
                                                        }}
                                                        _active={{
                                                            transform: 'translateY(0)',
                                                        }}
                                                        transition="all 0.2s"
                                                        w={{ base: '140px', md: 'auto' }}
                                                        minW={{ base: '140px', md: '180px' }}
                                                    >
                                                        참여하기
                                                    </Button>
                                                </HStack>
                                            </VStack>
                                        </motion.div>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </motion.div>
                    </motion.div>
                </Center>

                {/* 추가 안내 메시지 */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 3.5,
                    }}
                >
                    <Card
                        bg={cardBg}
                        borderRadius="2xl"
                        boxShadow="xl"
                        border="1px solid"
                        borderColor="rgba(220, 20, 60, 0.2)"
                        mt={8}
                        maxW="600px"
                        mx="auto"
                    >
                        <CardBody p={{ base: 6, md: 8 }}>
                            <VStack spacing={4} align="center" textAlign="center">
                                <Text
                                    fontSize={{ base: 'lg', md: 'xl' }}
                                    color="gray.700"
                                    fontWeight="semibold"
                                >
                                    여러분의 참여를 기다립니다
                                </Text>
                                <Text
                                    fontSize={{ base: 'sm', md: 'md' }}
                                    color="gray.600"
                                    lineHeight="tall"
                                >
                                    따뜻한 마음으로 함께 모여
                                    <br />
                                    성탄의 기쁨을 나누고 한 해를 마무리하는 시간이 되길 바랍니다.
                                </Text>
                            </VStack>
                        </CardBody>
                    </Card>
                </motion.div>
            </Container>
        </Box>
    );
};

export default WelcomePage;

