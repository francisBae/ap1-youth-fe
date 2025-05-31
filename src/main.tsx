import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import App from './App.tsx';

// Vite preload 에러 처리
window.addEventListener('error', (event) => {
    if (event.message.includes('Failed to fetch dynamically imported module')) {
        console.error('모듈 로딩 실패:', event);
        // 1초 후 페이지 새로고침
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
});

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.800',
            },
        },
    },
    fonts: {
        heading: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
        body: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);
