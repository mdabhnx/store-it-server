import { server } from "../src/main";
import request from "supertest";

beforeAll(() => {
  server.close();
});

describe("we will check all the routes in content controller file", () => {
  test("it should return status 400 while making a call without any content body params", async () => {
    const resposne = await request(server).post("/v1/cr/content");
    expect(resposne.body.status).toBe(400);
  });
});
