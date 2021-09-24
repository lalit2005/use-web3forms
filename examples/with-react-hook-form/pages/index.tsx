import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useForm } from 'react-hook-form';
import useWeb3forms from 'use-web3forms';
import { useState } from 'react';

const Home: NextPage = () => {
  const [apiKey, setApiKey] = useState<string>('');
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormData>();

  const { submit } = useWeb3forms<FormData>({
    apikey: apiKey,
    onSuccess: (successMessage) => {
      alert(successMessage);
    },
    onError: (errorMessage) => {
      alert(errorMessage);
    },
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Web3forms</title>
      </Head>
      <main className={styles.main}>
        <h1>
          Web3forms + <code>useWeb3forms</code> + React hook form
        </h1>
        <p>Enter API key that you got from web3forms.com</p>
        <input
          type='text'
          placeholder='Api key'
          value={apiKey}
          id='api-key'
          onChange={(e) => setApiKey(e.target.value)}
        />
        <hr />
        <h2>
          Fill out this demo 👇 form an recieve an email. Don&apos;t forget to
          fill the API key above ☝️
        </h2>
        <form>
          <input
            type='text'
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            placeholder='Email'
          />
          {errors.email && (
            <p className='error-msg'>Please enter a valid email</p>
          )}
          <input
            type='text'
            {...register('name', {
              required: true,
              minLength: 3,
            })}
            placeholder='Name'
          />
          {errors.name && (
            <p className='error-msg'>Please enter a valid name</p>
          )}
          <input
            type='text'
            {...register('message', {
              required: true,
              minLength: 3,
            })}
            placeholder='Message'
          />
          {errors.message && (
            <p className='error-msg'>Please enter a valid message</p>
          )}
          <button type='submit' onClick={handleSubmit(submit)}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};
export default Home;
