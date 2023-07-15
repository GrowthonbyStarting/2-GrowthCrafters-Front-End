import { FILE_PLACEHOLDER } from '../../constants/keyword';

export default function FileInput({ submitedFileName, setFile, setSubmitedFileName }:{
  submitedFileName: string;
  setFile: (value: File) => void;
  setSubmitedFileName: (value: string) => void;
}) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      setFile(uploadFile);
    }
    const fileName = e.target.value.split('\\').pop() as string;
    setSubmitedFileName(fileName);
  };
  return (
    <div>
      <label htmlFor="file-upload">
        <img src="/images/file-upload.svg" alt="file-upload" />
        <span>{submitedFileName === '' ? FILE_PLACEHOLDER : submitedFileName}</span>
        <input
          type="file"
          id="file-upload"
          onChange={(e) => handleFileChange(e)}
          multiple
        />
      </label>
    </div>

  );
}
