import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // app states

  title = 'angular-notes';
  currentSession = 19
  sessions = [
    19, 20, 21, 22, 23, 24, 25, 26, 27
  ]
  routes: string[] = []

  // form states

  form: {
    inputData: FormGroup
  } = {
    inputData: new FormGroup({
      session: new FormControl(19)
    })
  }

  // setters and getters

  get session () {
    return this.form.inputData.get('session')
  }

  constructor (
    private router: Router
  ) {}

  // event handler(s)

  changeSession() {
    if(this.session){
      const value = this.session.value

      this.currentSession = value
    }
  }

  // other function(s)

  printRoutes(path: string, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      const routePath: string = path + '/' + route.path;

      if(route.path && !['**', '/'].includes(route.path) && !routePath.includes(':')) this.routes.push(routePath)
      if (route.children) {
        const currentPath = route.path ? path + '/' + route.path : path;
        this.printRoutes(currentPath, route.children);
      }
    }
  }

  // hooks

  ngOnInit () {
    this.printRoutes('', this.router.config)
    this.routes = this.routes.filter(e => e.split('/').length <= 2).map(e => e.slice(1))
    this.routes.sort((a: any, b: any) => a > b ? -1 : a < b ? 1 : 0)
  }
}
