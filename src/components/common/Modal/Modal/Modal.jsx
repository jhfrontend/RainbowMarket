import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogOutAlert from "../Alert/LogOutAlert";
import { ModalWrapper } from "./styledModal";

const Modal = (props) => {
  const [isLogOut, setIsLogOut] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  function handleCancelMenu() {
    props.setModalActive(false);
  }
  function handleShowLogOutModal() {
    setIsLogOut(true);
  }

  function handleInfoSetting() {
    if (location.pathname == "/profile") {
      props.setModalActive(false);
    } else {
      navigate("/profile");
    } // 페이지가 프로필일때는 아무 동작도 안해서 모달 해제하는 조건문 넣음
  }

  return (
    <>
      <ModalWrapper>
        <h2 className="hidden">헤더 모달창</h2>
        <div
          className={props.modalActive ? "reveal" : ""}
          onClick={handleCancelMenu}
        ></div>
        <ul className={props.modalActive ? "reveal" : ""}>
          <li>
            <button onClick={handleInfoSetting}>설정 및 개인정보</button>
          </li>
          <li>
            <button onClick={handleShowLogOutModal}>로그아웃</button>
          </li>
        </ul>
      </ModalWrapper>
      {isLogOut && (
        <LogOutAlert
          isLogOut={isLogOut}
          setIsLogOut={setIsLogOut}
        />
      )}
    </>
  );
};
export default Modal;
