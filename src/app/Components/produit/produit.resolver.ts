import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { ProduitMockService } from 'src/app/Services/produit.mock.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProduitResolver implements Resolve<any>{

    constructor(private produitService: ProduitMockService) {

    }
    resolve():Observable<any> {
        return this.produitService.getProduits();
    }
}