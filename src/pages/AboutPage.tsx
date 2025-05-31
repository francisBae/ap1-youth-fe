import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Card,
    CardBody,
    useColorModeValue,
    List,
    ListItem,
    Flex,
    Badge,
    Icon,
} from '@chakra-ui/react';
import { FaCross } from 'react-icons/fa';

const AboutPage = () => {
    const pageBg = '#fcfbf9';
    const accentColor = '#bfa16c';
    const cardBg = useColorModeValue('white', 'gray.800');
    const cardBorder = useColorModeValue('gray.200', 'gray.600');

    const priests = [
        { name: '소원석', baptismalName: '가브리엘', period: '1999.02 - 2004.09', role: '초대 주임' },
        { name: '정병조', baptismalName: '베드로', period: '2004.09 - 2009.02', role: '2대 주임' },
        { name: '박상수', baptismalName: '바오로', period: '2009.02 - 2014.02', role: '3대 주임' },
        { name: '배갑진', baptismalName: '베드로', period: '2014.02 - 2019.02', role: '4대 주임' },
        { name: '이승찬', baptismalName: '안드레아', period: '2019.02 - 2023.02', role: '5대 주임' },
        { name: '지영현', baptismalName: '시몬', period: '2023.02 - 현재', role: '6대 주임' },
    ];

    const assistantPriests = [
        { name: '한정수', baptismalName: '베드로', period: '2004.11 ~ 2006.11', role: '초대 보좌' },
        { name: '남상근', baptismalName: '라파엘', period: '2006.11 ~ 2007.11', role: '2대 보좌' },
        { name: '신현우', baptismalName: '안토니오', period: '2007.11 ~ 2009.11', role: '3대 보좌' },
        { name: '손경락', baptismalName: '사도요한', period: '2009.12 ~ 2011.08', role: '4대 보좌' },
        { name: '노봉진', baptismalName: '프란치스코', period: '2011.08 ~ 2014.02', role: '5대 보좌' },
        { name: '최요안', baptismalName: '세례자요한', period: '2014.02 ~ 2016.02', role: '6대 보좌' },
        { name: '최명근', baptismalName: '아브라함', period: '2016.02 ~ 2018.02', role: '7대 보좌' },
        { name: '박형문', baptismalName: '바오로', period: '2019.02 ~ 2021.02', role: '8대 보좌' },
        { name: '이규항', baptismalName: '마태오', period: '2020.02 ~ 2023.02', role: '9대 보좌' },
        { name: '김신순', baptismalName: '안토니오', period: '2023.02 ~ 2025.02', role: '10대 보좌' },
        { name: '김준호', baptismalName: '하드리아노', period: '2025.02 ~ 현재', role: '11대 보좌' },
    ];

    return (
        <Box bg={pageBg} minH="100vh" py={16}>
            <Container maxW="container.xl">
                <VStack spacing={12} align="stretch">
                    {/* 본당 신부님 섹션 */}
                    <Box>
                        <Heading as="h2" size="xl" mb={8} textAlign="center" color="gray.700" fontWeight="bold">
                            본당 신부님
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                            <Card
                                bg={cardBg}
                                borderRadius="xl"
                                boxShadow="md"
                                borderWidth="1px"
                                borderColor={cardBorder}
                                _hover={{
                                    transform: 'translateY(-4px)',
                                    shadow: 'lg',
                                    borderColor: accentColor,
                                }}
                                transition="all 0.3s ease"
                            >
                                <CardBody p={8}>
                                    <VStack spacing={4} align="center">
                                        <Flex align="center" gap={3}>
                                            <Icon as={FaCross} w={6} h={6} color={accentColor} />
                                            <Heading as="h3" size="lg" color={accentColor}>
                                                주임 신부님
                                            </Heading>
                                        </Flex>
                                        <Text fontSize="xl" fontWeight="medium" color="gray.700">
                                            지영현 시몬 신부님
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card
                                bg={cardBg}
                                borderRadius="xl"
                                boxShadow="md"
                                borderWidth="1px"
                                borderColor={cardBorder}
                                _hover={{
                                    transform: 'translateY(-4px)',
                                    shadow: 'lg',
                                    borderColor: accentColor,
                                }}
                                transition="all 0.3s ease"
                            >
                                <CardBody p={8}>
                                    <VStack spacing={4} align="center">
                                        <Flex align="center" gap={3}>
                                            <Icon as={FaCross} w={6} h={6} color={accentColor} />
                                            <Heading as="h3" size="lg" color={accentColor}>
                                                부주임 신부님
                                            </Heading>
                                        </Flex>
                                        <Text fontSize="xl" fontWeight="medium" color="gray.700">
                                            김준호 하드리아노 신부님
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </SimpleGrid>
                    </Box>

                    {/* 본당개요 섹션 */}
                    <Box>
                        <Heading
                            as="h1"
                            size="2xl"
                            mb={8}
                            textAlign="center"
                            bgGradient="linear(to-r, #6b4f27, #bfa16c)"
                            bgClip="text"
                            fontWeight="bold"
                        >
                            본당개요
                        </Heading>
                        <VStack spacing={8} align="stretch">
                            <Card
                                bg={cardBg}
                                borderRadius="xl"
                                boxShadow="md"
                                borderWidth="1px"
                                borderColor={cardBorder}
                            >
                                <CardBody p={8}>
                                    <VStack spacing={6} align="stretch">
                                        <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                            천주교 압구정1동 성당은 서울시 강남구 신사동 607번지에 위치해 있으며, 1999년
                                            2월 18일 압구정 성당에서 분리되어 설립되었습니다. 초대 주임 소원석(가브리엘)
                                            신부님의 사목으로 시작하여, 현재는 지영현(시몬) 신부님께서 6대
                                            주임신부님으로, 김준호(하드리아노) 신부님께서 부주임 신부님으로 사목하고
                                            계십니다.
                                        </Text>
                                        <Text fontSize="lg" color="gray.600" lineHeight="tall">
                                            현재 성전은 2001년 2월 19일 착공하여 2002년 5월 26일 입당 미사를
                                            봉헌하였으며, 2004년 5월 23일 서울대교구장 정진석 추기경님을 모시고 성전
                                            봉헌 미사를 드렸습니다.
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card
                                bg={cardBg}
                                borderRadius="xl"
                                boxShadow="md"
                                borderWidth="1px"
                                borderColor={cardBorder}
                            >
                                <CardBody p={8}>
                                    <VStack spacing={6} align="stretch">
                                        <Heading as="h3" size="lg" color={accentColor} textAlign="center" mb={4}>
                                            역대 주임 신부님
                                        </Heading>
                                        <List spacing={4}>
                                            {priests.map((priest, index) => (
                                                <ListItem
                                                    key={index}
                                                    p={4}
                                                    borderRadius="lg"
                                                    borderWidth="1px"
                                                    borderColor={cardBorder}
                                                    _hover={{
                                                        borderColor: accentColor,
                                                        bg: 'gray.50',
                                                    }}
                                                    transition="all 0.2s"
                                                >
                                                    <Flex
                                                        justify="space-between"
                                                        align="center"
                                                        flexWrap="wrap"
                                                        gap={2}
                                                    >
                                                        <Flex direction="column" gap={1}>
                                                            <Flex align="center" gap={2}>
                                                                <Text fontSize="lg" fontWeight="medium">
                                                                    {priest.name} ({priest.baptismalName}) 신부님
                                                                </Text>
                                                                <Badge
                                                                    colorScheme={
                                                                        priest.role.includes('현재') ? 'green' : 'gray'
                                                                    }
                                                                    variant="subtle"
                                                                >
                                                                    {priest.role}
                                                                </Badge>
                                                            </Flex>
                                                            <Text fontSize="sm" color="gray.500">
                                                                재임기간: {priest.period}
                                                            </Text>
                                                        </Flex>
                                                    </Flex>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card
                                bg={cardBg}
                                borderRadius="xl"
                                boxShadow="md"
                                borderWidth="1px"
                                borderColor={cardBorder}
                            >
                                <CardBody p={8}>
                                    <VStack spacing={6} align="stretch">
                                        <Flex align="center" gap={3} justify="center" mb={4}>
                                            <Icon as={FaCross} w={7} h={7} color={accentColor} />
                                            <Heading as="h3" size="lg" color={accentColor}>
                                                역대 보좌 신부님
                                            </Heading>
                                        </Flex>
                                        <List spacing={4}>
                                            {assistantPriests.map((priest, index) => (
                                                <ListItem
                                                    key={index}
                                                    p={4}
                                                    borderRadius="lg"
                                                    borderWidth="1px"
                                                    borderColor={cardBorder}
                                                    _hover={{ borderColor: accentColor, bg: 'gray.50' }}
                                                    transition="all 0.2s"
                                                >
                                                    <Flex
                                                        justify="space-between"
                                                        align="center"
                                                        flexWrap="wrap"
                                                        gap={2}
                                                    >
                                                        <Flex direction="column" gap={1}>
                                                            <Flex align="center" gap={2}>
                                                                <Text fontSize="lg" fontWeight="medium">
                                                                    {priest.name} ({priest.baptismalName}) 신부님
                                                                </Text>
                                                                <Badge colorScheme="gray" variant="subtle">
                                                                    {priest.role}
                                                                </Badge>
                                                            </Flex>
                                                            <Text fontSize="sm" color="gray.500">
                                                                재임기간: {priest.period}
                                                            </Text>
                                                        </Flex>
                                                    </Flex>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </VStack>
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

export default AboutPage;
