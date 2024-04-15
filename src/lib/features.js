const fileFormat = (url = "") => {
  const fileExtension = url.split(".").pop();

  if (
    fileExtension === "gif" ||
    fileExtension === "jpg" ||
    fileExtension === "png" ||
    fileExtension === "jpeg"
  ) {
    return "image";
  }
  if (
    fileExtension === "mp4" ||
    fileExtension === "webm" ||
    fileExtension === "ogg"
  ) {
    return "video";
  }
  if (fileExtension === "mp3" || fileExtension === "wav") {
    return "audio";
  }

  return "file";
};

const transformImage = (url="",width=100)=> url

export { fileFormat,transformImage };
