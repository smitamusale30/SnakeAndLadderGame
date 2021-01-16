console.log("Welcome !!!");
const START=0;
let die=0,playerPostion=0;
var option=["NoPlay","Ladder","Snake"];
let move='';
function dice()
{
    while(playerPostion<100)
    {
        die=Math.floor(Math.random()*6)+1;
        console.log(die);
    
        move=option[Math.floor(Math.random()*option.length)];
        console.log(move);

        if(move=="NoPlay")
        {
            playerPostion=playerPostion;
        }
        else if(move=="Ladder")
        {
            playerPostion=playerPostion+die;
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
    } 
    return playerPostion;
}
console.log(dice());