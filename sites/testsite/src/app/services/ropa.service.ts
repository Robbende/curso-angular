import {Injectable} from '@angular/core';

@Injectable()
export class RopaService {
    private ropa_name = 'T-shirt';
    public collection_ropa = ['Pantalones', 'Camiseta'];

    getRopa() {
        return this.collection_ropa;
    }

    addRopa(nombre_ropa) {
        this.collection_ropa.push(nombre_ropa);
        return this.getRopa();
    }
}
