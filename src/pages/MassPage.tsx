import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Icon,
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react';
import { FaChurch, FaClock, FaPray, FaCross, FaBaby, FaHandHoldingHeart, FaStar } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

const weekdayMass = [
    { day: '월~금', time: '오전 6시' },
    { day: '화~토', time: '오전 10시' },
];

const sundayMass = [
    { day: '토요일', time: '오후 4시 30분', target: '초중고' },
    { day: '토요일', time: '오후 6시', target: '일반' },
    { day: '일요일', time: '오전 6시 30분', target: '일반' },
    { day: '일요일', time: '오전 9시', target: '일반' },
    { day: '일요일', time: '오전 11시', target: '교중' },
    { day: '일요일', time: '오후 6시', target: '청년', isHighlighted: true },
];

const specialLiturgy = [
    {
        title: '성시간',
        time: '매월 첫 목요일 오후 7시 30분',
        location: '3층 성전',
        icon: FaCross,
    },
];

const sacraments = [
    {
        title: '고해성사',
        time: '미사 20분 전',
        icon: FaPray,
    },
    {
        title: '봉성체',
        time: '매월 첫 목요일 오후 1시',
        location: '성당 출발',
        note: '사무실로 접수',
        icon: FaHandHoldingHeart,
    },
    {
        title: '유아세례',
        time: '매월 첫 주일 오후 5시',
        icon: FaBaby,
    },
];

const MassPage = () => {
    return (
        <Container maxW="container.md" py={12}>
            <Heading as="h1" size="xl" mb={8} textAlign="center">
                미사/성사 안내
            </Heading>
            <VStack spacing={10} align="stretch">
                {/* 평일 미사 시간표 */}
                <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <Heading as="h2" size="md" mb={4} color="gray.800">
                        <Icon as={FaClock} mr={2} color="#bfa16c" /> 평일 미사 시간표
                    </Heading>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>요일</Th>
                                <Th>시간</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {weekdayMass.map((row, idx) => (
                                <Tr key={idx}>
                                    <Td>{row.day}</Td>
                                    <Td>{row.time}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>

                {/* 주일 미사 시간표 */}
                <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <Heading as="h2" size="md" mb={4} color="gray.800">
                        <Icon as={FaChurch} mr={2} color="#bfa16c" /> 주일 미사 시간표
                    </Heading>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>요일</Th>
                                <Th>시간</Th>
                                <Th>대상</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {sundayMass.map((row, idx) => (
                                <Tr
                                    key={idx}
                                    bg={row.isHighlighted ? '#fdf6e9' : undefined}
                                    _hover={{ bg: row.isHighlighted ? '#f9e9d2' : 'gray.50' }}
                                >
                                    <Td
                                        fontWeight={row.isHighlighted ? 'bold' : 'normal'}
                                        color={row.isHighlighted ? '#bfa16c' : undefined}
                                    >
                                        {row.day}
                                    </Td>
                                    <Td
                                        fontWeight={row.isHighlighted ? 'bold' : 'normal'}
                                        color={row.isHighlighted ? '#bfa16c' : undefined}
                                    >
                                        {row.time}
                                    </Td>
                                    <Td
                                        fontWeight={row.isHighlighted ? 'bold' : 'normal'}
                                        color={row.isHighlighted ? '#bfa16c' : undefined}
                                    >
                                        {row.target}
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>

                {/* 특별 전례 */}
                <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <Heading as="h2" size="md" mb={4} color="gray.800">
                        <Icon as={FaStar} mr={2} color="#bfa16c" /> 특별 전례
                    </Heading>
                    <VStack spacing={6} align="stretch">
                        {specialLiturgy.map((liturgy, idx) => (
                            <Box key={idx} borderLeft="4px solid" borderColor="#bfa16c" pl={4}>
                                <Heading as="h3" size="sm" mb={2} color="gray.800">
                                    <Icon as={liturgy.icon} mr={2} color="#bfa16c" />
                                    {liturgy.title}
                                </Heading>
                                <Text mb={1}>시간: {liturgy.time}</Text>
                                {liturgy.location && <Text mb={1}>장소: {liturgy.location}</Text>}
                            </Box>
                        ))}
                    </VStack>
                </Box>

                {/* 성사 안내 */}
                <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <Heading as="h2" size="md" mb={4} color="gray.800">
                        <Icon as={FaPray} mr={2} color="#bfa16c" /> 성사 안내
                    </Heading>
                    <VStack spacing={6} align="stretch">
                        {sacraments.map((sacrament, idx) => (
                            <Box key={idx} borderLeft="4px solid" borderColor="#bfa16c" pl={4}>
                                <Heading as="h3" size="sm" mb={2} color="gray.800">
                                    <Icon as={sacrament.icon} mr={2} color="#bfa16c" />
                                    {sacrament.title}
                                </Heading>
                                <Text mb={1}>시간: {sacrament.time}</Text>
                                {sacrament.location && <Text mb={1}>장소: {sacrament.location}</Text>}
                                {sacrament.note && (
                                    <Text mb={1} color="gray.600">
                                        {sacrament.note}
                                    </Text>
                                )}

                                {sacrament.title === '유아세례' && (
                                    <Box mt={2} bg="gray.50" p={4} borderRadius="md">
                                        <Text fontWeight="bold" mb={2}>
                                            신청 안내:
                                        </Text>
                                        <List spacing={2}>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color="#bfa16c" />
                                                본당 사무실에서 '유아세례 신청서' 작성
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color="#bfa16c" />
                                                부모님의 세례/교적사항, 대부모의 견진여부 확인 및 서류 제출
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color="#bfa16c" />
                                                유아세례 전 금요일까지 완료
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color="#bfa16c" />
                                                필수 기재사항: 유아세례자의 세례명/주민번호, 대부모의
                                                성명/주민번호/연락처
                                            </ListItem>
                                            <ListItem>
                                                <ListIcon as={MdCheckCircle} color="#bfa16c" />
                                                타본당 신자의 경우 교적사본 제출 필요
                                            </ListItem>
                                        </List>
                                        <Text mt={2} color="gray.600">
                                            ※ 유아세례 성사예물은 정성껏 준비하여 본당 사무실에 미리 납부해 주세요.
                                        </Text>
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default MassPage;
