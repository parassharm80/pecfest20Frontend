import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {AdminService} from '../../admin.service';
import {TeamFormComponent} from '../team-form/team-form.component';
import {TeamAdminService} from './team-admin.service';
import {MatTableDataSource} from '@angular/material/table';

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
  displayedColumns;
  expandedElement;
  message=null;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator
  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: "right",
    verticalPosition: "top"
  };
  constructor(private teamAdminService:TeamAdminService,private route: ActivatedRoute,public dialog: MatDialog,private adminService: AdminService,
  private changeRef:ChangeDetectorRef, public form: TeamFormComponent,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onCreate() {

  }

  applyFilter() {

  }
  refresh(event_name){
    this.message=null;
    this.teamAdminService.getRegsDetails(event_name).subscribe(
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

  onSearchClick() {

  }

  onEdit(row: any) {

  }

  onDelete(row: any) {

  }
}
