import { Box } from '@chakra-ui/react';

const PrayersPage = () => {
    return (
        <Box minH="100vh" position="relative">
            <Box position="absolute" top="0" left="0" right="0" bottom="0" overflow="hidden">
                <iframe
                    src="http://www.ap1.or.kr/prayer.php"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        display: 'block',
                        transform: 'translateY(-120px)',
                    }}
                    title="기도문"
                />
            </Box>
        </Box>
    );
};

export default PrayersPage;
