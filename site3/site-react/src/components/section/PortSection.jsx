import React from 'react';

const portTitle = 
    {
        title: "대표작품 소개",
        desc: "다음은 대중의 사랑을받아 많은 흥행거둔 지브리 영화사의 대표작품을 소개하겠습니다."
    }

const portText = [
    {
        portImg: "./assets/images/portfolio/port01.jpg",
        iconImg: "./assets/images/member/member03.svg",
        title: "센과 치히로의 행방불명",
        desc: "전세계적인 흥행수익을 기록한 지브리 영화순위1위"
    },
    {
        portImg: "./assets/images/portfolio/port02.jpg",
        iconImg: "./assets/images/member/member05.svg",
        title: "하울의 움직이는 성",
        desc: "2004년 개봉작 역대 일본흥행수입6위"
    },
    {
        portImg: "./assets/images/portfolio/port03.jpg",
        iconImg: "./assets/images/member/member01.svg",
        title: "모노노케 히메",
        desc: "지브리 90년대 대표작으로 개봉당시 일본내에서 1년간 극장상영"
    },
    {
        portImg: "./assets/images/portfolio/port04.jpg",
        iconImg: "./assets/images/member/member06.svg",
        title: "벼랑 위의 포뇨",
        desc: "2008년말 기준 흥행수입 155억엔, 1200만 관객동원"
    },
    {
        portImg: "./assets/images/portfolio/port05.jpg",
        iconImg: "./assets/images/member/member11.svg",
        title: "바람이 분다",
        desc: "일본내에서만 흥행(전범국 낭만주의 비판)"
    },
    {
        portImg: "./assets/images/portfolio/port06.jpg",
        iconImg: "./assets/images/member/member13.svg",
        title: "마루 밑 아리에티",
        desc: "2010년작으로 100만관객기록"
    }
]

function PortDesc({ img, icon, title, desc }){
    return (
        <div className="port">
            <figure className="port__header">
                <img src={img} alt={title} />
            </figure>
            <div className="port__body">
                <div className="pic">
                    <img src={icon} alt={title} />
                </div>
                <div>
                    <h4>{title}</h4>
                    <span>{desc}</span>
                </div>
            </div>
        </div>
    )
}

function PortSection(props) {
    return (
        <section id="portSection" className={props.attr}>
            <h3>{portTitle.title}</h3>
            <p>{portTitle.desc}</p>
            <div className="port__inner container">
                <div className="port__btn">
                    <ul>
                        <li>
                            <a href="/">21기</a>
                        </li>
                        <li>
                            <a href="/">22기</a>
                        </li>
                        <li>
                            <a href="/">23기</a>
                        </li>
                        <li>
                            <a href="/">24기</a>
                        </li>
                    </ul>
                </div>

                <div className="port__cont">
                {portText.map((text, index)=>(
                    <PortDesc 
                        key={index}
                        img={text.portImg}
                        title={text.title}
                        icon={text.iconImg} 
                        desc={text.desc}                       
                    />
                ))};
                </div>
            </div>
        </section>
    );
}

export default PortSection;
