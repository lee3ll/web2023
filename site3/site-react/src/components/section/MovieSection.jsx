import React from "react";

const MovieTitle = {
    title: "개발자 추천 영화",
    desc: (<p> 더 다양한 강의는 유튜브를 통해 제공하고 있습니다. <br/>구독과 좋아요! 부탁드립니다.</p>)
}
const MovieItem = [
    {
        title:"movie이미지",
        img:"./assets/images/movie/movie01.jpg"
    },
    {
        title:"movie이미지",
        img:"./assets/images/movie/movie02.jpg"
    },
    {
        title:"movie이미지",
        img:"./assets/images/movie/movie03.jpg"
    },
    {
        title:"movie이미지",
        img:"./assets/images/movie/movie04.jpg"
    },
    {
        title:"movie이미지",
        img:"./assets/images/movie/movie05.jpg"
    },
    {
        title:"movie이미지",
        img:"./assets/images/movie/movie06.jpg"
    }
]

function MovieDesc({title, img}){
    return(
        <div>
            <img src={img} alt={title} />
        </div>
    )    
}

function MovieSection(props) {
    return (
        <section id="movieSection" className={props.attr}>
            <div className="movie__inner container">
                <div className="movie__text">
                    <h3>{MovieTitle.title}</h3>
                    <p>
                       {MovieTitle.desc}
                    </p>
                    <a href="/" className="button_red">
                        자세히 보기
                    </a>
                </div>
                <div className="movie__item">
                    {MovieItem.map((text, index)=>(
                        <MovieDesc
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

export default MovieSection;
