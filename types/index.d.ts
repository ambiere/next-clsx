declare module "next-clsx" {
  namespace nextClsx {
    /**
     * Javascript object containing tailwindcss utility classes key-value pair
     * @example
     * ```js
     * const style = {
     *  "a-1": {
     *  header: `text-tertiary`
     *  }
     * }
     * ```
     **/
    interface Style {
      [index: string]: {
        [index: string]: string | number | boolean
      }
    }

    /**
     * Styling options. Conditions that next-clsx will use to style components
     * @example 
     * ```js
     * export default MyComponent({ width }) {
     *  const clsx = nextClsx(style, {pathname: "/settings", props: { width }})
     *  return (
     *    <Input class={cls`a-1`}/>
     *  )
     * }
     *
     * const style = {
     *  "a-1": {
     *    ["hover:bg-gray-400/10"]: "/settings",
     *    props: ["width"]
     *  }
     * }
     * ```
     **/
    interface Options {
      [index: string]: string | boolean | number | {
        [index: string]: string
      }
    }


    /**
    * Util function that returns tailwindcss utility classes.
    * @param {string} className
    * @param {string} classNames - Pass modifying classNames
    * @example
    * ```js
    * {
    * // codes omitted
    *  return (
    *    <Input class={clsx`a-1 --a-1`} />
    *  )
    * }
    *
    * const style = {
    *  "a-1": {
    *      header: "text-tertiary font-bold"
    *  },
    * "--a-1":{
    *      header: "font-semibold"
    *  }
    * }
    * ```
    **/
    type ApplyClasses = (className: string, classNames?: string) => string
  }

  /**
  * @param {nextClsx.Style} style - Javascript object containing tailwindcss utility classes key-value pairs.
  * @param {nextClsx.Options} options - Styling options. Conditions that next-clsx will use to style components.
  * @returns {ApplyClasses} ApplyClasses - Util function that returns tailwindcss utility classes from provided style property key(s).
  **/
  export default function nextClsx(style: nextClsx.Style, options: nextClsx.Options): nextClsx.ApplyClasses
}
