import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("users",{schema:"mtr"})
export class users {

    @PrimaryGeneratedColumn({ 
        name:"user_id"
        })
    userId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"user_name"
        })
    userName:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"user_password"
        })
    userPassword:string;
        
}
