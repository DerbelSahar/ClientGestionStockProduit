import { Component, OnInit } from '@angular/core';
import { Produit } from '../../Models/Produit';
import { ProduitMockService } from '../../Services/produit.mock.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  produitForm: FormGroup;
  operation: String = 'add';
  selectedProduit: Produit;
  constructor(private produitService: ProduitMockService,
    private fb:FormBuilder,
    private route:ActivatedRoute
    ) { 
      this.createForm();
      

    }

  ngOnInit(): void {
    this.initProduit();
    this.route.data.subscribe(
      (data : {produits: Produit[]}) => this.produits = data.produits);
  }
  initProduit() {
    this.selectedProduit = new Produit();
    this.createForm();
  }
  createForm() {
    this.produitForm = this.fb.group({
      ref:['',Validators.required],
      quantite:'',
      prixUnitaire:''
    });
  }
  loadProduits() {
    this.produitService.getProduits().subscribe(data => {
      this.produits = data;
      console.log(data);
    },
    error => { console.log("Error"); })
  }
  addProduit() {
    const produit = this.produitForm.value;
    this.produitService.addProduit(produit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
              }
    );
  }
  updateProduit() {
    this.produitService.updateProduit(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
              }
    );
  }
  deleteProduit() {
    this.produitService.deleteProduit(this.selectedProduit.id).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    )
  }

}
