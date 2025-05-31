import { Box, Container, Heading, Text, VStack, Icon, Flex, Badge, useColorModeValue } from '@chakra-ui/react';
import { FaPray } from 'react-icons/fa';

const LiturgyPage = () => {
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
                            <Icon as={FaPray} w={8} h={8} />
                        </Box>
                        <Heading
                            as="h1"
                            size="2xl"
                            bgGradient="linear(to-r, #6b4f27, #bfa16c)"
                            bgClip="text"
                            fontWeight="bold"
                            letterSpacing="tight"
                        >
                            전례단
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
                        전례단
                    </Badge>
                </VStack>

                {/* 메인 컨텐츠 */}
                <VStack spacing={12} align="stretch">
                    {/* 전례란? */}
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
                            전례란?
                        </Heading>
                        <VStack align="stretch" spacing={4}>
                            <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                하느님 백성의 공적인 예배행위를 일컫는 말
                            </Text>
                            <Text fontSize="md" color="gray.500" fontStyle="italic">
                                그리스어의 리투르기아(Leiturgia)에서 유래
                            </Text>
                        </VStack>
                    </Box>

                    {/* 전례단은요 */}
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
                            전례단은요
                        </Heading>
                        <Text fontSize="lg" color="gray.600" lineHeight="tall">
                            교회 공동체 안에서 미사 때에 일반신자들의 대표에 서서 주례 사제를 도와 전례를 담당하는 작은
                            공동체
                        </Text>
                    </Box>

                    {/* 우리가 뭘 하냐면요 */}
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
                            우리가 뭘 하냐면요
                        </Heading>
                        <VStack align="stretch" spacing={4}>
                            <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                해설 / 독서 / 복사 / 신자들의 기도 등
                            </Text>
                            <Text fontSize="lg" color="gray.600" lineHeight="tall" fontWeight="medium">
                                미사 전반의 전례를 책임지는 단체예요
                            </Text>
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
                                전례단 활동에 관심 있는 분은 언제든 문의해 주세요.
                            </Text>
                            <Text fontSize="sm" color="gray.500" mt={2}>
                                * 전례 교육을 통해 충분한 준비 후 봉사에 참여할 수 있습니다.
                            </Text>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default LiturgyPage;
