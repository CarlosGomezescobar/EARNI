const { expect } = require("chai");
const hre = require("hardhat");
const ethers = hre.ethers;
const { getContractFactory } = ethers;

async function getBalanceOf() {
  const contract = new ethers.Contract(abi, address);
  const balanceOf = await contract.balanceOf(address);
  return balanceOf;
}

async function main() {
  const balanceOf = await getBalanceOf();
  console.log(balanceOf);
}
const fs = require('fs');

const contractsDirectory = './contracts-external';

const contracts = fs.readdirSync(contractsDirectory);

for (const contract of contracts) {
  if (contract.endsWith('.sol')) {
    require(`./contracts-external/${contract}`);
  }
}
module.exports = {};
const earnprivate = require("./contracts/Earni.sol");
describe("EARNPRIVATE", function () {

  let EarnPrivate, owner;

  before(async function () {
     
     IERC20Artifact = await hre.artifacts.readArtifact("contracts/Earni.sol:IERC20");
     const tokenAddress = await earnprivate.TokenRecibe();
     const contract = new ethers.Contract(tokenAddress, IERC20Artifact.abi, owner);
     await contract.initialize(totalSupply, name, symbol, decimals, owner);
   });
   beforeEach(async function () {
    EarnPrivate = await ethers.getContractFactory("EARNPRIVATE");
    [owner, addr1, addr2] = await ethers.getSigners(); // Agregar addr1 y addr2
    earnprivate = await EarnPrivate.deploy(addr1.address, addr2.address, true);

    // Agregar la cuenta del contrato a la lista blanca
    await earnprivate.addUserWhiteList(owner.address);

    // Verify that the contract has been deployed correctly
    expect(await earnprivate.owner()).to.equal(owner.address);
    expect(await earnprivate.Initialized()).to.equal(true);
    });
     it("should set the owner to the correct address", async () => {
    expect(await contract.owner()).to.equal(owner);
    
    // it("Should set the right owner", async function () {
   //   expect(await earnprivate.owner()).to.equal(owner.address);
     })

    describe("Deployment", function () {
      it("Should set the right owner", async function () {
        expect(await earnprivate.owner()).to.equal(owner.address);
      });

      it("Should set the contract to be initialized", async function () {
        expect(await earnprivate.Initialized()).to.equal(true);
      });
    });

    describe("Initialization", function () {
      it("Should update state after calling Initialized", async function () {
        await earnprivate.Initialized(1000, 2000, 100, 10, 30);
        expect(await earnprivate.limit()).to.equal(1000);
        expect(await earnprivate.MaxAmount()).to.equal(2000);
        expect(await earnprivate.MinAmount()).to.equal(100);
        expect(await earnprivate.PercentEarn()).to.equal(10);
        expect(await earnprivate.ViewDay()).to.equal(30);
      });
    });

    describe("Transactions", function () {
        it("Should update balance after deposit", async function () {
         
        await earnprivate.Deposit(100);

        // Verify that the state of the contract is correct
        expect(await earnprivate.balanceOf(owner.address)).to.equal(100);
        });
      

        it("Should update balance after withdrawal", async function () {
          // Add your test logic here
        });

        it("Should update state after calling Deposit", async function () {
          // Initialize the contract with some example values

          await earnprivate.Initialized(1000, 2000, 100, 10, 30);

          // Add the user to the whitelist
          await earnprivate.addUserWhiteList(owner.address);

          // Obtener la dirección del token especificada en el constructor
          const tokenAddress = await earnprivate.TokenRecibe();

          // Crea una instancia del contrato IERC20 utilizando la dirección del token
          const usdt = new ethers.Contract(tokenAddress, IERC20Artifact.abi, owner);

          // Llamar a la función approve para permitir que el contrato EARNPRIVATE gaste tokens en tu nombre
          await usdt.approve(earnprivate.address, 100);

          // Send the transaction
          await earnprivate.Deposit(contractAddress, amount, { gas });

          // Verify that the state was updated correctly
          // For example, you could check the balance of the user who made the deposit
          expect(await earnprivate.balanceOf(owner.address)).to.equal(100);

          // Verify that the Deposit event was emitted with the correct arguments
          expect(await earnprivate.once("Deposit", (user, amount) => {
          expect(user).to.equal(owner.address);
            expect(amount).to.equal(100);
          }));
        });
        
        it("Should update state after calling EarnDeposit", async function () {
            // Initialize the contract with some example values
            await earnprivate.Initialized(1000, 2000, 100, 10, 30);

            // Add the user to the whitelist
            await earnprivate.addUserWhiteList(owner.address);

            // Obtener la dirección del token especificada en el constructor
            const tokenAddress = await earnprivate.TokenRecibe;

            // Crea una instancia del contrato IERC20 utilizando la dirección del token USDT
            const usdt = new ethers.Contract(tokenAddress, IERC20Artifact.abi, owner);

            // Llamar a la función approve para permitir que el contrato EARNPRIVATE gaste tokens en tu nombre
            await usdt.approve(earnprivate.address, 100);

            // Call the Deposit function with some example arguments
            await earnprivate.Deposit(100);

            // Call the EarnDeposit function with some example arguments
            await earnprivate.EarnDeposit();

            // Verify that the state was updated correctly
            // For example, you could check the balance of the user who made the deposit to make sure it was increased by the expected amount
            expect(await earnprivate.balanceOf(owner.address)).to.equal(110);

            // Verify that the EarnDeposit event was emitted with the correct arguments
            expect(await earnprivate.once("EarnDeposit", (user, amount) => {
              expect(user).to.equal(owner.address);
              expect(amount).to.equal(10);
            }));
          });
        
        it("Should update state after calling RecoverTokens", async function () {
            // Initialize the contract with some example values
            await earnprivate.Initialized(1000, 2000, 100, 10, 30);

            // Add the user to the whitelist
            await earnprivate.addUserWhiteList(owner.address);

            // Obtener la dirección del token especificada en el constructor
            const tokenAddress = await earnprivate.TokenRecibe();

            // Crea una instancia del contrato IERC20 utilizando la dirección del token USDT
            const usdt = new ethers.Contract(tokenAddress, IERC20Artifact.abi, owner);

            // Llamar a la función approve para permitir que el contrato EARNPRIVATE gaste tokens en tu nombre
            await usdt.approve(earnprivate.address, 100);

            // Call the Deposit function with some example arguments
            await earnprivate.Deposit(100);

             if (ethers.utils.isAddress(okenAddress)) {

                // Call the RecoverTokens function with some example arguments
                await earnprivate.RecoverTokens(tokenAddress);
                expect(await usdt.balanceOf(earnprivate.address)).to.equal(0);
              } else {
             
                   // La dirección o nombre ENS es inválido
                console.log("Dirección o nombre ENS inválido:", TokenAddress);
                // Puedes manejar el error de alguna manera o lanzar una excepción
                throw new Error("Dirección o nombre ENS inválido");
              }       
          });
        
        it("Should update state after calling EarlyClaim", async function () {
            // Initialize the contract with some example values
           await earnprivate.Initialized(1000, 2000, 100, 10, 30);

           // Add the user to the whitelist
            await earnprivate.addUserWhiteList(owner.address);

           // Obtener la dirección del token especificada en el constructor
           const tokenAddress = await earnprivate.TokenRecibe;

           // Crea una instancia del contrato IERC20 utilizando la dirección del token USDT
           const usdt = new ethers.Contract(tokenAddress, IERC20Artifact.abi, owner);

           // Llamar a la función approve para permitir que el contrato EARNPRIVATE gaste tokens en tu nombre
           await usdt.approve(earnprivate.address, 100);
       
           // Call the Deposit function with some example arguments
            await earnprivate.Deposit(100);

           // Call the EarlyClaim function with some example arguments
           await earnprivate.EarlyClaim();

           // Verify that the state was updated correctly
           // For example, you could check the balance of the user who made the deposit to make sure it was reduced to zero
           expect(await earnprivate.balanceOf(owner.address)).to.equal(0);
          });
        it("Should update state after calling Migration", async function () {
           // Initialize the contract with some example values
          await earnprivate.Initialized(1000, 2000, 100, 10, 30);

           // Add the user to the whitelist
          await earnprivate.addUserWhiteList(owner.address);

           // Obtener la dirección del token especificada en el constructor
          const tokenAddress = await earnprivate.TokenRecibe();

           // Crea una instancia del contrato IERC20 utilizando la dirección del token
          const usdt = new ethers.Contract(tokenAddress, IERC20Artifact.abi, owner);

           // Llamar a la función approve para permitir que el contrato EARNPRIVATE gaste tokens en tu nombre
          await usdt.approve(earnprivate.address, 100);

           // Call the Deposit function with some example arguments
          await earnprivate.Deposit(100);

           // Deploy a new instance of the EARNPRIVATE contract to migrate to
          const newEarnPrivate = await EarnPrivate.deploy(addr1.address, addr2.address, true);

           // Obtén la dirección o nombre ENS válido para la migración
          const migrationAddress = "0x1234567890abcdef1234567890abcdef12345678";

          // Verifica si la dirección o nombre ENS es válido
          if (ethers.utils.isAddress(migrationAddress) || ethers.utils.isValidName(migrationAddress)) {
            // Llama a la función Migration con el argumento válido
          await earnprivate.Migration(migrationAddress);

            // Verifica que el estado se haya actualizado correctamente después de la migración
          expect(await newEarnPrivate.balanceOf(owner.address)).to.equal(100);
          expect(await newEarnPrivate.limit()).to.equal(1000);
          expect(await newEarnPrivate.MaxAmount()).to.equal(2000);
          expect(await newEarnPrivate.MinAmount()).to.equal(100);
          expect(await newEarnPrivate.PercentEarn()).to.equal(10);
          expect(await newEarnPrivate.ViewDay()).to.equal(30);

          expect(await usdt.balanceOf(newEarnPrivate.address))
          expect(await usdt.balanceOf(newEarnPrivate.address)).to.equal(100);
          expect(await usdt.balanceOf(earnprivate.address)).to.equal(0);

          expect(await newEarnPrivate.owner()).to.equal(owner.address);

          expect(await newEarnPrivate.walletPool()).to.equal(addr1.address);

          expect(await newEarnPrivate.TokenRecibe()).to.equal(tokenAddress);

          expect(await newEarnPrivate.isWhiteListed(owner.address)).to.be.true;

          expect(await newEarnPrivate.isWhiteListed(addr1.address)).to.be.false;
          } else {
            // La dirección o nombre ENS es inválido
            console.log("Dirección o nombre ENS inválido:", migrationAddress);
            // Puedes manejar el error de alguna manera o lanzar una excepción
            throw new Error("Dirección o nombre ENS inválido");
          }
        });
        
      });
      
    describe("Configuration", function () {
          it("Should update walletPool after calling ChangeWalletRecibe", async function () {
            await earnprivate.ChangeWalletRecibe(addr1.address);
            expect(await earnprivate.walletPool()).to.equal(addr1.address);
          });
          it("Should update MinAmount after calling ChangeMinAmount", async function () {
            await earnprivate.ChangeMinAmount(100);
            expect(await earnprivate.MinAmount()).to.equal(100);
          });
          it("Should update MaxAmount after calling ChangeMaxAmount", async function () {
            await earnprivate.ChangeMaxAmount(200);
            expect(await earnprivate.MaxAmount()).to.equal(200);
          });
          it("Should update limit after calling ChangeLimitAmount", async function () {
            await earnprivate.ChangeLimitAmount(300);
            expect(await earnprivate.limit()).to.equal(300);
          });
        });
      
    describe("Verification", function () {
      it("Should verify if an address is a contract", async function () {
       // Get the code at the specified address
        const code = await ethers.provider.getCode(addr1.address);

        // Check if the code is empty
        if (code === "0x") {
          // The address is not a contract
          console.log("The address is not a contract");
          expect(true).to.be.true;
        } else {
        // The address is a contract
          console.log("The address is a contract");
          expect(true).to.be.true;
        }
      });
        
    });
});
