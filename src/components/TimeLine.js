import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ImLab } from "react-icons/im";
import { GiTeacher } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { SiGithub } from "react-icons/si";
import { Carousel } from "react-bootstrap";
import dummy from "../assets/dummy.PNG";

import styled from "styled-components";

import "../style/TimeLine.css";

const LinkBtnGroup = styled.div`
  width: 100%;
  display: flex;
`;

const LinkBtn = styled.button`
  color: #343a40;
  background: white;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 50%;

  &:focus {
    border: 0;
    outline: 0;
  }
`;

function TimeLine() {
  return (
    <VerticalTimeline className="timelineBlock">
      <VerticalTimelineElement
        date="2020.02 - 2020.09"
        iconStyle={{ background: " #ffa8a8", color: "#fff" }}
        icon={<ImLab />}
      >
        <h3>Intelligent Image Analysis Lab</h3>
        <h4>지능형 영상분석 연구실 연구원 활동</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.03 - 2020.06"
        iconStyle={{ background: " #ffa8a8", color: "#fff" }}
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
        iconStyle={{ background: " #ffa8a8", color: "#fff" }}
        icon={<AiOutlineProject />}
      >
        <h3>Semtle Project</h3>
        <h4>셈틀꾼 공식 홈페이지 구현 프로젝트</h4>
        <p>셈틀꾼 회원들이 사용할 수 있는 공식 홈페이지를 구현함</p>
        <p>
          프로젝트 공고, 게시, 질문 사이트 등을 구현하고 관리자 페이지를 통한
          인원관리 구현
        </p>
        <p>Vue.js기반, Vuetify를 사용하여 개발</p>
        <p>프론트엔드 담당</p>

        <Carousel className="mt-2">
          <Carousel.Item>
            <img className="w-100" src={dummy} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dummy} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dummy} alt="Third slide" />
          </Carousel.Item>
        </Carousel>

        <LinkBtnGroup className="mt-2">
          <a
            href="https://github.com/gunwoongPark/semtleProject-front"
            target="__blank"
          >
            <LinkBtn>
              <SiGithub size="25" />
            </LinkBtn>
          </a>

          <a href="http://sbmi.iptime.org/" target="__blank">
            <LinkBtn>
              <CgWebsite size="25" />
            </LinkBtn>
          </a>
        </LinkBtnGroup>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.09 - 2020.12"
        iconStyle={{ background: " #ffa8a8", color: "#fff" }}
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
        iconStyle={{ background: " #ffa8a8", color: "#fff" }}
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

        <Carousel className="mt-2">
          <Carousel.Item>
            <img className="w-100" src={dummy} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dummy} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={dummy} alt="Third slide" />
          </Carousel.Item>
        </Carousel>

        <LinkBtnGroup className="mt-2">
          <a
            href="https://github.com/gunwoongPark/Vueticky-Note"
            target="__blank"
          >
            <LinkBtn>
              <SiGithub size="25" />
            </LinkBtn>
          </a>

          <a href="vueticky-note-b08f1.web.app" target="__blank">
            <LinkBtn>
              <CgWebsite size="25" />
            </LinkBtn>
          </a>
        </LinkBtnGroup>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.10 - 2020.12"
        iconStyle={{ background: " #ffa8a8", color: "#fff" }}
        icon={<GiTeacher />}
      >
        <h3>전공특화 멘토</h3>
        <p>
          전공특화 멘토링 C언어 멘토로 선정되어 신입생들을 대상으로 해당 분야의
          이해를 돕기위한 멘토링을 진행함.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.10 - present"
        iconStyle={{ background: " #ffa8a8", color: "#fff" }}
        icon={<ImLab />}
      >
        <h3>System Software Lab</h3>
        <h4>시스템 소프트웨어 연구실 연구원 활동</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2020.12 - 2021.02"
        iconStyle={{ background: " #ffa8a8", color: "#fff" }}
        icon={<ImLab />}
      >
        <h3>System Software Lab</h3>
        <h4>레지던트 프로그램 활동</h4>
        <p>
          연구실 내 연구과제, 산학과제, 특수 장비 관리, 산업체 기술지도 등의
          다양한 활동을 참여하여 전공분야 역량 강화.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="2021.02 - 2021.03"
        iconStyle={{ background: " #ffa8a8", color: "#fff" }}
        icon={<GiTeacher />}
      >
        <h3>셈틀꾼 멘토</h3>
        <p>
          컴퓨터공학과 학술동아리 '셈틀꾼'에서 전 회원들을 대상으로 자바스크립트
          멘토를 진행함.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default TimeLine;
