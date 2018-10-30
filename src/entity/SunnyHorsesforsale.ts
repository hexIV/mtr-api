import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("sunny_horsesforsale",{schema:"mtr"})
export class SunnyHorsesforsale {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    Id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"name"
        })
    Name:string;
        

    @Column("text",{ 
        nullable:false,
        name:"information"
        })
    Information:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"filename"
        })
    Filename:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"sold"
        })
    Sold:boolean;
        
}
