import React from "react";

import useWeb3forms from "use-web3forms";

const App = () => {
  const { submit } = useWeb3forms("0e83ba98-55ad-4b87-8684-4175fd6e2ab6");
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          submit({
            hello: "world",
            sentOn: "Clicking a button",
          });
        }}>
        Send mail
      </button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};
export default App;
