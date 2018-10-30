import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("kf_hitcounter",{schema:"mtr"})
export class KfHitcounter {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    Id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"counter"
        })
    Counter:number;
        
}
