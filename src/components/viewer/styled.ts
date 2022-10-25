import styled from "@emotion/styled";

export const View = styled.div`
  .hljs-keyword {
    color: #d84d4a;
  }

  .hljs-string {
    color: #d14;
  }

  .hljs-name {
    font-weight: 700;
    color: #008080 !important;
  }

  .hljs-params {
    color: #458;
    font-weight: bold;
  }

  .ql-align-center {
    display: flex;
    justify-content: center;
  }

  .hljs-attr {
    font-weight: bold;
  }

  .ql-syntax {
    background-color: #f6f8fa;
  }

  .ql-editor > a {
    border: 1px solid black;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
  }

  .detail-container {
    margin-bottom: 60px;
  }

  .detail-container > p > a {
    background: rgb(242, 244, 245);
    padding: 10px;
    height: 48px;
    border-radius: 8px;
    cursor: pointer;
    -webkit-transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    font-size: 16px;
    text-decoration: none !important;
    font-weight: 700;
    color: #668efd;
    line-height: 3;
    word-break: break-word;

    &:hover {
      color: #96b1fc;
      background: #e5e7e9;
    }
  }

  .detail-container > p > img {
    width: -webkit-fill-available;
    border-radius: 15px;
  }
`;
