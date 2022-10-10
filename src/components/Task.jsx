import { useEffect, useState } from "react";
import { getCampersData } from "../services";

const groupBy = (key) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const Task = () => {
  const [camperData, setCamperData] = useState([]);

  useEffect(() => {
    getCampersData().then((result) => {
      setCamperData(result.Data);
    });
  }, []);

  const groupedCamperData = camperData.reduce(function (r, a) {
    // console.log(a.Profile.CamperType);
    // console.log("after a");
    r[a.Profile.CamperType] = a[a.Profile.CamperType] || [];
    r[a.Profile.CamperType].push(a.Profile.Name);
    return r;
  }, Object.create(null));

  // console.log(groupedCamperData);

  // console.log(result);

  // console.log(groupedCamperData);
  return <div>Please, check console for output!</div>;
};

// (el, index) => {
//   return <p key={index}>{el.Profile.ID}</p>;
// };
export default Task;
