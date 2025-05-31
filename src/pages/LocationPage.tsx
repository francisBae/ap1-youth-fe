import { Box } from '@chakra-ui/react';

const LocationPage = () => {
    return (
        <Box minH="100vh" position="relative" overflow="hidden">
            <Box position="absolute" top="0" left="0" right="0" height="100vh" overflow="auto">
                <iframe
                    src="https://www.ap1.or.kr/location.php"
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        display: 'block',
                        transform: 'translateY(-120px)',
                    }}
                    title="압구정1동 성당 찾아오시는 길"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
            </Box>
        </Box>
    );
};

export default LocationPage;
