import { Injectable } from '@angular/core';
import { Produit } from '../Models/Produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../config/api.url.config';
@Injectable({
    providedIn: 'root'
  })

export class ProduitMockService{

    private PRODUITS: Produit[] = [];

    constructor(private http: HttpClient) {

    }
    public getProduits(): Observable<any> {
        return this.http.get(API_URLS.PRODUITS_URL);
    }
    public addProduit(produit: Produit): Observable<any>{
       return this.http.post(API_URLS.PRODUITS_URL, produit);
    
    }

    public updateProduit (produit: Produit): Observable<any> {
      return this.http.put(API_URLS.PRODUITS_URL, produit);
    }
  
    public deleteProduit(id: number): Observable<any> {
      return this.http.delete(API_URLS.PRODUITS_URL + `/${id}`);
    }
  
  }