declare const useWeb3forms: <T extends {}>({ apikey, onSuccess, onError, }: {
    apikey: string;
    onSuccess: (successMessage: string) => void;
    onError: (errorMessage: string) => void;
}) => {
    submit: (formData: T) => Promise<void>;
};
export default useWeb3forms;
