'reach 0.1';


//Alice publishes the funds and the digest of the secret password
//Bob publishes the password
//Bob's published password is compared to the secret key 
//the fund is released to Bob iff Bob provided the right secret key



export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    amount: UInt,
    secretKey: UInt
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    getBobPass: Fun([], UInt)
  });
  init();

  A.only(()=>{
    const _pass= interact.secretKey;
    const [amt, passDigest]= declassify([interact.amount, digest(_pass)]);
  })
  
  // The first one to publish deploys the contract
  //Alice publishes the digest and pays the amount
  A.publish(amt, passDigest)
   .pay(amt);
  commit();

  // The second one to publish always attaches
  unknowable(B, A(_pass)); //assert that Bob has the zero knowledge of the secretKey

  B.only(()=>{
    const bobPass= declassify(interact.getBobPass());
    assume (digest(bobPass)==passDigest); //assume that Bob is honest
  })
  
  B.publish(bobPass);
  require(digest(bobPass)==passDigest); //It is required that Bob must be honest
 
  //the consensus ensures Bob provides the right password and transfer the Fund to Bob
  transfer(amt).to(B)

  commit();
  // write your program here
  exit();
});
