import { Component, OnInit } from '@angular/core';
import { Produit } from '../../Models/Produit';
import { ProduitMockService } from '../../Services/produit.mock.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  produitForm: FormGroup;
  constructor(private produitService: ProduitMockService,
    private fb:FormBuilder
    ) { 

    }

  ngOnInit(): void {
    this.produitForm = this.fb.group({
      ref:['',Validators.required],
      quantite:'',
      prixUnitaire:''
    });
  }

  loadProduits() {
    this.produitService.getProduits().subscribe(data => {
      this.produits = data;
    },
    error => { console.log("Error"); })
  }
  addProduit() {
    const produit = this.produitForm.value;
    this.produitService.addProduit(produit);
  }

}
