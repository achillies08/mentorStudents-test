let imageUrl.v =
  "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing";

let i = "https://drive.google.com/uc?id=";

console.log("https://drive.google.com/uc?id="+imageUrl.v.substring(imageUrl.v.indexOf("d/")+2,imageUrl.v.indexOf("/v")));
