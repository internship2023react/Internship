// const TypesHelper = require("./TypesHelper");
// const typesHelper = new TypesHelper();

// describe("TypesHelper class", () => {
//   test("1.detects primitive types correctly", () => {
//     expect(typesHelper.isPrimitive(42)).toBe(true);
//     expect(typesHelper.isPrimitive("hello")).toBe(true);
//     expect(typesHelper.isPrimitive(false)).toBe(true);
//     expect(typesHelper.isPrimitive(null)).toBe(true);
//     expect(typesHelper.isPrimitive(undefined)).toBe(true);
//     expect(typesHelper.isPrimitive({})).toBe(false);
//     expect(typesHelper.isPrimitive([])).toBe(false);
//   });

//   test("2.detects reference types correctly", () => {
//     expect(typesHelper.isReference(42)).toBe(false);
//     expect(typesHelper.isReference("hello")).toBe(false);
//     expect(typesHelper.isReference(false)).toBe(false);
//     expect(typesHelper.isReference(null)).toBe(false);
//     expect(typesHelper.isReference(undefined)).toBe(false);
//     expect(typesHelper.isReference({})).toBe(true);
//     expect(typesHelper.isReference([])).toBe(true);
//   });

//   test("3.clones values correctly", () => {
//     const obj = { a: 1 };
//     const arr = [1, 2, 3];
//     const clonedObj = typesHelper.cloneValue(obj);
//     const clonedArr = typesHelper.cloneValue(arr);

//     expect(clonedObj).not.toBe(obj);
//     expect(clonedObj).toEqual(obj);
//     expect(clonedArr).not.toBe(arr);
//     expect(clonedArr).toEqual(arr);
//   });

//   test("4.compares values correctly", () => {
//     const obj1 = { a: 1 };
//     const obj2 = { a: 1 };
//     const obj3 = obj1;

//     expect(typesHelper.areValuesEqual(42, 42)).toBe(true);
//     expect(typesHelper.areValuesEqual("hello", "hello")).toBe(true);
//     expect(typesHelper.areValuesEqual(obj1, obj2)).toBe(false);
//     expect(typesHelper.areValuesEqual(obj1, obj3)).toBe(true);
//   });

//   test("5.detects Symbol type as primitive", () => {
//     expect(typesHelper.isPrimitive(Symbol())).toBe(true);
//   });

//   test("6.detects Function type as reference", () => {
//     expect(typesHelper.isReference(function () {})).toBe(true);
//   });

//   test("7.detects Date type as reference", () => {
//     expect(typesHelper.isReference(new Date())).toBe(true);
//   });

//   test("8.clones nested objects correctly", () => {
//     const nestedObj = { a: 1, b: { c: 2 } };
//     const clonedNestedObj = typesHelper.cloneValue(nestedObj);

//     expect(clonedNestedObj).not.toBe(nestedObj);
//     expect(clonedNestedObj).toEqual(nestedObj);
//     expect(clonedNestedObj.b).not.toBe(nestedObj.b);
//     expect(clonedNestedObj.b).toEqual(nestedObj.b);
//   });

//   test("9.compares different object instances with same values as not equal", () => {
//     const obj1 = { a: 1, b: { c: 2 } };
//     const obj2 = { a: 1, b: { c: 2 } };

//     expect(typesHelper.areValuesEqual(obj1, obj2)).toBe(false);
//   });

//   test("10.compares same object instance as equal", () => {
//     const obj1 = { a: 1, b: { c: 2 } };
//     const obj2 = obj1;

//     expect(typesHelper.areValuesEqual(obj1, obj2)).toBe(true);
//   });

//   test("11.compares NaN values correctly", () => {
//     expect(typesHelper.areValuesEqual(NaN, NaN)).toBe(true);
//   });

//   test("12.compares null and undefined as not equal", () => {
//     expect(typesHelper.areValuesEqual(null, undefined)).toBe(false);
//   });
// });

const TypesHelper = require("./TypesHelper");
const typesHelper = new TypesHelper();

describe("TypesHelper class", () => {
  test("detects primitive types correctly", () => {
    expect(typesHelper.isPrimitive(42)).toBe(true);
    expect(typesHelper.isPrimitive("hello")).toBe(true);
    expect(typesHelper.isPrimitive(false)).toBe(true);
    expect(typesHelper.isPrimitive(null)).toBe(true);
    expect(typesHelper.isPrimitive(undefined)).toBe(true);
    expect(typesHelper.isPrimitive({})).toBe(false);
    expect(typesHelper.isPrimitive([])).toBe(false);
  });

  test("detects reference types correctly", () => {
    expect(typesHelper.isReference(42)).toBe(false);
    expect(typesHelper.isReference("hello")).toBe(false);
    expect(typesHelper.isReference(false)).toBe(false);
    expect(typesHelper.isReference(null)).toBe(false);
    expect(typesHelper.isReference(undefined)).toBe(false);
    expect(typesHelper.isReference({})).toBe(true);
    expect(typesHelper.isReference([])).toBe(true);
  });

  test("clones values correctly", () => {
    const obj = { a: 1 };
    const arr = [1, 2, 3];
    const clonedObj = typesHelper.cloneValue(obj);
    const clonedArr = typesHelper.cloneValue(arr);

    expect(clonedObj).not.toBe(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedArr).not.toBe(arr);
    expect(clonedArr).toEqual(arr);
  });

  test("compares values correctly", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const obj3 = obj1;

    expect(typesHelper.areValuesEqual(42, 42)).toBe(true);
    expect(typesHelper.areValuesEqual("hello", "hello")).toBe(true);
    expect(typesHelper.areValuesEqual(obj1, obj2)).toBe(false);
    expect(typesHelper.areValuesEqual(obj1, obj3)).toBe(true);
  });

  test("detects Symbol type as primitive", () => {
    expect(typesHelper.isPrimitive(Symbol())).toBe(true);
  });

  test("detects Function type as reference", () => {
    expect(typesHelper.isReference(function () {})).toBe(true);
  });

  test("detects Date type as reference", () => {
    expect(typesHelper.isReference(new Date())).toBe(true);
  });

  test("clones nested objects correctly", () => {
    const nestedObj = { a: 1, b: { c: 2 } };
    const clonedNestedObj = typesHelper.cloneValue(nestedObj);

    expect(clonedNestedObj).not.toBe(nestedObj);
    expect(clonedNestedObj).toEqual(nestedObj);
    expect(clonedNestedObj.b).not.toBe(nestedObj.b);
    expect(clonedNestedObj.b).toEqual(nestedObj.b);
  });

  test("compares different object instances with same values as not equal", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };

    expect(typesHelper.areValuesEqual(obj1, obj2)).toBe(false);
  });

  test("compares same object instance as equal", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = obj1;

    expect(typesHelper.areValuesEqual(obj1, obj2)).toBe(true);
  });

  test("compares NaN values correctly", () => {
    expect(typesHelper.areValuesEqual(NaN, NaN)).toBe(true);
  });

  test("compares null and undefined as not equal", () => {
    expect(typesHelper.areValuesEqual(null, undefined)).toBe(false);
  });
});
