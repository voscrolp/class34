var ball;
var database;
var lball;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database=firebase.database();

    lball=database.ref('ball/positions');
    lball.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-3,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(3,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-3);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+3);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/positions').set({
        'x': position.x+x,
        'y': position.y+y
    })
}

function readPosition(data){
    position = data.val();
     ball.x = position.x;
     ball.y = position.y;
}

//node //ball/positions ..... 
//var data ={x200,y200}  data.val()
//var ball={{positions
   // x:200,
   // y:200=.val()
//}
//}