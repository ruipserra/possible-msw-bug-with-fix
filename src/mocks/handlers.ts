import { rest } from "msw";
import { sessionData } from "../data/sessionData";
// import { sessionData } from "../data/sessionData";

export const handlers = [
  rest.get("/sessions", (_req, res, ctx) => {
    return res(
      ctx.set('Content-Type', 'application/json'),
      ctx.json(sessionData)
    )
  })
];