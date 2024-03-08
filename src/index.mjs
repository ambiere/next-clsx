import getPropClasses from "./util/prop-classes";
import getConditionalClasses from "./util/conditional-classes";

function nextClx(style, condition = {}) {
  return (key, ...args) => {
    let i = 0;
    const classes = [];
    let _key = key[0].split(" ");

    _key.push(args);
    _key = _key.flat().filter((val) => val !== "");

    while (i < _key.length) {
      Object.entries(style[_key[i]]).map(([key, val]) => {
        const conditionalClasses = getConditionalClasses(condition, key, val);
        const propclasses = getPropClasses(condition, key, val);
        if (conditionalClasses.length) {
          return classes.push(conditionalClasses);
        }
        if (propclasses.length) {
          return propclasses.map((c) => classes.push(c));
        }
        return classes.push([key, val]);
      });
      i++;
    }

    return classes
      .filter(([_, str]) => typeof str === "string")
      .reduce((str, cls) => str + ` ${cls[1]}`, "")
      .trim();
  };
}

export default nextClx;
