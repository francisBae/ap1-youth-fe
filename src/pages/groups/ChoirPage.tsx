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
import { FaMusic } from 'react-icons/fa';

const ChoirPage = () => {
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
                            <Icon as={FaMusic} w={8} h={8} />
                        </Box>
                        <Heading
                            as="h1"
                            size="2xl"
                            bgGradient="linear(to-r, #6b4f27, #bfa16c)"
                            bgClip="text"
                            fontWeight="bold"
                            letterSpacing="tight"
                        >
                            성가대
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
                        성가대
                    </Badge>
                </VStack>

                {/* 메인 컨텐츠 */}
                <VStack spacing={12} align="stretch">
                    {/* 성가란? */}
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
                            성가란?
                        </Heading>
                        <VStack align="stretch" spacing={4}>
                            <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                인간의 마음을 성화시킬 수 있는 거룩한 음악
                            </Text>
                            <Text fontSize="md" color="gray.500" fontStyle="italic">
                                성 아우구스티노의 성음악 정의에 따르면
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
                                    음악을 받을 대상: 하느님(㉱ Deus)
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
                                    수단: 입으로 하는 노래(㉱ Cantus)
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
                                    내용: 찬미(㉱ Laus)
                                </ListItem>
                            </List>
                        </VStack>
                    </Box>

                    {/* 회합 */}
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
                            회합
                        </Heading>
                        <VStack align="stretch" spacing={6}>
                            <Box>
                                <Text fontSize="lg" color="gray.600" fontWeight="medium">
                                    매주 일요일 오후 4시 30분부터 연습
                                </Text>
                            </Box>
                            <Box>
                                <Text fontSize="lg" color="gray.600" fontWeight="medium">
                                    청년성가
                                </Text>
                                <Text fontSize="md" color="gray.500" mt={1}>
                                    미사전례곡
                                </Text>
                            </Box>
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
                                성가대 활동에 관심 있는 분은 언제든 연습 시간에 방문해 주세요.
                            </Text>
                            <Text fontSize="sm" color="gray.500" mt={2}>
                                * 음악 경험이 없어도 누구나 참여할 수 있습니다.
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default ChoirPage;
