import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("hitcounter",{schema:"mtr"})
export class Hitcounter {

    @PrimaryGeneratedColumn({ 
        name:"hitcounter_id"
        })
    HitcounterId:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"datetime"
        })
    Datetime:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"user_ip"
        })
    UserIp:string;
        
}
