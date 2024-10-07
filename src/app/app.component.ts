import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
    IonApp,
    IonContent,
    IonFooter,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonRouterLink,
    IonRouterOutlet,
    IonSplitPane
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
    cart,
    cartOutline,
    cartSharp,
    home,
    homeOutline,
    homeSharp,
    library,
    libraryOutline,
    librarySharp,
    newspaper,
    newspaperOutline,
    newspaperSharp,
    walkOutline,
    wallet,
    walletSharp
} from 'ionicons/icons';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        CommonModule,
        IonApp,
        IonSplitPane,
        IonMenu,
        IonContent,
        IonList,
        IonListHeader,
        IonFooter,
        IonNote,
        IonMenuToggle,
        IonItem,
        IonIcon,
        IonLabel,
        IonRouterLink,
        IonRouterOutlet
    ]
})
export class AppComponent {
    public readonly pages = [
        { title: 'Home', url: '/home', icon: 'home' },
        { title: 'Products', url: '/products', icon: 'library' },
        { title: 'Orders', url: '/orders', icon: 'newspaper' },
        // { title: 'Wallet', url: '/wallet', icon: 'wallet' },
        { title: 'Cart', url: '/cart', icon: 'cart' }
    ];

    constructor() {
        addIcons({
            wallet,
            walkOutline,
            walletSharp,
            cart,
            cartOutline,
            cartSharp,
            home,
            homeOutline,
            homeSharp,
            library,
            libraryOutline,
            librarySharp,
            newspaper,
            newspaperOutline,
            newspaperSharp
        });
    }
}
