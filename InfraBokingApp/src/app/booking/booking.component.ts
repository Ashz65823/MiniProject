import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/model/Booking';
import { Employee } from 'src/model/Employee';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking:Booking[]=[]
  stack:Employee[]=[]
  constructor(private service:BookingService) {
    this.loadBooking();
   }
   loadBooking() {
    this.service.getAllBookings().subscribe(success => this.booking = success);
   }

   getAllBooking(){
     this.service.getAllBookings().subscribe(s=>console.log(s))
   }
  
   getBookingbyId(id:number){
     this.service.getBookingbyId(id).subscribe(s=>console.log(s))
   }
  ngOnInit() {
  }

}
