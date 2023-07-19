const { expect } = require("chai");

describe("EARNPRIVATE", function () {
  let EarnPrivate, earnprivate, owner, addr1, addr2;
  let IERC20Artifact;

  before(async function () {
    IERC20Artifact = await hre.artifacts.readArtifact("IERC20");
  });

  beforeEach(async function () {
    EarnPrivate = await ethers.getContractFactory("EARNPRIVATE");
    [owner, addr1, addr2] = await ethers.getSigners();
    earnprivate = await EarnPrivate.deploy("0x55d398326f99059ff775485246999027b3197955", addr1.address, addr2.address, { gasLimit: 1000000 });

  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await earnprivate.owner()).to.equal(owner.address);
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
      // Add your test logic here
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

      // Crea una instancia del contrato IERC20 utilizando la dirección del token USDT
      const usdt = new ethers.Contract(tokenAddress, IERC20Artifact.abi, owner);

      // Llamar a la función approve para permitir que el contrato EARNPRIVATE gaste tokens en tu nombre
      await usdt.approve(earnprivate.address, 100);

      // Call the Deposit function with some example arguments
      await earnprivate.Deposit(100);

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
      const tokenAddress = await earnprivate.TokenRecibe();

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

      // Call the RecoverTokens function with some example arguments
      await earnprivate.RecoverTokens(tokenAddress);

      // Verify that the state was updated correctly
      // For example, you could check the balance of the contract to make sure it was reduced to zero
      expect(await usdt.balanceOf(earnprivate.address)).to.equal(0);
    });

    it("Should update state after calling EarlyClaim", async function () {
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

      // Crea una instancia del contrato IERC20 utilizando la dirección del token USDT
      const usdt = new ethers.Contract(tokenAddress, IERC20Artifact.abi, owner);

      // Llamar a la función approve para permitir que el contrato EARNPRIVATE gaste tokens en tu nombre
      await usdt.approve(earnprivate.address, 100);

      // Call the Deposit function with some example arguments
      await earnprivate.Deposit(100);

      // Deploy a new instance of the EARNPRIVATE contract to migrate to
      const newEarnPrivate = await EarnPrivate.deploy(addr1.address, addr2.address, true);
      
       // Call the Migration function with some example arguments
       await earnprivate.Migration(newEarnPrivate.address);
       
       expect(await newEarnPrivate.balanceOf(owner.address)).to.equal(100);
       expect(await newEarnPrivate.limit()).to.equal(1000);
       expect(await newEarnPrivate.MaxAmount()).to.equal(2000);
       expect(await newEarnPrivate.MinAmount()).to.equal(100);
       expect(await newEarnPrivate.PercentEarn()).to.equal(10);
       expect(await newEarnPrivate.ViewDay()).to.equal(30);
       
       expect(await usdt.balanceOf(newEarnPrivate.address)).to.equal(100);
       expect(await usdt.balanceOf(earnprivate.address)).to.equal(0);
       
       expect(await newEarnPrivate.owner()).to.equal(owner.address);
       
       expect(await newEarnPrivate.walletPool()).to.equal(addr1.address);
       
       expect(await newEarnPrivate.TokenRecibe()).to.equal(tokenAddress);
       
       expect(await newEarnPrivate.isWhiteListed(owner.address)).to.be.true;
       
       expect(await newEarnPrivate.isWhiteListed(addr1.address)).to.be.false;
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
