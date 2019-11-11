import { Component } from '@angular/core';
import { Country } from './country.model';
import { RestDataSource } from './rest.datasource';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';
  countries: Country[];
  country : Country[];
  constructor(private service: RestDataSource){ }  

  ngOnInit(){
    this.service.getCountries().subscribe(data => {
      this.countries = data;            
    });  
  }  

  getCountryDetailByname(countryName){
    //alert(countryName);
    this.service.searchCountry(countryName).subscribe(data => {
      this.country = data; 
      console.log(this.country);           
    }); 
  }

  // get_searched_country(){
  //   this.service.searchCountry('United State').subscribe(response=>{
  //     console.log('United State', response);
  //   },err=>{
  //     console.log(err);
  //   })
  // }

  // get_country(){
  //   this.service.getCountry().subscribe(response=>{
  //     console.log('res', response);
  //   },err=>{
  //     console.log(err);
  //   })
  // }  

}

