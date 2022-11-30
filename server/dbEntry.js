import XLSX from "xlsx";
import CompanyData from "./dbSchema.js";
import { conn } from "./mongoConnections.js";

let wb = XLSX.readFile("../sampleCollectionsForFullStackTest.xlsx");
let ws = wb.Sheets[wb.SheetNames[0]];
let id = [];

await conn();

{for (let i = 3; i < 10; i++) {
  let companyId = await ws[`B${i}`];
  companyId = companyId.v;
  id.push(companyId);
  let primaryText = await ws[`C${i}`];
  primaryText = primaryText.v;
  let headline = await ws[`D${i}`];
  headline = headline.v;
  let description = await ws[`E${i}`];
  if (description) {
    description = description.v;
  } else {
    description = "null";
  }
  let CTA = await ws[`F${i}`];
  CTA = CTA.v;
  let imageUrl = await ws[`G${i}`];
  imageUrl = "https://drive.google.com/uc?id="+imageUrl.v.substring(imageUrl.v.indexOf("d/")+2,imageUrl.v.indexOf("/v"));
  

  let companyData = new CompanyData({
    name: "",
    companyId,
    primaryText,
    headline,
    description,
    CTA,
    imageUrl,
    url: "",
  });
  companyData.save(function (err) {
    if (!err) {
      console.log("Data saved successfully.");
    } else {
      console.error(err);
    }
  });
}}

for (let i = 0; i < id.length; i++) {
  console.log(id);
    let cName = await ws[`B${id[i]+13}`];
    cName = cName.v
    let url = await ws[`C${id[i]+13}`];
    url = url.v
    // console.log(cName,url);
    CompanyData.updateOne({ "companyId": id[i] },{$set: {"name" : cName,"url": url}},function(err){
      if(!err){
        console.log("Updated");
      }else{
        console.log(err);
      }
    }
    )
}


