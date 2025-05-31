import { Box, Container, Heading, Text, VStack, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle, FaUserTie } from 'react-icons/fa';

const UnionPage = () => (
    <Container maxW="container.md" py={12}>
        <Heading as="h1" size="xl" mb={6}>
            연합회
        </Heading>
        <Text mb={6} color="gray.700">
            연합회는 본당의 다양한 활동을 이끌어가는 중심 단체로, 신자들의 친목과 봉사, 신앙 성장을 위해 힘쓰고
            있습니다.
        </Text>
        <VStack align="start" spacing={4} mb={8}>
            <Heading as="h2" size="md">
                주요 활동
            </Heading>
            <List spacing={2} pl={2}>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" /> 본당 주요 행사 기획 및 진행
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" /> 신자 친목 도모 및 소모임 지원
                </ListItem>
                <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" /> 봉사 활동 주최 및 참여
                </ListItem>
            </List>
        </VStack>
        <Box mb={8}>
            <Heading as="h2" size="md" mb={2}>
                담당자
            </Heading>
            <Text>
                <FaUserTie style={{ display: 'inline', marginRight: 8 }} />
                회장: 홍길동 (010-1234-5678)
            </Text>
        </Box>
        <Box>
            <Heading as="h2" size="md" mb={2}>
                가입 안내
            </Heading>
            <Text>연합회 활동에 관심 있는 신자분은 언제든 사무실로 문의해 주세요.</Text>
        </Box>
    </Container>
);

export default UnionPage;
