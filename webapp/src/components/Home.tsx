import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// interface WalletState {
//   polkadot: boolean;
//   evm: boolean;
// }

export function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [_activeTab, setActiveTab] = useState("overview");
  // const [connectedWallets, setConnectedWallets] = useState<WalletState>({
  //   polkadot: false,
  //   evm: false,
  // });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // const handleConnectWallet = (type: "polkadot" | "evm") => {
  //   setConnectedWallets((prev) => ({
  //     ...prev,
  //     [type]: !prev[type],
  //   }));
  // };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-full blur-3xl transform -translate-y-1/2 opacity-30"></div>
          <div className="absolute right-0 bottom-0 bg-gradient-to-l from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl h-96 w-96 transform translate-x-1/3 opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <AnimatePresence>
            {isLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <motion.h1
                  className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Dot Starter Kit
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl mb-8 text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  The ultimate boilerplate for building applications on
                  POlkadot. Connect EVM + Polkadot wallet, deploy contracts, and
                  build your dApp faster than ever.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link to="/contracts">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 hover:cursor-pointer"
                    >
                      View Deployments <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1">
              Interactive Demo
            </Badge>
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the core features of the Polkadot
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-800/30 border border-gray-700 rounded-xl p-6">
            <Tabs
              defaultValue="overview"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="contracts">Smart Contracts</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Frontend</h3>
                      <p className="text-gray-400 mb-4">
                        A complete development environment for building polkadot
                        applications on Passet Hub that combines native
                        Substrate and EVM features.
                      </p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-indigo-500" />
                          Connect to Polkadot and EVM wallets
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-indigo-500" />
                          Interact with native Polkadot pallets
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-indigo-500" />
                          Deploy Solidity contracts via Hardhat
                        </li>
                        <li className="flex items-center">
                          <ChevronRight className="mr-2 h-4 w-4 text-indigo-500" />
                          Auto-generated UI from contract ABIs
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2 bg-gray-800 border border-gray-700 rounded-lg p-4 font-mono text-sm text-gray-300">
                      <div className="flex items-center mb-4 text-xs text-gray-500">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span>Terminal</span>
                      </div>
                      <div className="space-y-1">
                        <p>
                          <span className="text-green-400">$</span> git clone
                          https://github.com/NevvDevvLabs/Dot-Starter-Kit
                        </p>
                        <p>
                          <span className="text-purple-400">✓</span> Cloning
                          Repository...
                        </p>
                        <p>
                          <span className="text-purple-400">✓</span> Setup
                          complete!
                        </p>
                        <p className="mt-2">
                          <span className="text-green-400">$</span> cd webapp
                        </p>
                        <p>
                          <span className="text-green-400">$</span> npm i
                        </p>
                        <p>
                          <span className="text-purple-400">✓</span> Installing
                          dependencies...
                        </p>
                        <p>
                          <span className="text-green-400">$</span> npm run dev
                        </p>
                        <p className="text-gray-500">
                          Server running at http://localhost:5173
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="contracts">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">
                        Smart Contracts Integration
                      </h3>
                      <p className="text-gray-400 mb-6">
                        Deploy and interact with Solidity smart contracts on
                        Passet hub using our integrated Hardhat setup and
                        auto-generated UI components.
                      </p>
                      <div className="space-y-4">
                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                          <h4 className="text-lg font-medium mb-2">
                            Included Features
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <ChevronRight className="mr-2 h-4 w-4 text-indigo-500 mt-1" />
                              <span>
                                Hardhat project with Passet Hub configuration
                              </span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="mr-2 h-4 w-4 text-indigo-500 mt-1" />
                              <span>Pre-configured deployment scripts</span>
                            </li>
                            <li className="flex items-start">
                              <ChevronRight className="mr-2 h-4 w-4 text-indigo-500 mt-1" />
                              <span>Auto-generated UI from contract ABIs</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 font-mono text-sm">
                      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center mb-4 text-xs text-gray-500">
                          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                          <span>Terminal</span>
                        </div>
                        <div className="space-y-1 text-gray-300">
                          <p>
                            <span className="text-green-400">$</span> npx
                            hardhat compile
                          </p>
                          <p className="text-gray-500">
                            Compiling 1 Solidity file
                          </p>
                          <p className="text-purple-400">
                            ✓ Successfully compiled 1 Solidity file
                          </p>
                          <p className="mt-2">
                            <span className="text-green-400">$</span> npx
                            hardhat ignition deploy
                            ./ignition/modules/MyToken.ts --network passetHub
                          </p>
                          <p className="text-gray-500">
                            Deploying SimpleToken to passet-hub
                          </p>
                          <p className="text-purple-400">
                            ✓ SimpleToken deployed to: 0x42a78...3d85
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 px-3 py-1">
              Get Started Today
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build on Polkadot?
            </h2>
            <p className="text-gray-400 mb-8">
              Join the growing ecosystem of developers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/NevvDevvLabs/Dot-Starter-Kit"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 hover:cursor-pointer"
                >
                  <GitBranch className="mr-2 h-5 w-5" /> Clone Repository
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
