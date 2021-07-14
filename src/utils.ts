// \x1b[0m]重置之后输出的颜色
export const print = {
  log: (text: string) => console.log('\x1b[32m  --- %s\x1b[0m', text),
  danger: (text: string) => console.log('\x1b[31m  --- %s\x1b[0m', text),
  info: (text: string) => console.log('\x1b[36m  --- %s\x1b[0m', text),
};
