import React from 'react';
const UnsplashTitle = {
    title: "이미지 다운로드 추천",
    desc: ( <p>더 다양한 강의는 유튜브를 통해 제공하고 있습니다. <br/>구독과 좋아요! 부탁드립니다.</p>)
}

const UnsplashItem = [
    {
      img : "./assets/images/unsplash/unsplash01.jpg",
      title: "코딩 애플",
      num: "dkelkt442"
    },{
      img : "./assets/images/unsplash/unsplash02.jpg",
      title: "코딩 애플",
      num: "dkelkt442"
    },{
      img : "./assets/images/unsplash/unsplash03.jpg",
      title: "코딩 애플",
      num: "dkelkt442"
    },{
      img : "./assets/images/unsplash/unsplash04.jpg",
      title: "코딩 애플",
      num: "dkelkt442"
    }
  ]

  function UnsplashDesc({img, title}) {
    return(
        <div>
            <img src={img} alt={title} />
        </div>
    )
  }

function UnsplashSection(props) {
    return (
        <section id="unsplashSection" className={props.attr}>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>{UnsplashTitle.title}</h3>
                    <p>
                        {UnsplashTitle.desc}
                    </p>
                    <a href="/" className="button_red">
                        자세히 보기
                    </a>
                </div>
                <div className="unsplash__item">
                    {UnsplashItem.map((text,index)=>(
                    <UnsplashDesc
                        key={index}
                        img={text.img}
                        title={text.title}
                    />
                ))}
                </div>
            </div>
        </section>
    );
}

export default UnsplashSection;
