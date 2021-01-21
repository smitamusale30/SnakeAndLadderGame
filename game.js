console.log("Welcome !!!");
const START=0;
let die=0,move='';
var option=["NoPlay","Ladder","Snake"];
let position=0;
let player1=true,playerPostion1=0,diceThrown1=0;

let player2=false,playerPostion2=0,diceThrown2=0;

function dice()
{
    die=Math.floor(Math.random()*6)+1;
    console.log("Dice:  "+die);
    //diceThrown1++;
}
function nextMove()
{
    move=option[Math.floor(Math.random()*option.length)];
    console.log("The Move:  "+move);
}
function nextStep(postion)
{
    dice();
    nextMove();
    if(move=="NoPlay")
    {
        playerPostion=postion;
    }
    else if(move=="Ladder")
    {
        let temp=postion+die;
        if(temp>100)
        {
            playerPostion=postion;
        }
        else
        {
            playerPostion=postion+die;
            console.log("player position: "+playerPostion);
            nextStep(playerPostion);
        }
    }
    else 
    {
        let temp=postion-die;
        if(temp<0)
        {  
            playerPostion=postion;
        }
        else
        {
            playerPostion=postion-die;
        } 
    }
    return playerPostion;   
}
function main()
{
    while(playerPostion1<100 && playerPostion2<100)
    {
        if(player1==true && player2==false)
        {
            console.log("**********************************************");
            console.log("player1");
            playerPostion1=nextStep(playerPostion1);
            console.log("Player1 at The position:  "+playerPostion1);
            player1=false;
            player2=true;
        }
        else
        {
            console.log("**********************************************");
            console.log("player2");
            playerPostion2=nextStep(playerPostion2);
            console.log("Player2 at The position:  "+playerPostion2);
            player1=true;
            player2=false;
        }
    }
    if(playerPostion1>playerPostion2)
    {
        console.log("Player 1 get win");
    }
    else
    {
        console.log("Player 2 get win");
    }
}
main();