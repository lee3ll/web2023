import React from 'react';

const YoutubeTitle = {
    title: "코딩 유튜버 추천",
    desc: (<p>더 다양한 강의는 유튜브를 통해 제공하고 있습니다. <br /> 구독과 좋아요! 부탁드립니다.</p>)
}
const YoutubeItem = [
    {
      img : "./assets/images/youtube/youtube01.jpg",
      title: "코딩 애플",
      num: "dkelkt442"
    },{
      img : "./assets/images/youtube/youtube02.jpg",
      title: "코딩 애플",
      num: "dkelkt442"
    },{
      img : "./assets/images/youtube/youtube03.jpg",
      title: "코딩 애플",
      num: "dkelkt442"
    },{
      img : "./assets/images/youtube/youtube04.jpg",
      title: "코딩 애플",
      num: "dkelkt442"
    }
  ]

  function YoutubeDesc ({img, title}){
    return(
        <div>
            <img src={img} alt={title} />
        </div> 
    )           
  }

function YoutubeSection(props) {
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>{YoutubeTitle.title}</h3>
                    <p>
                        {YoutubeTitle.desc}
                    </p>
                    <a href="/" className="button_red">
                        자세히 보기
                    </a>
                </div>
                <div className="youtube__item">
                    {YoutubeItem.map((text,index) => (
                    <YoutubeDesc
                        key={index}
                        img={text.img}
                    />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default YoutubeSection;
