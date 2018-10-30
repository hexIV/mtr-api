import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("news", { schema:"mtr" })
export class News extends BaseEntity {

    @PrimaryGeneratedColumn({ 
        name:"id"
    })
    id: number;
        
    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"title"
    })
    title: string;
        
    @Column("text",{ 
        nullable:false,
        name:"body"
    })
    body: string;

    @Column("datetime", {
        name: "created",
        default: "CURRENT_TIMESTAMP"
    })
    created: Date;
}
