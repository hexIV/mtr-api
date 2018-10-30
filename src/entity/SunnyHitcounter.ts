import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("sunny_hitcounter",{schema:"mtr"})
export class SunnyHitcounter {

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
