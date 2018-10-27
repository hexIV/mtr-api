import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("comments",{schema:"mtr"})
export class comments {

    @PrimaryGeneratedColumn({ 
        name:"comment_id"
        })
    commentId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:60,
        name:"name"
        })
    name:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"datetime"
        })
    datetime:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:60,
        name:"email"
        })
    email:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"country_name"
        })
    countryName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"text"
        })
    text:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"ip"
        })
    ip:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"activated"
        })
    activated:number;
        
}
