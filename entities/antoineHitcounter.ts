import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("antoine_hitcounter",{schema:"mtr"})
export class antoineHitcounter {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"counter"
        })
    counter:number;
        
}
