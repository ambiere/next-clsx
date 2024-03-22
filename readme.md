## next-clsx

A tiny and simple utility that embrace styles re-usability 
and semantic html when using tailwindcss utility classes to 
style your next reactjs projects. `next-clsx` supports both 
conditional styling and style props from parent component out
of box.


> Contents <br>
> 1.0 [Installation](#10-installation) <br>
> 2.0 [Usage](#20-usage) <br>
> 3.0 [Tailwindcss Intellisense](#30-tailwindcss-intellisense) <br>


**1.0 Installation**

--------

next-clsx is available as npm package, to install it just use those 
magic words in your cwd terminal, npm install... yeah you know:

```bash
npm install next-clsx
```

**2.0 Usage**

-----

This is the fun part, you just have to import next-clsx in your
components and start getting creative. To ensure that you maintain 
code readability, `next-clsx` make it possible to refactor your 
tailwindcss utility classes into a dedicated javascript object.

```js
import nextClsx from "next-clsx"

 export function MyPreciousComponent() {
   const clsx = nextClsx(style)
  
   return (
     <h1 class={clsx`a-1`}>Hello next-clsx</h1>
   )
 }

 export const style = {
   "a-1": {
     h1: `${inter.classname}`
   }
 }
```

`next-clsx` will magically match the key in style object with that
tagged in `clsx` callback function and apply the defined styles from the
style object to the component.

**3.0 Tailwindcss Intellisense**

------

Refactoring our tailwindcss utility classes make us loose the tailwindcss
classes completion, suggestion, linting and more. To make it happen again
make sure you add the variable name of your style object to the classAttributes
in tailwindcss intellisense settings. 

**3.1 Vim**

```lua
require("lspconfig").tailwindcss.setup({
  settings = {
    tailwindCSS = {
      classAttributes = {
        "class",
        "className",
        "styles",
        "style",
      },
    },
  },
})
```


**3.2 VSCode**

Edit settings.json by adding the variable name of your style object to the classAttributes.

```json
{
  "tailwindCSS.classAttributes": ["class", "className", "ngClass", "style"], 
}
```







## Features

### 1 Style props

Easily apply styling props passed to a component from it's parent. 
Call `nextClsx` with second argument containing object of passed props as the value of `props` key. In the style object specify all names of the props passed as an array.

> NB: The key props passed as in nextClsx should match that in style.input

```js
import nextClsx from "next-clsx"

function ChildComponent({ width }) {
  const clsx = nextClsx(style, { props: { width } })
  return (
  <Input type="text" class={clsx`input`} />
  )
}

const style = {
  input: {
    props: ["width"]
  }
}
```

### 2 Conditional Styling
