const useWeb3forms = require("../src/index").default;
require("isomorphic-fetch");

describe("main", () => {
  let SUCCESS: boolean = false;

  const { submit } = useWeb3forms({
    apikey: "YOUR_ACCESS_KEY_HERE",
    onSuccess: (data: string) => {
      SUCCESS = true;
      console.log(JSON.stringify(data));
    },
    onError: (error: string) => {
      console.log(JSON.stringify(error));
    },
  });

  it("should return a function", () => {
    expect(submit).toBeInstanceOf(Function);
  });

  it("should submit the form", async () => {
    await submit({
      name: "John Doe",
      email: "john@doe.com",
    });
    expect(SUCCESS).toBe(true);
    SUCCESS = false;
  });

  it("should return an error", async () => {
    let IS_ERROR = false;
    const { submit } = useWeb3forms({
      apikey: "asd",
      onSuccess: (data: string) => {
        console.log(JSON.stringify(data));
      },
      onError: (error: string) => {
        IS_ERROR = true;
        console.log(JSON.stringify(error));
      },
    });
    await submit({
      name: "John Doe",
      email: "john@doe.com",
    });
    expect(IS_ERROR).toBe(true);
  });
});
