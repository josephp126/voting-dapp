const mnemonic = "finish original science wealth ahead payment shoulder real firm monster upper verb";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network idonic, ""
    },
    develop: {
      port: 8545
    }
  }
};
