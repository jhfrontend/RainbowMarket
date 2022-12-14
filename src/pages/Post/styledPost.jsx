import styled from "styled-components";
import xImg from "../../assets/images/x.png";
import uploadFile from "../../assets/images/upload-file.png";
import { colors, fonts } from "../../GlobalStyle";

export const UploadContain = styled.div`
  padding: 20px 16px 16px 16px;
  height: 100vh;
  box-sizing: border-box;
`;
export const UploadWrapper = styled.section`
  display: flex;
  height: 100%;
  justify-content: space-between;
  background-color: white;
`;
export const ProfileContain = styled.section`
  img {
    width: 42px;
    height: 42px;
    margin-right: 12px;
  }
`;
export const TextWrapper = styled.section`
  flex-grow: 1;
  margin-top: 12px;
  position: relative;

  .form-textarea {
    width: 100%;
    height: auto;
    font-weight: 400;
    line-height: 17.53px;
    border: none;
    resize: none;
    margin-bottom: 16px;
    outline: none;
  }
  .form-textarea::placeholder {
    color: ${colors.colorC4};
  }
  .img-up-btn {
    background-image: url(${uploadFile});
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;
export const PostImgWrapper = styled.section`
  ul {
    display: flex;
    gap: 8px;
  }
  li {
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-size: cover;
  }
  .postImg-del {
    position: absolute;
    background-image: url(${xImg});
    background-size: contain;
    width: 22px;
    height: 22px;
    right: 6px;
    top: 6px;
  }
`;