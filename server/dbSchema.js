import mongoose from "mongoose";

const Schema = mongoose.Schema;

let companySchema = new Schema({
  name: String,
  companyId: { type: Number, unique: true },
  primaryText: String,
  headline: String,
  description: String,
  CTA: String,
  imageUrl: String,
  url: String,
});

companySchema.index({
  primaryText: "text",
  headline: "text",
  description: "text",
});

const CompanyData = mongoose.model("CompanyData", companySchema);

export default CompanyData;
