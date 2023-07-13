import { FILE_PLACEHOLDER } from '../../constants/keyword';

export default function FileInput({ submitedFileName, setFile, setSubmitedFileName }:{
  submitedFileName: string;
  setFile: (value) => void;
  setSubmitedFileName: (value: string) => void;
}) {
  const handleFileChange = (e: any) => {
    e.preventDefault();
    const formData = new FormData();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      formData.append('file', uploadFile);
      setFile(uploadFile);
    }
    const fileName = e.target.value;
    setSubmitedFileName(fileName.split('\\').pop());
  };
  return (
    <div>
      <label htmlFor="file-upload">
        <img src="/images/file-upload.svg" alt="file-upload" />
        <span>{submitedFileName === '' ? FILE_PLACEHOLDER : submitedFileName}</span>
        <input
          type="file"
          id="file-upload"
          // eslint-disable-next-line max-len
          onChange={(e) => handleFileChange(e)}
          multiple
        />
      </label>
    </div>

  );
}
