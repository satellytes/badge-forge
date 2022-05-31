import { ChangeEvent, useContext } from "react";
import { BadgeForgeContext } from "../contexts/BadgeForgeContext";

export const ImageSelector = () => {
  const { setSelectedFile } = useContext(BadgeForgeContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // if (event.target.files && event.target.files.length > 0) {
    //   const img = new Image();
    //   img.src = URL.createObjectURL(event.target.files[0]);
    // }
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <input
      type="file"
      accept="image/*;capture=camera"
      onChange={handleChange}
    />
  );
};
