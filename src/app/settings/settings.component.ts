import { Component, OnInit } from "@angular/core";
import * as Toast from "nativescript-toasts";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    //template: '<Button text = "Tocar!" (tap)="(activityIndicardor.busy = !class="btn btn-primary btn-active" ></Button><ActivityIndicator #activityIndicator busy="true"(busyChange)="cambio($event)"width="100" height="100" class="activity-indicator"></ActivityIndicator> '

})

export class SettingsComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }
    
    /*cambio (e) {
        let indicator = <ActivityIndicator>e.object;
        console.log("indicator.busy: " + indicator.busy);
    }*/ 
    
    doLater(fn) { setTimeout(fn, 1000); }

    ngOnInit(): void {
        // Init your component properties here.

        /*this.doLater(() =>
            dialogs.action("Mensaje", "Cancelar!", ["Opcion1", "Opcion2"])
                .then((result) => {
                    
                    console.log("Reseultado: " + result);
                    if (result === "Opcion1") {
                        this.doLater(() =>
                            dialogs.alert({
                                title: "Titulo 1",
                                message: "mje 1",
                                okButtonText: "btn 1"
                            }).then(() => console.log("Cerrado 1!")));
                    
                    }else if (result === "Opcion2") {
                        this.doLater(() =>
                            dialogs.alert({
                                title: "Titulo 2",
                                message: "nje 2",
                                okButtonText: "btn 2"
                            }).then(() => console.log("Cerrado 2!")));
                    }
                }));*/

            const toastsOpcions: Toast.ToastOptions = {text: "Hello world", duration: Toast.DURATION.SHORT};
            this.doLater(() => Toast.show(toastsOpcions));             
    }

    

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
