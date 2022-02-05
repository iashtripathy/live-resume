import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Live Resume - Iash Kumar Tripathy";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      { name: "keywords", content: "Web Developer, Java, MEAN Stack, Python, Nodejs, SQL, MongoDb, Javascript, C, C++, Full-stack Developer, DevOps Engineer, Iash Kumar Tripathy Live Resume, Iash Kumar Tripathy Resume, Iash Kumar Tripathy CV, Curriculum Iash Kumar Tripathy, Iash Resume, iash live resume" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Iash Kumar Tripathy" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2020-05-12", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      { name: "description", content: "Hello, I am student pursuing my masters in Computer Science from INTERNATIONAL INSTITUTE OF INFORMATION TECHNOLOGY, BANGALORE. Find out more in my live-resume!" }
    );
  }
}
