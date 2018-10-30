import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("casinohits",{schema:"mtr"})
export class Casinohits {

    @PrimaryGeneratedColumn({ 
        name:"hitcounter_id"
        })
    HitcounterId:number;
        

    @Column("datetime",{ 
        nullable:false,
        name:"dateandtime"
        })
    Dateandtime:Date;
        
}
