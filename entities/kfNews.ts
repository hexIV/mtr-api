import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("kf_news",{schema:"mtr"})
export class kfNews {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"title"
        })
    title:string;
        

    @Column("text",{ 
        nullable:false,
        name:"message"
        })
    message:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"filename"
        })
    filename:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"filename2"
        })
    filename2:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"news_date"
        })
    newsDate:Date;
        
}
