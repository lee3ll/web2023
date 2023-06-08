import React from 'react';

const introText = [
    {
        iconClass: 'icon-bg2',
        title: "역사",
        desc: '"바람계곡의 나우시카"를 제작한 애니메이션 제작 회사인 "톱 크래프트"를 모체로, 타카하타 이사오와 미야자키 하야오의 애니메이션 영화 제작을 목적으로 1985년 6월 15일에 도쿠마 서점의 출자로 주식회사로서 설립되었다. 사장은 도쿠마 서점의 사장인 도쿠마 야스요시가 취임하였으며, 스튜디오의 실질적인 책임자는 톱 크래프트의 대표이사였던 상무 하라 도루였다. 처음에는 작품마다 스탭을 모집하여 완성 후 해산하는 방식을 채택하였으며, 애니메이터의 급료도 수당제였으나, 이후 인재 육성의 차원에서 애니메이터의 급료를 고정 급료제로 하는 등, 고품질의 안정적인 작품 제작에 거점을 두게 되었다.'    
    },
    {
        iconClass: 'icon-bg3',
        title: "창립자",
        desc: '스튜디오 지브리는 1985년 미야자키 하야오에 의해 설립되었다. 그는 1941년 도쿄도 분쿄구 아케노보초에서 태어났다. 이후 1978년 "미래 소년 코난"을 연출해 애니메이션 팬들과 평론가들 사이에서 엄청난 반향을 일으켰으며 1979년에는 첫 극장용 "루팡 3세 카리오스트로 성"이 개봉, 애니메이션 감독으로 데뷔했다. 그가 원래 만화로 연재했던 "바람 계곡의 나우시카를 영화화 하여 1984년 상업적으로 큰 흥행을 거두었다. 이를 기반으로 애니메이션 제작소 스튜디오 지브리를 설립한 것이다. 스튜디오 지브리의 첫 작품 "천공의 성 라퓨타"에서는 실사에서 표현할 수 없는 카메라 기법과 리얼한 배경 등이 돋보여 그가 일본 애니메이션계의 대부에 오르는 데 큰 몫을 했다.'
    },
    {
        iconClass: 'icon-bg1',
        title: "명칭",
        desc: '"스튜디오 지브리"의 명칭은 사하라 사막에 부는 열풍을 뜻하는 리비아어 "ghibli"에서 유래하였으며, 제2차 세계 대전 중 이탈리아의 비행기의 이름이기도 하다. 미야자키 하야오의 생각에서 "지브리"가 되었으나, 원어에 가까운 발음은 "기블리"이다(이탈리아의 마세라티사의 승용차 "기블리"(ghibli)는 일본에서도 1970년대에 "기브리"라 불리었었다).'   
    },
    {
        iconClass: 'icon-bg4',
        title: "명칭",
        desc: '2014년 8월 지브리 주주총회에서 제작팀 해산을 발표했다. 미야자키 하야오 감독이 바람이 분다를 자신이 감독을 맡는 마지막 작품으로 정하고 2013년 9월 1일 은퇴를 선언했을 때부터 스튜디오    해체설이 나왔으며, 2014년 봄에 와서 스즈키 토시오도 그런 식의 결단을 내렸다고 한다. 앞으로는 신작을 만들지 않고 회사 차원에서 판권 관리만 하게 될 것이라고 한다.'    
    },
];

const introTitle = {    
    sub: 'studio ghibli',
    title:(<h3>지브리<br />스튜디오</h3>),
    desc: (<p>주식회사 스튜디오 지브리는 <br /> 애니메이션 위주의 영상작품의 기획 및 제작을 <br /> 주요 사업으로 하는 일본의 기업이다.</p>)    
}

function IntroDesc({iconClass, title, desc}){
    return(
        <div>
            <h4 className={iconClass}>{title}</h4>
            <p>{desc}</p>
        </div>
    )
}



function IntroSection(props) {
    return (
        <section id="introSection" className={props.attr}>
            <h3 className="blind">프론트앤드 커리큘럼 과정 소개</h3>
            <div className="intro__inner container">
                <div className="intro__title">
                    <span>{introTitle.sub}</span>
                    <>{introTitle.title}</>
                    <>{introTitle.desc}</>                   
                </div>
                <div className="intro__desc">                   
                    {introText.map((text, index)=>(
                        <IntroDesc 
                            key={index}
                            iconClass = {text.iconClass}
                            title= {text.title}
                            desc={text.desc}
                        />
                    ))};                 
                </div>
            </div>
        </section>


    );
}

export default IntroSection;
