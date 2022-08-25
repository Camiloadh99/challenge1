import { decode, DecodeOptions, JwtPayload } from "jsonwebtoken";

export type decodeJwtTokenFn = (
  token: string,
  options: DecodeOptions
) => string | JwtPayload | null;
const decodeJwtToken = (token: string, options?: DecodeOptions) => {
  return decode(token, options);
};
export { decodeJwtToken };
