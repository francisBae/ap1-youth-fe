import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    useDisclosure,
    VStack,
    Button,
    Stack,
    Image,
    useColorModeValue,
    Portal,
    Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import type { ReactNode } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaCommentDots } from 'react-icons/fa';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
    const dimBgColor = useColorModeValue('rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.6)');
    const accentColor = '#bfa16c';

    const menuItems = [
        // { label: '홈', href: '/' },
        { label: '본당 소개', href: '/about' },
        { label: '미사/성사 안내', href: '/mass' },
        // { label: '성사 안내', href: '/sacraments' },
        { label: '미사통상문', href: '/mass-ordinary' },
        { label: '주보', href: '/newsletter' },
        { label: '단체 소개', href: '/groups' },
        { label: '갤러리', href: '/gallery' },
        { label: '기도문', href: '/prayers' },
        { label: '오시는 길', href: '/location' },
    ];

    return (
        <Box minH="100vh">
            {/* 헤더 */}
            <Box
                as="header"
                position="fixed"
                w="100%"
                bg={bgColor}
                boxShadow="sm"
                zIndex={1600}
                borderBottom="1px"
                borderColor={borderColor}
            >
                <Container maxW="container.xl">
                    <Flex h="16" alignItems="center" justifyContent="space-between">
                        <Box as={RouterLink} to="/" display="flex" alignItems="center">
                            {/* 십자가 아이콘 */}
                            <Box as="span" mr={2} display="flex" alignItems="center">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="12" y="3" width="4" height="26" rx="2" fill="#bfa16c" />
                                    <rect x="3" y="12" width="22" height="4" rx="2" fill="#bfa16c" />
                                </svg>
                            </Box>
                            <Image src="/ap1logo.jpg" alt="압구정1동 성당 로고" h="12" objectFit="contain" />
                        </Box>

                        {/* 데스크톱 메뉴 */}
                        <Stack direction="row" spacing={8} display={{ base: 'none', md: 'flex' }}>
                            {menuItems.map((item) => {
                                const isActive = location.pathname === item.href;
                                return (
                                    <Button
                                        key={item.href}
                                        variant="ghost"
                                        color={isActive ? accentColor : '#6b4f27'}
                                        fontFamily="'Noto Sans KR', sans-serif"
                                        fontWeight={isActive ? '600' : '500'}
                                        letterSpacing="-0.02em"
                                        fontSize="md"
                                        as={RouterLink}
                                        to={item.href}
                                        bg="transparent"
                                        position="relative"
                                        _after={{
                                            content: '""',
                                            position: 'absolute',
                                            bottom: '-2px',
                                            left: '50%',
                                            transform: isActive ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
                                            width: '100%',
                                            height: '2px',
                                            bg: accentColor,
                                            transition: 'transform 0.2s ease-in-out',
                                        }}
                                        _hover={{
                                            color: accentColor,
                                            bg: 'transparent',
                                            textDecoration: 'none',
                                            transform: 'translateY(-1px)',
                                            _after: {
                                                transform: 'translateX(-50%) scaleX(1)',
                                            },
                                        }}
                                        transition="all 0.2s ease-in-out"
                                    >
                                        {item.label}
                                    </Button>
                                );
                            })}
                        </Stack>

                        {/* 모바일 메뉴 버튼 */}
                        <IconButton
                            display={{ base: 'flex', md: 'none' }}
                            aria-label="메뉴 열기"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            onClick={isOpen ? onClose : onOpen}
                            variant="ghost"
                            size="lg"
                        />
                    </Flex>
                </Container>
            </Box>

            {/* 모바일 메뉴 */}
            <Portal>
                {/* Dim 영역 */}
                <Box
                    position="fixed"
                    top="64px"
                    left="0"
                    right="0"
                    bottom="0"
                    bg={dimBgColor}
                    zIndex={1400}
                    opacity={isOpen ? 1 : 0}
                    transition="opacity 0.3s ease-in-out"
                    onClick={onClose}
                    pointerEvents={isOpen ? 'auto' : 'none'}
                    display={{ base: 'block', md: 'none' }}
                />

                {/* 메뉴 */}
                <Box
                    position="fixed"
                    top="64px"
                    left="0"
                    right="0"
                    bg={bgColor}
                    zIndex={1500}
                    transform={isOpen ? 'translateY(0)' : 'translateY(-100%)'}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    overflowY="auto"
                    maxH="calc(100vh - 64px)"
                    display={{ base: 'block', md: 'none' }}
                    willChange="transform"
                    boxShadow="lg"
                    style={{
                        pointerEvents: isOpen ? 'auto' : 'none',
                        opacity: isOpen ? 1 : 0,
                    }}
                >
                    <Container maxW="container.xl">
                        <Box pt={4} pb={4} bg={bgColor}>
                            {/* 메뉴 항목 */}
                            <VStack
                                spacing={0}
                                align="stretch"
                                divider={<Box borderBottom="1px" borderColor={borderColor} />}
                                opacity={isOpen ? 1 : 0}
                                transition="opacity 0.2s ease-in-out"
                                transitionDelay={isOpen ? '0.1s' : '0s'}
                            >
                                {menuItems.map((item) => {
                                    const isActive = location.pathname === item.href;
                                    return (
                                        <Button
                                            key={item.href}
                                            variant="ghost"
                                            color={isActive ? accentColor : '#6b4f27'}
                                            fontFamily="'Noto Sans KR', sans-serif"
                                            fontWeight={isActive ? '600' : '500'}
                                            letterSpacing="-0.02em"
                                            fontSize="md"
                                            as={RouterLink}
                                            to={item.href}
                                            onClick={onClose}
                                            justifyContent="center"
                                            px={4}
                                            py={5}
                                            borderRadius={0}
                                            bg={isActive ? `${accentColor}10` : 'transparent'}
                                            _hover={{
                                                color: accentColor,
                                                bg: `${accentColor}10`,
                                                textDecoration: 'none',
                                            }}
                                            transition="all 0.2s ease-in-out"
                                        >
                                            {item.label}
                                        </Button>
                                    );
                                })}
                            </VStack>
                        </Box>
                    </Container>
                </Box>
            </Portal>

            {/* 메인 컨텐츠 */}
            <Box as="main" pt="16">
                {children}
            </Box>

            {/* 푸터 */}
            <Box as="footer" bg="gray.100" py={12} mt="auto">
                <Container maxW="container.xl">
                    <VStack spacing={6}>
                        <Heading size="md" color="gray.700" fontWeight="bold">
                            천주교 서울대교구 압구정1동성당 청년부
                        </Heading>

                        <VStack spacing={2} color="gray.600" fontSize="sm">
                            <Text>서울시 강남구 압구정로 167길 27(신사동) 우06023</Text>
                            <Text>TEL: 02-541-9241 | FAX: 02-541-9243</Text>
                            <Text>ap1youngadults@gmail.com</Text>
                        </VStack>

                        {/* SNS 아이콘 */}
                        <Box display="flex" gap={6} justifyContent="center" pt={2}>
                            <a href="https://instagram.com/ap1churchyouth" target="_blank" rel="noopener noreferrer">
                                <FaInstagram
                                    size={28}
                                    color="#bfa16c"
                                    style={{ verticalAlign: 'middle' }}
                                    title="Instagram"
                                />
                            </a>
                            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                <FaYoutube
                                    size={28}
                                    color="#bfa16c"
                                    style={{ verticalAlign: 'middle' }}
                                    title="YouTube"
                                />
                            </a>
                            <a href="https://pf.kakao.com/" target="_blank" rel="noopener noreferrer">
                                <FaCommentDots
                                    size={28}
                                    color="#bfa16c"
                                    style={{ verticalAlign: 'middle' }}
                                    title="Kakao Channel"
                                />
                            </a>
                        </Box>

                        <Box
                            textAlign="center"
                            color="gray.500"
                            fontSize="sm"
                            pt={4}
                            borderTop="1px"
                            borderColor="gray.200"
                            w="100%"
                        >
                            © 2025 압구정1동 성당. All rights reserved.
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};

export default Layout;
