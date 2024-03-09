export type Props = { [key: string]: string };
export type Condition = { [key: string]: string | boolean | Props };

export function propClx(c: Condition, k: string, val: string): string[][];
export default propClx;
