import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import {HomePopoverComponent} from '../breakfast-popover/home-popover.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private nav: NavController, private  popoverCtrl: PopoverController) {
    }

    ngOnInit() {
    }

    // async openBreakfast(ev: any) {
    //     const popover = await this.popoverCtrl.create({
    //         component: HomePopoverComponent,
    //         ev: ev
    //     });
    //     return await popover.present();
    // }



}
