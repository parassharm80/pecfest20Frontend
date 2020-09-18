import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {TeamFormComponent} from '../team-form/team-form.component';
import {TeamAdminService} from './team-admin.service';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-team-admin',
  templateUrl: './team-admin.component.html',
  styleUrls: ['./team-admin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TeamAdminComponent implements OnInit {
  searchKey;
  listData=null;
  displayedColumns=["event_id","event_name","organizing_club","team_id","team_name","leader_pec_fest_id",'Edit','Delete'];
  expandedElement;
  message=null;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  };
  eventName=new FormControl('',Validators.required);
  constructor(private teamAdminService:TeamAdminService,private route: ActivatedRoute,public dialog: MatDialog,private adminService: TeamAdminService,
  private changeRef:ChangeDetectorRef, public form: TeamFormComponent,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
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
    this.dialog.open(TeamFormComponent, dialogConfig);
  }
  refresh(event_name){
    this.message=null;
    this.listData=null;
    this.teamAdminService.getRegsDetails(event_name).subscribe(
      (response) => {
        if(response["http_status"]!="OK")
          this.message="Oops! you are not authorized to view."
        else
        if(response.data==null||response.data.length==0)
          this.message="No teams registered"
        else
        {
          this.listData = new MatTableDataSource(response.data);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
          this.changeRef.detectChanges();
        }
      })
  }

  onEdit(row){
    this.form.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(TeamFormComponent, dialogConfig);
  }

  onDelete(regDetails){
    if(confirm('Are you sure to delete this record?')){
      return this.adminService.deleteEventRegs(regDetails.team_id).subscribe(response=>{
        if(response["http_status"]=="OK")
          this.snackBar.open("Deleted Successfully. Refresh your page",'',this.config);
        else
          this.snackBar.open("Oops! Some error occurred",'',this.config);

      },error =>this.snackBar.open("Oops! Some error occurred",'',this.config) );
    }

  }

  onSubmitEventRegs() {
    this.refresh(this.eventName.value);
  }

  onForceRefresh() {
    this.refresh(this.eventName.value);
  }
}
