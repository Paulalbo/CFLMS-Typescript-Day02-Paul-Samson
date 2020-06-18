  $( document ).ready(function() {


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

        class Vehicles {
            Brand = "";
            Model = "";

         constructor(Brand, Model) {
                this.Brand = Brand;
                this.Model = Model;
            }

            cardetails() {
                return `<h3>${this.Brand} – ${this.Model}</h3>`
            }
         }

        class Motor extends Vehicles {
            kilometers;
            fuel;
            constructionyear;
            shape;  // Coupe, SPORT-UTILITY VEHICLE (SUV), STATION WAGON, HATCHBACK, CONVERTIBLE, MINIVAN, PICKUP TRUCK, ...

            constructor(Brand, Model, c, d, e, f) {
                super(Brand, Model);
                this.shape = c;
                this.kilometers = d;
                this.fuel = e;
                this.constructionyear = f;
            }

            cardetails() {
                return `${super.cardetails()}<br>shape: ${this.shape}<br>km: ${this.kilometers}<br>fuel type: ${this.fuel}<br>construction year: ${this.constructionyear}`
            }
             
        }

        class Truck extends Motor {
            seats;

            constructor(Brand, Model, c, d, e, f, g) {
                super(Brand, Model);
                this.seats = g;
            }

            cardetails() {
                return `${super.cardetails()}<br>Seats: ${this.seats}`
            }
 
        }

         let car1 = new Truck("Mercedes", "G-Class", "SUV", "50.000", "Diesel", "2015", "7");
         console.log(car1.cardetails());





  });
