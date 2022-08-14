# Hash_Lock

This is an application design to lock a participant fund using a secret key. This fund is released to anyone possessing the
secret key.

# In this case let's ask the following questions:

1. Who is involved in this application?
 Those involve in this application will be participant(Alice) who decides to lock the fund in the contract as well providing the key to
  access it and a participant(Bob) which ought to possess the key in accessing the lock fund.

2. What information do they know at the start of the program?
  For Alice, the amount and the secret key is known. While for Bob, it knows nothing

3. What information are they going to discover and use in the program?
  The amount and secret key have to be known and used in the program

4. What funds change ownership during the application and how?
   
   The locked fund will change ownership if and only if Bob provides the right secret key to the locked fund
   