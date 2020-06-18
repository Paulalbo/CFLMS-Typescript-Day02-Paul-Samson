var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
$(document).ready(function () {
    //$(".innderdiv").append(
    //    `<div class="star">
    //    <span class="rating1">&#9733;</span>
    //    <span class="rating2">&#9733;</span>
    //    <span class="rating3">&#9733;</span>
    //    <span class="rating4">&#9733;</span>
    //    <span class="rating5">&#9733;</span>
    //    <span></span>
    //    </div>`);
    //
    //
    //    $(".rating1").on('click', function(){
    //        $(this).addClass("active")
    //        $(this).nextAll().removeClass("active")
    //    });
    //    $(".rating2").on('click', function(){
    //        $(this).addClass("active")
    //        $(this).prevAll().addClass("active")
    //        $(this).nextAll().removeClass("active")
    //
    //    });
    //    $(".rating3").on('click', function(){
    //        $(this).addClass("active")
    //        $(this).prevAll().addClass("active")
    //        $(this).nextAll().removeClass("active")
    //    });
    //    $(".rating4").on('click', function(){
    //        $(this).addClass("active")
    //        $(this).prevAll().addClass("active")
    //        $(this).nextAll().removeClass("active")
    //    });
    //    $(".rating5").on('click', function(){
    //        $(this).addClass("active")
    //        $(this).prevAll().addClass("active")
    //        $(this).nextAll().removeClass("active")
    //        //$(this).last().append("awesome")
    //    });
    //    
    //class
    var Vehicles = /** @class */ (function () {
        function Vehicles(Brand, Model) {
            this.Brand = "";
            this.Model = "";
            this.Brand = Brand;
            this.Model = Model;
        }
        Vehicles.prototype.cardetails = function () {
            return "<h3>" + this.Brand + " \u2013 " + this.Model + "</h3>";
        };
        return Vehicles;
    }());
    var Motor = /** @class */ (function (_super) {
        __extends(Motor, _super);
        function Motor(Brand, Model, c, d, e, f) {
            var _this = _super.call(this, Brand, Model) || this;
            _this.shape = c;
            _this.kilometers = d;
            _this.fuel = e;
            _this.constructionyear = f;
            return _this;
        }
        Motor.prototype.cardetails = function () {
            return _super.prototype.cardetails.call(this) + "<br>shape: " + this.shape + "<br>km: " + this.kilometers + "<br>fuel type: " + this.fuel + "<br>construction year: " + this.constructionyear;
        };
        return Motor;
    }(Vehicles));
    var Truck = /** @class */ (function (_super) {
        __extends(Truck, _super);
        function Truck(Brand, Model, c, d, e, f, g) {
            var _this = _super.call(this, Brand, Model) || this;
            _this.seats = g;
            return _this;
        }
        Truck.prototype.cardetails = function () {
            return _super.prototype.cardetails.call(this) + "<br>Seats: " + this.seats;
        };
        return Truck;
    }(Motor));
    var car1 = new Truck("Mercedes", "G-Class", "SUV", "50.000", "Diesel", "2015", "7");
    console.log(car1.cardetails());
});
