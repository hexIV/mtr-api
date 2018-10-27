import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("migrations",{schema:"mtr"})
export class migrations {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"timestamp"
        })
    timestamp:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"name"
        })
    name:string;
        
}
