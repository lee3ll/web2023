function PortSection(props) {
    return (
        <section id="portSection" className={props.attr}>
            <h3>포트폴리오 소개</h3>
            <p>웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자 포트폴리오 입니다.</p>
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
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/portfolio/portfolio01.jpg" alt="포폴1" />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                <img src="./assets/images/member/member03.svg" alt="멤버1" />
                            </div>
                            <div>
                                <h4>김현정 포트폴리오</h4>
                                <span>프론트앤드 개발자 포트폴리오</span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/portfolio/portfolio02.jpg" alt="포폴1" />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                <img src="./assets/images/member/member05.svg" alt="멤버1" />
                            </div>
                            <div>
                                <h4>김현정 포트폴리오</h4>
                                <span>프론트앤드 개발자 포트폴리오</span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/portfolio/portfolio03.jpg" alt="포폴1" />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                <img src="./assets/images/member/member06.svg" alt="멤버1" />
                            </div>
                            <div>
                                <h4>김현정 포트폴리오</h4>
                                <span>프론트앤드 개발자 포트폴리오</span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/portfolio/portfolio04.jpg" alt="포폴1" />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                <img src="./assets/images/member/member01.svg" alt="멤버1" />
                            </div>
                            <div>
                                <h4>김현정 포트폴리오</h4>
                                <span>프론트앤드 개발자 포트폴리오</span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/portfolio/portfolio05.jpg" alt="포폴1" />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                <img src="./assets/images/member/member11.svg" alt="멤버1" />
                            </div>
                            <div>
                                <h4>김현정 포트폴리오</h4>
                                <span>프론트앤드 개발자 포트폴리오</span>
                            </div>
                        </div>
                    </div>
                    <div className="port">
                        <figure className="port__header">
                            <img src="./assets/images/portfolio/portfolio06.jpg" alt="포폴1" />
                        </figure>
                        <div className="port__body">
                            <div className="pic">
                                <img src="./assets/images/member/member13.svg" alt="멤버1" />
                            </div>
                            <div>
                                <h4>김현정 포트폴리오</h4>
                                <span>프론트앤드 개발자 포트폴리오</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortSection;
