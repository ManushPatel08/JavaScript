let balance=3000;
const checkBalance = () => 
{
    console.log("Avaliable Balance : "+balance);
}
const deposit = () =>
{
    let amt = parseInt(prompt("Enter amt : "))
    if(amt>0)
    {
        balance+=amt;
        console.log(amt+" deposited successfully.");
        checkBalance();
    }
    else
    {
        console.log("Enter valid amount.");
    }
    
}
const withdraw = () =>
{
    let min_balance = 1000
    let amt = parseInt(prompt("Enter amt : "))
    if (balance-amt>=min_balance)
    {
        balance-=amt;
        console.log(amt+" successfully withdrawn.");
        checkBalance();
    }
    else
    {
        console.log("Insufficient Balance. You are trying to withdraw "+amt+" but you have to maintain "+min_balance+" And you currently only have "+balance);        
    }
}

const accnum = 123456789
const accpin = 1407
acc = parseInt(prompt("Enter account number : "))
pin = parseInt(prompt("Enter your pin : "))

if(accnum == acc && accpin == pin)
{
    let x=true;
    while(x)
    {
        choice = parseInt(prompt("\nEnter your choice : \n1) Check Balance\n2) Deposit\n3) Withdraw\nRest) Exit"));
        switch(choice)
        {
            case 1:
                x=checkBalance();
            break;
            case 2:
                deposit();
            break;
            case 3:
                withdraw();
            break;
            default:
                x=false;
            break;
        }
    }
}
else
{
    console.log("Invalid Credentials!!!");
}
