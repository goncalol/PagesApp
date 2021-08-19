"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var fabric_1 = require("fabric");
var BasicShape_1 = require("../Shapes/BasicShape");
var FacebookFriends = (function (_super) {
    __extends(FacebookFriends, _super);
    function FacebookFriends(canvas, shape, select) {
        var _this = _super.call(this, canvas) || this;
        _this.friendsPerLine = 3;
        _this.friendsPerCol = 2;
        _this.currentPage = 1;
        _this.circleGroup = [];
        _this.createMainBox(canvas, shape, select);
        return _this;
    }
    FacebookFriends.prototype.createMainBox = function (canvas, shape, select) {
        var _this = this;
        var exteriorRect = new fabric_1.fabric.Rect({
            width: shape.width,
            height: shape.height,
            fill: shape.fill,
            left: shape.left,
            top: shape.top,
            strokeWidth: shape.strokeWidth,
            stroke: shape.stroke,
            scaleX: shape.scaleX,
            scaleY: shape.scaleY
        });
        this.newX = shape.left + (2.5 * shape.scaleX);
        this.newY = shape.top + (2 * shape.scaleY);
        var innerRect = new fabric_1.fabric.Rect({
            width: shape.width - (2.5 * 2),
            height: shape.height - (2 * 2),
            fill: "#FFFFFF",
            strokeWidth: shape.strokeWidth,
            stroke: "#000000",
            left: this.newX,
            top: this.newY,
            selectable: this.select,
            scaleX: shape.scaleX,
            scaleY: shape.scaleY
        });
        this.canvas.add(innerRect);
        this.shape = shape;
        this.select = select;
        var triangleHeight = 2;
        var triangleWidth = (shape.height - (2 * 2));
        var triangleL = new fabric_1.fabric.Triangle({
            width: triangleWidth, height: triangleHeight,
            left: this.newX - (triangleHeight * shape.scaleY), top: this.newY + ((triangleWidth + 1) * shape.scaleX),
            fill: "#FFFFFF",
            strokeWidth: shape.strokeWidth,
            stroke: "#000000",
            angle: -90,
            selectable: this.select,
            scaleX: shape.scaleX,
            scaleY: shape.scaleY
        });
        triangleL.on('mouseup', function (e) { return _this.onTLClick(e, _this); });
        this.canvas.add(triangleL);
        var triangleR = new fabric_1.fabric.Triangle({
            width: triangleWidth, height: triangleHeight,
            left: this.newX + (innerRect.width * shape.scaleX) + (triangleHeight * shape.scaleY), top: this.newY + 1,
            fill: "#FFFFFF",
            strokeWidth: shape.strokeWidth,
            stroke: "#000000",
            angle: 90,
            selectable: this.select,
            scaleX: shape.scaleX,
            scaleY: shape.scaleY
        });
        triangleR.on('mouseup', function (e) { return _this.onTRClick(e, _this); });
        this.canvas.add(triangleR);
        this.friends = shape.friends;
        var pagesize = this.friendsPerLine * this.friendsPerCol;
        this.pages = Math.ceil(this.friends.length / pagesize);
        this.createFriends(0);
    };
    FacebookFriends.prototype.createFriends = function (counter) {
        var radius = 3;
        var offsetX = (((this.shape.width - (2.5 * 2)) * this.shape.scaleX) / this.friendsPerLine);
        var offsetY = (((this.shape.height - (2 * 2)) * this.shape.scaleY) / this.friendsPerCol);
        for (var i = 0; i < this.friendsPerCol; i++) {
            for (var ii = 0; ii < this.friendsPerLine; ii++) {
                if (this.friends.length == counter)
                    return;
                var c = new fabric_1.fabric.Circle({
                    radius: radius,
                    fill: null,
                    left: this.newX,
                    top: this.newY,
                    strokeWidth: this.shape.strokeWidth,
                    scaleX: this.shape.scaleX,
                    scaleY: this.shape.scaleY,
                    stroke: "black",
                });
                var txt = new fabric_1.fabric.Text(this.friends[counter].name, {
                    left: this.newX,
                    top: this.newY + (radius * this.shape.scaleY * 2),
                    fontSize: 2,
                    scaleX: this.shape.scaleX,
                    scaleY: this.shape.scaleY,
                    fontFamily: 'Comic Sans'
                });
                var groupFriend = new fabric_1.fabric.Group([c, txt], {
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
    };
    FacebookFriends.prototype.onFriendClick = function (e) {
        if (e.target.friendId != undefined)
            window.location.href = "/Editor/public?id=" + e.target.friendId;
    };
    FacebookFriends.prototype.onTLClick = function (e, facebookFriend) {
        if (facebookFriend.currentPage !== 1) {
            facebookFriend.currentPage--;
            facebookFriend.circleGroup.forEach(function (e) {
                facebookFriend.canvas.remove(e);
            });
            facebookFriend.createFriends((facebookFriend.currentPage - 1) * facebookFriend.friendsPerCol * facebookFriend.friendsPerLine);
        }
    };
    FacebookFriends.prototype.onTRClick = function (e, facebookFriend) {
        if (facebookFriend.currentPage !== this.pages) {
            facebookFriend.currentPage++;
            facebookFriend.circleGroup.forEach(function (e) {
                facebookFriend.canvas.remove(e);
            });
            facebookFriend.createFriends((facebookFriend.currentPage - 1) * facebookFriend.friendsPerCol * facebookFriend.friendsPerLine);
        }
    };
    return FacebookFriends;
}(BasicShape_1.BasicShape));
exports.FacebookFriends = FacebookFriends;
//# sourceMappingURL=FacebookFriends.js.map