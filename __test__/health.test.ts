import { server } from "../src/main";

beforeAll(() => {
  server.close();
});

describe("testing if the test case are running perfect or not", () => {
  test("it should pass the test", () => {
    expect(1).toBe(1);
  });
});
