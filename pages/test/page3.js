const paraString=window.location.search;
const urlParam=new URLSearchParams(paraString);
const studentid=urlParam.get("studentid");

console.log(studentid);