import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("users",{schema:"mtr"})
export class Users {

    @PrimaryGeneratedColumn({ 
        name:"user_id"
        })
    UserId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"user_name"
        })
    UserName:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"user_password"
        })
    UserPassword:string;
        
}
