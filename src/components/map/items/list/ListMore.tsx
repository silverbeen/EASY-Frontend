import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../../module/atom/map";
import QuestionItem from "./QuestionItem";
import * as S from "./style";

const ListMore = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const list = [
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
  ];

  return (
    <S.ModalWrapper modal={modal}>
      <div className="border" />
      <div className="field-box">
        <span>면접 분야</span>
        <span>웹 프론트엔드</span>
      </div>
      <div className="field-box">
        <span>면접 난이도</span>
        <span>면접 난이도는 중상입니다. </span>
      </div>
      <div className="field-box">
        <span>면접 질문</span>
        <ol className="interview-list">
          {list.map((item, idx) => (
            <QuestionItem key={idx} item={item} />
          ))}
        </ol>
      </div>
    </S.ModalWrapper>
  );
};

export default ListMore;