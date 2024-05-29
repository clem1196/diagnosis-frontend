import axios from "axios";

//USERS
//All
export const getDiagnosis = async () => {
  const result = await axios({
    method: "GET",
    url: "http://localhost:3000/diagnosis/",
  });
  return result;
};
export const getDiag = async (id: number) => {
  const result = await axios({
    method: "GET",
    url: "http://localhost:3000/diagnosis/" + id,
  });
  return result;
};
//Add
export const addDiagnosis = async (dataObject: object) => {
  const result = await axios({
    method: "POST",
    url: "http://localhost:3000/diagnosis",
    data: dataObject,
  });
  return result;
};
//Edit
export const editDiagnosis = async (id: number, dataObject: object) => {
  const result = await axios({
    method: "PUT",
    url: "http://localhost:3000/diagnosis/" + id,
    data: dataObject,
  });
  return result;
};
//Delete
export const deleteDiagnosis = async (id: number) => {
  const result = await axios({
    method: "DELETE",
    url: "http://localhost:3000/diagnosis/" + id,
  });
  return result;
};
