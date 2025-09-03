import { useState } from "react"
import { useNavigate } from "react-router-dom";

interface Choice {
  text : string;
  weights: {
    CAF: number;
    TAX: number;
    IMP: number;
    SUB: number;
    YOLO: number;
    FAS: number;
  }
}

function SurveyPage(){
  return (
    <div>
      안녕하세요 서베이 페이지입니다.!
    </div>
  )
}

export default SurveyPage
