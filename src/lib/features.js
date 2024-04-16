import moment from "moment";

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



const getLastSevenDays = () => {
  const date = moment();
  const lastSevenDays = [];
  for (let i = 0; i < 7; i++) {
    const dayDate = date.clone().subtract(i, "days");
    const dayName = dayDate.format("ddd");
    lastSevenDays.unshift(dayName)
  }
  return lastSevenDays;
}


export { fileFormat,transformImage ,getLastSevenDays};
