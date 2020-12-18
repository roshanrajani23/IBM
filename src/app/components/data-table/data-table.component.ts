import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import { GithubService } from '../../services/github.service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DataTableItem>;
  @Input() users:String[]
  dataSource: DataTableDataSource; 
  githubUsers: String[]

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['displayImage', 'firstName', 'lastName', 'stars', 'repos'];
  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
    this.dataSource = new DataTableDataSource();
    this.githubService.getData().subscribe((data)=>{
       let githubUsers = [],
           githubAccounts = data;
       _.forEach(data, function translateValue(obj) {
         githubUsers.push(obj.login);
         return githubUsers;
     });
       this.users = data;
       this.githubUsers = githubUsers;
       console.log(this.githubUsers);
     })
   }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
