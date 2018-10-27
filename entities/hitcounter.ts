import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("hitcounter",{schema:"mtr"})
export class hitcounter {

    @PrimaryGeneratedColumn({ 
        name:"hitcounter_id"
        })
    hitcounterId:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"datetime"
        })
    datetime:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"user_ip"
        })
    userIp:string;
        
}
