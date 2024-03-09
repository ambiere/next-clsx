declare namespace propClx {
  type Props = { [key: string]: string };
  type Condition = { [key: string]: string | boolean | Props };
  function propClx(c: Condition, k: string, val: string): string[][];
}

declare function propClx(c: Condition, k: string, val: string): string[][];

export = propClx;
