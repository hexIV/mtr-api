import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("casinohits",{schema:"mtr"})
export class casinohits {

    @PrimaryGeneratedColumn({ 
        name:"hitcounter_id"
        })
    hitcounterId:number;
        

    @Column("datetime",{ 
        nullable:false,
        name:"dateandtime"
        })
    dateandtime:Date;
        
}
