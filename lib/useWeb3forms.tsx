const useWeb3forms = <T extends {}>(apikey: string) => {
  const submit = async (formData: T) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apikey,
        ...formData,
      }),
    });
    const data = await response.json();
    return data;
  };
  return {
    submit,
  };
};

export default useWeb3forms;
