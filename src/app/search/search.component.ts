import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticias.service";
import { Color, View } from "tns-core-modules/ui/core/view/view";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    //providers: [NoticiasService]
})

export class SearchComponent implements OnInit {

    resultados: Array<string>;

    layout: ElementRef; 

    constructor (private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.

        this.noticias.agregar("Hola");
        this.noticias.agregar("Holaa");
        this.noticias.agregar("Holaaa");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onItemTap(x):void {
        console.dir(x);
    }

    buscarAhora(s: string) {
        this.resultados = this.noticias.buscar().filter((x) => x.indexOf(s) >= 0);

        const layout = <View>this.layout.nativeElement;
        
        layout.animate({
            backgroundColor: new Color("white"),
            duration: 3000,
            delay: 1500
        
        }).then(() => layout.animate({
            
            backgroundColor: new Color("black"),
            duration: 3000,
            delay: 1500
        }));
    }
}
