let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgconatainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 = false;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7], 
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame= () =>{
    turn0=false;
    enableBox();
    msgconatainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText ="O";
            turn0=false;
        }else{
            box.innerText ="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        
    })
});
const disableBox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBox = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner) =>{
    msg.innerText = `Congratulatioins, Winner is ${winner} `;
    msgconatainer.classList.remove("hide");
    disableBox();
};
const checkWinner=() =>{
    let isWinner = false;
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1=== pos2 && pos2==pos3){
                showWinner(pos1);
                isWinner = true;
                break;
            }
        }
        
    } 
    if (!isWinner) {
        let isDraw = true;
        boxes.forEach((box) => {
            if (box.innerText === "") {
                isDraw = false;
            }
        });

        if (isDraw) {
            msg.innerText = `It's a Draw!`;
            msgconatainer.classList.remove("hide");
            disableBox();
        }
    }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);