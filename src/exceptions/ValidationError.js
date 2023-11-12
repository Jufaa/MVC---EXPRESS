class ValidationError extends Error {
  constructor(message = "Error de validación") {
    super(message);
    this.name = "ValidationError";
  }
}

module.exports = ValidationError;
