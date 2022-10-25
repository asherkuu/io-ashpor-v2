import React, {
  useState,
  Dispatch,
  SetStateAction,
  MouseEvent,
  useRef,
} from "react";
import { Box } from "@chakra-ui/layout";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { isValidImageExtension } from "../../lib/helper";
import { Button } from "@chakra-ui/button";

type IFilePreview = {
  setFile: Dispatch<SetStateAction<File>>;
};

const FilePreview = ({ setFile }: IFilePreview) => {
  let fileRef = useRef<HTMLInputElement>();
  const [loading, setLoading] = useState<boolean>(false);
  const [imgBase64, setImgBase64] = useState<string>(""); // 파일 base64
  const [imgFile, setImgFile] = useState<string>(null); //파일

  // 파일선택
  const handleChangeFile = async (event) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    setLoading(true);

    const current = fileRef.current.value;
    const extension = current.substring(
      current.lastIndexOf(".") + 1,
      file.length
    );

    // 이미지 확장자 검사
    if (file.type.split("/")[0] === "video") {
      fileRef.current.value = "";
      setImgFile(null);
      setLoading(false);
      alert("이미지 파일만 업르도하세요");
      return;
    } else {
      const returnValue = await isValidImageExtension(extension);
      if (!returnValue.success) {
        fileRef.current.value = "";
        setImgFile(null);
        setLoading(false);
        alert(returnValue.message);
        return;
      }
    }

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
        setLoading(false);
      }
    };

    if (file) {
      reader.addEventListener("load", function () {
        setImgFile(reader.result.toString());
        setLoading(false);
      });

      reader.readAsDataURL(file); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(file); // 파일 상태 업데이트
      setFile(file);
    }
  };

  // 이미지 삭제
  const handleImageClick = (e: MouseEvent) => {
    setImgFile(null);
  };

  // 업로드 버튼
  const uploadButton = (
    <div className="123">
      {loading && <AiOutlineLoading3Quarters />}
      <input
        type="file"
        id="image"
        name="image"
        onChange={handleChangeFile}
        ref={fileRef}
      />
    </div>
  );

  return (
    <>
      {imgFile ? (
        <Box width="50%">
          <img src={imgFile} alt="thumbnail" />
          {/* <img src="https://freefrontend.com/assets/img/css-select-boxes/css-only-select.png" alt="thumbnail" className="sef-image"/> */}
          <Button variant="ghost" colorScheme="teal" onClick={handleImageClick}>
            Remove Image
          </Button>
        </Box>
      ) : (
        uploadButton
      )}
    </>
  );
};

export default FilePreview;
