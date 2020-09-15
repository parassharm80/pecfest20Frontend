import {ChangeDetectorRef, Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {AdminService} from "./admin.service";
import {ActivatedRoute} from "@angular/router";
import {FormComponent} from "./form/form.component";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['event_id','event_name','event_type','event_count','organizing_club',
    'organizer_contact_no','venue','prize_money_worth','Edit','Delete'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator
  public searchKey: string;
  public listData=null;
  expandedElement=null;
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  };
  message=null;

  constructor(private route: ActivatedRoute,public dialog: MatDialog,private adminService: AdminService,
              private changeRef:ChangeDetectorRef, public form: FormComponent,private snackBar:MatSnackBar) {

  }
  refresh(){
    this.message=null;
    this.adminService.getEventDetails().subscribe(
      (response) => {
        if(response["http_status"]!="OK")
            this.message="Oops! you are not authorized to view."
        else
          if(response.data==null||response.data.length==0)
            this.message="Oops! no registered events of your cell/club"
        else
          {
          this.listData = new MatTableDataSource(response.data);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
          this.changeRef.detectChanges();
        }
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

  onDelete(eventDetails){
    if(confirm('Are you sure to delete this record?')){
      return this.adminService.deleteEvent(eventDetails.event_id).subscribe(response=>{
        if(response["http_status"]=="OK")
          this.snackBar.open("Deleted Successfully. Refresh your page",'',this.config);
        else
          this.snackBar.open("Oops! Some error occurred",'',this.config);

      },error =>this.snackBar.open("Oops! Some error occurred",'',this.config) );
    }

  }


  ngOnInit(){
    this.refresh();
  }

}
