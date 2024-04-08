const paraString=window.location.search;
const urlParam=new URLSearchParams(paraString);
const fullname=urlParam.get("fullname");

console.log(fullname);