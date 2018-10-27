import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("antoine_horsesforsale",{schema:"mtr"})
export class antoineHorsesforsale {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"name"
        })
    name:string;
        

    @Column("text",{ 
        nullable:false,
        name:"information"
        })
    information:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"sold"
        })
    sold:boolean;
        
}
