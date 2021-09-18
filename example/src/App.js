import React from "react";

import useWeb3forms from "use-web3forms";

const App = () => {
  // ----------------------------------------
  const { submit } = useWeb3forms({
    apikey: "YOUR_ACCESS_KEY_HERE",
    onSuccess: (result) => {
      alert(JSON.stringify(result));
    },
    onError: (error) => {
      alert(JSON.stringify(error));
    },
  });
  // ----------------------------------------

  return (
    <div>
      <button
        onClick={(e) => {
          submit({
            hello: "world",
            isWorking: "Yesss!!!",
          });
        }}>
        Submit form
      </button>
    </div>
  );
};
export default App;
