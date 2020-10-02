import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import {ProdEnvService} from '../../prod-env.service';
import {HttpClient} from '@angular/common/http';
import {WrapperResponse} from '../../auth/components/login/login.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class UserRegComponent implements OnInit {
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
  isFetching=true;
  url=this.prodEnvService.prodUrl;
  displayedColumns=["pec_fest_id","full_name","contact_no","college_name","email","year_of_education"];
  constructor(private prodEnvService:ProdEnvService,private http:HttpClient,private changeRef:ChangeDetectorRef,private snackBar:MatSnackBar) {
    this.http.get<WrapperResponse>(this.url+"/user",{headers:this.prodEnvService.getHttpHeaders()}).subscribe(response=>{
      this.listData = new MatTableDataSource(response.data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.changeRef.detectChanges();
      this.isFetching=false;
    },error => this.snackBar.open("You are not Authorized",'',this.config)
  );
  }

  ngOnInit(): void {
  }
  onSearchClick(){
    this.searchKey="";
  }
  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
