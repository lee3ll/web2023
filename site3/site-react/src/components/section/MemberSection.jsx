import React from 'react';

const memberTitle = {
    title: '대표인물 소개',
    desc: '창립자 및 지브리스튜디오의 대표인물을 소개합니다.'
}
const memberText = [
    {
        img: "./assets/images/member/miyazaki.jpg",
        title: "미야자키 하야오",
        link:"대표작품"
    },
    {
        img: "./assets/images/member/toshio_suzuki.PNG",
        title: "토시오 스즈키",
        link:"대표작품"
    },
    {
        img: "./assets/images/member/Isao_Takahata.PNG",
        title: "이사오 타카하타",
        link:"대표작품"
    },  
]

function MemberDesc({ img, title, link}) {
    return (
        <div className="member">
            <figure className="member__header">
                <img src={img} alt={title}/>
            </figure>
            <div className="member__body">
                <h4>미야자키 하야오</h4>
                <a href={link}>대표작품</a>
            </div>
        </div>
    )
}

function MemberSection(props) {
    return (
        <section id="memberSection" className={props.attr}>
            <h3>{memberTitle.title}</h3>
            <p>{memberTitle.desc}</p>

            <div className="member__inner container">
                {memberText.map((text,index) => (
                <MemberDesc
                    key={index}
                    img={text.img}
                    title={text.title}
                    link={text.link}
                />
            ))}
            </div>
        </section>
    );
}

export default MemberSection;
