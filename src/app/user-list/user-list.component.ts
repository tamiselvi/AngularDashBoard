import { Component, OnInit } from '@angular/core';
import { UserData } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:Array<UserData> = []
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.userService.userData().subscribe((data) => {
      this.userList = data;
    })
  }

  deleteUser(id:string){
    let confirmRes = confirm("Are you sure do you want to delete?")
    if(confirmRes){
      this.userService.deleteUserById(id).subscribe( ()=>{
        this.fetchData()
      });      
    }
  }

}
