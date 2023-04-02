import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortcopyComponent } from './portcopy/portcopy.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'footer', component:FooterComponent},
  {path:'navbar', component:NavbarComponent},
  // {path:'portfolio', component:PortfolioComponent},
   {path:'portcopy', component:PortcopyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
