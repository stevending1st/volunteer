import TOKEN from "../TOKEN";

export default function verify(posToken: string): object | boolean {
  if (TOKEN === posToken) {
    return false;
  } else {
    return {
      status: 401,
      msg: "TOKEN 过期或无效"
    };
  }
}
