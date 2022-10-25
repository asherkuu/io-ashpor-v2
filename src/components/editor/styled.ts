import styled from "@emotion/styled";

export const EditorWrap = styled.div`
  display: flex;
  max-height: 700px;
  margin-bottom: 100px;
  & > div:first-of-type {
    flex: 1;
  }
  & > div.text-editor-viewer {
    flex: 1;
    margin-top: 70px;
    margin-left: 20px;
    overflow: auto;
    max-height: 700px;
  }
`;

export const ViewerWrap = styled.div`
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
  .ql-editor {
    min-height: 100px;
  }
  .ql-editor > a {
    border: 1px solid black;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
  }
  .detail-container > p > a {
    background: rgb(242, 244, 245);
    padding: 10px 10px;
    height: 48px;
    border-radius: 8px;
    cursor: pointer;
    -webkit-transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    font-size: 16px;
    text-decoration: none !important;
    font-weight: 700;
    color: #668efd;
    word-break: break-word;

    &:hover {
      color: #96b1fc;
      background: #e5e7e9;
    }
  }

  .detail-container > p > img {
    width: -webkit-fill-available;
  }

  blockquote {
    padding-left: 35px;
    background: #f8f9fa;
    margin: 0;
    border-left: 5px solid #668efd;
  }

  .text-editor {
    display: flex;
    max-height: 1000px;
    margin-bottom: 100px;
    & > div:first-of-type {
      flex: 1;
    }
    & > div.text-editor-viewer {
      flex: 1;
      margin-top: 70px;
      margin-left: 20px;
      overflow: auto;
      max-height: 1000px;
    }
  }
`;
