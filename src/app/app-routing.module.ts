import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { CadastroViagemComponent } from './cadastro-viagem/cadastro-viagem.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'cadastro', component: CadastroViagemComponent},
{path: "lista", component: ListagemViagemComponent},
{path: 'detalhes', component: DetalhesViagemComponent},
{path: 'excluir', component: ExclusaoViagemComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
