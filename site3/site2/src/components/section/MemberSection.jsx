function MemberSection(props) {
    return (
        <section id="memberSection" className={props.attr}>
            <h3>대표인물 소개</h3>
            <p>창립자 및 지브리스튜디오의 대표인물을 소개합니다.</p>
            <div className="member__inner container">
                <div className="member">
                    <figure className="member__header">
                        <img src="./assets/images/member/miyazaki.jpg" alt="멤버1" />
                    </figure>
                    <div className="member__body">
                        <h4>미야자키 하야오</h4>
                        <a href="/">대표작품</a>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img src="./assets/images/member/toshio_suzuki.PNG" alt="멤버2" />
                    </figure>
                    <div className="member__body">
                        <h4>토시오 스즈키</h4>
                        <a href="/">대표작품</a>
                    </div>
                </div>
                <div className="member">
                    <figure className="member__header">
                        <img src="./assets/images/member/Isao_Takahata.PNG" alt="멤버3" />
                    </figure>
                    <div className="member__body">
                        <h4>이사오 타카하타</h4>
                        <a href="/">대표작품</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MemberSection;
