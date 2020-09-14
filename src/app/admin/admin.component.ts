import {ChangeDetectorRef, Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {AdminService} from "./admin.service";
import {ActivatedRoute} from "@angular/router";
import {FormComponent} from "./form/form.component";
import {animate, state, style, transition, trigger} from '@angular/animations';

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
