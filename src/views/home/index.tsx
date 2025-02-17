// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="md:hero mx-auto p-4">
      <div className="flex flex-col">
        <div className='mt-6'>
        {/* <div className='text-sm font-normal align-bottom text-right text-slate-600 mt-4'>v0.1.0</div> */}
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 my-1">
          Profit Pool
        </h1>
        </div>
        <h4 className="md:w-full text-center text-slate-300 text-opacity-40">
          <p>Connect wallet to exchange AURA for USDC</p>
        </h4>
        <div className="relative group">
          <div className="max-w-md mx-auto mockup-code bg-primary border-2 border-[#5252529f] p-6 my-10">
            <pre data-prefix=">">
              <code className="truncate">{`npx create-solana-dapp <dapp-name>`} </code>
            </pre>
          </div>
        </div>
        {/*
        <div className="flex flex-col mt-2">
          <RequestAirdrop />
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
          {wallet &&
          <div className="flex flex-row justify-center">
            <div>
              {(balance || 0).toLocaleString()}
              </div>
              <div className='text-slate-600 ml-2'>
                SOL
              </div>
          </div>
          }
          </h4>
        </div>
        */}
      </div>
    </div>
  );
};
