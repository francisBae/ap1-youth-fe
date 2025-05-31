import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Icon,
    Flex,
    Badge,
    useColorModeValue,
    List,
    ListItem,
} from '@chakra-ui/react';
import { FaHandsHelping } from 'react-icons/fa';

const LegioPage = () => {
    const accentColor = '#bfa16c';
    const gradientBg = 'linear-gradient(135deg, #f8f6f2 0%, #fff 100%)';
    const cardBg = useColorModeValue('white', 'gray.700');
    const cardBorder = useColorModeValue('gray.200', 'gray.600');

    return (
        <Box bg={gradientBg} minH="100vh" py={16}>
            <Container maxW="container.lg">
                {/* 히어로 섹션 */}
                <VStack spacing={8} mb={16} textAlign="center">
                    <Flex align="center" justify="center" gap={4} mb={4}>
                        <Box p={3} borderRadius="xl" bg={`${accentColor}15`} color={accentColor}>
                            <Icon as={FaHandsHelping} w={8} h={8} />
                        </Box>
                        <Heading
                            as="h1"
                            size="2xl"
                            bgGradient="linear(to-r, #6b4f27, #bfa16c)"
                            bgClip="text"
                            fontWeight="bold"
                            letterSpacing="tight"
                        >
                            레지오
                        </Heading>
                    </Flex>
                    <Badge
                        colorScheme="gray"
                        bg="white"
                        color={accentColor}
                        px={4}
                        py={1}
                        borderRadius="full"
                        fontSize="md"
                        fontWeight="medium"
                        boxShadow="sm"
                    >
                        레지오
                    </Badge>
                </VStack>

                {/* 메인 컨텐츠 */}
                <VStack spacing={12} align="stretch">
                    {/* 레지오란? */}
                    <Box
                        bg={cardBg}
                        p={8}
                        borderRadius="2xl"
                        borderWidth="1px"
                        borderColor={cardBorder}
                        boxShadow="sm"
                        _hover={{ boxShadow: 'md' }}
                        transition="all 0.2s"
                    >
                        <Heading as="h2" size="lg" mb={6} color="gray.800">
                            레지오란?
                        </Heading>
                        <VStack align="stretch" spacing={4}>
                            <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                성모 마리아의 군대라는 뜻으로, 성모님의 모범을 따라 교회의 사도직 활동을 하는 단체
                            </Text>
                            <Text fontSize="md" color="gray.500" fontStyle="italic">
                                라틴어 'Legio Mariae'에서 유래
                            </Text>
                        </VStack>
                    </Box>

                    {/* 레지오는요 */}
                    <Box
                        bg={cardBg}
                        p={8}
                        borderRadius="2xl"
                        borderWidth="1px"
                        borderColor={cardBorder}
                        boxShadow="sm"
                        _hover={{ boxShadow: 'md' }}
                        transition="all 0.2s"
                    >
                        <Heading as="h2" size="lg" mb={6} color="gray.800">
                            레지오는요
                        </Heading>
                        <VStack align="stretch" spacing={4}>
                            <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                성모님의 모범을 따라 교회의 사도직 활동을 하는 단체예요
                            </Text>
                            <List spacing={3} mt={4} pl={4}>
                                <ListItem
                                    color="gray.600"
                                    position="relative"
                                    pl={6}
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
                                    매주 정기적인 모임을 통해 성경 공부와 기도 생활
                                </ListItem>
                                <ListItem
                                    color="gray.600"
                                    position="relative"
                                    pl={6}
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
                                    병자 방문과 위문 활동
                                </ListItem>
                                <ListItem
                                    color="gray.600"
                                    position="relative"
                                    pl={6}
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
                                    교회의 다양한 봉사 활동 참여
                                </ListItem>
                            </List>
                        </VStack>
                    </Box>

                    {/* 가입 안내 */}
                    <Box
                        bg={`${accentColor}08`}
                        p={8}
                        borderRadius="2xl"
                        borderWidth="1px"
                        borderColor={`${accentColor}30`}
                        boxShadow="sm"
                    >
                        <Heading as="h2" size="lg" mb={6} color="gray.800">
                            가입 안내
                        </Heading>
                        <VStack align="stretch" spacing={4}>
                            <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                레지오 활동에 관심 있는 분은 언제든 문의해 주세요.
                            </Text>
                            <Text fontSize="sm" color="gray.500" mt={2}>
                                * 정기적인 모임과 활동을 통해 신앙생활을 함께 나눕니다.
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default LegioPage;
