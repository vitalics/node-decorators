![Node Decorators](https://github.com/serhiisol/node-decorators/blob/master/decorators.png?raw=true)

Project implements decorators for Nodejs 8.x.x(LTS):
- [Nodejs]

### Installation
```
npm install @decorators/node --save
```

### API

#### Decorators
#### Method
* **@Assert(value [, message])** - An alias of `@Ok()`.Tests if value is truthy
* **@DeepEqual(value [,message])** - Tests for deep equality between the actual and expected parameters. Primitive values are compared with the **Abstract Equality Comparison ( == )**.
* **@DeepStrictEqual(value [, message])** - Generally identical to assert.deepEqual() with a few exceptions:
    1) Primitive values are compared using the **Strict Equality Comparison ( === )**. Set values and Map keys are compared using the SameValueZero comparison. (Which means they are free of the caveats).
    2) **[[Prototype]]** of objects are compared using the Strict Equality Comparison too.
    3) Type tags of objects should be the same
    4) Object wrappers are compared both as objects and unwrapped values
* **@DoesNotThrow(block[, error][, message])** - Asserts that the function block does not throw an error. See `@Throws()` for more details.
* **@Equal(expected[, message])** - Tests shallow, coercive equality between the actual and expected parameters using the **Abstract Equality Comparison ( == )**.
* **@fail(message)**
* **@fail( expected[, message[, operator[, stackStartFunction]]])** - Throws an AssertionError. If message is falsy, the error message is set as the values of actual and expected separated by the provided operator
* **@notDeepEqual(expected[, message])** - Tests for any deep inequality. Opposite of `@DeepEqual()`
* **@NotDeepStrictEqual(expected[, message])** - ests for deep strict inequality. Opposite of `@DeepStrictEqual()`
* **@NotEqual(expected[, message])** - Tests shallow, coercive inequality with the **Abstract Equality Comparison ( != )**.
* **@NotStrictEqual(expected[, message])** - Tests strict inequality as determined by the **Strict Equality Comparison ( !== )**.
* **@Ok([message])** - Tests if value is truthy.If value is not truthy, an `AssertionError`
* **@StrictEqual(expected[, message])** - Tests strict equality as determined by the **Strict Equality Comparison ( === )**
* **@Throws(block[, error][, message])** - Expects the function block to throw an error

[Nodejs]:https://nodejs.org/dist/latest-v8.x/docs/api/assert.html