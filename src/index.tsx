const useWeb3forms = <T extends {}>({
  apikey,
  onSuccess,
  onError,
}: {
  apikey: string;
  onSuccess: (successMessage: string) => void;
  onError: (errorMessage: string) => void;
}) => {
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
    if (data.success === true) {
      onSuccess(data.message);
    } else {
      onError(data.message);
    }
  };
  return {
    submit,
  };
};

export default useWeb3forms;
