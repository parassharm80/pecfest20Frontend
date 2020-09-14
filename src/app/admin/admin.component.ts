import {ChangeDetectorRef, Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {AdminService} from "./admin.service";
import {ActivatedRoute} from "@angular/router";
import {FormComponent} from "./form/form.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['event_id','event_name','event_type','event_count','organizing_club',
    'organizer_contact_no','min_number_of_participants','max_number_of_participants'
    ,'event_start_date_and_time','event_end_date_and_time','event_description'
    ,'prize_money_worth','venue','rules','Edit','Delete'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator
  public searchKey: string;
  public listData=null;


  constructor(private route: ActivatedRoute,public dialog: MatDialog,private adminService: AdminService,
              private changeRef:ChangeDetectorRef, public form: FormComponent) {

  }
  refresh(){
    this.adminService.getEventDetails().subscribe(
      (response) => {
        this.listData = new MatTableDataSource(response.data.technical_event);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.changeRef.detectChanges();
      })
  }

  onSearchClick(){
    this.searchKey="";
  }
  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    this.form.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(FormComponent, dialogConfig);
    this.refresh();
  }

  onEdit(row){
    this.form.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(FormComponent, dialogConfig);
    this.refresh();
  }

  onDelete(val){
    if(confirm('Are you sure to delete this record?')){
      //DELETE HERE
    }

  }


  ngOnInit(){
    this.refresh();

  }

}
