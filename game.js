console.log("Welcome !!!");
const START=0;
let die=0,move='';
var option=["NoPlay","Ladder","Snake"];

let player=true;playerPostion=0,diceThrown=0;

let player1=false,playerPostion1=0,diceThrown1=0;

function dice()
{
    die=Math.floor(Math.random()*6)+1;
    console.log("Dice:  "+die);
    diceThrown++;
}
function nextMove()
{
    move=option[Math.floor(Math.random()*option.length)];
    console.log("The Move:  "+move);
}
function main()
{
    while(playerPostion<10 && playerPostion1<10)
    {
        if(player==true && player1==false)
        {
            console.log("player0");
            dice();
            nextMove();
            if(move=="NoPlay")
            {
                playerPostion=playerPostion;
            }
            else if(move=="Ladder")
            {
                let temp=playerPostion+die;
                if(temp>10)
                {
                    playerPostion=playerPostion;
                }
                else
                {
                    playerPostion=playerPostion+die;
                }
            }
            else 
            {
                let temp=playerPostion-die;
                if(temp<0)
                {
                    playerPostion=playerPostion;
                }
                else
                {
                    playerPostion=playerPostion-die;
                } 
            } 
            console.log("Player at The position:  "+playerPostion);
            player=false;
            player1=true;
        }
        else
        {
            console.log("player1");
            dice();
            nextMove();

            if(move=="NoPlay")
            {
                playerPostion1=playerPostion1;
            }
            else if(move=="Ladder")
            {
                let temp=playerPostion1+die;
                if(temp>10)
                {
                    playerPostion1=playerPostion1;
                }
                else
                {
                    playerPostion1=playerPostion1+die;
                }
            }
            else 
            {
                let temp=playerPostion1-die;
                if(temp<0)
                {
                    playerPostion1=playerPostion1;
                }
                else
                {
                    playerPostion1=playerPostion1-die;
                } 
            } 
            console.log("Player1 at The position:  "+playerPostion1);    
            player=true;
            player1=false;
        }
        if(playerPostion>playerPostion1)
        {
            console.log("Player 0 get win");
        }
        else
        {
            console.log("Player 1 get win");
        }
    }
}
main();