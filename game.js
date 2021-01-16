console.log("Welcome !!!");
const START=0;
let die=0,playerPostion=0;
var option=["NoPlay","Ladder","Snake"];
let move='',diceThrown=0;;
function dice()
{
    while(playerPostion<100)
    {
        die=Math.floor(Math.random()*6)+1;
        console.log("Dice:  "+die);
        diceThrown++;
    
        move=option[Math.floor(Math.random()*option.length)];
        console.log("The Move:  "+move);

        if(move=="NoPlay")
        {
            playerPostion=playerPostion;
        }
        else if(move=="Ladder")
        {
            let temp=playerPostion+die;
            if(temp>100)
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
            if(playerPostion<=START)
            {
                playerPostion=START;
            }
            else
            {
                playerPostion=playerPostion-die;
            } 
        } 
        console.log("Player at The position:  "+playerPostion);
    } 
    console.log("The number of times the dice was played to win the game:  "+diceThrown);
    return playerPostion;
}
console.log(dice());