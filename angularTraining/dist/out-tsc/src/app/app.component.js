import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularTraining';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        imports: [RouterOutlet],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map