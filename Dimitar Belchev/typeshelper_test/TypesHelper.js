class TypesHelper {
  isPrimitive(value) {
    return (
      typeof value === "number" ||
      typeof value === "string" ||
      typeof value === "boolean" ||
      value === null ||
      value === undefined ||
      typeof value === "symbol"
    );
  }

  isReference(value) {
    return (
      (typeof value == "object" && value !== null) ||
      typeof value === "function"
    );
  }

  cloneValue(value) {
    if (typeof value !== "object") {
      return value;
    }

    if (Array.isArray(value)) {
      return value.map(this.cloneValue);
    }

    const clonedObj = {};
    for (const key in value) {
      clonedObj[key] = this.cloneValue(value[key]);
    }
    return clonedObj;
  }

  areValuesEqual(value1, value2) {
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
      return true;
    }

    return value1 === value2;
  }
}

module.exports = TypesHelper;
