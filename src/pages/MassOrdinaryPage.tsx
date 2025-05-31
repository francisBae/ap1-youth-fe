import { Box, Container, Heading, Text, VStack, HStack, Button, Icon } from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronUpIcon } from '@chakra-ui/icons';

const NAV_HEIGHT = 56; // 네비게이션 바 높이(px)

const sections = [
    {
        id: 'intro',
        title: '해설자 공지사항',
        content: `곧 미사가 시작되오니 가지고 계신 휴대폰이 울리지 않도록 주의하여 주시기 바랍니다.`,
    },
    {
        id: 'today',
        title: '오늘 전례',
        content: `신자 여러분, 한주동안 안녕하셨습니까? 오늘은 (      )입니다.
1) 매일미사책 오늘 전례
2) 미사 전 기도. (성부와 성자와 성령의 이름으로)
모두 일어서서 3) 미사 전 (부활) 삼종 기도를 바치겠습니다.

[삼종기도]
○ 주님의 천사가 마리아께 아뢰니
● 성령으로 잉태하셨나이다.
    <성모송>

○ "주님의 종이오니
● 그대로 제게 이루어지소서!"
    <성모송>

○ 이에 말씀이 사람이 되시어
● 저희 가운데 계시나이다.
    <성모송>

○ 천주의 성모님, 저희를 위하여 빌어주시어
● 그리스도께서 약속하신 영원한 생명을 얻게 하소서.

† 기도합시다.
   하느님, 천사의 아룀으로
   성자께서 사람이 되심을 알았으니
   성자의 수난과 십자가로
   부활의 영광에 이르는 은총을
   저희에게 내려 주소서.
   우리 주 그리스도를 통하여 비나이다.
◎ 아멘.`,
    },
    {
        id: 'prayers',
        title: '주요 기도',
        content: `[성모송]
○ 은총이 가득하신 마리아님, 기뻐하소서!
    주님께서 함께 계시니 여인 중에 복되시며
    태중의 아들 예수님 또한 복되시나이다.
● 천주의 성모 마리아님,
    이제와 저희 죽을 때에
    저희 죄인을 위하여 빌어주소서.
    아멘.

[부활삼종기도 (예수 부활 대축일 ~성령 강림 대축일)]
○ 하늘의 모후님, 기뻐하소서. 알렐루야.
● 태중에 모시던 아드님께서, 알렐루야.
○ 말씀하신 대로 부활하셨나이다. 알렐루야.
● 저희를 위하여 하느님께 빌어주소서. 알렐루야.
○ 동정 마리아님, 기뻐하시며 즐거워하소서. 알렐루야.
● 주님께서 참으로 부활하셨나이다. 알렐루야.
† 기도합시다.
 하느님, 성자 우리 주 예수 그리스도의 부활로
 온 세상을 기쁘게 하셨으니
 성자의 어머니 동정 마리아의 도움으로
 영생의 즐거움을 얻게 하소서.
 우리 주 그리스도를 통하여 비나이다.
◎ 아멘.`,
    },
    {
        id: 'start',
        title: '시작예식',
        content: `○ 입당 성가는 (      )번 입니다.

[입당송(또는 입장성가)]
[인사]
† 성부와 성자와 성령의 이름으로.
◎ 아멘.

† 사랑을 베푸시는 하느님 아버지와 은총을 내리시는 우리 주 예수 그리스도와 일치를 이루시는 성령께서 여러분과 함께.
◎ 또한 사제의 영과 함께.

[참회]
† 형제 여러분, 구원의 신비를 합당하게 거행하기 위하여 우리 죄를 반성합시다.
   <잠시 침묵한 다음 함께 죄를 고백한다>

† 전능하신 하느님과,
◎ 형제들에게 고백하오니, 생각과 말과 행위로 죄를 많이 지었으며,
자주 의무를 소홀히 하였나이다.
(가슴을 세 번 치면서,)
제 탓이요, 제 탓이요, 저의 큰 탓이옵니다.
그러므로 간절히 바라오니, 평생 동정이신 성모 마리아와 모든 천사와 성인과 형제들은 저를 위하여 하느님께 빌어주소서

사제는 사죄경을 외운다.
† 전능하신 하느님, 저희에게 자비를 베푸시어, 죄를 용서하시고 영원한 생명으로 이끌어 주소서.
◎ 아멘.

[자비송 (♫ 372)]
† 주님 자비를 베푸소서.
◎ 주님 자비를 베푸소서.
† 그리스도님 자비를 베푸소서.
◎ 그리스도님 자비를 베푸소서.
† 주님 자비를 베푸소서.
◎ 주님 자비를 베푸소서.

[대영광송 (♫ 373)]
† 하늘높은 데서는 하느님께 영광
○ 땅에서는 주님께서 사랑 하시는 사람들에게 평화.
● 주 하느님, 하늘의 임금님
○ 전능하신 아버지 하느님,
● 주님을 기리나이다, 찬미하나이다.
○ 주님을 흠숭하나이다. 찬양하나이다.
● 주님 영광 크시오니 감사하나이다.
○ 외아들 주예수 그리스도님
● 주 하느님, 성부의 아드님
○ 하느님의 어린양,
● 세상의 죄를 없애시는 주님, 저희에게 자비를 베푸소서.
○ 세상의 죄를 없애시는 주님, 저희의 기도를 들어주소서.
● 성부 오른편에 앉아계신 주님, 저희에게 자비를 베푸소서.
○ 홀로 거룩하시고, 홀로 주님이시며, 홀로 높으신 예수 그리스도님,
◎ 성령과 함께 아버지 하느님의 영광 안에 계시나이다. 아멘.

[본기도]
† 기도합시다… 비나이다/다스리시나이다.
◎ 아멘`,
    },
    {
        id: 'liturgy',
        title: '말씀전례',
        content: `○ 모두 앉으십시오.
말씀 전례가 시작됩니다.

[제 1독서]
"주님의 말씀입니다."
◎ 하느님 감사합니다.

[화답송]
<화답송은 1독서자가 낭독하고 해설자는 응송한다>

[제 2독서]
"주님의 말씀입니다."
◎ 하느님 감사합니다.

○ 모두 일어서십시오.

[복음환호송 (♫ 394)]
(사순 시기에는 알렐루야를 외치지 않는다.)

<복음환호송은 성가대가 있는 경우 성가대가 진행, 아닌 경우 해설이 낭독한다.>

[복음]
† 주님께서 여러분과 함께.
◎ 또한 사제의 영과 함께.
† (마태오, 마르코, 루카, 요한)가 전한 거룩한 복음입니다.
◎ 주님, 영광 받으소서. (이마, 입술, 가슴에 소십자)

복음 후
† 주님의 말씀입니다.
◎ 그리스도님, 찬미합니다.

○ 모두 앉으십시오.

[강론]
강론 끝, 묵상 시작
○ (신부님 기립 시) 모두 일어서십시오.

[신앙고백]
† 전능하신 천주 성부,
◎ 천지의 창조주를 저는 믿나이다.

그 외아들 우리 주 예수 그리스도님
(머리를 숙이며) 성령으로 인하여 동정 마리아께 잉태되어 나시고,
본시오 빌라도 통치 아래서 고난을 받으시고, 십자가에 못 박혀 돌아가시고 묻히셨으며, 저승에 가시어 사흗날에 죽은 이들 가운데서 부활하시고, 하늘에 올라 전능하신 천주 성부 오른편에 앉으시며, 그리로부터 산 이와 죽은 이를 심판하러 오시리라 믿나이다.
성령을 믿으며, 거룩하고 보편된 교회와 모든 성인의 통공을 믿으며, 죄의 용서와 육신의 부활을 믿으며, 영원한 삶을 믿나이다. 아멘.

[보편지향기도 (♫ 403)]
◎ 주님, 저희의 기도를 들어주소서.

○ (신부님 기도 후) 아멘. 모두 앉으십시오.`,
    },
    {
        id: 'offertory',
        title: '성찬전례',
        content: `○ 지금부터 성찬 전례가 시작됩니다.

[제대와 예물 준비]
<봉헌성가를 입력한다>
(2차헌금 없는 경우) : 봉헌 성가는 (     )번 입니다.
(2차헌금 있는 경우) : 오늘은 OOO을 위한 2차 헌금이 있습니다. 봉헌 성가는 (     )번 입니다.

[예물 준비 기도]
† ...... 형제 여러분, 우리가 바치는 이 제사를 전능하신 하느님 아버지께서 기꺼이 받아 주시도록 기도합시다.
◎ 사제의 손으로 바치는 이 제사가 주님의 이름에는 찬미와 영광이 되고 저희와 온 교회에는 도움이 되게 하소서.

[예물 기도]
† ...... 비나이다. (또는) ...... 다스리시나이다.
◎ 아멘.`,
    },
    {
        id: 'eucharistic',
        title: '감사 기도',
        content: `[감사송]
† 주님께서 여러분과 함께.
◎ 또한 사제의 영과 함께.
† 마음을 드높이!
◎ 주님께 올립니다.
† 우리 주 하느님께 감사합시다.
◎ 마땅하고 옳은 일입니다.
<사제가 감사송을 바친다>

[거룩하시도다 (♫ 374)]
◎ ♫ 거룩하시도다! 거룩하시도다! 거룩하시도다!
온 누리의 주 하느님! 하늘과 땅에 가득찬 그 영광! 높은 데서 호산나!
주님의 이름으로 오시는 분, 찬미 받으소서. 높은 데서 호산나!

[성령청원: 축성기원]
<아래 밑줄 부분에서 사제가 성령 축원 시 타종한다>
† 거룩하신 아버지, 아버지께서는 모든 거룩함의 샘이시옵니다. 🔔 간구하오니 성령의 힘으로 이 예물을 거룩하게 하시어 우리 주 예수 그리스도의 몸과 † 피가 되게 하소서.

[성찬 제정과 축성문]
† 스스로 원하신 수난이 다가오자 예수께서는 빵을 들고 감사를 드리신 다음, 쪼개어 제자들에게 주시며 말씀하셨나이다.

$"너희는 모두 이것을 받아 먹어라.\n이는 너희를 위하여 내어줄 내 몸이다."$

저녁을 잡수시고 같은 모양으로 잔을 들어 다시 감사를 드리신 다음, 제자들에게 주시며 말씀하셨나이다.

$"너희는 모두 이것을 받아 마셔라.\n이는 새롭고 영원한 계약을 맺는\n내 피의 잔이니, 죄를 사하여 주려고,\n너희와 많은 이를 위하여 흘릴 피다.\n너희는 나를 기억하여 이를 행하여라."$

[신앙의 신비]
† 신앙의 신비여! (♫ 410)
◎ 주님께서 오실 때까지 주님의 죽음을 전하며, 부활을 선포하나이다.

[성령청원: 일치기원]
† 간절히 청하오니 저희가 그리스도의 몸과 피를 받아 모시어,
성령으로 모두 한 몸을 이루게 하소서.
† 주님, 온 세상에 널리 퍼져 있는 교회를 생각하시어 교황 (   )와 저희 주교 (   )와 모든 성직자와 더불어 사랑의 교회를 이루게 하소서.

† (연미사에서) 이 세상에서 불러가신 교우 (   )를 생각하소서.
그는 세례를 통하여 성자의 죽음에 동참하였으니, 그 부활도 함께 누리게 하소서.
† 부활의 희망 속에 고이 잠든 교우들과 세상을 떠난 다른 이들도 모두 생각하시어, 그들이 주님의 빛나는 얼굴을 뵈옵게 하소서. 저희에게도 자비를 베푸시어, 영원으로부터 주님의 사랑을 받는 하느님의 어머니 복되신 동정 마리아와 그의 베필이신 성 요셉과 복된 사도들과 모든 성인들과 함께 영원한 삶을 누리며, 성자 예수 그리스도를 통하여 아버지를 찬양하게 하소서.

[마침 영광송]
† 그리스도를 통하여, 그리스도와 함께, 그리스도 안에서, 성령으로 하나 되어, 전능하신 천주 성부, 모든 영예와 영광을 영원히 받으소서.
◎ 아멘. (♫ 419)`,
    },
    {
        id: 'communion',
        title: '영성체 예식',
        content: `[주님의 기도 (♫ 430)]
† 하느님의 자녀 되어 구세주의 분부대로 삼가 아뢰오니.
◎ 하늘에 계신 우리 아버지, 아버지의 이름이 거룩히 빛나시며, 아버지의 나라가 오시며, 아버지의 뜻이 하늘에서와 같이 땅에서도 이루어지소서.
오늘 저희에게 일용할 양식을 주시고, 저희에게 잘못한 이를 저희가 용서하오니 저희 죄를 용서하시고, 저희를 유혹에 빠지지 않게 하시고, 악에서 구하소서.

† 주님, 저희를 모든 악에서 구하시고 한평생 평화롭게 하소서.
주님의 자비로 저희를 언제나 죄에서 구원하시고 모든 시련에서 보호하시어 복된 희망을 품고 구세주 예수 그리스도의 재림을 기다리게 하소서.

◎ 주님께 나라와 권능과 영광이 영원히 있나이다. (♫ 441)

[평화 예식]
† 주 예수 그리스도님, 일찍이 사도들에게 말씀하시기를
"너희에게 평화를 두고 가며, 내 평화를 주노라" 하셨으니, 저희 죄를 헤아리지 마시고, 교회의 믿음을 보시어, 주님의 뜻대로 교회를 평화롭게 하시고 하나되게 하소서.
주님께서는 영원히 살아계시며 다스리시나이다.
◎ 아멘.
† 주님의 평화가 항상 여러분과 함께
◎ 또한 사제의 영과 함께.

† 평화의 인사를 나누십시오.
◎ 평화를 빕니다.
<사제가 독서자와 인사 후 해설자와 인사한다>

[하느님의 어린양 (♫ 375)]
<사제가 성체를 쪼갤 때 하느님의 어린양을 바친다>

◎ 하느님의 어린양, 세상의 죄를 없애시는 주님,
자비를 베푸소서.
하느님의 어린양, 세상의 죄를 없애시는 주님,
자비를 베푸소서.
하느님의 어린양, 세상의 죄를 없애시는 주님,
평화를 주소서.

† 주 예수 그리스도님, 주님의 몸과 피를 받아 모심이 제게 심판과 책벌이 되지 않게 하시고 제 영혼과 육신을 자비로이 낫게 하시며 지켜주소서.

[영성체]
† 보라! 하느님의 어린양, 세상의 죄를 없애시는 분이시니 이 성찬에 초대받은 이는 복되도다.
◎ 주님, 제 안에 주님을 모시기에 합당치 않사오나 한 말씀만 하소서. 제 영혼이 곧 나으리이다.

○ (사제가 성작에 입을 대실 때) 영성체송
모두 앉으십시오.
성체 성가는 (    )번 입니다.
또는
성체 성가는 반주로 대체됩니다.

† 그리스도의 몸.
◎ 아멘.

† 주님, 저희가 모신 성체를 깨끗한 마음으로 받들게 하시고, 현세의 이 선물이 영원한 생명의 약이 되게 하소서.

[영성체 후 기도]
† 기도합시다. …비나이다. (또는) …다스리시나이다.
◎ 아멘.`,
    },
    {
        id: 'ending',
        title: '마침예식',
        content: `마침 예식 (공지 전하실 때 파견성가 입력)

[강복]
† 주님께서 여러분과 함께.
◎ 또한 사제의 영과 함께.
† 전능하신 천주 성부와 † 성자와 성령께서는 여기 모인 모든 이에게 강복하소서.
◎ 아멘.

[파견]
† 미사가 끝났으니 가서 복음을 전합시다.
◎ 하느님 감사합니다.

○ 파견 성가는 (   )번 입니다.

○ 마침기도로 영광송 바치겠습니다.
영광이 성부와 성자와 성령께,
처음과 같이 이제와 항상 영원히
아멘

성부와 성자와 성령의 이름으로 아멘.
미사가 끝났습니다. 안녕히 가십시오.`,
    },
];

const navItems = [
    { id: 'start', label: '시작예식' },
    { id: 'liturgy', label: '말씀전례' },
    { id: 'offertory', label: '성찬전례' },
    // { id: 'eucharistic', label: '감사 기도' },
    // { id: 'communion', label: '영성체 예식' },
    { id: 'ending', label: '마침예식' },
];

const MassOrdinaryPage = () => {
    const [showTop, setShowTop] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('start');
    const [isScrolling, setIsScrolling] = useState(false);
    const [targetSection, setTargetSection] = useState<string | null>(null);

    // 각 섹션의 ref를 저장
    const startRef = useRef<HTMLDivElement>(null);
    const liturgyRef = useRef<HTMLDivElement>(null);
    const offertoryRef = useRef<HTMLDivElement>(null);
    const eucharisticRef = useRef<HTMLDivElement>(null);
    const communionRef = useRef<HTMLDivElement>(null);
    const endingRef = useRef<HTMLDivElement>(null);
    const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
        start: startRef,
        liturgy: liturgyRef,
        offertory: offertoryRef,
        eucharistic: eucharisticRef,
        communion: communionRef,
        ending: endingRef,
    };

    // 부드러운 스크롤 이동 함수 (네비게이션 바 높이만큼 보정)
    const handleNavClick = (id: string) => {
        const ref = sectionRefs[id];
        if (ref && ref.current) {
            setIsScrolling(true);
            setTargetSection(id);
            const y = ref.current.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(id);

            // 스크롤이 끝난 후 상태 초기화
            setTimeout(() => {
                setIsScrolling(false);
                setTargetSection(null);
            }, 1000); // 스크롤 애니메이션 시간보다 약간 더 긴 시간 설정
        }
    };

    useEffect(() => {
        const onScroll = () => {
            setShowTop(window.scrollY > 200);

            // 스크롤 중에는 섹션 감지 로직을 실행하지 않음
            if (isScrolling && targetSection) {
                setActiveSection(targetSection);
                return;
            }

            // 현재 보이는 섹션 찾기
            const scrollPosition = window.scrollY + NAV_HEIGHT + 100;
            let currentSection = 'start';

            // 페이지 하단에 도달했는지 확인
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

            // 각 섹션의 위치를 확인하여 현재 보이는 섹션 찾기
            Object.entries(sectionRefs).forEach(([id, ref]) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const sectionTop = rect.top + window.scrollY;
                    const sectionBottom = sectionTop + rect.height;

                    // 현재 스크롤 위치가 섹션의 중간 지점을 지났을 때 해당 섹션을 활성화
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        currentSection = id;
                    }
                }
            });

            // 페이지 하단에 도달했다면 '마침예식' 섹션을 활성화
            if (isAtBottom) {
                currentSection = 'ending';
            }

            setActiveSection(currentSection);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [isScrolling, targetSection]);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderContent = (content: string) => {
        // 예수님 말씀 부분을 먼저 처리
        const processQuote = (text: string) => {
            // 여러 줄을 포함할 수 있도록 [\s\S]*? 사용
            const quoteRegex = /\$"([\s\S]*?)"\$/g;
            const parts = [];
            let lastIndex = 0;
            let match;

            while ((match = quoteRegex.exec(text)) !== null) {
                // 이전 텍스트 추가
                if (match.index > lastIndex) {
                    parts.push({
                        type: 'text',
                        content: text.slice(lastIndex, match.index),
                    });
                }
                // 예수님 말씀 부분 추가
                parts.push({
                    type: 'quote',
                    content: match[1], // 따옴표 안의 내용만 추출
                });
                lastIndex = match.index + match[0].length;
            }
            // 남은 텍스트 추가
            if (lastIndex < text.length) {
                parts.push({
                    type: 'text',
                    content: text.slice(lastIndex),
                });
            }

            return parts;
        };

        // 각 부분을 처리
        const processedParts = processQuote(content);
        return processedParts.map((part, index) => {
            if (part.type === 'quote') {
                return (
                    <Box
                        key={index}
                        my={4}
                        p={4}
                        bg="rgba(191, 161, 108, 0.05)"
                        borderRadius="md"
                        border="1px solid"
                        borderColor="rgba(191, 161, 108, 0.2)"
                    >
                        <Text
                            as="div"
                            textAlign="center"
                            color="#8d6a2b"
                            fontWeight="medium"
                            fontSize="md"
                            fontStyle="italic"
                            whiteSpace="pre-line"
                            lineHeight="1.8"
                        >
                            {part.content}
                        </Text>
                    </Box>
                );
            }

            // 일반 텍스트 처리 (기존 로직)
            const textParts = part.content.split(/(\[.*?\]|\(\s*♫\s*\d+\s*\))/);
            return textParts.map((textPart, textIndex) => {
                // 제목 처리
                if (textPart.startsWith('[') && textPart.endsWith(']')) {
                    const titleContent = textPart.slice(1, -1);
                    const hasHymnNumber = titleContent.includes('(♫');
                    if (hasHymnNumber) {
                        const [title, hymnPart] = titleContent.split('(♫');
                        const number = hymnPart.replace(/[^\d]/g, '');
                        return (
                            <Box key={`${index}-${textIndex}`} mb={-4} mt={2}>
                                <Text as="span" color="#C71585" fontWeight="bold" display="inline-block" fontSize="md">
                                    {title.trim()}
                                </Text>
                                <Text
                                    as="span"
                                    display="inline-flex"
                                    alignItems="center"
                                    gap={0.5}
                                    bg="rgba(191, 161, 108, 0.08)"
                                    px={2}
                                    py={0.5}
                                    borderRadius="full"
                                    fontSize="sm"
                                    fontWeight="medium"
                                    color="#8d6a2b"
                                    border="1px solid"
                                    borderColor="rgba(191, 161, 108, 0.2)"
                                    _hover={{
                                        bg: 'rgba(191, 161, 108, 0.12)',
                                        borderColor: 'rgba(191, 161, 108, 0.3)',
                                    }}
                                    transition="all 0.2s"
                                    ml={2}
                                >
                                    <Text as="span" fontSize="md" color="#bfa16c">
                                        ♫
                                    </Text>
                                    <Text as="span">{number}</Text>
                                </Text>
                            </Box>
                        );
                    }
                    return (
                        <Text
                            key={`${index}-${textIndex}`}
                            as="span"
                            color="#C71585"
                            fontWeight="bold"
                            display="block"
                            mb={-4}
                            mt={2}
                            fontSize="md"
                        >
                            {titleContent}
                        </Text>
                    );
                }
                // 성가번호 처리
                if (textPart.startsWith('(♫') && textPart.endsWith(')')) {
                    const number = textPart.replace(/[^\d]/g, '');
                    return (
                        <Text
                            key={`${index}-${textIndex}`}
                            as="span"
                            display="inline-flex"
                            alignItems="center"
                            gap={0.5}
                            bg="rgba(191, 161, 108, 0.08)"
                            px={2}
                            py={0.5}
                            borderRadius="full"
                            fontSize="sm"
                            fontWeight="medium"
                            color="#8d6a2b"
                            border="1px solid"
                            borderColor="rgba(191, 161, 108, 0.2)"
                            _hover={{
                                bg: 'rgba(191, 161, 108, 0.12)',
                                borderColor: 'rgba(191, 161, 108, 0.3)',
                            }}
                            transition="all 0.2s"
                        >
                            <Text as="span" fontSize="md" color="#bfa16c">
                                ♫
                            </Text>
                            <Text as="span">{number}</Text>
                        </Text>
                    );
                }
                // 일반 텍스트
                return (
                    <Text key={`${index}-${textIndex}`} as="span" lineHeight="2">
                        {textPart}
                    </Text>
                );
            });
        });
    };

    return (
        <Box bg="#f8f6f2" minH="100vh" fontFamily="'Noto Sans KR', sans-serif">
            {/* 상단 고정 내비게이션 바 */}
            <Box
                position="sticky"
                top="64px"
                zIndex={10}
                bg="#f8f6f2"
                boxShadow="sm"
                py={4}
                mb={4}
                borderBottom="1px solid"
                borderColor="gray.200"
                style={{ scrollBehavior: 'smooth', minHeight: NAV_HEIGHT }}
            >
                <Container maxW="container.md">
                    <HStack spacing={8} justify="center">
                        {navItems.map((item) => (
                            <Button
                                key={item.id}
                                variant="ghost"
                                color={activeSection === item.id ? '#8d6a2b' : '#bfa16c'}
                                fontWeight="bold"
                                fontSize="md"
                                onClick={() => handleNavClick(item.id)}
                                position="relative"
                                _after={{
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-4px',
                                    left: '0',
                                    width: '100%',
                                    height: '2px',
                                    bg: activeSection === item.id ? '#8d6a2b' : 'transparent',
                                    transition: 'all 0.2s ease-in-out',
                                }}
                                _hover={{
                                    color: '#8d6a2b',
                                    bg: 'transparent',
                                    boxShadow: 'none',
                                    outline: 'none',
                                    _after: {
                                        bg: '#bfa16c',
                                    },
                                }}
                                _active={{
                                    color: '#8d6a2b',
                                    bg: 'transparent',
                                    boxShadow: 'none',
                                    outline: 'none',
                                    _after: {
                                        bg: '#8d6a2b',
                                    },
                                }}
                                _focus={{
                                    boxShadow: 'none',
                                    outline: 'none',
                                }}
                                _focusVisible={{
                                    boxShadow: 'none',
                                    outline: 'none',
                                }}
                                sx={{
                                    '&:focus': {
                                        boxShadow: 'none',
                                        outline: 'none',
                                    },
                                    '&:focus-visible': {
                                        boxShadow: 'none',
                                        outline: 'none',
                                    },
                                    '&:hover': {
                                        boxShadow: 'none',
                                        outline: 'none',
                                    },
                                }}
                                fontFamily="'Noto Sans KR', sans-serif"
                                transition="all 0.2s ease-in-out"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </HStack>
                </Container>
            </Box>

            <Container maxW="container.md" py={8}>
                <Heading
                    as="h1"
                    size="lg"
                    mb={8}
                    textAlign="center"
                    fontFamily="'Noto Sans KR', sans-serif"
                    fontWeight="bold"
                >
                    압구정1동 청년미사 미사통상문
                </Heading>
                <VStack spacing={8} align="stretch">
                    {sections.map((section) => (
                        <Box
                            key={section.id}
                            ref={sectionRefs[section.id]}
                            id={section.id}
                            bg="white"
                            p={6}
                            borderRadius="xl"
                            boxShadow="md"
                        >
                            <Heading
                                as="h2"
                                size="md"
                                mb={2}
                                color="gray.800"
                                fontFamily="'Noto Sans KR', sans-serif"
                                fontWeight="bold"
                            >
                                {section.title}
                                {section.id === 'today' && (
                                    <Button
                                        as="a"
                                        href="https://maria.catholic.or.kr/mi_pr/missa/missa.asp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="sm"
                                        ml={3}
                                        bg="#bfa16c"
                                        color="white"
                                        borderRadius="full"
                                        _hover={{ bg: '#8d6a2b' }}
                                        _active={{ bg: '#8d6a2b' }}
                                        fontFamily="'Noto Sans KR', sans-serif"
                                    >
                                        오늘 전례 바로가기
                                    </Button>
                                )}
                            </Heading>
                            <Text
                                color="gray.600"
                                whiteSpace="pre-line"
                                lineHeight="2"
                                fontFamily="'Noto Sans KR', sans-serif"
                                fontSize="md"
                            >
                                {renderContent(section.content)}
                            </Text>
                        </Box>
                    ))}
                </VStack>
            </Container>

            {/* Top 버튼 */}
            {showTop && (
                <Button
                    position="fixed"
                    bottom={{ base: 6, md: 10 }}
                    right={{ base: 6, md: 10 }}
                    zIndex={20}
                    size="lg"
                    borderRadius="full"
                    bg="#bfa16c"
                    color="white"
                    boxShadow="lg"
                    _hover={{ bg: '#8d6a2b' }}
                    _active={{ bg: '#8d6a2b' }}
                    onClick={handleScrollTop}
                    aria-label="맨 위로"
                    fontFamily="'Noto Sans KR', sans-serif"
                >
                    <Icon as={ChevronUpIcon} w={7} h={7} />
                </Button>
            )}
        </Box>
    );
};

export default MassOrdinaryPage;
