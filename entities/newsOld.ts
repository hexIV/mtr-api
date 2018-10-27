import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("news_old",{schema:"mtr"})
export class newsOld {

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
        

    @Column("bigint",{ 
        nullable:false,
        name:"news_date"
        })
    newsDate:string;
        
}
