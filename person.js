// * Function
// const person = {
//   name: 'John Doe',
//   age: 30
// };

// module.exports = person;

// * Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My Name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;

/** Note
 * ++ Module Wrapper Function : ทุก function ของ nodejs จะถูก wrap ด้วย module wrapper function
 * แสดงข้อมูลของไฟล์ตัวเอง
 * (function (exports, require, module, __filename, __dirname){
 *  // __filename = ที่อยู่ไฟล์
 * })
 */
