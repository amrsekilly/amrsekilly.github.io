---
title: Succinct/concise syntax for optional object keys in ES6
author: Amr Elsekilly
date: 2021-03-06
hero: ./images/js.jpeg
excerpt: Did you ever need to type a condition to add a new key to your JS object? This article has an ES6 shortcut for you!
---

# Introduction

Sometimes you're creating a javascript object to send in a network requset for example and you want to add a property if a specific condition is met. In the past we had to use conditions to do that, but ES6 gave us a shortcut to do that using the spread operator. That's what we'll see in the next sections.

# Problem

You want to send the `data` object in an HTTP request, and if the gender proerty is provided you wanna attach it to the data object. Otherwise, you want to omit it.

```javascript

const data = {
  first_name: 'Joe',
  last_name: 'Doe'
}

```

# Old Solution

In the past, you would need to use an if condition to check if the property has a value or not to add it to the `data` object as follows

```javascript
const data = {
  first_name: 'Joe',
  last_name: 'Doe'
}

const gender = 'male'

if(gender) {
  data.gender = gender
}

console.log(data)
// {
//   first_name: 'Joe',
//   last_name: 'Doe'
//   gender: 'male'
// }

```

Obviously, this required multiple lines of code to add that simple property to the JS object. Alternatively, you can use the ES6 shortcut syntax for this as you'll see in the next section.

### ES6 Solution

In ES6, you can use the spread operator to add the key/property to the JS object if it exists, and omit it if it doesn't as you can see this snippet

```javascript

const gender = 'male'

const data = {
  first_name: 'Joe',
  last_name: 'Doe',
  ...(gender && {gender})
}

console.log(data)
// {
//   first_name: 'Joe',
//   last_name: 'Doe'
//   gender: 'male'
// }

```

This is the abstract format of the optional key addition using the ES6 syntax

```javascript
const yourObject = {
  ...(condition && {keyName: value})
}

```

# Conclusion

I hope this article helped you with your work. If you're interested in getting up to date with the latest JS news and trends, don't forget to subscribe to my newsletter. Promise, I won't spam you!