import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ImLab } from "react-icons/im";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";

function TimeLine() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="2020.02 - 2020.09"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<ImLab />}
      >
        <h3>Intelligent Image Analysis Lab</h3>
        <h4>지능형 영상분석 연구실 연구원 활동</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.03 - 2020.06"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<GiTeacher />}
      >
        <h3>셈틀꾼 멘토</h3>
        <p>
          컴퓨터공학과 학술동아리 '셈틀꾼'에서 20학년도 2학년 부원들을 대상으로
          C++ 전공과목 멘토를 진행함.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.07 - 2020.10"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<AiOutlineProject />}
      >
        <h3>Semtle Project</h3>
        <h4>셈틀꾼 공식 홈페이지 구현 프로젝트</h4>
        <p>셈틀꾼 회원들이 사용할 수 있는 공식 홈페이지를 구현함</p>
        <p>
          프로젝트 공고, 게시, 질문 사이트 등을 구현하고 관리자 페이지를 통한
          인원관리 구현
        </p>
        <p>Vue.js기반, vuetify를 사용하여 개발</p>
        <p>프론트엔드 담당</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.09 - 2020.123"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<GiTeacher />}
      >
        <h3>셈틀꾼 멘토</h3>
        <p>
          컴퓨터공학과 학술동아리 '셈틀꾼'에서 20학년도 신입생 부원들을 대상으로
          C 전공과목 멘토를 진행함.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.09 - 2020.12"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<AiOutlineProject />}
      >
        <h3>Vueticky Note Project</h3>
        <h4>노트 웹앱 구현 프로젝트</h4>
        <p>노트와 인공지능을 결합한 노트 웹앱을 구현함</p>
        <p>기본적인 CRUD 구현</p>
        <p>Tensorflow.js의 이미지 객체 탐지를 활용한 자동 태깅 기능</p>
        <p>Google Firebase를 적극 활용</p>
        <ul>
          <li>Hosting을 활용한 호스팅</li>
          <li>Authenticationg을 활용한 사용자 인증</li>
          <li>Cloud Firestore를 활용한 가상의 DB 구축</li>
        </ul>
        <p>Vue.js기반, vuetify를 사용하여 개발</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.10 - 2020.12"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<GiTeacher />}
      >
        <h3>전공특화 멘토</h3>
        <p>
          전공특화 멘토링 C언어 멘토로 선정되어 신입생들을 대상으로 해당 분야의
          이해를 돕기위한 멘토링을 진행함.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020. - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<ImLab />}
      >
        <h3>System Software Lab</h3>
        <h4>시스템 소프트웨어 연구실 연구원 활동</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default TimeLine;
