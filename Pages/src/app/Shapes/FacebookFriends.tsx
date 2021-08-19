import { fabric } from "fabric"
import { BasicShape } from "../Shapes/BasicShape";

export class FacebookFriends extends BasicShape{

    friendsPerLine: number = 3;
    friendsPerCol: number = 2;
    pages: number;
    currentPage: number = 1;
    circleGroup: any = [];
    friends: any;
    newX: any;
    newY: any;
    shape: any;
    select: any;

    constructor(canvas, shape, select) {
        super(canvas);
        
        this.createMainBox(canvas, shape, select)
        
    }

    createMainBox(canvas:any, shape:any, select:boolean) {
        var exteriorRect = new fabric.Rect({
            width: shape.width,
            height: shape.height,
            fill: shape.fill,
            left: shape.left,
            top: shape.top,
            strokeWidth: shape.strokeWidth,
            stroke: shape.stroke,
            scaleX: shape.scaleX,
            scaleY: shape.scaleY
        })

        this.newX = shape.left + (2.5 * shape.scaleX) ;
        this.newY = shape.top + (2 * shape.scaleY);

        var innerRect = new fabric.Rect({
            width: shape.width - (2.5 * 2),
            height: shape.height - (2 * 2),
            fill: "#FFFFFF",
            strokeWidth: shape.strokeWidth,
            stroke: "#000000",
            left: this.newX  ,
            top: this.newY,
            selectable: this.select,
            scaleX: shape.scaleX ,
            scaleY: shape.scaleY 
        });

        this.canvas.add(innerRect);
        this.shape = shape;
        this.select = select;

        
        var triangleHeight = 2;
        var triangleWidth = (shape.height - (2 * 2));

        var triangleL = new fabric.Triangle({
            width: triangleWidth, height: triangleHeight,
            left: this.newX - (triangleHeight * shape.scaleY), top: this.newY + ((triangleWidth+1) * shape.scaleX),
            fill: "#FFFFFF",
            strokeWidth: shape.strokeWidth,
            stroke: "#000000",
            angle: -90,
            selectable: this.select,
            scaleX: shape.scaleX ,
            scaleY: shape.scaleY
        });
        triangleL.on('mouseup', e =>  this.onTLClick(e, this) );
        this.canvas.add(triangleL);

        var triangleR = new fabric.Triangle({
            width: triangleWidth, height: triangleHeight,
            left: this.newX + (innerRect.width * shape.scaleX) + (triangleHeight * shape.scaleY), top: this.newY+1 ,
            fill: "#FFFFFF",
            strokeWidth: shape.strokeWidth,
            stroke: "#000000",
            angle: 90,
            selectable: this.select,
            scaleX: shape.scaleX ,
            scaleY: shape.scaleY
        });
        triangleR.on('mouseup', e => this.onTRClick(e, this));
        this.canvas.add(triangleR);

        this.friends = shape.friends;
        var pagesize = this.friendsPerLine * this.friendsPerCol;
        this.pages = Math.ceil(this.friends.length / pagesize);
        this.createFriends(0);
        
    }

    createFriends(counter:number): any {
       
        var radius = 3;
        var offsetX = (((this.shape.width - (2.5 * 2)) * this.shape.scaleX) / this.friendsPerLine);
        var offsetY = (((this.shape.height - (2 * 2)) * this.shape.scaleY) / this.friendsPerCol);

        for (var i = 0; i < this.friendsPerCol; i++) {
            for (var ii = 0; ii < this.friendsPerLine; ii++) {
                if (this.friends.length == counter) return;

                var c =  new fabric.Circle({
                    radius: radius,
                    fill: null,
                    left: this.newX,//+ (ii * offsetX) + (radius * shape.scaleX),
                    top: this.newY,//+ (i * offsetY),
                    strokeWidth: this.shape.strokeWidth,
                    scaleX: this.shape.scaleX ,
                    scaleY: this.shape.scaleY,
                    stroke: "black",
                });

                var txt = new fabric.Text(this.friends[counter].name, {
                    left: this.newX,// + (ii * offsetX) + (radius * shape.scaleX),
                    top: this.newY + (radius * this.shape.scaleY*2),
                    fontSize: 2,
                    scaleX: this.shape.scaleX,
                    scaleY: this.shape.scaleY,
                    fontFamily: 'Comic Sans'
                });

                var groupFriend = new fabric.Group([c,txt], {
                    left: this.newX + (ii * offsetX) + (radius * this.shape.scaleX),
                    top: this.newY + (i * offsetY) + 1 * this.shape.scaleY,
                    selectable: this.select,
                    hoverCursor: "pointer",
                    friendId: this.friends[counter].id
                });

                groupFriend.on('mouseup', this.onFriendClick);

                this.circleGroup.push(groupFriend);
                this.canvas.add(groupFriend);
                counter++;
            }
        }
    }

    onFriendClick(e: any) {

        if (e.target.friendId != undefined)
            window.location.href = "/Editor/public?id=" + e.target.friendId;
    }

    onTLClick(e: any, facebookFriend: any){
        if (facebookFriend.currentPage !== 1) {
            facebookFriend.currentPage--;

            facebookFriend.circleGroup.forEach(e => {
                facebookFriend.canvas.remove(e);
            })

            facebookFriend.createFriends((facebookFriend.currentPage - 1) * facebookFriend.friendsPerCol * facebookFriend.friendsPerLine);
        }
    }   

    onTRClick(e: any, facebookFriend: FacebookFriends) {
        
        if (facebookFriend.currentPage !== this.pages) {
            facebookFriend.currentPage++;

            facebookFriend.circleGroup.forEach(e => {
                facebookFriend.canvas.remove(e);
            })

            facebookFriend.createFriends((facebookFriend.currentPage-1) * facebookFriend.friendsPerCol * facebookFriend.friendsPerLine);
        }
    }

} 