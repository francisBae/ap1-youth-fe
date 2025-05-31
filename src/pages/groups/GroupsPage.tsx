import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Button, useColorModeValue } from '@chakra-ui/react';
import { FaPray, FaMusic, FaUsers } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const GroupsPage = () => {
    const cardBg = useColorModeValue('white', 'gray.700');
    const cardBorder = useColorModeValue('gray.200', 'gray.600');

    const groups = [
        {
            title: '전례단',
            icon: FaPray,
            description: '하느님 백성의 공적인 예배행위를 담당하는 단체로, 미사 전반의 전례를 책임집니다.',
            link: '/groups/liturgy',
            details: ['해설 / 독서 / 복사 / 신자들의 기도 담당', '전례 교육을 통한 전문성 향상', '미사 전례 봉사'],
        },
        {
            title: '성가대',
            icon: FaMusic,
            description: '거룩한 음악을 통해 하느님을 찬미하는 단체입니다.',
            link: '/groups/choir',
            details: ['매주 일요일 오후 4시 30분 연습', '청년성가 및 미사전례곡 연주', '누구나 참여 가능'],
        },
        {
            title: '레지오',
            icon: FaUsers,
            description: '성모님의 지휘아래 설립된 청년 사도직 단체입니다.',
            link: '/groups/legio',
            details: ['기도, 나눔, 봉사 활동', '일상 속 힐링과 성장', '삶의 동반자 공동체'],
        },
    ];

    return (
        <Container maxW="container.xl" py={12}>
            <Heading as="h1" size="xl" mb={8} textAlign="center">
                청년 단체 소개
            </Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center" mb={12}>
                우리 성당 청년들은 다양한 단체 활동을 통해 신앙을 나누고 성장합니다.
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {groups.map((group) => (
                    <Box
                        key={group.title}
                        bg={cardBg}
                        p={6}
                        borderRadius="lg"
                        borderWidth="1px"
                        borderColor={cardBorder}
                        _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                        transition="all 0.2s"
                    >
                        <VStack align="stretch" spacing={4}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <Icon as={group.icon} w={6} h={6} color="#bfa16c" mr={3} />
                                <Heading as="h2" size="lg">
                                    {group.title}
                                </Heading>
                            </Box>

                            <Text color="gray.600" fontSize="md">
                                {group.description}
                            </Text>

                            <Box as="ul" pl={4} mt={2}>
                                {group.details.map((detail, index) => (
                                    <Box
                                        as="li"
                                        key={index}
                                        color="gray.600"
                                        fontSize="sm"
                                        mb={2}
                                        _before={{ content: '"•"', color: '#bfa16c', mr: 2 }}
                                    >
                                        {detail}
                                    </Box>
                                ))}
                            </Box>

                            <Button
                                as={RouterLink}
                                to={group.link}
                                colorScheme="gray"
                                variant="outline"
                                mt={4}
                                _hover={{
                                    bg: '#bfa16c',
                                    color: 'white',
                                    borderColor: '#bfa16c',
                                }}
                            >
                                자세히 보기
                            </Button>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
};

export default GroupsPage;
