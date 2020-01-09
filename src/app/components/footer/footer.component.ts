import { Component, OnInit } from "@angular/core";
import { ConnectionService } from "src/app/services/connection-service";
import { Connection } from "src/app/models/Connection";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  public connections: Array<Connection>;

  constructor(public connectionService: ConnectionService) {}

  ngOnInit() {}

  public getConnections() {
    this.connectionService.getAll().subscribe(x => {
      console.log(x);
    });
  }
}
