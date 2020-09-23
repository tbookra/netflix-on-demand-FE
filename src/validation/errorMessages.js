const errorMessages = (fieldName, errorType = "Required") => {
  return `*${fieldName} is ${errorType} `;
};

export default errorMessages;
