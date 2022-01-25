'use strict';
const CsvParser = require("csv-parse/lib/sync");
const CSV = require("csv-string");

const {
  textIsNumber,
  textToNumber,
  textIsBoolean,
  textToBoolean,
  textIsObject,
  textToObject,
} = require("./textFormats");

const {
  stringIsEmail,
  stringIsDate,
  stringIsHour,
  stringIsUrl,
  urlIsMedia,
} = require("./formatsValidator");


function getFormatFromField(field) {
  switch (typeof field) {
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "object":
      if (Array.isArray(field)) return "array";
      return "object";
    case "string":
      if (stringIsEmail(field)) return "email";
      if (stringIsDate(field)) return "date";
      if (stringIsHour(field)) return "time";
      if (stringIsUrl(field)) {
        if (urlIsMedia(field)) return "media";
        return "url";
      }
      if (field.length > 255) return "text";
      return "string";
  }
}

function getFieldsFromItems(items) {
  const fieldNames = new Set();
  items.forEach((item) => {
    try {
      Object.keys(item).forEach((fieldName) => fieldNames.add(fieldName));
    } catch (err) {
      console.error(err);
    }
  });

  return Array.from(fieldNames);
}

function parseDataFromContent({data}) {
  return CsvParser(data, {
    delimiter: CSV.detect(data),
    columns: true,
    trim: true,

    // Try to convert the format of the values
    cast: (value) => {
      if (value === "") return null;
      else if (textIsNumber(value)) return textToNumber(value);
      else if (textIsBoolean(value)) return textToBoolean(value);
      else if (textIsObject(value)) return textToObject(value);
      else return value;
    },
  });
}

function analyze(items) {
  const fieldsFormats = {};
  const fieldNames = getFieldsFromItems(items);
  fieldNames.forEach((fieldName) => (fieldsFormats[fieldName] = []));

  items.forEach((item) => {
    fieldNames.forEach((fieldName) => {
      const fieldData = item[fieldName];

      // Get format from valid data
      if (fieldData !== null && fieldData !== undefined) {
        const fieldFormat = getFormatFromField(fieldData);
        fieldsFormats[fieldName].push(fieldFormat);
      }
    });
  });

  const fieldsInfo = {};
  Object.keys(fieldsFormats).map((fieldName) => {
    const fieldFormats = fieldsFormats[fieldName].map((value) =>
      value === "text" ? "string" : value
    );
    const uniqueFormats = new Set(fieldFormats);
    const format = uniqueFormats.size > 1 ? "mixed" : [...uniqueFormats][0];

    fieldsInfo[fieldName] = {
      count: fieldFormats.length,
      format,
    };
  });

  return fieldsInfo;
}

module.exports = {
  parseDataFromContent,
  analyze,
  getFieldsFromItems,
  getFormatFromField,
};