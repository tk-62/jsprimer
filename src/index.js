// const bookTitle = "JavaScript Primer",
//       bookCategory = "プログラミング";

// // bookTitle = "JS"

// console.log(bookTitle);
// console.log(bookCategory);

// let bookTitle = "JavaScript Primer";
// let bookTitle;
// bookTitle = "JavaScript Primer";
// bookTitle = "HTML"
// console.log(bookTitle);

// var bookTitle;
// bookTitle = "JavaScript Primer";
// bookTitle = "HTML"
// console.log(bookTitle);

// let bookTitle = "JavaScript Primer";
// bookTitle = "HTML";
// console.log(bookTitle);

// const TEN_NUMBER = 10;
// console.log(TEN_NUMBER);

// const object = {
//   key: "10",
//   name: "TK"
// };
// object.key = "100";

// console.log(object.key);
// console.log(object.name);

// const bookTitle = "Javascript Primer";
// console.log(bookTitle);

// console.log(1);
// console.log(1 + 1);
// const total = 42 + 42;
// console.log(total);

// console.log(typeof true);// => "boolean"
// console.log(typeof 42); // => "number"
// console.log(typeof 9007199254740992n); // => "bigint"
// console.log(typeof "JavaScript"); // => "string"
// console.log(typeof Symbol("シンボル"));// => "symbol"
// console.log(typeof undefined); // => "undefined"
// console.log(typeof null); // => "object"
// console.log(typeof ["配列"]); // => "object"
// console.log(typeof { "key": "value" }); // => "object"
// console.log(typeof function() {}); // => "function"

// const str = "こんにちは";
// console.log(str);

// console.log(0b1111); // => 15
// console.log(0b10000000000); // => 1024

// console.log(2e9);

// const obj = {
//   "key" : "value"
// };
// // console.log(obj.key);
// console.log(obj["key"]);

// const array = ["index:0","index:1","index:2"];
// console.log(array[0]);
// console.log(array[2]);

/**
 * データ型とリテラル
 */
// console.log(typeof true);
// console.log(typeof 42);
// console.log(typeof 9007199254740992n);
// console.log(typeof "JavaScript");
// console.log(typeof Symbol("シンボル"));
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof ["配列"]);
// console.log(typeof {"key": "value"});
// console.log(typeof function(){});

// 基本的にtypeof演算子は、プリミティブ型またはオブジェクトかを判別するものです。
// オブジェクトの詳細な種類を判定できない

// const str = "こんにちは";
// console.log(str);

//10進数
// console.log(1);
// console.log(10);
// console.log(255);

//2進数
// console.log(0b1111);
// console.log(0b10000000000);

//8進数
// console.log(0o644);
// console.log(0o777);

//16進数
// console.log(0xFF);
// console.log(0xff);
// console.log(0x30a2);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(1n);
// console.log(9007199254740992n);
// console.log(1.2n);

// console.log(1_000_000_000_000);

// console.log('8 o\'clock');
// console.log(`8
// o'clock`);

// const str = "文字列";
// // console.log(`これは${str}です`);

// console.log(`これは\`${str}\`です`);

// const foo = null;
// console.log(foo);
// const obj = {
//   "key" : "value"
// };
// console.log(obj.key);
// console.log(obj["key"]);

// const obj = {
//   "123": "value"
// };
// console.log(obj["123"]);

// const emptyArray = [];
// const array = [1, 2, 3];

// const array = ["index:0","index:1","index:2"];
// console.log(array[0]);
// console.log(array[1]);

// const numberRegExp = /\d+/;
// console.log(numberRegExp.test("123"));

// const str = new String("あいうえお");
// console.log(typeof str);
// console.log(str.length);

// const str = "文字列";
// console.log(typeof str);
// console.log(str.length);

// // 1 + 2;
// let num = 1;
// // num++;
// ++num;
// console.log(num);
// console.log(1 + 1);
// console.log(10 + 0.5);
// const value = "マロン"　+ "グラッセ";
// console.log(value);
// console.log(1 - 1);
// console.log(10 - 0.5);
// console.log(2 * 8);
// console.log(10 * 0.5);
// 除算演算子から

// console.log(1 + 2);
// console.log(10 + 0.5);
// const value = "破壊的" + "衝動";
// console.log(value);
// console.log(1 - 1);
// console.log(10 - 0.5);
// console.log(2 * 8);
// console.log(10 * 0.5);
// console.log(8 / 2);
// console.log(10 / 0.5);
// console.log(8 % 2);
// console.log(9 % 2);
// console.log(10 % 0.5);
// console.log(10 % 4.5);

// console.log(2 ** 4);
// console.log(Math.pow(2, 3));
// console.log(+1);
// console.log(+"1");
// console.log(+"文字列");
// console.log(NaN === NaN);
// console.log(typeof NaN);
// console.log(Number.isNaN(NaN));
// console.log(-1);
// console.log(-(-1));
// console.log(-"1");
// console.log(-"文字列");
// let num = 1;
// num++;
// console.log(num);
// let x = 1;
// console.log(x++);
// console.log(x);

// let x = 1;
// console.log(++x);
// console.log(x);

// let num = 1;
// num--;
// console.log(num);

// let x = 1;
// console.log(x--);
// console.log(x);

// let x = 1;
// console.log(--x);
// console.log(x);

// console.log(1 === 1);
// console.log(1 === "1");

// const objA = {};
// const objB = {};
// console.log(objA === objB);
// console.log(objA === objA);

// console.log(1 !== 1);
// console.log(1 !== "1");

// console.log(1 == 1);
// console.log("str" == "str");
// console.log("JavaScript" == "ECMAScript");
// const objA = {};
// const objB = {};
// console.log(objA == objB);
// console.log(objA == objA);

// console.log(1 == "1");
// console.log(1 == "01");
// console.log(0 == false);
// console.log(0 == null);
// console.log(null == undefined);

// console.log(42 > 21);
// console.log(42 > 42);
// console.log(42 >= 42);
// console.log(42 >= 43);
// console.log(42 >= 21);

// const array =[1, 2];
// // console.log(array[1]);
// const[a, b] = array;
// console.log(a);
// console.log(b);

// const array = ["栗原", "takanori"];
// const[lName,fName] = array;
// console.log(lName);
// console.log(fName);

// const obj = {
//   "key": "value"
// };
// const{ key } = obj;
// console.log(key);

// console.log(true && "右辺の値");
// console.log(false && "右辺の値");
// true && console.log("このコンソールログは実行されます");
// false && console.log("このコンソールログは実行されません");

// const value = "11";
// if (typeof value === "string" && value === "11") {
//   console.log(`${value} is string value`);
// }

// console.log(true || "右辺の値");
// console.log(false || "右辺の値");
