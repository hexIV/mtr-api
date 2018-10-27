import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("news",{schema:"mtr"})
export class news {

    @PrimaryGeneratedColumn({ 
        name:"news_id"
        })
    newsId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"news_header"
        })
    newsHeader:string;
        

    @Column("text",{ 
        nullable:false,
        name:"news_text"
        })
    newsText:string;
        

    @Column("datetime",{ 
        nullable:false,
        default:"CURRENT_TIMESTAMP",
        name:"created"
        })
    created:Date;
        
}
