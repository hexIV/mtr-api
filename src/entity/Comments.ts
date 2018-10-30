import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("comments",{schema:"mtr"})
export class Comments {

    @PrimaryGeneratedColumn({ 
        name:"comment_id"
        })
    CommentId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:60,
        name:"name"
        })
    Name:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"datetime"
        })
    Datetime:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:60,
        name:"email"
        })
    Email:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"country_name"
        })
    CountryName:string;
        

    @Column("text",{ 
        nullable:false,
        name:"text"
        })
    Text:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"ip"
        })
    Ip:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"activated"
        })
    Activated:number;
        
}
