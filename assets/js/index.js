var data1 = [
  {
    "question": "```javascript\nfunction a(x) {\n  x++;\n  return function () {\n    console.log(++x);\n  };\n}\n\na(1)();\na(1)();\na(1)();\n\nlet x = a(1);\nx();\nx();\nx();\n```\n\n",
    "answer": "B",
    "explain": "This question reminds us about Closure in JS. Closure allows us to create a `stateful function` and such function can access to variable outside of its scope. In a nutshell, a closure can have access to `global` variable (scope), `father function` scope and `its` own scope.\n\n\nWe have here 3, 3, 3 and 3, 4, 5 because first we simply call the function `a()`. It works like a normal function and we do not see something `stateful` here. In later case, we declare a variable `x` and it stores the value of function `a(1)`, that is why we get 3. 4. 5 rather than 3, 3, 3.\n\n\nThis kind of gotcha gives me the feeling of `static` variable in PHP world.\n\n\n",
    "optionStr": "- A: `1, 2, 3` and `1, 2, 3`\n- B: `3, 3, 3` and `3, 4, 5`\n- C: `3, 3, 3` and `1, 2, 3`\n- D: `1, 2, 3` and `3, 3, 3`\n\n",
    "options": [
      "`1, 2, 3` and `1, 2, 3`",
      "`3, 3, 3` and `3, 4, 5`",
      "`3, 3, 3` and `1, 2, 3`",
      "`1, 2, 3` and `3, 3, 3`"
    ]
  },
  {
    "question": "```javascript\nfunction Name(a, b) {\n  this.a = a;\n  this.b = b;\n}\n\nconst me = Name(\"Vuong\", \"Nguyen\");\n\nconsole.log(!(a.length - window.a.length));\n```\n\n",
    "answer": "C",
    "explain": "We get true in the console. The tricky part is when we create an object from the constructor function Name but we DO NOT USE `new` keywork. That makes the variable `a` global one and get the value \"Vuong\". Remember that it is actually a property of the global object `window` (in the browser) or `global` in the nodejs.\n\n\nWe then get `a.length` ~ 5 and `window.a.length` ~ 5 which return 0. !0 returns true.\n\n\nImagine what would happen when we create the instance `me` with the `new` keywork. That is an interesting inquire!\n\n\n",
    "optionStr": "- A: `undefined`\n- B: `NaN`\n- C: `true`\n- D: `false`\n\n",
    "options": [
      "`undefined`",
      "`NaN`",
      "`true`",
      "`false`"
    ]
  },
  {
    "question": "```javascript\nconst x = function (...x) {\n  let k = (typeof x).length;\n  let y = () => \"freetut\".length;\n  let z = { y: y };\n\n  return k - z.y();\n};\n\nconsole.log(Boolean(x()));\n```\n\n",
    "answer": "A",
    "explain": "The spread operator `...x` might help us obtain the parameter in the function in the form of array. Yet, in Javascript the typeof array return \"object\" rather than \"array\". It is totally odd if you are coming from PHP.\n\n\nThat is said, we now have the length of the string `object` which returns 6. z.y() simply returns the length of the string 'freetut' (7).\n\n\nBe aware that the function x() (in the form of `function express` or `anonymous function` (if you are coming from PHP) return -1 when being called and when converted to bool with `Boolean(-1)` return true instead of false. Noted that `Boolean(0)` return false.\n\n\n",
    "optionStr": "- A: `true`\n- B: 1\n- C: -1\n- D: `false`\n\n",
    "options": [
      "`true`",
      "1",
      "-1",
      "`false`"
    ]
  },
  {
    "question": "```javascript\n(function js(x) {\n  const y = (j) => j * x;\n\n  console.log(y(s()));\n\n  function s() {\n    return j();\n  }\n\n  function j() {\n    return x ** x;\n  }\n})(3);\n```\n\n",
    "answer": "C",
    "explain": "The function `js()` can be automatically executed without calling it and known as IIFE (Immediately Invoked Function Expression). Noted the parameter `x` of the function `js` is actuallly passed with the value 3.\n\n\nThe value return of the function is y(s())), meaning calling three other functions `y()`, `s()` and `j()` because the function `s()` returns `j()`.\n\n\nj() returns 3^3 = 27 so that s() returns 27.\n\n\ny(s()) means y(27) which returns 27\\*3 = 81.\n\n\nNote that we can call `declare function` BEFORE the function is actually declared but not with `expression function`.\n\n\n",
    "optionStr": "- A: `undefined`\n- B: 18\n- C: 81\n- D: 12\n\n",
    "options": [
      "`undefined`",
      "18",
      "81",
      "12"
    ]
  },
  {
    "question": "```javascript\nvar tip = 100;\n\n(function () {\n  console.log(\"I have $\" + husband());\n\n  function wife() {\n    return tip * 2;\n  }\n\n  function husband() {\n    return wife() / 2;\n  }\n\n  var tip = 10;\n})();\n```\n\n",
    "answer": "D",
    "explain": "We have here an IIFE (Immediately Invoked Function Expression). It means we do not have to call it but it will be excuted automatically when declared. The flow is as: husband() returns wife()/2 and wife() returns tip\\*2.\n\n\nWe might think that tip = 100 because it is a global variable when declaring with `var` keyword. However, it is actually `undefined` because we also have `var tip = 10` INSIDE the function. As the variable `tip` is hoisted with default value `undefined`, the final result would be D. We know that `undefined` returns NaN when we try to divide to 2 or multiple with 2.\n\n\nIf we do not re-declare `var tip = 10;` at the end of the function, we will definately get B.\n\n\nJS is fun, right?\n\n\n",
    "optionStr": "- A: \"I have \\$10\";\n- B: \"I have \\$100\";\n- C: \"I have \\$50\";\n- D: \"I have \\$NaN\";\n\n",
    "options": [
      "\"I have \\$10\";",
      "\"I have \\$100\";",
      "\"I have \\$50\";",
      "\"I have \\$NaN\";"
    ]
  },
  {
    "question": "```javascript\nconst js = { language: \"loosely type\", label: \"difficult\" };\n\nconst edu = { ...js, level: \"PhD\" };\n\nconst newbie = edu;\n\ndelete edu.language;\n\nconsole.log(Object.keys(newbie).length);\n```\n\n",
    "answer": "A",
    "explain": "This challenge revises the ES6's feature regarding `spread operator ...` Spread operator is quite useful for retrieving parameter in function, to `unite` or `combine` object and array in JavaScript. PHP also has this feature.\n\n\nIn the variable `edu`, we use `...js` (spread operator here) to combine both objects into one. It works in the same way with array.\n\n\nThen we declare another variable named `newbie`. IMPORTANT note: By declaring the variable like that, both variables point to the SAME POSITION in the memory. We may have known something like `$a = &$b` in PHP, which let both varibles work in the same way. We might have known about `pass by reference` in the case.\n\n\nThen we have 2 as `edu.language` is deleted. Both objects now have only two elements.\n\n\nNow is time to think about coping an object in JS either shallow or deep one.\n\n\n",
    "optionStr": "- A: 2;\n- B: 3;\n- C: 4;\n- D: 5;\n\n",
    "options": [
      "2;",
      "3;",
      "4;",
      "5;"
    ]
  },
  {
    "question": "```javascript\nvar candidate = {\n  name: \"Vuong\",\n  age: 30,\n};\n\nvar job = {\n  frontend: \"Vuejs or Reactjs\",\n  backend: \"PHP and Laravel\",\n  city: \"Auckland\",\n};\n\nclass Combine {\n  static get() {\n    return Object.assign(candidate, job);\n  }\n\n  static count() {\n    return Object.keys(this.get()).length;\n  }\n}\n\nconsole.log(Combine.count());\n```\n\n",
    "answer": "A",
    "explain": "The buit-in method `Object.assign(candidate, job)` merges the two objects `candidate` and `job` into one object. Then the method `Object.keys` counts the number of `key` in the object.\n\n\nNote that two methods `get()` and `count()` are defined as `static`, so they need to be called statically using `Class.staticmethod()` syntax. Then the final object get 5 elements.\n\n\n",
    "optionStr": "- A: 5;\n- B: 6;\n- C: 7;\n- D: 8;\n\n",
    "options": [
      "5;",
      "6;",
      "7;",
      "8;"
    ]
  },
  {
    "question": "```javascript\nvar x = 1;\n\n(() => {\n  x += 1;\n  ++x;\n})();\n((y) => {\n  x += y;\n  x = x % y;\n})(2);\n(() => (x += x))();\n(() => (x *= x))();\n\nconsole.log(x);\n```\n\n",
    "answer": "A",
    "explain": "Initially `x` is declared with the value 1. In the first IIFE function, there are two operations. First `x` becomes 2 and then 3.\n\n\nIn the second IIFE function, `x = x + y` then the current value is 5. In the second operation, it returns only 1 as it undergoes `5%2`.\n\n\nIn the third and fouth IIFE functions, we get 2 `x = x + x` and then 4 `x = x * x`. It is more than simple.\n\n\n",
    "optionStr": "- A: 4;\n- B: 50;\n- C: 2;\n- D: 10;\n\n",
    "options": [
      "4;",
      "50;",
      "2;",
      "10;"
    ]
  },
  {
    "question": "```php\n$var = 10;\n\n$f = function($let) use ($var) {\n    return ++$let + $var;\n};\n\n$var = 15;\necho $f(10);\n```\n\n```javascript\nvar x = 10;\n\nconst f = (l) => ++l + x;\n\nx = 15;\nconsole.log(f(10));\n```\n\n",
    "answer": "C",
    "explain": "This question illustrates the diffences between PHP and JavaScript when handling closure. In the first snippet, we declare a closure with the keyword `use`. Closure in PHP is simply an anonymous function and the data is passed to the function using the keyword `use`. Otherwise, it is called as `lambda` when we do not use the keyword `use`. You can check the result of the snippet here https://3v4l.org/PSeMY. PHP `closure` only accepts the value of the variable BEFORE the closure is defined, no matter where it is called. As such, `$var` is 10 rather than 15.\n\n\nOn the contrary, JavaScript treats the variable a bit different when it is passed to anonymous function. We do not have to use the keyword `use` here to pass variable to the closure. The variable `x` in the second snippet is updated before the closure is called, then we get 26.\n\n\nNote that in PHP 7.4, we have arrow function and we then do not have to use the keyword `use` to pass the variable to function. Another way to call a `global` ariable inside a function in PHP is to use the keyword `global` or employ the built-in GLOBAL variable \\$GLOBALS.\n\n\n",
    "optionStr": "- A: 26 and 26;\n- B: 21 and 21;\n- C: 21 and 26;\n- D: 26 and 21;\n\n",
    "options": [
      "26 and 26;",
      "21 and 21;",
      "21 and 26;",
      "26 and 21;"
    ]
  },
  {
    "question": "```javascript\nlet x = {};\nlet y = {};\nlet z = x;\n\nconsole.log(x == y);\nconsole.log(x === y);\nconsole.log(x == z);\nconsole.log(x === z);\n```\n\n",
    "answer": "D",
    "explain": "Technically, `x` and `y` have the same value. Both are empty objects. However, we do not use the value to compare objects.\n\n\n`z` is `x` are two objects referring to the same memory position. In JavaScript, array and object are passed by `reference`. `x` and `z` therefore return true when being compared.\n\n\n",
    "optionStr": "- A: true true true true;\n- B: false false false false;\n- C: true true false false;\n- D: false false true true;\n\n",
    "options": [
      "true true true true;",
      "false false false false;",
      "true true false false;",
      "false false true true;"
    ]
  },
  {
    "question": "```javascript\nconsole.log(\"hello\");\n\nsetTimeout(() => console.log(\"world\"), 0);\n\nconsole.log(\"hi\");\n```\n\n",
    "answer": "B",
    "explain": "Given that the function setTimeout() will be kept in the `task queue` before jumping back to `stack,` \"hello\" and \"hi\" will be printed first, then A is incorrect. That is also the case of the answers C and D.\n\n\nNo matter how many seconds you set to the `setTimeout()` function, it will run after synchronous code. So we will get \"hello\" first as it is put into the call stack first. Though the `setTimeout()` is then being put into the call stack, it will subsequently offload to web API (or Node API) and then being called when other synchronous codes are cleared. It means we then get \"hi\" and finally \"world\".\n\n\nSo B is the correct answer.\n\n\nCredit: @kaitoubg (voz) for your suggestion regarding the ` timeout throttled` by which I have decided to alter the question slightly. It will ensure that readers will not get confused as the previous code might bring out different results when tested on other browsers or environments. The main point of the question is about the discrepancy between the synchronous code and asynchronous code when using `setTimeout.`.\n\n\n",
    "optionStr": "- A: \"hello\" -> \"world\" -> \"hi\"\n- B: \"hello\" -> \"hi\"    -> \"world\"\n- C: \"hi\"    -> \"world\" -> \"hello\"\n- D: \"hi\"    -> \"hello\" -> \"world\"\n\n",
    "options": [
      "\"hello\" -> \"world\" -> \"hi\"",
      "\"hello\" -> \"hi\"    -> \"world\"",
      "\"hi\"    -> \"world\" -> \"hello\"",
      "\"hi\"    -> \"hello\" -> \"world\""
    ]
  },
  {
    "question": "```javascript\nString.prototype.lengthy = () => {\n  console.log(\"hello\");\n};\n\nlet x = { name: \"Vuong\" };\n\ndelete x;\n\nx.name.lengthy();\n```\n\n",
    "answer": "B",
    "explain": "`String.prototype.someThing = function () {}` is the common way to define a new built-in method for `String`. We can do the same thing with `Array`, `Object` or `FunctionName` where FunctionName is the function designed by ourself.\n\n\nThat is not challenging to realise that `\"string\".lengthy()` always returns `hello`. Yet, the tricky part lies in the `delete object` where we might think that this expression will entirely delete the object. That is not the case as `delete` is used to delete the property of the object only. It does not delete the object. Then we get `hello` rather than `ReferenceError`.\n\n\nNote that if we declare object without `let, const` or `var`, we then have a global object. `delete objectName` then return `true`. Otherwise, it always returns `false`.\n\n\n",
    "optionStr": "- A: \"Vuong\";\n- B: \"hello\";\n- C: \"undefined\"\n- D: \"ReferenceError\"\n\n",
    "options": [
      "\"Vuong\";",
      "\"hello\";",
      "\"undefined\"",
      "\"ReferenceError\""
    ]
  },
  {
    "question": "```javascript\nlet x = {};\n\nx.__proto__.hi = 10;\n\nObject.prototype.hi = ++x.hi;\n\nconsole.log(x.hi + Object.keys(x).length);\n```\n\n",
    "answer": "C",
    "explain": "First we have an empty object `x`, then we add another property `hi` for x with `x.__proto__.hi`. Note this is equivalent to `Object.prototype.hi = 10` and we are adding to the `father` object `Object` the property `hi`. It means every single object will inherit this propety. The property `hi` becomes a shared one. Say now we declare a new object such as `let y = {}`, `y` now has a propery `hi` inherited from the `father` `Object`. Put it simply `x.__proto__ === Object.prototype` returns `true`.\n\n\nThen we overwrite the property `hi` with a new value 11. Last we have 11 + 1 = 12. `x` has one property and `x.hi` returns 11.\n\n\n",
    "optionStr": "- A: 10\n- B: 11\n- C: 12\n- D: NaN\n\n",
    "options": [
      "10",
      "11",
      "12",
      "NaN"
    ]
  },
  {
    "question": "```javascript\nconst array = (a) => {\n  let length = a.length;\n  delete a[length - 1];\n  return a.length;\n};\n\nconsole.log(array([1, 2, 3, 4]));\n\nconst object = (obj) => {\n  let key = Object.keys(obj);\n  let length = key.length;\n  delete obj[key[length - 1]];\n\n  return Object.keys(obj).length;\n};\n\nconsole.log(object({ 1: 2, 2: 3, 3: 4, 4: 5 }));\n\nconst setPropNull = (obj) => {\n  let key = Object.keys(obj);\n  let length = key.length;\n  obj[key[length - 1]] = null;\n\n  return Object.keys(obj).length;\n};\n\nconsole.log(setPropNull({ 1: 2, 2: 3, 3: 4, 4: 5 }));\n```\n\n",
    "answer": "C",
    "explain": "This question examines how the `delete` operator works in JavaScript. In short, it does nothing when we write `delete someObject` or `delete someArray`. It nonetheless completely deletes and removes a property of an object when writing something like `delete someObject.someProperty`. In the case of array, when we write `delete someArray[keyNumber]`, it only removes the `value` of the `index`, keep the `index` intact and the new `value` is now set to `undefined`. For that reason, in the code first snippet, we get (the length) 4 elements as in the original array but only 3 properties left in the object passed when the function object() is called, as in the second snippet.\n\n\nThe third snippet gives us 4 as declaring an object's propery to either `null` or `undefined` does not completely remove the property. The key is intact. So the length of the object is immutable.\n\n\nFor those who are familiar with PHP, we have `unset($someArray[index])` that remove the array element, both key and value. When `print_r` the array, we might not see the key and value that have been unset. However, when we push (using `array_push($someArray, $someValue)`) a new element in that array, we might see that the previous key is still kept, but no value and not being displayed. That is something you should be aware of. Have a look at https://3v4l.org/7C3Nf\n\n\n",
    "optionStr": "- A: 333\n- B: 444\n- C: 434\n- D: 343\n\n",
    "options": [
      "333",
      "444",
      "434",
      "343"
    ]
  },
  {
    "question": "```javascript\nvar a = [1, 2, 3];\nvar b = [1, 2, 3];\n\nvar c = [1, 2, 3];\nvar d = c;\n\nvar e = [1, 2, 3];\nvar f = e.slice();\n\nconsole.log(a === b);\nconsole.log(c === d);\nconsole.log(e === f);\n```\n\n",
    "answer": "D",
    "explain": "`a` and `b` returns false because they point to different memory location even though the values are the same. If you are coming from PHP world, then it will return true obviously when we compare either value or value + type. Check it out: https://3v4l.org/IjaOs.\n\n\nIn JavaScript, value is passed by reference in case of `array` and `object`. Hence in the second case, `d` is the copy of `c` but they both point to the same memory position. Everything changes in `c` will result in the change in `d`. In PHP, we might have `$a = &$b;`, working in the similar way.\n\n\nThe third one gives us a hint to copy an array in JavaScript using `slice()` method. Now we have `f`, which is the copy of `e` but they point to different memory locations, thus they have different \"life\". We get `false` accordingly when they are being compared.\n\n\n",
    "optionStr": "- A: true true true\n- B: false false true\n- C: true true false\n- D: false true false\n\n",
    "options": [
      "true true true",
      "false false true",
      "true true false",
      "false true false"
    ]
  },
  {
    "question": "```javascript\nvar languages = {\n  name: [\"elixir\", \"golang\", \"js\", \"php\", { name: \"feature\" }],\n  feature: \"awesome\",\n};\n\nlet flag = languages.hasOwnProperty(Object.values(languages)[0][4].name);\n\n(() => {\n  if (flag !== false) {\n    console.log(\n      Object.getOwnPropertyNames(languages)[0].length <<\n        Object.keys(languages)[0].length\n    );\n  } else {\n    console.log(\n      Object.getOwnPropertyNames(languages)[1].length <<\n        Object.keys(languages)[1].length\n    );\n  }\n})();\n```\n\n",
    "answer": "64",
    "explain": "The code snippet is quite tricky as it has a couple of different built-in methods handling object in `JavaScript`. For example, both `Object.keys` and `Object.getOwnPropertyNames` are used even thought they are quite similar except that the latter can return non-enumerable properties. You might want to have a look at this thoroughly written reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames\n\n\n`Object.values` and `Object.keys` return the property value and property name of the object, respectively. That is nothing new. `object.hasOwnProperty('propertyName')` returns a `boolean` confirming whether a property exists or not.\n\n\nWe have `flag` true because `Object.values(languages)[0][4].name` returns `feature`, which is also the name of the property.\n\n\nThen we have 4 << 4 in the `if-else` flow that returns the bitwise value, equivalent to `4*2^4` ~ `4*16` ~ 64.\n\n\n",
    "optionStr": "- A: 8\n- B: NaN\n- C: 64\n- D: 12\n\n",
    "options": [
      "8",
      "NaN",
      "64",
      "12"
    ]
  },
  {
    "question": "```javascript\nvar player = {\n  name: \"Ronaldo\",\n  age: 34,\n  getAge: function () {\n    return ++this.age - this.name.length;\n  },\n};\n\nfunction score(greeting, year) {\n  console.log(\n    greeting + \" \" + this.name + `! You were born in  ${year - this.getAge()}`\n  );\n}\n\nwindow.window.window.score.call(window.window.window.player, \"Kiora\", 2019);\n\nscore.apply(player, [\"Kiora\", 2009]);\n\nconst helloRonaldo = window.score.bind(window.player, \"Kiora\", 2029);\n\nhelloRonaldo();\n```\n\n",
    "answer": "D",
    "explain": "We can use `call()`, `apply()` and `bind()` to appy a function to any object. At first sight, it seems that three functions do the same thing. Yet there are some situations where they are differently employed to handle respective contexts or solve particular problems.\n\n\nOf the three, only `bind()` can be executed after binding. We can create a variable to store the result as `helloRonaldo()` in the code snippet above. `apply()` and `call()` will bind and execute the function at the same time. `apply()` hints us `a` ~ array where we need to pass an array as parameter. `call()` hints us `c` or comma where we pass parameters with a comma. You might want to have a look at this post https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind\n\n\nNote that `window.window.window.score` or `window.score` or simply `score` do the same thing. It points to the `score()` function in the global scope.\n\n\nThe correct anwser is D. The `score()` and `getAge()` functions are nothing special.\n\n\n",
    "optionStr": "- A: \"Kiora Ronaldo! You were born in 1985\", \"Kiora Ronaldo! You were born in 1985\", \"Kiora Ronaldo! You were born in 1985\"\n- B: \"Kiora Ronaldo! You were born in 1991\", \"Kiora Ronaldo! You were born in 1991\", \"Kiora Ronaldo! You were born in 1999\"\n- C: \"Kiora Ronaldo! You were born in 1991\", NaN, \"Kiora Ronaldo! You were born in 1980\"\n- D: \"Kiora Ronaldo! You were born in 1991\", \"Kiora Ronaldo! You were born in 1980\", \"Kiora Ronaldo! You were born in 1999\"\n\n",
    "options": [
      "\"Kiora Ronaldo! You were born in 1985\", \"Kiora Ronaldo! You were born in 1985\", \"Kiora Ronaldo! You were born in 1985\"",
      "\"Kiora Ronaldo! You were born in 1991\", \"Kiora Ronaldo! You were born in 1991\", \"Kiora Ronaldo! You were born in 1999\"",
      "\"Kiora Ronaldo! You were born in 1991\", NaN, \"Kiora Ronaldo! You were born in 1980\"",
      "\"Kiora Ronaldo! You were born in 1991\", \"Kiora Ronaldo! You were born in 1980\", \"Kiora Ronaldo! You were born in 1999\""
    ]
  },
  {
    "question": "```javascript\nvar ronaldo = { age: 34 };\n\nvar messi = { age: 32 };\n\nfunction score(year, tr, t) {\n  if (typeof tr === \"function\" && typeof t === \"function\") {\n    console.log(`You score ${tr(year, t(this.age))} times`);\n  }\n}\n\nconst transform = (x, y) => x - y;\n\nconst title = (x) => ++x + x++;\n\nconst helloRonaldo = score.bind(ronaldo, 2029, transform, title);\n\nhelloRonaldo();\n\nconst helloMessi = score.bind(messi, 2029, transform, title);\n\nhelloMessi();\n```\n\n",
    "answer": "D",
    "explain": "`bind()` allows us to bind a function declared with any object. Here we bind `score()` and both `ronaldo` and `messi`.\n\n\nIn `score()` we pass three parameters `year`, `tr` and `t` in which both `tr` and `t` are function. They handle simple things as defined afterwards.\n\n\nWhen we bind `score()` with `ronaldo` and `messi`, we pass three parameters as declared in the `score()` function wherein `transform` and `title` are functions.\n\n\n",
    "optionStr": "- A: \"You score 1989 times\" and \"You score 1963 times\"\n- B: \"You score 1959 times\" and \"You score 1989 times\"\n- C: \"You score 1989 times\" and \"You score 1953 times\"\n- D: \"You score 1959 times\" and \"You score 1963 times\"\n\n",
    "options": [
      "\"You score 1989 times\" and \"You score 1963 times\"",
      "\"You score 1959 times\" and \"You score 1989 times\"",
      "\"You score 1989 times\" and \"You score 1953 times\"",
      "\"You score 1959 times\" and \"You score 1963 times\""
    ]
  },
  {
    "question": "```javascript\nvar person = {};\n\nObject.defineProperties(person, {\n  name: {\n    value: \"Vuong\",\n    enumerable: true,\n  },\n  job: {\n    value: \"developer\",\n    enumerable: true,\n  },\n  studying: {\n    value: \"PhD\",\n    enumerable: true,\n  },\n  money: {\n    value: \"NZD\",\n    enumerable: false,\n  },\n});\n\nclass Evaluate {\n  static checkFlag(obj) {\n    return Object.getOwnPropertyNames(obj) > Object.keys(obj)\n      ? Object.getOwnPropertyNames(obj)\n      : Object.keys(obj);\n  }\n}\n\nconst flag = Evaluate.checkFlag(person);\n\nconsole.log(flag.length);\n```\n\n",
    "answer": "D",
    "explain": "`Object.keys(obj)` is almost identical to `Object.getOwnPropertyNames(obj)` except the fact that the latter returns any type of object's property regardless of `enumerable`. By default `enumerable` is true when creating object. Using `Object.defineProperties` or `Object.defineProperty` we can manually set this option to `false`.\n\n\nAs such the object `person` will get 3 using`Object.keys(obj)`but 4 with `Object.getOwnPropertyNames(obj)`. `In short Object.keys(obj)` only returns the property setting the enumerable as `true`.\n\n\n",
    "optionStr": "- A: 1\n- B: 2\n- C: 3\n- D: 4\n\n",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    "question": "```javascript\nconst id = 10;\n\nconst getID = (...id) => {\n  id(id);\n\n  function id(id) {\n    console.log(typeof id);\n  }\n};\n\ngetID(id);\n```\n\n",
    "answer": "D",
    "explain": "When declaring a function inside another function, we are working with Closure in JavaScript. Note that if a function is declared as normal (rather than function expression), it is hoisted. We might see several `id` in the code snippet above but in fact, some of them does nothing.\n\n\nThe result of the code depending on the operator `typeof id`, which is `function`. So `id` in this operation is the `id()` function.\n\n\n",
    "optionStr": "- A: ReferenceError\n- B: 10\n- C: undefined\n- D: 'function'\n\n",
    "options": [
      "ReferenceError",
      "10",
      "undefined",
      "'function'"
    ]
  },
  {
    "question": "```javascript\nvar book1 = {\n  name: \"Name of the rose\",\n  getName: function () {\n    console.log(this.name);\n  },\n};\n\nvar book2 = {\n  name: { value: \"Harry Potter\" },\n};\n\nvar bookCollection = Object.create(book1, book2);\n\nbookCollection.getName();\n```\n\n",
    "answer": "A",
    "explain": "`Object.create` allows us to create an object which is based on another object. If we do not pass the second parameter - `book2` in this case - the `name` property of the object `bookCollection` will be `Name of the rose` inherited from the `book1`. It means we can provide additional properties when declaring object with `Object.create`.\n\n\n`bookCollection` has its own property `name` and another one inherited from `book1`. In this case its own property `name` will show up as it has higher priority. That is why we get 'Harry Potter'.\n\n\n",
    "optionStr": "- A: 'Harry Potter'\n- B: 'Name of the rose'\n- C: ReferenceError\n- D: Object object\n\n",
    "options": [
      "'Harry Potter'",
      "'Name of the rose'",
      "ReferenceError",
      "Object object"
    ]
  },
  {
    "question": "```javascript\n(() => {\n  const a = Object.create({});\n\n  const b = Object.create(null);\n\n  let f1 = a.hasOwnProperty(\"toString\");\n\n  let f2 = \"toString\" in b;\n\n  let result =\n    f1 === false && f2 === false\n      ? console.log((typeof a.toString()).length)\n      : console.log(b.toString());\n})();\n```\n\n",
    "answer": "D",
    "explain": "The two objects `a` and `b` are created using `Object.create()` operator. There is a bit of difference between them as `a` inherits from Object prototype but `b` is totally empty when we pass the `null` paramater. Yet `hasOwnProperty('toString')` always returns `false` neither `a` nor `b` given that `toString()` is not defined inside these objects. The method however is still available as it is inherited from Object prototype.\n\n\nBoth `f1` and `f2` return `false`. Note that we use `object.hasOwnProperty('key')` and `('key' in object)` to check the availability of a key in an object. There is a bit difference between the two as the latter also returns the key inherited. You might want to have a look here: https://stackoverflow.com/questions/455338/how-do-i-check-if-an-object-has-a-key-in-javascript\n\n\nThen `typeof a.toString()` returns `string`, which gives us 6 with the `.length` property.\n\n\nIf the syntax is odd to you, you might look for 'self-invoking function' and 'arrow function' in JavaScript.\n\n\n",
    "optionStr": "- A: ReferenceError\n- B: undefined\n- C: 0\n- D: 6\n\n",
    "options": [
      "ReferenceError",
      "undefined",
      "0",
      "6"
    ]
  },
  {
    "question": "```javascript\nlet promise = new Promise((rs, rj) => {\n  setTimeout(() => rs(4), 0);\n\n  Promise.resolve(console.log(3));\n\n  console.log(2);\n});\n\npromise\n  .then((rs) => {\n    console.log(rs ? rs ** rs : rs);\n    return rs;\n  })\n  .then((rs) => console.log(rs == 256 ? rs : rs * rs));\n```\n\n",
    "answer": "B",
    "explain": "We first declare a promise-based code with `let` and then call it. Given that `setTimeout()` is an asynchronous action, it will run last even the time is set to 0 in `setTimeout(() => rs(4), 0);`. Although `Promise.resolve(console.log(3))` also returns a promise but it is a Microtasks, then it has a higher priority than Tasks as set by `setTimeout()`. You might want to have a look at this post https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/.\n\n\nIn `.then()` we chain the result so that we have `4^4` in the first then() and `4*4` in the second `then()`. Note that `return rs` returns the original value.\n\n\n",
    "optionStr": "- A: 3, 2, 256, 256\n- B: 3, 2, 256, 16\n- C: 256, 16, 3, 2\n- D: 16, 256, 3, 2\n\n",
    "options": [
      "3, 2, 256, 256",
      "3, 2, 256, 16",
      "256, 16, 3, 2",
      "16, 256, 3, 2"
    ]
  },
  {
    "question": "```javascript\nasync function f() {\n  let promise = new Promise((resolve, reject) => {\n    setTimeout(() => resolve(\"done!\"), 0);\n  });\n\n  setTimeout(() => console.log(\"world\"), 0);\n\n  console.log(await promise);\n\n  console.log(\"hello\");\n}\n\nf(setTimeout(() => console.log(\"kiora\"), 0));\n```\n\n",
    "answer": "D",
    "explain": "Though we do not declare any paramater for the function `f()`, we pass `setTimeout(()=>console.log(\"kiora\"),0)` when call it. We therefore get 'kiora' first.\n\n\nGiven that the variable `promise` returns a solved promise and it is called with the keyword `await`, JavaScript will 'pause' at this line `console.log(await promise);` till the result is resolved. That is why we get \"done\" at the next result.\n\n\nWhy we do not get \"world\" or \"hello\" at the second ? As JavaScript \"pauses\" at the line with `await` keyword, we cannot get \"hello\" as usual (note that whenever we call setTimeout(), this function will run last because it is an asynchronous task operator), whereas `setTimeout(()=> console.log(\"world\"), 0);` should always run last.\n\n\nHere we might see a bit of difference when employing `await` keyword before asynchronous operator (in this case, we use `setTimeout()` as an example) or when call the function/operator without it.\n\n\n",
    "optionStr": "- A: ReferenceError\n- B: done, hello, world\n- C: hello, done, world\n- D: kiora, done, hello, world\n\n",
    "options": [
      "ReferenceError",
      "done, hello, world",
      "hello, done, world",
      "kiora, done, hello, world"
    ]
  },
  {
    "question": "```javascript\nfunction name() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(\"New Zealand\");\n    }, 10);\n  });\n}\n\nfunction fruit() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(\"Kiwi\");\n    }, 20);\n  });\n}\n\n(async function countryandfruit() {\n  const getName = await name();\n  const getFruit = await fruit();\n\n  console.log(`Kiora: ${getName} ${getFruit}`);\n})();\n\n(async function fruitandcountry() {\n  const [getName, getFruit] = await Promise.all([name(), fruit()]);\n\n  console.log(`Hello: ${getName} ${getFruit}`);\n})();\n```\n\n",
    "answer": "C",
    "explain": "Both `countryandfruit` and `fruitandcountry` are self invoking functions. Both are declared with the keyword `async`, it means the code inside will run step by step. It helps us control the flow of data much more concise as compared to Promise-based operator or callback way.\n\n\nThe first function returns `\"Kiora: New Zealand Kiwi\"` and the second one ouputs `\"Hello: New Zealand Kiwi\"`. We might think that the order will be the same but actually the order of the result is reversed because the function with `await` keyword will run step by step rather than in in parallel as Promise.all. It means `fruitandcountry` will run faster than `countryandfruit`.\n\n\nYou might want to have a look at the difference between the two at https://alligator.io/js/async-functions/\n\n\n",
    "optionStr": "- A: Null\n- B: Kiora\n- C: \"Hello: New Zealand Kiwi\" -> \"Kiora: New Zealand Kiwi\"\n- D: \"Kiora: New Zealand Kiwi\" -> \"Hello: New Zealand Kiwi\"\n\n",
    "options": [
      "Null",
      "Kiora",
      "\"Hello: New Zealand Kiwi\" -> \"Kiora: New Zealand Kiwi\"",
      "\"Kiora: New Zealand Kiwi\" -> \"Hello: New Zealand Kiwi\""
    ]
  },
  {
    "question": "```javascript\nclass MySort {\n  constructor(object) {\n    this.object = object;\n  }\n\n  getSort() {\n    return Object.entries(this.object)[0][1].sort()[\n      Object.values(this.object).length\n    ];\n  }\n}\n\nconst object = {\n  month: [\"July\", \"September\", \"January\", \"December\"],\n};\n\nconst sortMe = new MySort(object);\n\nconsole.log(sortMe.getSort());\n```\n\n",
    "answer": "C",
    "explain": "`Object.entries` returns an array consisting of both key and value from an object while `Object.values` retuns an array of the values of object and `Object.keys` gives us an array of keys of the object. As such, `Object.entries(object)` in the code snippet above gives us a nested array with just one element in which the values are put in another nested array like that `[[\"month\", [\"July\", \"September\", \"January\", \"December\"]]]`.\n\n\nFor that reason, `Object.entries(this.object)[0][1].sort()` will actually sort the value array and return a new order as \"December\" -> \"January\" -> \"July\" -> \"September\". Hence, when we get the element with the index given by `[Object.values(this.object).length]` we get `January` because `[Object.values(this.object).length]` give us 1 (the length of the array given by Object.values);\n\n\n",
    "optionStr": "- A: July\n- B: September\n- C: January\n- D: December\n\n",
    "options": [
      "July",
      "September",
      "January",
      "December"
    ]
  },
  {
    "question": "```javascript\nconst flag = [] !== !!!!![];\n\nlet f = () => {};\n\nconsole.log((typeof f()).length + flag.toString().length);\n```\n\n",
    "answer": "C",
    "explain": "Comparing two arrays or two objects in JavaScript always return `false` because both are passed by reference, unlike primitive types such as string, number or boolean. That is why comparing [] and [] using either == or === returns `false`. The weird part is the `!==!!!!!` which is equivalent to `!==`, nothing special. So the `flag` is `true`.\n\n\nIn the expression function `f()`, we use arrow function here but and `{}` is a part of the function rather than an object. In case you want to return an object, you have to write as `let f = () => ({})` or simply using normal way to define function. With the keyword `return`, we can easily catch the content of the function when using normal way to define function.\n\n\nThus, the `typeof f()` returns `undefined` rathern `object`. We then get the length 9 and the flag (true) becomes 'true' (a string, by using toString() function), which returns 3 with the property `length`. We finally get 13.\n\n\n",
    "optionStr": "- A: NaN\n- B: 12\n- C: 13\n- D: 14\n\n",
    "options": [
      "NaN",
      "12",
      "13",
      "14"
    ]
  },
  {
    "question": "```javascript\n(function (a, b, c) {\n  arguments[2] = (typeof arguments).length;\n  c > 10 ? console.log(c) : console.log(++c);\n})(1, 2, 3);\n```\n\n",
    "answer": "D",
    "explain": "We have a self-invoking function with three parameters declared. Note that `arguments` inside a function returns an object consisting of the parameters of the function.\n\n\nThe key part here is that when we assign a value to that array (it is array-like, as mentioned above) (or any element), the function will use that value rather than the value from the parameter we pass to it when calling the function. Hence, `c` will be `(typeof arguments).length;` (6) rather than 3.\n\n\nAs `c` has a new value of 6, it is definitely less than 10, so we get the final result `console.log(++c)`, which returns 7.\n\n\nNote that `arguments` is not available on arrow functions. See more detailed here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments\n\n\nFrom ES6 onwards, it is recommended to use ...restParameter given that it is a true array. It means you can manipulate the parameter with native JavaScript functions such as map, reduce or filter.\n\n\nFor PHP developer, we have `func_get_args()` in PHP that does the same thing, but it will not override the value passed. Check it by yourself at https://3v4l.org/dMfhW\n\n\n",
    "optionStr": "- A: 4\n- B: 5\n- C: 6\n- D: 7\n\n",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ]
  },
  {
    "question": "```javascript\nclass Calculator {\n  constructor(a, b) {\n    this.a = a;\n    this.b = b;\n  }\n  static getFlag() {\n    return new Array(this.a).length == new Array(this.b).toString().length;\n  }\n\n  getValue() {\n    return Calculator.getFlag() ? typeof this.a : typeof new Number(this.b);\n  }\n}\n\nconst me = new Calculator(5, 5);\n\nconsole.log(me.getValue());\n```\n\n",
    "answer": "C",
    "explain": "We have a class named Calculator. When declaring a new instance of the object, we pass two parameters `a` and `b`. These two parameters have the same value but `new Array(this.a).length` is totally different from `new Array(this.b).toString().length` because the latter returns a string `\",,,,\"` meaning the length 4 while the former returns the length of an array and we therefore get 5.\n\n\nFor that reason `getFlag()` returns `false`. In `getValue()` we get `typeof new Number(this.b);` which returns `object`. That is a bit different from `typeof b`, which returns `number`.\n\n\n",
    "optionStr": "- A: NaN\n- B: \"string\"\n- C: \"object\"\n- D: \"number\"\n\n",
    "options": [
      "NaN",
      "\"string\"",
      "\"object\"",
      "\"number\""
    ]
  },
  {
    "question": "```javascript\nvar name = \"Auckland\";\n\nconst nz = {\n  name: \"Kiwi\",\n\n  callMe: function () {\n    return this.name;\n  },\n};\n\nlet me = nz.callMe;\n\nlet she = nz.callMe.bind(nz);\n\nlet result = me() === nz.callMe() ? she() : `${me()} ${she()}`;\n\nconsole.log(result);\n```\n\n",
    "answer": "D",
    "explain": "The key point in this question involves the keyword `this` in JavaScript. We have a simple object that contains one method and one string property `name`.\n\n\nFirst, it is important to write down is that `let me = nz.callMe;` and then call `me()` is totally different from directly calling `nz.callMe()`. If we assign a variable to a method delared inside an object, `this` in that method will behave differently (when we call the variable as a method and when dirrectly call that method). In particular, in the first case, `this` is the `window` object while in the second one, `this` inside the function still points to property `name` in the object `nz`. It means `me()` returns \"Auckland\" while `nz.callMe` returns \"Kiwi\".\n\n\nThen `result` will return `false` and we get the final output value `${me()} ${she()}`. Why `she()` is different from `me()`? You might easily guess that `she` still `bind` to the object `nz` rather than `window` object as in `me()`.\n\n\n",
    "optionStr": "- A: undefined\n- B: \"Auckland\"\n- C: \"Kiwi\"\n- D: \"Auckland Kiwi\"\n\n",
    "options": [
      "undefined",
      "\"Auckland\"",
      "\"Kiwi\"",
      "\"Auckland Kiwi\""
    ]
  },
  {
    "question": "```javascript\nconst club = {\n  name: \"Juventus\",\n  player: [\"Ronaldo\"],\n  showMePlayer: function () {\n    this.player.map(function (thename) {\n      console.log(this.name.length);\n    }, this);\n  },\n  showMe: function () {\n    this.player.forEach(\n      function (thename) {\n        console.log(this.name.length);\n      }.bind(this)\n    );\n  },\n  show: function () {\n    const self = this;\n    this.player.map(function (thename) {\n      console.log(self.name.length);\n    });\n  },\n  Me: function () {\n    this.player.map(function (thename) {\n      console.log(this.name.length);\n    });\n  },\n};\n\nclub.showMePlayer();\nclub.showMe();\nclub.show();\nclub.Me();\n```\n\n",
    "answer": "D",
    "explain": "The code snippet above is not a big challenge for you I guess. It simply gives you an example of `this` in different contexts when we declare an anonymous function inside a method of an object. The three first methods are common ways to handle `this` using `this` as second parameter in `map()`, by using `bind(this)` in `forEach` (or map()) or by `that = this`technique (we did use `seft` rathern `that`).\n\n\nThe last method `Me()` will cause unexpected result because `this.name` does not bind to the object `club`. Note that you might get another result when testing the code on jsbin.com. On Chrome and Firefox, we get 0.\n\n\nFor further information, kindly have a look at http://speakingjs.com/es5/ch17.html#_pitfall_losing_this_when_extracting_a_method\n\n\n",
    "optionStr": "- A: 8 - 8 - 8 - 8\n- B: \"Juventus\" - \"Juventus\" - \"Juventus\" - \"Juventus\"\n- C: \"Ronaldo\" - \"Ronaldo\" - \"Ronaldo\" - \"Ronaldo\"\n- D: 8 - 8 - 8 - 0\n\n",
    "options": [
      "8 - 8 - 8 - 8",
      "\"Juventus\" - \"Juventus\" - \"Juventus\" - \"Juventus\"",
      "\"Ronaldo\" - \"Ronaldo\" - \"Ronaldo\" - \"Ronaldo\"",
      "8 - 8 - 8 - 0"
    ]
  },
  {
    "question": "```javascript\n((...a) => {\n  const b = [\"javascript\", \"new zealand\"];\n\n  const c = [...a, typeof a, ...b, \"kiwi\"];\n\n  console.log(c.length + c[0].length);\n})(new Array(10));\n```\n\n",
    "answer": "C",
    "explain": "`...` can be used in two ways in JavaScript (and PHP) as either `spread operator` or `rest parameter`. You might have to check the following article about the two. They are the same as three dots, but the way they are employed vary considerably between the two. https://javascript.info/rest-parameters-spread-operator\n\n\nWe see both `spread operator` and `rest parameter` in the code snippet above. First the parameter `(...a)` in the self-invoking function is of course a `rest parameter` while the constant `c` we see the `spread operator`. In the former case, it simply means that you can pass to the function as many parameter as you want. Note that the `typeof a` in this case is `object` even though it is a native array in JavaScript. (I means native array because you might think about array-like if we use arguments. Please have a look at the question 28 or this link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments).\n\n\n`Spread operator` as in the constant `c` allows us to combine array. So `...a` in the code above is `rest parameter` when it is used as function parameter but in this case it is the syntax of `spread operator`.\n\n\nFinally, we get `c` with 5 elements (`...a` is a nested array, so the `length` is 1) but the first element has 10 child elements (when we pass to the function `new Array(10)`). The length of both then returns 15.\n\n\n",
    "optionStr": "- A: 5\n- B: 10\n- C: 15\n- D: 20\n\n",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ]
  },
  {
    "question": "```javascript\nfunction Kiora(name, ...career) {\n  this.name = name;\n\n  return Array.isArray(career) === true && typeof career === \"object\" ? {} : \"\";\n}\n\nvar student = new Kiora(\"Vuong\");\n\nconsole.log(student.name);\n```\n\n",
    "answer": "B",
    "explain": "We have a function constructor `Kiora` (written with a capital letter, but that is optional) that can be used to create object, as the `student` object in the code above. In the function, we have two parameters with the second one is actually a `rest parameter`. The typeof operator is `object` but if we check with `Array.isArray(array)` it also returns true.\n\n\nFor that reason, `Array.isArray(career) === true && typeof career === \"object\"` returns true. Hence the `return` operator finally returns an object `{}`.\n\n\nYou might be surprised when `console.log(student.name);` outputs `undefined` given that the constructor function `Kiora` returns an object. Otherwise, we might simply get the value `name`.\n\n\n",
    "optionStr": "- A: \"Vuong\"\n- B: undefined\n- C: ErrorReference\n- D: false\n\n",
    "options": [
      "\"Vuong\"",
      "undefined",
      "ErrorReference",
      "false"
    ]
  },
  {
    "question": "```javascript\nclass Filter {\n  constructor(element) {\n    this.element = element;\n  }\n  filter() {\n    return this.type() === \"object\" ? this.element[0].name : \"hello\";\n  }\n\n  type() {\n    return typeof this.element;\n  }\n}\n\nlet countries = [\n  { name: \"New Zealand\", isdeveloped: true },\n  { name: \"Vietnam\", isdeveloped: false },\n];\n\nlet x = new Filter(countries);\n\nconst filter = countries.filter((item) => {\n  return !item.isdeveloped;\n});\n\nconsole.log(x.filter().length + filter[0].name.length);\n```\n\n",
    "answer": "D",
    "explain": "Apologize that the code snippet is a bit longer than usual. But actually it is not really challenging as you might think. You can easily get the correct result after spending a little of time to debug.\n\n\nFirst we declare a class that has two methods. The first method `filter()` will returns the first element of the array (of the propterty `element`) or simply returns `hello` depending on the `type()` method. We know that `typeof of array` will return `object` so the `filter()` method return `this.element[0].name`.\n\n\nTry to make you feel confused, we then call the built-in `filter()` method. This native method returns a new array depending on the condition we pass to the call-back function. Note that `!item.isdeveloped` means `false`. It means we get `Vietnam`.\n\n\nFinally we get `New Zealand`.length and `Vietnam`.length, which in total returns 18.\n\n\n",
    "optionStr": "- A: 15\n- B: 16\n- C: 17\n- D: 18\n\n",
    "options": [
      "15",
      "16",
      "17",
      "18"
    ]
  },
  {
    "question": "```javascript\nasync function abc() {\n  console.log(8);\n\n  await Promise.resolve(2).then(console.log);\n\n  console.log(3);\n}\n\nsetTimeout(() => {\n  console.log(1);\n}, 0);\n\nabc();\n\nqueueMicrotask(() => {\n  console.log(0);\n});\n\nPromise.resolve(4).then(console.log);\n\nconsole.log(6);\n```\n\n",
    "answer": "D",
    "explain": "D is correct anwser. The order of the asynchronous code's output depends on the MicroTask or MacroTask. MicroTask has a higher priority. Note that the synchronous code always be executed before asynchronous code. So in essense, we have the order as follows:\n\n\n```\n  1) synchronous code\n  2) microtask code (promise, queueMicrotask)\n  3) macrotask code (setTimeout, setInterval)\n```\n\nBe awared that in Nodejs environment, we also have `process.nextTick(callback)` which has the highest priority but we dont have it in this code.\n\n\nSo, first callback in the `setTimeout()` will be executed last given that this is a MacroTask. That is why we got 1 last.\n\n\nSecond, the function `abc()` is called next. Then we have 8 printed out in the console first. As the next line of code inside that function is an asynchrnous code with the keyword \"await\", we then `console.log(6)` as `Promise.resolve(4).then(console.log)` is an asynchrnous code. That is why we got 6.\n\n\nNow is the time for `Promise.resolve(2)`, so we get 2. At this point, you might have some sort of confusion. What will happend if we do not pass the keyword \"await\" before `Promise.resolve(2)` ?\n\n\nAs we have `await`, the code will be blocked here. Then what? We get 0 and 4 not 3. `Promise` and `queueMicrotask` are both microtask and they are already to run before `console.log(3)`. The reason is that microtask queue need to be emptied before any other codes can be called in the callstack.\n\n\nIn the next step, we get 3 and the last one is 1.\n\n\nWhat would happend if we do not have the `await` keyword? Then the order of the output will be 8 - 3 - 6 - 2 - 0 - 4 -1.\n\n\n",
    "optionStr": "- A: 6 - 8 - 3 - 0 - 4 - 2 - 1\n- B: 8 - 2 - 3 - 0 - 4 - 6 - 1\n- C: 6 - 8 - 2 - 0 - 4 - 3 - 1\n- D: 8 - 6 - 2 - 0 - 4 - 3 - 1\n\n",
    "options": [
      "6 - 8 - 3 - 0 - 4 - 2 - 1",
      "8 - 2 - 3 - 0 - 4 - 6 - 1",
      "6 - 8 - 2 - 0 - 4 - 3 - 1",
      "8 - 6 - 2 - 0 - 4 - 3 - 1"
    ]
  },
  {
    "question": "```javascript\nfunction myAccount(money) {\n  let myMoney = money;\n\n  return {\n    status: function () {\n      return `You have $ ${myMoney} in your account`;\n    },\n    dePoSit: function (amount) {\n      myMoney = myMoney + amount;\n    },\n    withDraw: function (amount) {\n      if (amount > myMoney) {\n        return `You cannot withdraw money now`;\n      }\n      myMoney = myMoney - amount;\n    },\n  };\n}\n\nconst vuong = myAccount(1000);\n\nvuong.withDraw(500);\n\nvuong.withDraw(200);\n\nvuong.dePoSit(100);\n\nvuong.withDraw(50);\n\nconsole.log(vuong.status());\n```\n\n",
    "answer": "D",
    "explain": "As the \"state\" of the data is preserved each time we call `dePoSit()` or `withDraw()`, hence we get \\$350 after all.\n\n\nNoted that that is a kind of \"factory\" function with \"preload\" data. You might think about another object when pass to `myAccount(somedata);` some other data. That is a really helpful way to create multiple objects from a factory function.\n\n\n",
    "optionStr": "- A: \"You have \\$ 950 in your account\"\n- B: \"You have \\$ 1000 in your account\"\n- C: \"You have \\$ 550 in your account\"\n- D: \"You have \\$ 350 in your account\"\n\n",
    "options": [
      "\"You have \\$ 950 in your account\"",
      "\"You have \\$ 1000 in your account\"",
      "\"You have \\$ 550 in your account\"",
      "\"You have \\$ 350 in your account\""
    ]
  },
  {
    "question": "```javascript\nconst hoccoban = {\n  x: \"youtube.com/hoccoban\".length,\n  getMe() {\n    const inner = function () {\n      console.log(++this.x);\n    };\n    inner.bind(this)();\n  },\n};\n\nhoccoban.getMe();\n```\n\n",
    "answer": "B",
    "explain": "We get 21. First \"youtube.com/hoccoban\" returns 20 as we are using the property length of the string. Then it is being added one more value in `++this.x`. The question here seems trivial but it is actually not. There is a crucial note we should keep in mind is that `console.log(++this.x)` will not work as `x` is undefined when it is called outside of the object.\n\n\nWe can solve the problem with `this` in this case by using arrow function in the inner so that is can become something like `const inner = () => {}` as the arrow function does not actually have `this`. It will automatically look around and call the available object when the function is executed.\n\n\nThe second solution is that we can somehow \"bypass\" the tricky `this` by using that/this solution. We just need to declare a new variable `const that = this` inside getMe() and before declaring inner function. That is a quite common practice.\n\n\nThe third solution is to take advantage of call(), bind() and apply() which are native methods of function (yes, function is also an object in JavaScript). In this case, we implement `bind(this)` to \"bind\" the function and the object so that `this` can actually point to the object when the function is executed. Note that bind() cannot be instantlly executed so that we need to add () after we bridge the function and the object. If we replace bind() with call(), then we do not need to pass () as in the above example. So `inner.bind(this)();` will become `inner.call(this);`. They are technically equal. In practice, we tend to create a new variable to get the result from the binding of the function and the object.\n\n\n",
    "optionStr": "- A: 20\n- B: 21\n- C: 22\n- D: 23\n\n",
    "options": [
      "20",
      "21",
      "22",
      "23"
    ]
  },
  {
    "question": "```javascript\nfunction* hocCoBan() {\n  yield \"js.edu.vn\";\n  yield \"youtube.com/hoccoban\";\n  yield \"Vuong Nguyen\";\n}\n\nlet data = hocCoBan();\n\nconsole.log((typeof data).length + data.next().value.length);\n```\n\n",
    "answer": "D",
    "explain": "First, take a closer look at the function. It has a asterisk (\\*) next to the keyword \"function\". We do not have `return` keyword inside the function itself. What is going on here?\n\n\nIt you have already known about generator, then this code snippet is not a big deal at all. We do not use generator very often, but this native JavaScript feature is the basis for async/await function, which is supported in ES7 that allows us to handle the flow of asynchronous code much easily.\n\n\nThe operator `typeof data` will return `object` rather than `function`, which is the same case with `typeof hocCoBan()`. Of course, `typeof hocCoBan` still returns `function`. But it is actually a normal function. Basically, we get 6 in the operator `(typeof data).length`.\n\n\nThen `data.next()` calls the the built-in method `next()` which will output the value in the first `yield`, which is declared in the function. Then we get the length 9 with the string `js.edu.vn`.\n\n\nAfter all, we get 15. Not that understanding generator is quite important if you really want to understand `async/await` function.\n\n\n",
    "optionStr": "- A: NaN\n- B: 10\n- C: Error\n- D: 15\n\n",
    "options": [
      "NaN",
      "10",
      "Error",
      "15"
    ]
  },
  {
    "question": "```javascript\nconst a = [1, 2, \"chó\", 3, 1, \"chó\", \"mèo\", 3];\n\nconst b = [...new Set(a)];\n\nb.length = \"chó\".length;\n\nconsole.log(b);\n```\n\n",
    "answer": "D",
    "explain": "When using ... in array, it is called spread operator in JavaScript which, technically, is similar to rest parameter (using in the context of function). It provides a more elegant way to concat (combine) or copy array. In the code above, b is a copy of a. However, as we pass a in to a `Set`, it will return the unique value only in a. It means, now we have `[1, 2, \"chó\", 3, \"mèo\"] in b.\n\n\nHowever, we then set the length for b as 3. Note that \"chó\".length returns 3 but in PHP, strlen(\"chó\") returns 4, just in case you are coming from PHP world.\n\n\nAs we set the length for the array b, we also cut down the array itselt. That is the reason why we get [1, 2, \"chó\"] printing out in the console.\n\n\n",
    "optionStr": "- A: 4\n- B: [1, 2, \"chó\", 3, \"mèo\"]\n- C: [1, 2, \"chó\", \"mèo\"]\n- D: [1, 2, \"chó\"]\n\n",
    "options": [
      "4",
      "[1, 2, \"chó\", 3, \"mèo\"]",
      "[1, 2, \"chó\", \"mèo\"]",
      "[1, 2, \"chó\"]"
    ]
  },
  {
    "question": "```javascript\nconst mot = function (m) {\n  return arguments[0];\n};\n\nconst hai = function (...m) {\n  return arguments[arguments[0]];\n};\n\nconst a = [mot(123), hai(1, 2, 3)];\n\nconsole.log(typeof a !== \"object\" ? a[0] : a[1]);\n```\n\n",
    "answer": "B",
    "explain": "First, it should be noted that `arguments` cannot be used in an arrow function, so in order to take advantage of this feature, we have to write the function in the casual form. `arguments` returns an array-like object that contains any parameter we pass into the function when executing it.\n\n\n`...` is a `rest operator`. We use this feature in function and array. Noted that in the context of array, it is called `spread operator` and it behaves differently. When declaring a function with ..., we can pass as many parameters into the function itselt when executing it as we want.\n\n\nNote that in the function `hai`, we return `arguments[arguments[0]]` which means `hai(1, 2, 3)` will return 2 rathern than 1 because `arguments[0]` return 1 and then `arguments[1]` returns 2.\n\n\nThe last thing we have to take note is that the typeof operator of an array will return `object`, here the trick seems more daunting. The final anwser is 2 as we got it in `a[1]`, or `hai(1, 2, 3)`.\n\n\n",
    "optionStr": "- A: 1\n- B: 2\n- C: 3\n- D: 123\n\n",
    "options": [
      "1",
      "2",
      "3",
      "123"
    ]
  },
  {
    "question": "```javascript\nclass Component {\n  constructor(age) {\n    this.age = age + `${typeof Coder}`.length;\n  }\n\n  getAge() {\n    return ++this.age;\n  }\n}\n\nclass Coder extends Component {\n  constructor(age) {\n    super(age);\n    this.age = age - `${typeof Coder}`.length;\n  }\n}\n\nconst a = new Coder(16);\n\nconsole.log(a.getAge());\n```\n\n",
    "answer": "C",
    "explain": "We have two simple classes in which Coder extends Component. Nothing fancy. As `typeof ClassName` returns `function` rather than `class`, we then get 8 in the operator `\"function\".length`.\n\n\nThough we implement `super(age)` in the Coder class, we actually overwrite the contructor of the parent class Component in the child class Coder. Therefore, when initiating the object `a`, the following code is automatically triggered `this.age = age -`\\${typeof Coder}`.length;`. The difference between the child and parent 's constructor is minus (-) and plus (+) in the above code.\n\n\nAs such, we have 16 - 8 rather than 16 + 8, which returns 8. The function `getAge()` returns 9, so the corrent answer is C.\n\n\nBear in mind that JavaSCript is not a \"real\" OOP programming language even though we can now implement `class` and `object` as in other languages.\n\n\n",
    "optionStr": "- A: 7\n- B: 8\n- C: 9\n- D: 10\n\n",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ]
  },
  {
    "question": "```javascript\nclass RemoveFalse {\n  constructor(element) {\n    this.element = element;\n\n    this.length = this.removeFalse().length;\n  }\n\n  removeFalse() {\n    this.element = this.element.filter(Boolean);\n\n    return this.element;\n  }\n}\n\nconst theArray = [true, false, 1, 0, NaN, undefined, \"\", null, \"js.edu.vn\"];\n\nconst a = new RemoveFalse(theArray);\n\nconsole.log(a.length);\n```\n\n",
    "answer": "D",
    "explain": "The key message that can be taken away in the code snippet above is `filer(Boolean)` which can be taken into consideration in case you want to eliminate `falsy values` in an array. We can use `filter(callback)` or `filter(Boolean)` in particular in this case to do that. Note that we have to pass into the filter function a callback and in this case Boolean is actually a function. You can check `typeof Boolean` to see it.\n\n\nSimilar to `map` or `reduce` function, `filter` always returns a new array from the exisiting one. `[true, false, 1, 0, NaN, undefined, \"\", null, \"js.edu.vn\"].filter(Boolean);` will return `[true, 1, \"js.edu.vn\"];`, hence calling the function `removeFalse()` gives us 3. So the correct answer is 3.\n\n\n",
    "optionStr": "- A: false\n- B: true\n- C: 2\n- D: 3\n\n",
    "options": [
      "false",
      "true",
      "2",
      "3"
    ]
  },
  {
    "question": "```javascript\nconst coderfarm = [1, [], {}, [], 2, 3];\n\nconst converted = Number(coderfarm instanceof Array);\n\nconst result = coderfarm.indexOf(converted + true);\n\nconsole.log(result);\n```\n\n",
    "answer": "D",
    "explain": "We have a simple array in the code snippet above that includes some digits, two other arrays and one object. Using the built-in function `Number`, we can convert any value passing to the function into `digit`. As `coderfarm instanceof Array` returns `true`, then `converted` get 1. Noted that you can use another way to check the type of an array is `Array.isArrray(arrayToBeChecked)` which return a `boolean` value. Suprisingly, the operator `typeof []` returns `object` rather than `array`.\n\n\nThe built-in function `indexOf` will return the index of the element that is being checked. So as `converted + true` return 2, we are going to check the index of the element with the value 2 in the array `coderfarm`.\n\n\nWe get 4 in the `console.log` and the correct answer is D.\n\n\n",
    "optionStr": "- A: []\n- B: {}\n- C: 2\n- D: 4\n\n",
    "options": [
      "[]",
      "{}",
      "2",
      "4"
    ]
  },
  {
    "question": "```javascript\nconst converter = (arrayInput) => {\n  return { ...arrayInput };\n};\n\nconst content = [\"function\", \"object\", \"decorator\"];\n\nconst checking = content[Number(false)];\n\nconst result = typeof converter(content) === content[1];\n\nconsole.log(checking ? (result ? (typeof converter).length : false) : false);\n```\n\n",
    "answer": "D",
    "explain": "The operator `...` in JavaScript is very handy. The function `converter` is quite trivial, it takes advantege of `...` (rest operator || spread operator) to turn an array into an object.\n\n\nFirst we have the constant `checking` with the value `function` given that `Number(false)` gives us 0 and that is the first index in the array `content`.\n\n\nSecond, the constant `result` gives us the value `true` as the `typeof converter(content)` is `function`, which is also the value of `content[1]`.\n\n\nThen in the final code, we have `checking = true`, and then `result = true` as well, so the final result is `(typeof converter).length` which is equivalent to `\"function\".length` because the `typeof of converter` is simply `function`. We get 8 after all and the correct answer is D.\n\n\nSo the key message here is that we can take advantate of the `spread operator` (or `...`) to turn an array to an object. For example: `const a = [\"hello\", 2]`, then we can have a go with `const b = {...a}` and b is now an object with the following value: `{0: \"hello\", 1: 2}`. The key of the object is actually the index of the original array.\n\n\n",
    "optionStr": "- A: 6\n- B: NaN\n- C: true\n- D: 8\n\n",
    "options": [
      "6",
      "NaN",
      "true",
      "8"
    ]
  },
  {
    "question": "```javascript\nfunction* js(length) {\n  for (let i = length.length; i > 0; --i) {\n    yield i;\n  }\n}\n\nlet getJS = js(typeof js);\n\nlet result = getJS.next().value;\n\nconsole.log(result + getJS.next().value);\n```\n\n",
    "answer": "C",
    "explain": "We have a generator function in the code snippet above, which is defined with the \\*. Noted that we can \"store\" as many result as we want in a generator thanks to the keyword `yield`.\n\n\nAs the `typeof js` is `function`, so the length of the string `function` is 8. So when calling `getJS.next().value;`, we get 8. However, in the next calling, it returns 7, and in the following calling after that, we get 6. That is why generator can \"store\" and \"release\" (or return) as many value as we want.\n\n\nSo the answer is C, which is 8 (first execution of the generator) + 7 (second execution of the generator).\n\n\n",
    "optionStr": "- A: 10\n- B: 14\n- C: 15\n- D: 16\n\n",
    "options": [
      "10",
      "14",
      "15",
      "16"
    ]
  },
  {
    "question": "```javascript\nvar ages = [10, 15, 20, 25];\n\nlet response = [];\n\nages.some(function (currentValue, index, ages) {\n  if (currentValue > ages[ages.length - index])\n    response.push(currentValue + ages.length);\n});\n\nconsole.log(response);\n```\n\n",
    "answer": "D",
    "explain": "`Array.prototype.some()` is a built-in function facilitating us to iterate the array using a callback. As in the code snippet above, there are three parameters in the callback, namely `currentValue` (the value of the current element that is being checked), `index` (the index of the element in the array that is being checked/evaluated) and `ages` (the array itself).\n\n\nThe function `some()` returns a `boolean` value. The code `currentValue > ages[ages.length - index]` returns `true` only one time, which is the last element. Let 's examine the code when it runs through each element:\n\n\n1. 10 > ages[4 - 0]. As ages[4] returns `undefined`, and `10 > undefined` returns `false`, it stops.\n2. 15 > ages[4 - 1]. As ages[3] returns 25, it breaks as the operator returns `false`.\n3. 20 > ages[4 - 2]. As ages[2] returns 20, it breaks as the operator returns `false`.\n4. 25 > ages[4 - 3]. As ages[1] returns 10, it returns `true`. Only this value is being pushed to the array `response`.\n\nSo `response.push(currentValue + ages.length)` will add the value 25 + 4 to the array `response`, D is the correct answer.\n\n\n",
    "optionStr": "- A: [20]\n- B: [20, 25]\n- C: [25, 29]\n- D: [29]\n\n",
    "options": [
      "[20]",
      "[20, 25]",
      "[25, 29]",
      "[29]"
    ]
  },
  {
    "question": "```javascript\nconst getSTring = (string, method = false) => {\n  if (method === true) {\n    return string.slice(1, 4).length;\n  }\n\n  return string.substr(1, 4).length;\n};\n\nconsole.log(getSTring(\"hello\", true) + getSTring(\"hello\"));\n```\n\n",
    "answer": "B",
    "explain": "`getString()` is an arrow function with two parameters. As you can see that the parameter `method` has the default value `false`, then if you do not pass any value to it when executing the function, the default value will be used.\n\n\nThe key thing to take note from the code above is the difference betweet `slice(1, 4)` (which returns 3 characters) and `substr(1, 4)` (which returns 4 ones).\n\n\nFinally `console.log(getSTring(\"hello\", true) + getSTring(\"hello\"))` returns 7 because `slice` and `substr` are both used.\n\n\n",
    "optionStr": "- A: 6\n- B: 7\n- C: 8\n- D: 9\n\n",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ]
  },
  {
    "question": "```javascript\n(function (a, b, c) {\n  console.log(Boolean([...arguments].slice(2, 3)[0].slice(3, 4)));\n})(\"hello\", \"world\", \"new zealand\");\n```\n\n",
    "answer": "B",
    "explain": "The code above is a self-executing function. It runs when it is being declared. We have three parameters and three arguments passed are `\"hello\", \"world\"` and `\"new zealand\"`.\n\n\nFirst, `arguments` returns an object consisting of arguments passed to the function when executing it. However, using spread operator `...`, we then convert the object to an array. We can also do it by using `Array.from(object)`.\n\n\nSecond, `slice(2, 3)` extracts the element from the index 2 to the index 3, which returns `\"new zealand\"`. It is still an array. We then extract the element with the index `[0]` and we get the string `\"new zealand\"` rather than an array.\n\n\nThird, `\"new zealand\".slice(3, 4)` gives us an empty string (with a space between) `\" \"`. The `Boolean(\" \")` gives us `true`. Noted that if there is no space in the empty string, we get `false` instead.\n\n\nSo the correct answer is B.\n\n\n",
    "optionStr": "- A: \"new\"\n- B: true\n- C: \"land\"\n- D: false\n\n",
    "options": [
      "\"new\"",
      "true",
      "\"land\"",
      "false"
    ]
  },
  {
    "question": "```javascript\nclass HocCoBan {\n  name = \"hello world\";\n\n  getSlice(slice) {\n    return this.getName(slice).slice(true, this.name.length);\n  }\n\n  getName(space) {\n    return this.name.split(space);\n  }\n}\n\nHocCoBan.prototype.split = function (argument) {\n  return this.getSlice(argument);\n};\n\nconst a = new HocCoBan();\n\nconsole.log(a.split(\"\").length);\n```\n\n",
    "answer": "C",
    "explain": "The code above is nothing much special. However it is written in a complicated way on purpose. First, we have a class named \"HocCoBan\" with two methods and one property. Then we add another method `split` using the tradional way (via `prototype`). Note that `class` in JavaScript is simply a syntactic sugar of `function` given that `typeof ClassName` return `function`.\n\n\nWhen we call the method `split`, we pass the an empty string to it. This method then call other methods. The flow is as follows:\n\n\n`split(\"\")` ==> `this.getSlice(\"\")` ==> `this.getName(\"\")` ==> `this.name.split(\"\")`. Here `split` is a built-in function that convert a string to an array.\n\n\nNoted that in `getSlice()`, we also use `.slice(true, this.name.length)` to `slice` (cut) the array from the index 1 to 11. So the length is 10.\n\n\nSo the final answer is C.\n\n\nThis code might help us master the concept function `prototype` in JavaScript and the understand the difference between the built in function `String.prototype.split` and the function we declare by ourself `HocCoBan.prototype.split`.\n\n\n",
    "optionStr": "- A: NaN\n- B: true\n- C: 10\n- D: 11\n\n",
    "options": [
      "NaN",
      "true",
      "10",
      "11"
    ]
  },
  {
    "question": "```javascript\nfunction javaScript(node) {\n  let mot = node.includes(\"I\") ? \"love\" : \"you\";\n\n  return function (deno = mot) {\n    let hai = node.replace(deno, \"done\");\n\n    return function (done = hai) {\n      return (node + deno + done).length;\n    };\n  };\n}\n\nconsole.log(javaScript(\"I love you\")()());\n```\n\n",
    "answer": "B",
    "explain": "Apart from learning some built-in functions to handle string such as `replace` and `inclues`, we are reviving the concept of `currying function` in JavaScript. Say you want to declare a function with three parameters, you may consider refactoring the code by declaring 3 nested functions, each with one parameter you wish to pass to. Basically, both of them work in the same way. However, noted that only the outerest (the main) function has the name as `javaScript` in the code above. Both nested (inner) functions are declared without the name. We also use three `return` keywords in the code.\n\n\nWhen executing the function, you then have three `()` as in the `javaScript(\"I love you\")()()`. We do not pass any argument into the second and third functions (both are inner/nested functions without the name) and these functions will take the default value we have alreaded declared when being executing.\n\n\nAll in all, we have the final operator `return (node + deno + done).length;` in which `node` is \"I love you\", `deno` is \"love\" and `done` is \"I done you\". The length of these strings is 24, which you can calculate by yourself the concatenated string `I love youyou I done you`. Be aware of the `empty space`, which is also taken into account.\n\n\n",
    "optionStr": "- A: 18\n- B: 24\n- C: 20\n- D: 25\n\n",
    "options": [
      "18",
      "24",
      "20",
      "25"
    ]
  },
  {
    "question": "```javascript\nconst www = [\"hello\", \"coranovirus\", \"kiora\", \"world\", \"new zealand\"];\n\nconst found = www.find(function (world) {\n  return world > \"victory\";\n});\n\nconst result = found[1] < www[0][0] ? www[false ? 1 : 0] : www[true ? 0 : 1];\n\nconsole.log(result);\n```\n\n",
    "answer": "A",
    "explain": "The key information in the question above is about the method `Array.prototype.find()`. It returns the first element in the array that meets the condition declared in the callback function, which is passed to the function. The array is being iterated to check every single element. In the code above, we might easily see that the element `world` is the first element in the array that has a larger value than `victory`. Remember that \"w\" > \"v\" return trues if the two letters are compared. When two words are being compared, only the first letter in each word is being utilised to compare.\n\n\nAs the result, `found` is now `world` and thus `found[1]` returns the letter `w` whereas `www[0][0]` gives us the letter `h` in the element `hello`. It means `found[1] < www[0][0]` returns `false`.\n\n\nSo the final result is `www[true ? 0: 1]` or `www[0]`, which is `hello`. And the correct answer is A.\n\n\n",
    "optionStr": "- A: \"hello\"\n- B: \"world\"\n- C: \"victory\"\n- D: \"w\"\n\n",
    "options": [
      "\"hello\"",
      "\"world\"",
      "\"victory\"",
      "\"w\""
    ]
  },
  {
    "question": "```javascript\n(function (flag) {\n  let age = Boolean(NaN === NaN ? false : flag);\n\n  console.log(age.toString()[Number(flag)]);\n})([]);\n```\n\n",
    "answer": "B",
    "explain": "We have a self-executing function with the parameter/argument is an empty array. Noted that `NaN === NaN` returns `false`, then `age` gets the value `flag`, which is an empty array. However, the boolean value is `true` when we call `Boolean([])`.\n\n\nThe function `toString()` returns the string `true` and the `Number([])` returns `0`. Then we get \"t\" in the console.log. The correct answer is B.\n\n\nKeep in mind that `Boolean([])` ==> `true` but `Number([])` ==> `0`. And sadly `NaN === NaN` returns `false`.\n\n\n",
    "optionStr": "- A: \"f\"\n- B: \"t\"\n- C: true\n- D: false\n\n",
    "options": [
      "\"f\"",
      "\"t\"",
      "true",
      "false"
    ]
  },
  {
    "question": "```javascript\n\n1) console.log(Boolean([]));\n2) console.log(Number([]));\n3) console.log(Number(Boolean([])));\n4) console.log(Boolean(Number([])));\n\n5) console.log(Boolean({}));\n6) console.log(Number({}));\n7) console.log(Number(Boolean({})));\n8) console.log(Boolean(Number({})));\n\n9) console.log(Boolean(new Boolean(false)));\n\n```\n\n",
    "answer": "D",
    "explain": "JavaScript is sometimes tedious to deal with given that it is a loosely type language. The data type of a variable can be changed depending on the value. An unexpected behaviour might unfortunately occur when you change/convert the original value to another one.\n\n\nFor example, the code 2 `Number([])` returns `0` and 6 `(Number({}))` returns `NaN`, although both `(Boolean([]))` and `(Boolean({}))` return `true`.\n\n\nIn the code 9 `Boolean(new Boolean(false))`, we get `true` even though we pass into the function constructor `Boolean()` a `false` (as the) parameter. However, if we do not use the keyword `new`, then `false` will return. It seems that in `Boolean(new Boolean(false))`, we have a valid opreration, so it is `true`. However, in the `Boolean(Boolean(false)))` where we do not use the keyword `new`, we then get `false` because now a `false` value is being evaluated rather than an operation.\n\n\nSo, the correct answer is D.\n\n\nCredit: @tiepphan, Vietnamese Angular Facebook group.\n\n\n",
    "optionStr": "- A: true - 0 - 1 - false - true - 1 - 1 - false - false\n- B: true - 0 - 1 - false - false - NaN - 1 - false - true\n- C: true - 0 - 1 - false - false - false - 1 - false - false\n- D: true - 0 - 1 - false - true - NaN - 1 - false - true\n\n",
    "options": [
      "true - 0 - 1 - false - true - 1 - 1 - false - false",
      "true - 0 - 1 - false - false - NaN - 1 - false - true",
      "true - 0 - 1 - false - false - false - 1 - false - false",
      "true - 0 - 1 - false - true - NaN - 1 - false - true"
    ]
  },
  {
    "question": "```javascript\nconst myYoutube = {\n  name: \"hoccoban\",\n  address: \"youtube.com/hoccoban\",\n  getInfo() {\n    return this;\n  },\n  content: () => (this === window ? myYoutube.getInfo() : this),\n};\n\nconsole.log(myYoutube.content().name);\n```\n\n",
    "answer": "A",
    "explain": "To answer the tricky question above, you might want to have a look at the concept of `this` in JavaScript (on browser environment). By default, `this` refers to `window` object. Note that `Window` (written in capital) is the Function constructor of the `window` object. In this regard, `console.log(this === window)` return true but `console.log(this === Window)` returns false.\n\n\nAs `getInfo()` is an arrow function, `this` declared inside this function points to `window`, so `myYoutube.content()` returns `myYoutube.getInfo()`. Noted that we have to explicitly write `myYoutube.getInfo()` to make sure the code will run correctly as `this` in this case does not work as it does not refer to the currect object. In the function `getInfo()`, however, `this` actually refers to the currect object instead of `window` object because we use a normal function here.\n\n\nThen we have the property `name` with the value \"hoccoban\". So the correct answer is A.\n\n\n",
    "optionStr": "- A: \"hoccoban\"\n- B: window (object)\n- C: NaN\n- D: undefined\n\n",
    "options": [
      "\"hoccoban\"",
      "window (object)",
      "NaN",
      "undefined"
    ]
  },
  {
    "question": "```javascript\nconst myArray = [1, 2, 3];\n\nmyArray.someProperty = this;\n\nArray.prototype.someOtherProperty = \"hello\";\n\nlet result = [];\n\nfor (let key in myArray) {\n  result.push(key);\n}\n\nfor (let key in myArray) {\n  if (myArray.hasOwnProperty(key)) {\n    result.push(key);\n  }\n}\n\nconsole.log(result.length);\n```\n\n",
    "answer": "C",
    "explain": "We have a simple array that consists of 3 elements. If checking the type of the array with the operator `typeof`, we will have `object`. (Hint, you can make use of `Array.isArray(array))` or `array instanceof Array` to check its type).\n\n\nWhen declaring `myArray.someProperty`, we now add a new property to that array and when declaring `Array.prototype.someOtherProperty = \"hello\"`, we add a new property to every single array.\n\n\nAs a result, the `for... in` loop will iterate through the array in question and return its key/property and the inherited property as well. However, in the second iteration, we take advantage of the method `hasOwnProperty(key)` to check whether a particular key/property actually belongs to the array in question rather than the inherited one.\n\n\nIn short, in the first iteration, we get 5 (3 original ones, 1 property that is directly added to the array, 1 inherited from the Array.prototype. In the second one, we only get 4 as the inherited property is not taken into consideration.\n\n\nKeep in mind that, we use `for... of` to loop through an array or the traditional `for` loop. It is not a good practice to use `for ... in` to loop through an array. It is often used to loop through an object.\n\n\n",
    "optionStr": "- A: 10\n- B: NaN\n- C: 9\n- D: 7\n\n",
    "options": [
      "10",
      "NaN",
      "9",
      "7"
    ]
  },
  {
    "question": "```javascript\nconst coderfarm = [1, 2, 3, 4, 5];\n\nconst [top, ...bottom] = (function (a) {\n  let result = a;\n\n  a.unshift(new Array(3));\n\n  return result;\n})(coderfarm);\n\nconsole.log(top.length + bottom.length);\n```\n\n",
    "answer": "A",
    "explain": "We are using destructure array (or object) technique to extract element of an array (or object). We also take advantage of `...` (spread parameter) here.\n\n\nThe array we are destructuring is returned from a self-executing function. First we pass the parameter `coderfarm`, which is the parameter `a` when declaring the function. Then we update this array with some additional value (an array with three `undefined` elements using `new Array(3)`) on the top of the array (using `unshift`). The array is updated now as `[[undefined, undefined, undefined], 1, 2, 3, 4, 5]`.\n\n\nSo `top` is the first element of the array or `[undefined, undefined, undefined]`, which returns 3 when we check the length.\n\n\nThe `bottom` returns the rest of the array in question, which is 5 when using `length` property.\n\n\nThe final number is 8 and thus the correct answer is A.\n\n\n",
    "optionStr": "- A: 8\n- B: 9\n- C: 10\n- D: 11\n\n",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ]
  },
  {
    "question": "```javascript\nlet age = { number: 10 };\n\nconst getAge = (flag) => {\n  flag ? delete age.number : delete age;\n  return age.number++;\n};\n\nconsole.log(getAge(false));\n\nconsole.log(age.number);\n\nconsole.log(getAge(true));\n\nconsole.log(age.number);\n```\n\n",
    "answer": "D",
    "explain": "The operator `delete` only works on the property of an object, not the object itself. In the code snippet above, we have a simple function `getAge` with the parameter `flag`. When the `flag` is `true`, we trigger `delete age.number` and if it is `false`, we will use the operator `delete` upon the whole object.\n\n\nAs this operator does not work on an object, if we can say that, it turns out that `delete age` actually does nothing. As such, `console.log(getAge(false))` returns 10 and simultanously increases the value of `age.number` to 11. The value is now being kept in the memory. As such, `console.log(age.number)` will return 11.\n\n\nWhen we pass the argument `flag` as `true` in the `console.log(getAge(true))`, we will trigger `delete age.number` which removes the value and the property `age.number` itself. It means `age.number` is now `undefined`. However, because we also attempt to increase the value of this `undefined` property using `++` operator, it returns `NaN`.\n\n\n`console.log(age.number)` also returns `NaN` as well. So the correct answer is D.\n\n\n",
    "optionStr": "- A: 10 - 10 - NaN - NaN\n- B: 10 - 10 - undefined - undefined\n- C: 10 - 11 - undefined - undefined\n- D: 10 - 11 - NaN - NaN\n\n",
    "options": [
      "10 - 10 - NaN - NaN",
      "10 - 10 - undefined - undefined",
      "10 - 11 - undefined - undefined",
      "10 - 11 - NaN - NaN"
    ]
  },
  {
    "question": "```javascript\nconst youtube = { name: \"hoccoban\" };\n\nconst copy = Object.create(youtube);\n\nconst cloneA = Object.assign({}, copy);\n\nconst cloneB = Object.assign({}, youtube);\n\nconsole.log(cloneA.name);\n\nconsole.log(cloneB.name);\n\nconsole.log(copy.name);\n```\n\n",
    "answer": "A",
    "explain": "We have three outputs in the code snippet above.\n\n\nFirst `console.log(cloneA.name);` will return `undefined` but why? We use `Object.assign` to clone a new object from an empty and from the object `copy`. The object `copy` itself is actually created from the original object `youtube` using `Object.create`. Noted that because we use `Object.create`, `copy` will inherit the data from the original one but it is still an empty object itself.\n\n\nSecond, both `console.log(cloneB.name)` and `console.log(copy.name)` return \"hoccoban\" because `cloneB.name` will have the actual property `name`. On the contrary, `copy.name` outputs the property `name` inherited from the `youtube`.\n\n\nSo the correct answer is A.\n\n\n",
    "optionStr": "- A: undefined - \"hoccoban\" - \"hoccoban\"\n- B: \"hoccoban\" - \"hoccoban\" - \"hoccoban\"\n- C: \"hoccoban\" - \"hoccoban\" - \"undefined\"\n- D: undefined - \"undefined\" - \"hoccoban\"\n\n",
    "options": [
      "undefined - \"hoccoban\" - \"hoccoban\"",
      "\"hoccoban\" - \"hoccoban\" - \"hoccoban\"",
      "\"hoccoban\" - \"hoccoban\" - \"undefined\"",
      "undefined - \"undefined\" - \"hoccoban\""
    ]
  },
  {
    "question": "```javascript\n((x) => {\n  const data = !Array.isArray(x) ? x : x.entries();\n\n  console.log(data.next().value[1]);\n})([\"hello\", \"world\", \"vuong\"]);\n```\n\n",
    "answer": "B",
    "explain": "We have a self-invoking function here and we pass an array to it when the function is executed. Note that `Array.isArray(x)` return `true` but actually we use `!` before `Array.isArray(x)`. It means `data` will return `x.entries()`.\n\n\nThe method `array.entries()`, as you might have already known, returns a `gererator`. Here we will call `next()` to iterate through each element. Note that if you only call `next()` once, it will only return the first element instead of the whole iterator.\n\n\nThen when we call `value`, it returns an array with the index and the value of the iterator. So what will we get if we call ` console.log(data.next().value[0])`. Sure, it returns `0` as `0` is the index.\n\n\nSo the correct answer is B.\n\n\n",
    "optionStr": "- A: NaN\n- B: \"hello\"\n- C: \"world\"\n- D: \"vuong\"\n\n",
    "options": [
      "NaN",
      "\"hello\"",
      "\"world\"",
      "\"vuong\""
    ]
  },
  {
    "question": "```javascript\nlet x = Symbol();\n\nlet y = Symbol();\n\nconsole.log(x === y ? `${typeof x}`[1] : `${typeof x}`[2]);\n```\n\n",
    "answer": "D",
    "explain": "As `x` and `y` are both instances of `symbol`, they are unique in our codebase; therefore, the `===` comparison will return `false` as expected. In the simple code snippet above, we get the `else` operation.\n\n\nIt should be noted that the `typeof x` operation gives us `symbol`, and since a string in JavaScript is iterable, we get `m` as we pass in the index 2.\n\n\nSo the correct answer is D.\n\n\n",
    "optionStr": "- A: NaN\n- B: \"object\"\n- C: \"y\"\n- D: \"m\"\n\n",
    "options": [
      "NaN",
      "\"object\"",
      "\"y\"",
      "\"m\""
    ]
  },
  {
    "question": "```javascript\nconst frameworks = [\"react\", \"angular\", \"vue\"];\n\nconst iterator = frameworks[Symbol.iterator]();\nconst i = frameworks.entries();\n\niterator.next();\ni.next();\n\nconsole.log(iterator.next().value[1]);\nconsole.log(i.next().value[1]);\n```\n\n",
    "answer": "D",
    "explain": "As `frameworks` is an array, it has a built-in method named `Symbol.iterator`. You can hence iterate through the whole array using commonly used methods such as `for... of`, normal `for loop`, `forEach` or `map`, among others. That is relatively trivial, I suppose.\n\n\nThis code challenge above is written to help us understand the concept of iteration better. First, we use the built-in method called `entries()` to create a new iteration. So does [Symbol.iterator](). Both seem to do the same thing.\n\n\nEach time we call `next()` method, the iteration will output one element. We then can call `value()` to get the value. The difference between `iterator` and `i` is that the former shows the value itself while the latter outputs an array consisting of the index and the value. It means that in the code above, `iterator.next().value` returns `angular` and `i.next().value` gives us `[1, angular]`.\n\n\nSo the correct answer is D.\n\n\n",
    "optionStr": "- A: \"react\" - \"angular\"\n- B: \"react\" - \"react\"\n- C: \"angular\" - \"angular\"\n- D: \"n\" - \"angular\"\n\n",
    "options": [
      "\"react\" - \"angular\"",
      "\"react\" - \"react\"",
      "\"angular\" - \"angular\"",
      "\"n\" - \"angular\""
    ]
  },
  {
    "question": "```javascript\nclass React {\n  theName = \"Not React\";\n}\n\nclass Author extends React {\n  static theName = \"Real React\";\n\n  render() {\n    return this.theName;\n  }\n\n  static render() {\n    return this.theName;\n  }\n}\n\nconst me = new Author();\n\nconsole.log(me.render());\n\nconsole.log(Author.render());\n```\n\n",
    "answer": "A",
    "explain": "We have two classes in the code snippet above. It sounds we are imitating React. The `React` class has only one property named `theName,` and no method is declared here. Providing that `Author` extends the `React` class, it inherits that property, surely. However, we have also declared another property with the same name in the `Author` classs. The difference is that the property declared in the child class is given the keyword `static.`\n\n\nThe `Author` class also has two methods with the same name `render()`, one as regular methods and another with `static` keyword. Will that work in JavaScript?\n\n\nIt turns out that JavaScript is quite flexible. It supports both property and method if they are declared with the same name as long as they are either regular property (or method) or static property (or method).\n\n\nThe last thing you should be aware of is that the method `static render()` only calls the static property, here is `static theName = \"Real React\";` So does the regular method `render().` As such, the code does not run into any issues.\n\n\nSo the correct answer is A.\n\n\n",
    "optionStr": "- A: \"Not React\" - \"Real React\"\n- B: \"Not React\" - Error\n- C: Error - Error\n- D: Error - \"Real React\"\n\n",
    "options": [
      "\"Not React\" - \"Real React\"",
      "\"Not React\" - Error",
      "Error - Error",
      "Error - \"Real React\""
    ]
  },
  {
    "question": "```javascript\nclass js {\n  say = \"hello\";\n}\n\njs.prototype.say = \"goodbye\";\nconsole.log(new js().say);\n\njs.prototype.thename = \"google\";\nconsole.log(new js().thename);\n```\n\n",
    "answer": "B",
    "explain": "`js` is a standard class declared in the code snippet above that has only one property with the name `say.` Then we again declare another property with the same name `say` for it. You might think that the property `say` has been overwritten with a new value `goodbye.`\n\n\nThat is not the case as we will get `hello` when we run `console.log(new js().say);`. It is clear that the JavaScript engine prioritizes the property declared inside the class more than the property declared later using the prototype mechanism.\n\n\nIf the property has not been declared inside the class itself, we can then add a new one with the help of `prototype` as in `thename`. Without the doubt, the code `console.log(new js().thename);` gives us `google` as expected.\n\n\nSo the correct answer is B.\n\n\n",
    "optionStr": "- A: Error - Error\n- B: \"hello\" - \"google\"\n- C: \"goodbye\" - \"google\"\n- D: Error - \"google\"\n\n",
    "options": [
      "Error - Error",
      "\"hello\" - \"google\"",
      "\"goodbye\" - \"google\"",
      "Error - \"google\""
    ]
  },
  {
    "question": "```javascript\n\nconst App = ([y, x, z]) => {            \n    return ()=>{\n            ++x\n        return ()=>{\n            return x++;\n        }\n    }    \n}\n\nconsole.log(App([10, 20, 30, 40])()())\n\n```\n\n",
    "answer": "C",
    "explain": "To answer the question raised on the above code snippet, you might want to revisit two concepts, `currying function` and `destructing array or object.`\n\n\nFirst, `currying function` means we convert a function with multiple parameters into multiple functions with a SINGLE parameter. Then you can easily manipulate the flow of the data. Noted that `currying function` is relevant to `higher-order function`, you might want to have a look.\n\n\n`destructing array or object` means we attempt to extract a complex array or object more conveniently. For example, `[y, x, z] = [10, 20, 30, 40]` will extract y, x and z with the value 10, 20 and 30 respectively. \n\n\nThe last thing is incremental operator here `++x` returns 21 but `x++` does not as it still returns 21.\n\n\nSo the correct answer is C.\n\n\n",
    "optionStr": "- A: 10\n- B: 32\n- C: 21\n- D: 22\n\n",
    "options": [
      "10",
      "32",
      "21",
      "22"
    ]
  },
  {
    "question": "```javascript\n\nconst numbers = [5, 6, 7];\n\nfunction callback(accumulator, currentValue){\n    return accumulator + currentValue;\n}\n\nconst theCallBack = (accumulator, currentValue) => accumulator + currentValue;\n\nconst sum = numbers.reduce(callback, numbers.reduce(theCallBack, numbers.reduce(theCallBack, 7)));\n\nconsole.log(sum); \n\n```\n\n",
    "answer": "D",
    "explain": "`Array.prototype.reduce()` is a bit perplexed built-in method that allows you to manipulate data in an array. It returns a single value from the array predefined as in the case with `map` or `filter`. The syntaxt of the function is `arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])`, so it accepts a callback function with four arguments including `accumulator`, `currentValue`, `currentIndex` (optional) and `array` (optional). \n\n\nThe second argument of the `reduce` method, which is optional, is called `initialValue` that will be counted as the first element with the index 0 when `reduce` is executing. If `initialValue` is not provided, then `reduce` will run with the index 1 instead. `reduce()` sounds complicated, but truly it is not. In case you want to revise the function, kindly take a look at MDN here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce\n\n\nThe above code has two callback functions named `callback` and `thecallback`, which do the same thing. The seemingly creepy code is the variable `sum`, which is returned by a couple of nested `reduce` functions. It turns out that there is only one \"real\" `reduce` function and the other ones give us `initialValue` only.\n\n\n- The first `initialValue` is 7;\n- The first nested `reduce` function gives us 7 (initialValue) + 5 + 6 + 7 = 25.\n- The second nested `reduce` has 25 as the initialValue, which we get from the above. Then it returns 25 + 5 + 6 + 7 = 43;\n- The \"real\" `reduce` function now has 43 as the initialValue, the we get the final result: 43 + 5+ 6 + 7 = 61.\n\nSo the correct answer is D.\n\n\n",
    "optionStr": "- A: 54\n- B: 55\n- C: 60\n- D: 61\n\n",
    "options": [
      "54",
      "55",
      "60",
      "61"
    ]
  },
  {
    "question": "```javascript\n\nconst a = {name: \"hoccoban.com\"};\nconst b = {name: \"youtube.com/hoccoban\"};\n\nconst first = {...a}.name.length;\nconst second = {...a, ...b}.name.length;\nconst third = {...a, ...b, name: \"hello\"}.name.length;\n\nconsole.log(first + second + third)\n\n```\n\n",
    "answer": "B",
    "explain": "The code snippet above is relatively trivial. What we can learn from it is all about the `spread operator` (three-dot ...). Sometimes it is also used as a `rest operator` to extract data from an object or array.\n\n\nWe have two simple objects which both have the same key `name` but different values. The constant `first` gives us the length of the string value of the keyword `name` that is copied from `a`. So, `first` is now 12.\n\n\nThe constant `second` merges `a` and `b` into one object. However, as `b` has the same key `name` with `a`, the object created by merging two objects will have the value of `b`. It means the constant `second` gives us the length of `youtube.com/hoccoban`, which is 20.\n\n\n`third` does the same thing with `first` and `second` as it merges two objects into one. However, it also adds another key-value to the object. Coincidently, the key now is `name`, which is the same with the key attained from `a` and `b`. Hence, this key and value will take over the merged object. That means `third` is the length of the string `hello`, which is 5.\n\n\nIn total, we have 12 + 20 + 5, and the final result is 37.\n\n\nSo the correct answer is B.\n\n\n",
    "optionStr": "- A: 12\n- B: 37\n- C: 5\n- D: 20\n\n",
    "options": [
      "12",
      "37",
      "5",
      "20"
    ]
  },
  {
    "question": "```javascript\n\nconst hocCoBan = {};\n\nObject.defineProperty(hocCoBan, \"domain\", {\n    value: \"hoccoban.com\",    \n})\n\nasync function App({year, age}){    \n    return year - age + hocCoBan.domain.length;\n}\n\nApp({year: 2021, age: 30}).then(r => console.log(r));\n\n```\n\n",
    "answer": "D",
    "explain": "The code snippet above seems complicated regarding how we take advantage of `Object.defineProperty` to add key and value to the object `hocCoBan`. In fact, `Object.defineProperty` has a couple of handy features that allow us to control the behavior of the object in some situations where we want to make sure that the object created is mutable or not, whether it is iterable (using `for..in`) and so for. For example, if we set `configurable: false` when we declare an object with `Object.defineProperty`, we cannot use `delete` operator to delete the object's property. We cannot change the value of that property as well.\n\n\nThe second \"take away\" message when reading the code above is the unpacking object technique, or a more frequent term is the destructing object. Say you have an object with two keys called `year` and `age`, then you can get them by using the destructing object technique as follows: `{year, age} = theOBject;`. In the code above, when declaring the function `App`, we also use destructing object technique to get the key from the object and use them as the parameters.\n\n\nIf you are familiar with asynchronous code in JavaScript when using the keyword `async,` it is not a big deal to understand why we need to use `then` to get the function `App` being called. It fact, `async` always returns a promise, so we need to use `then` method to get the data we want. \n\n\nThe flow of the code is: 2021 - 30 + `\"hoccoban.com\".length` (which is 12). \n\n\nThe final result is 2003. So the correct answer is D.\n\n\n",
    "optionStr": "- A: 2051\n- B: 2001\n- C: 30\n- D: 2003\n\n",
    "options": [
      "2051",
      "2001",
      "30",
      "2003"
    ]
  },
  {
    "question": "```javascript\n\nclass hoccoban {\n  #thisyear = 2021;\n  constructor(covidTheFirstYear) {\n    this.covidTheFirstYear = covidTheFirstYear;\n  }\n\n  getThisYear() {\n    return this.#thisyear;\n  }\n\n    getCovidFirstYear() {\n    return this.covidTheFirstYear;\n  }\n}\n\nconst message = new hoccoban(2019);\n\nconst result = hoccoban.hello ?? message.getThisYear() - message.getCovidFirstYear();\n\nconsole.log(result)\n\n```\n\n",
    "answer": "D",
    "explain": "This challenge partly illustrates the newest features of JavaScript detailed in ECMAScript 2020 or ES11.\n\n\nNow you can declare a private property in a class thanks to the symbol `#`. Like other languages, a private property in JavaScript can only be accessed from inside the class. It will trigger an error when you attempt to call it outside the class, surely.\n\n\nThe second feature you might see on the code snippet above is the `nullish coalescing operator` or `??`. When declaring some variable such as `let myVariable = number ?? 7`, if the variable `number` is either `undefined` or `null`, the variable `myVariable` will be assigned the value `7`.\n\n\nSo `hoccoban.hello` means `undefined` because we have not added any value yet. Then by using `nullish coalescing operator` with `??` the variable `result` simply returns 2 as `message.getThisYear()` gives us 2020 and `message.getCovidFirstYear()` gives us 2019. Note that we can access the private property outside of the class via a method, as in the method `getThisYear()`.\n\n\nSo the correct answer is D.\n\n\n",
    "optionStr": "- A: NaN\n- B: 2019\n- C: undefined\n- D: 2\n\n",
    "options": [
      "NaN",
      "2019",
      "undefined",
      "2"
    ]
  }
]

var renderer = new marked.Renderer();
marked.setOptions({
  renderer: renderer,
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});

function Run () {
  const sumAll = data1.length
  for (var i in data1) {
    var div = document.createElement("div");
    div.className = "entrance-bottom-frame-line";
    document.querySelector(".entrance-bottom-frame").appendChild(div);


    var div2 = document.createElement("div");
    div2.className = "entrance-bottom-frame-line-title";
    div2.innerHTML = marked(data1[i].question);
    document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);


    var divli1 = document.createElement("div");
    divli1.innerHTML = parseInt(i) + 1;

    for (var j in data1[i].options) {
      var div3 = document.createElement("div");
      div3.className = "entrance-bottom-frame-line-button";
      var div3_id = document.createElement("div");
      div3_id.className = "entrance-bottom-frame-line-button-id";
      if (j == 0) {
        div3_id.innerHTML = "A";
        div3.id = "A"
      } else if (j == 1) {
        div3_id.innerHTML = "B";
        div3.id = "B"
      } else if (j == 2) {
        div3_id.innerHTML = "C";
        div3.id = "C"
      } else {
        div3_id.innerHTML = "D";
        div3.id = "D"
      }
      var div4 = document.createElement("div");
      div4.className = "entrance-bottom-frame-line-button-frame";
      div4.innerHTML = marked(data1[i].options[j]);
      div3.appendChild(div3_id)
      div3.appendChild(div4);
      document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
    }
  }
  mintime = 1;
  var dact = document.querySelector(".entrance-bottom-frame-line")
  var active = "active"
  addClass(dact, active)
  var timu_id = 0
  var select = 1
  var frame_left = 0
  document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
  document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select + "</div>" + "/" + sumAll + " 题"
  for (var i = 0; i < document.querySelectorAll(".entrance-bottom-frame-line-button").length; i++) {
    document.querySelectorAll(".entrance-bottom-frame-line-button")[i].onclick = function () {
      console.log(select, this.id, data1[select - 1].answer === this.id ? '对' : '错')
      data1[select - 1].user = this.id

      if (timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1) {
        frame_left += -100
        document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"

        timu_id++;
        select++;
        document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select + "</div>" + "/" + sumAll + " 题"
        addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
        removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id - 1], active)

        document.body.scrollIntoView()
      } else {
        let score = 0
        for (let n = 0; n < data1.length; n++) {
          if (data1[n].user === data1[n].answer) {
            score++
          }
        }

        document.body.innerHTML = ''

        var noticeDiv = document.createElement("div");
        noticeDiv.innerHTML = `<p style="font-size: 18px; font-weight: 600">一共${sumAll}题，做对${score}题。</p>`;

        document.body.appendChild(noticeDiv);

        document.body.style.padding = '10px'

        for (var i in data1) {
          var div = document.createElement("div");
          div.innerHTML = `<h3>第${parseInt(i) + 1}题</h3>`;

          var div1 = document.createElement("div");
          div1.innerHTML = marked(data1[i].question);

          var div2 = document.createElement("div");
          div2.innerHTML = marked(data1[i].optionStr);

          var div3 = document.createElement("div");
          div3.innerHTML = `<p>正确答案：${data1[i].answer}</p>`;
          div3.innerHTML += `<p>你的答案：${data1[i].user}</p>`;

          var div4 = document.createElement("div");
          div4.innerHTML = marked(data1[i].explain);
          document.body.appendChild(div);
          document.body.appendChild(div1);
          document.body.appendChild(div2);
          document.body.appendChild(div3);
          document.body.appendChild(div4);
        }

        document.body.scrollIntoView()
      }
    }
  }
}

function addClass (obj, cls) {
  var obj_class = obj.className,
    blank = (obj_class != '') ? ' ' : '';
  added = obj_class + blank + cls;
  obj.className = added;
}

function removeClass (obj, cls) {
  var obj_class = ' ' + obj.className + ' ';
  obj_class = obj_class.replace(/(\s+)/gi, ' ');
  removed = obj_class.replace(' ' + cls + ' ', ' ');
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');
  obj.className = removed;
}

function hasClass (obj, cls) {
  var obj_class = obj.className,
    obj_class_lst = obj_class.split(/\s+/);
  x = 0;
  for (x in obj_class_lst) {
    if (obj_class_lst[x] == cls) {
      return true;
    }
  }
  return false;
}





