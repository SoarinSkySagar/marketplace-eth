import Link from "next/link"
import { useWeb3 } from "@components/providers"
import { useAccount } from "@components/web3/hooks/useAccount";

export default function Footer() {

  const { connect, isWeb3Loaded, web3, isLoading } = useWeb3();
  const {account} = useAccount()
  
  

  return (
    <section className="mb-16">
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/" legacyBehavior >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/" legacyBehavior >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href="/" legacyBehavior>
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href="/" legacyBehavior >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Wishlist
                </a>
              </Link>

              {
                isLoading ?
                  <span
                  className="opacity-50 px-8 py-3 rounded-md border text-base font-medium text-white bg-indigo-600 whitespace-nowrap cursor-not-allowed">
                    Loading...
                  </span> : isWeb3Loaded ? account ?
                  <span
                  className="px-8 py-3 rounded-md border text-base font-medium text-white bg-indigo-600 whitespace-nowrap cursor-default">
                    Hi there!
                  </span> :
                  <span
                  onClick={connect}
                  className="px-8 py-3 rounded-md border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer">
                    Connect Wallet
                  </span> :
                  <span
                    onClick={() => {window.open("https://metamask.io/download/", "_blank")}}
                    className="px-8 py-3 rounded-md border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer"
                  >
                      Install Metamask
                </span>
              }

              
            </div>
          </div>
        </nav>
      </div>
      {account &&
        <div className="flex justify-end sm:px-6 lg:px-8 pt-3">
          <div className="text-white bg-indigo-600 rounded-md p-2">
           {account}
          </div>
      </div>}
    </section>
  )
}
