# Kashkoin-Blockchain-Explorer
Block explorer for Kashkoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon kashkoind. It should be accessible from the Internet. Run kashkoind with open port as follows:
```bash
./kashkoind --restricted-rpc --enable-cors=* --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0 --rpc-bind-port=30965
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
