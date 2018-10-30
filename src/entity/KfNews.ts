import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("kf_news",{schema:"mtr"})
export class KfNews {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    Id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"title"
        })
    Title:string;
        

    @Column("text",{ 
        nullable:false,
        name:"message"
        })
    Message:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"filename"
        })
    Filename:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"filename2"
        })
    Filename2:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"news_date"
        })
    NewsDate:Date;
        
}
