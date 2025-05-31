import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { FaBaby, FaHeart, FaHandHoldingMedical, FaDove } from 'react-icons/fa';

const sacraments = [
    {
        icon: FaBaby,
        title: '세례성사',
        desc: '신앙의 첫걸음, 세례를 통해 하느님의 자녀가 됩니다. 세례 신청은 사무실로 문의해 주세요.',
    },
    {
        icon: FaDove,
        title: '견진성사',
        desc: '성령의 은총을 받는 견진성사. 연 1회 교구 일정에 따라 진행됩니다.',
    },
    {
        icon: FaHeart,
        title: '혼인성사',
        desc: '하느님 안에서 부부로 맺어지는 혼인성사. 예비신자 및 혼인 상담은 사무실로 문의해 주세요.',
    },
    {
        icon: FaHandHoldingMedical,
        title: '병자성사',
        desc: '아픈 신자와 노약자를 위한 성사. 병자성사 요청은 본당 사무실로 연락해 주세요.',
    },
];

const SacramentsPage = () => (
    <Container maxW="container.md" py={12}>
        <Heading as="h1" size="xl" mb={8} textAlign="center">
            성사 안내
        </Heading>
        <VStack spacing={8} align="stretch">
            {sacraments.map((s, idx) => (
                <Box key={idx} bg="white" p={6} borderRadius="xl" boxShadow="md">
                    <Heading as="h2" size="md" mb={2} color="gray.800" display="flex" alignItems="center">
                        <Box as={s.icon} color="#bfa16c" mr={3} fontSize="2xl" />
                        {s.title}
                    </Heading>
                    <Text color="gray.600">{s.desc}</Text>
                </Box>
            ))}
        </VStack>
    </Container>
);

export default SacramentsPage;
