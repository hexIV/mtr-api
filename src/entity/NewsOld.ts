import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("news_old",{schema:"mtr"})
export class NewsOld {

    @PrimaryGeneratedColumn({ 
        name:"news_id"
        })
    NewsId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"news_header"
        })
    NewsHeader:string;
        

    @Column("text",{ 
        nullable:false,
        name:"news_text"
        })
    NewsText:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"news_date"
        })
    NewsDate:string;
        
}
