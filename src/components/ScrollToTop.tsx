import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const isFirstRender = useRef(true);

    useEffect(() => {
        // 첫 렌더링(새로고침) 시에는 스크롤 위치를 유지
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        // 라우트 변경 시에만 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
