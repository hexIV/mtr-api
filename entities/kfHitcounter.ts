import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("kf_hitcounter",{schema:"mtr"})
export class kfHitcounter {

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
