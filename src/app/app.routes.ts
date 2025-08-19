import { Routes } from '@angular/router';
import { Landingpage } from './landingpage/landingpage';
import { LegalNotice } from './legal-notice/legal-notice';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';



export const routes: Routes = [
    { path: '', component: Landingpage },
    { path: 'legal-notice', component: LegalNotice },
    { path: 'privacy-policy', component: PrivacyPolicy },   
];
