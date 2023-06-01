function MovieSection(props) {
    return (
        <section id="movieSection" className={props.attr}>
            <div className="movie__inner container">
                <div className="movie__text">
                    <h3>개발자 추천 영화</h3>
                    <p>
                        더 다양한 강의는 유튜브를 통해 제공하고 있습니다. <br />
                        구독과 좋아요! 부탁드립니다.
                    </p>
                    <a href="/" className="button_red">
                        자세히 보기
                    </a>
                </div>
                <div className="movie__item">
                    <div>
                        <img src="./assets/images/movie/movie01.jpg" alt="movie01이미지" />
                    </div>
                    <div>
                        <img src="./assets/images/movie/movie02.jpg" alt="movie02이미지" />
                    </div>
                    <div>
                        <img src="./assets/images/movie/movie03.jpg" alt="movie03이미지" />
                    </div>
                    <div>
                        <img src="./assets/images/movie/movie04.jpg" alt="movie04이미지" />
                    </div>
                    <div>
                        <img src="./assets/images/movie/movie05.jpg" alt="movie04이미지" />
                    </div>
                    <div>
                        <img src="./assets/images/movie/movie06.jpg" alt="movie04이미지" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieSection;
