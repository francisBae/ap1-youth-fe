import {
    Box,
    Container,
    VStack,
    Heading,
    Text,
    Card,
    HStack,
    Icon,
    Center,
    Button,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaSnowflake, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const WelcomePage = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        }
    }, []);

    // 페이지 어디든 클릭/터치 시 자동 재생 시작
    useEffect(() => {
        const handleUserInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
                // 첫 상호작용 시 자동 재생
                if (audioRef.current && !isPlaying) {
                    audioRef.current.play()
                        .then(() => {
                            setIsPlaying(true);
                        })
                        .catch((error) => {
                            console.log('Auto-play failed:', error);
                        });
                }
            }
        };

        document.addEventListener('click', handleUserInteraction, { once: true });
        document.addEventListener('touchstart', handleUserInteraction, { once: true });

        return () => {
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
        };
    }, [hasInteracted, isPlaying]);

    const toggleAudio = () => {
        if (audioRef.current) {
            const newPlayingState = !isPlaying;
            setIsPlaying(newPlayingState);
            
            if (newPlayingState) {
                audioRef.current.play().catch((error) => {
                    console.log('Audio play failed:', error);
                    setIsPlaying(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    };
    // 어두운 파란색 격자 무늬 배경
    const plaidBg = {
        background: '#1a1a3e',
        backgroundImage: `
            linear-gradient(0deg, rgba(50, 50, 90, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(50, 50, 90, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
    };

    const eventInfo = [
        {
            icon: FaCalendarAlt,
            label: '날짜',
            value: '2025년 12월 28일(일)',
        },
        {
            icon: FaClock,
            label: '시간',
            value: '저녁 6시 청년미사 후',
        },
        {
            icon: FaMapMarkerAlt,
            label: '장소',
            value: '본당 2층 파티마홀',
        },
    ];

    // 흰색 점들 생성
    const dots = Array.from({ length: 30 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 2,
    }));

    // 눈송이 생성 (배경용)
    const snowflakes = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 5,
        size: Math.random() * 8 + 10,
    }));

    return (
        <>
            {/* 배경 음악 */}
            <audio
                ref={audioRef}
                loop
                style={{ display: 'none' }}
            >
                <source src="/welcome/audio/We_Wish_You_a_Merry_Christmas_Jazz.mp3" type="audio/mpeg" />
            </audio>

            <Box
                minH="100vh"
                style={plaidBg}
                py={{ base: 6, md: 10 }}
                px={{ base: 4, md: 6 }}
                position="relative"
                overflow="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {/* 오디오 on/off 버튼 */}
                <Box
                    position="fixed"
                    top={{ base: '16px', md: '20px' }}
                    right={{ base: '16px', md: '20px' }}
                    zIndex={1000}
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            onClick={toggleAudio}
                            bg="rgba(255, 255, 255, 0.9)"
                            color={isPlaying ? '#228B22' : '#666'}
                            size={{ base: 'md', md: 'lg' }}
                            borderRadius="full"
                            boxShadow="lg"
                            _hover={{
                                bg: 'white',
                                transform: 'scale(1.05)',
                            }}
                            w={{ base: '48px', md: '56px' }}
                            h={{ base: '48px', md: '56px' }}
                            p={0}
                            minW="auto"
                        >
                            <Icon
                                as={isPlaying ? FaVolumeUp : FaVolumeMute}
                                w={{ base: 5, md: 6 }}
                                h={{ base: 5, md: 6 }}
                            />
                        </Button>
                    </motion.div>
                </Box>
            {/* 배경 눈송이 애니메이션 */}
            {snowflakes.map((snowflake) => (
                <motion.div
                    key={snowflake.id}
                    style={{
                        position: 'absolute',
                        left: snowflake.left,
                        top: '-20px',
                        zIndex: 0,
                        pointerEvents: 'none',
                    }}
                    animate={{
                        y: ['0vh', '100vh'],
                        x: [0, Math.random() * 50 - 25],
                        rotate: [0, 360],
                        opacity: [0, 0.7, 0.7, 0],
                    }}
                    transition={{
                        y: {
                            duration: snowflake.duration,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: snowflake.delay,
                        },
                        x: {
                            duration: snowflake.duration,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: snowflake.delay,
                        },
                        rotate: {
                            duration: snowflake.duration * 0.5,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: snowflake.delay,
                        },
                        opacity: {
                            duration: snowflake.duration,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: snowflake.delay,
                            times: [0, 0.1, 0.9, 1],
                        },
                    }}
                >
                    <Icon
                        as={FaSnowflake}
                        w={`${snowflake.size}px`}
                        h={`${snowflake.size}px`}
                        color="rgba(255, 255, 255, 0.8)"
                    />
                </motion.div>
            ))}

            <Container maxW="container.sm" position="relative" zIndex={1}>
                <Center>
                    {/* 크리스마스 초대장 카드 */}
                    <motion.div
                        style={{
                            perspective: '1000px',
                            width: '100%',
                            maxWidth: '500px',
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.7,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 12,
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
                                stiffness: 200,
                                damping: 10,
                            }}
                        >
                            <Card
                                bg="#B22222"
                                borderRadius="lg"
                                boxShadow="2xl"
                                overflow="hidden"
                                // border="3px solid"
                                // borderColor="white"
                                position="relative"
                            >
                                {/* 상단 장식 테두리 - 초록-흰색 대각선 줄무늬 */}
                                <Box
                                    h="10px"
                                    position="relative"
                                    bg="repeating-linear-gradient(45deg, #228B22 0px, #228B22 8px, #FFFFFF 8px, #FFFFFF 16px)"
                                />

                                {/* 카드 내용 */}
                                <Box
                                    bg="#B22222"
                                    py={{ base: 8, md: 10 }}
                                    px={{ base: 6, md: 8 }}
                                    position="relative"
                                    minH={{ base: '500px', md: '600px' }}
                                    border="1px solid"
                                    borderColor="#F5E6D3"
                                    m={{ base: '10px', md: '10px' }}
                                >
                                    {/* 흰색 점들 장식 */}
                                    {dots.map((dot, index) => (
                                        <Box
                                            key={index}
                                            position="absolute"
                                            top={dot.top}
                                            left={dot.left}
                                            w={`${dot.size}px`}
                                            h={`${dot.size}px`}
                                            bg="white"
                                            borderRadius="50%"
                                            opacity={0.6}
                                        />
                                    ))}

                                    {/* 타이틀 */}
                                    <VStack spacing={6} align="center" mb={6}>
                                        <motion.div
                                            initial={{ opacity: 0, y: -30, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 12,
                                                delay: 1.5,
                                            }}
                                        >
                                            <HStack spacing={2} justify="center" align="center">
                                                <Text fontSize="2xl" color="white" fontWeight="bold">
                                                    ✦
                                                </Text>
                                                <Heading
                                                    size={{ base: '3xl', md: '3xl' }}
                                                    color="white"
                                                    fontWeight="bold"
                                                    fontStyle="italic"
                                                    letterSpacing="wide"
                                                    fontFamily="'Great Vibes', 'Dancing Script', 'Brush Script MT', 'Lucida Handwriting', cursive, serif"
                                                >
                                                    Christmas
                                                </Heading>
                                                <Text fontSize="2xl" color="white" fontWeight="bold">
                                                    ✦
                                                </Text>
                                            </HStack>
                                        </motion.div>

                                        {/* 초대 문구 */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 250,
                                                damping: 15,
                                                delay: 2,
                                            }}
                                        >
                                            <Text
                                                color="white"
                                                fontSize={{ base: '2xl', md: '4xl' }}
                                                fontWeight="bold"
                                                textAlign="center"
                                                lineHeight="1.6"
                                                fontFamily="'SchoolSafetyManitto', sans-serif"
                                            >
                                                압구정1동성당 청년 송년 행사
                                            </Text>
                                        </motion.div>
                                    </VStack>

                                    {/* 행사 정보 */}
                                    <VStack spacing={5} align="stretch" mb={6}>
                                        {eventInfo.map((info, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{
                                                    opacity: 0,
                                                    x: -30,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 200,
                                                    damping: 12,
                                                    delay: 2.5 + index * 0.2,
                                                }}
                                            >
                                                <HStack spacing={4} align="center">
                                                    <Icon
                                                        as={info.icon}
                                                        w={{ base: 6, md: 7 }}
                                                        h={{ base: 6, md: 7 }}
                                                        color="white"
                                                    />
                                                    <Text
                                                        color="white"
                                                        fontSize={{ base: 'xl', md: '2xl' }}
                                                        fontWeight="medium"
                                                        fontFamily="'SchoolSafetyManitto', sans-serif"
                                                    >
                                                        <Text as="span" fontWeight="bold">
                                                            {info.label}:
                                                        </Text>{' '}
                                                        {info.value}
                                                    </Text>
                                                </HStack>
                                            </motion.div>
                                        ))}
                                    </VStack>

                                    {/* 하단 일러스트 */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 40, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 250,
                                            damping: 12,
                                            delay: 3.2,
                                        }}
                                    >
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            mt={6}
                                        >
                                            <motion.div
                                                animate={{
                                                    y: [0, -5, 0],
                                                    scale: [1, 1.02, 1],
                                                }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 150,
                                                    damping: 8,
                                                    repeat: Infinity,
                                                    delay: 3.5,
                                                }}
                                            >
                                                <Box
                                                    as="img"
                                                    src="/welcome/christmas.webp"
                                                    alt="크리스마스 일러스트"
                                                    maxW={{ base: '100%', md: '100%' }}
                                                    w={{ base: '320px', md: '450px' }}
                                                    h="auto"
                                                    objectFit="contain"
                                                />
                                            </motion.div>
                                        </Box>
                                    </motion.div>

                                    {/* 함께하기 버튼 */}
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                            y: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 10,
                                            delay: 4,
                                        }}
                                    >
                                        <VStack spacing={4} align="center" mt={6}>
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut',
                                                }}
                                            >
                                                <Button
                                                    as="a"
                                                    href="https://forms.gle/htrb9vNBERBUGXoMA"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    bg="white"
                                                    color="#228B22"
                                                    size={{ base: 'lg', md: 'xl' }}
                                                    fontSize={{ base: '2xl', md: '3xl' }}
                                                    fontWeight="bold"
                                                    fontFamily="'SchoolSafetyManitto', sans-serif"
                                                    letterSpacing="wide"
                                                    textShadow="0 1px 2px rgba(0,0,0,0.1)"
                                                    px={{ base: 12, md: 16 }}
                                                    py={{ base: 8, md: 10 }}
                                                    borderRadius="xl"
                                                    boxShadow="lg"
                                                    _hover={{
                                                        bg: '#f0f0f0',
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: 'xl',
                                                    }}
                                                    _active={{
                                                        transform: 'translateY(0)',
                                                    }}
                                                    transition="all 0.2s"
                                                    w={{ base: '100%', md: 'auto' }}
                                                    minW={{ base: '320px', md: '420px' }}
                                                >
                                                    함께하기
                                                </Button>
                                            </motion.div>
                                        </VStack>
                                    </motion.div>
                                </Box>

                                {/* 하단 테두리 */}
                                <Box
                                    h="3px"
                                    bg="white"
                                />
                            </Card>
                        </motion.div>
                    </motion.div>
                </Center>
            </Container>
        </Box>
        </>
    );
};

export default WelcomePage;
